import type { VercelRequest, VercelResponse } from "@vercel/node";
import nodemailer from "nodemailer";

// --- 간단 레이트리밋(서버리스 best-effort) ---
const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX = 3;
const ipBucket = new Map<string, { count: number; resetAt: number }>();

function rateLimit(ip: string) {
  const now = Date.now();
  const cur = ipBucket.get(ip);
  if (!cur || now > cur.resetAt) {
    ipBucket.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return { ok: true };
  }
  if (cur.count >= RATE_LIMIT_MAX) return { ok: false, retryAfterMs: cur.resetAt - now };
  cur.count += 1;
  ipBucket.set(ip, cur);
  return { ok: true };
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function escapeHeaderText(s: string) {
  return String(s || "").replace(/[\r\n]+/g, " ").trim();
}

function makeTicket(prefix = "GEONIX") {
  const d = new Date();
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  const rand = Math.random().toString(36).slice(2, 8).toUpperCase(); // 6 chars
  return `${prefix}-${y}${m}${day}-${rand}`; // 예: GEONIX-20260210-7F3KQ9
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    if (req.method !== "POST") {
      res.status(405).json({ ok: false, error: "method_not_allowed" });
      return;
    }

    // Content-Type 체크(너무 엄격하면 통과 못할 수 있어 완화)
    const body = typeof req.body === "string" ? JSON.parse(req.body) : req.body;

    // honeypot: 봇 방지 (값 있으면 성공처럼 응답)
    if (body?.hp && String(body.hp).trim() !== "") {
      res.status(200).json({ ok: true });
      return;
    }

    // rate limit
    const ip =
      (req.headers["x-forwarded-for"] as string | undefined)?.split(",")[0]?.trim() ||
      (req.socket?.remoteAddress ?? "unknown");
    const rl = rateLimit(ip);
    if (!rl.ok) {
      res.setHeader("Retry-After", String(Math.ceil((rl.retryAfterMs ?? 0) / 1000)));
      res.status(429).json({ ok: false, error: "rate_limited" });
      return;
    }

    // ✅ 프론트는 message에 "문의내용(details)"만 보내는 것을 전제로 함
    const name = String(body?.name || "").trim();
    const email = String(body?.email || "").trim();
    const message = String(body?.message || "").trim(); // details
    const company = String(body?.company || "").trim();
    const website = String(body?.website || "").trim();
    const phone = String(body?.phone || "").trim();

    if (!name || !email || !message) {
      res.status(400).json({ ok: false, error: "missing_fields" });
      return;
    }
    if (!isValidEmail(email)) {
      res.status(400).json({ ok: false, error: "invalid_email" });
      return;
    }
    if (name.length > 80 || company.length > 120 || website.length > 200 || phone.length > 80) {
      res.status(400).json({ ok: false, error: "field_too_long" });
      return;
    }
    if (message.length > 5000) {
      res.status(400).json({ ok: false, error: "message_too_long" });
      return;
    }

    const host = process.env.MAIL_HOST;
    const port = Number(process.env.MAIL_PORT || 465);
    const secure = String(process.env.MAIL_SECURE || "true") === "true";
    const user = process.env.MAIL_USER;
    const pass = process.env.MAIL_PASS;
    const to = process.env.MAIL_TO;

    if (!host || !user || !pass || !to) {
      res.status(500).json({ ok: false, error: "server_not_configured" });
      return;
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure,
      auth: { user, pass },
    });

    const safeName = escapeHeaderText(name);
    const safeEmail = escapeHeaderText(email);

    // ✅ 접수번호 생성
    const ticket = makeTicket("GEONIX");

    // 1) 관리자 메일 (접수번호가 첫 줄)
    await transporter.sendMail({
      from: `"Website Contact" <${user}>`, // 발송 계정 = MAIL_USER
      to, // 수신자 = MAIL_TO
      replyTo: email, // 답장은 사용자에게
      subject: `[GEONIX 웹문의] ${safeName} (${safeEmail})`,
      text: [
        `[접수번호] ${ticket}`, // ✅ 첫 줄
        "",
        `Name: ${name}`,
        `Email: ${email}`,
        company ? `Company: ${company}` : "",
        phone ? `Phone: ${phone}` : "",
        website ? `Website: ${website}` : "",
        "",
        "Message:",
        message,
      ]
        .filter(Boolean)
        .join("\n"),
    });

    // 2) 사용자 자동회신 (한글/영어 한 통)
    // - 본문에 전체 message를 그대로 재전송하면 민감정보 리스크가 생길 수 있어서 요약만 넣음(원하면 전체로 바꿔도 됨)
    const summary = message.length > 220 ? `${message.slice(0, 220)}...` : message;

    await transporter.sendMail({
      from: `"GEONIX" <${user}>`,
      to: email,
      replyTo: to, // ✅ 사용자가 회신하면 관리자에게
      subject: `문의가 접수되었습니다 / We’ve received your inquiry (Ticket: ${ticket})`,
      text: [
        `안녕하세요 ${name}님,`,
        `문의가 정상적으로 접수되었습니다.`,
        "",
        `- 접수번호: ${ticket}`,
        company ? `- Company: ${company}` : `- Company: -`,
        phone ? `- Phone: ${phone}` : `- Phone: -`,
        `- 접수내용(요약): ${summary}`,
        "",
        `담당자가 확인 후 회신드리겠습니다. 감사합니다.`,
        "",
        "------------------------------",
        "",
        `Hello ${name},`,
        `We’ve received your inquiry successfully.`,
        "",
        `- Ticket: ${ticket}`,
        company ? `- Company: ${company}` : `- Company: -`,
        phone ? `- Phone: ${phone}` : `- Phone: -`,
        `- Message (summary): ${summary}`,
        "",
        `Our team will get back to you as soon as possible. Thank you.`,
      ].join("\n"),
    });

    res.status(200).json({ ok: true, ticket });
  } catch (e: any) {
    console.error("CONTACT_API_ERROR:", e?.message || e);
    return res.status(500).json({ ok: false, error: "send_failed" });
  }
}
