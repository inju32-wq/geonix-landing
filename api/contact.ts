import type { VercelRequest, VercelResponse } from "@vercel/node";
import nodemailer from "nodemailer";

// --- 간단 레이트리밋 ---
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

// 에러가 발생했던 함수를 실제 사용하는 로직으로 통합하거나 제거했습니다.
function escapeHtml(s: string) {
  return String(s || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function makeTicket(prefix = "GEONIX") {
  const d = new Date();
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  const rand = Math.random().toString(36).slice(2, 8).toUpperCase();
  return `${prefix}-${y}${m}${day}-${rand}`;
}

function formatKST(dt = new Date()) {
  const kst = new Date(dt.getTime() + 9 * 60 * 60 * 1000);
  const y = kst.getUTCFullYear();
  const m = String(kst.getUTCMonth() + 1).padStart(2, "0");
  const d = String(kst.getUTCDate()).padStart(2, "0");
  const hh = String(kst.getUTCHours()).padStart(2, "0");
  const mm = String(kst.getUTCMinutes()).padStart(2, "0");
  const ss = String(kst.getUTCSeconds()).padStart(2, "0");
  return `${y}-${m}-${d} ${hh}:${mm}:${ss}`;
}

function detectLang(input: string): "ko" | "en" | "both" {
  const s = (input || "").trim();
  if (!s) return "both";
  const hangul = (s.match(/[가-힣]/g) || []).length;
  const letters = (s.match(/[A-Za-z]/g) || []).length;
  const total = hangul + letters;
  if (total === 0) return "both";
  const hangulRatio = hangul / total;
  if (hangulRatio >= 0.25) return "ko";
  if (hangulRatio <= 0.05) return "en";
  return "both";
}

function row(label: string, value: string) {
  const labelStyle = "padding:10px 0; width:170px; color:#666; border-bottom:1px solid #efefef; white-space:nowrap;";
  const valueStyle = "padding:10px 0; color:#111; border-bottom:1px solid #efefef;";
  return `<tr><td style="${labelStyle}">${escapeHtml(label)}</td><td style="${valueStyle}">${escapeHtml(value)}</td></tr>`;
}

function buildMailplugStyleBase(params: any) {
  const { brandText, brandLineColor, brandTextColor, titleTextColor, titleKo, titleEn, introKo, introEn, tableRowsHtml, messageLabelKo, messageLabelEn, messageHtml, footerKo, footerEn } = params;
  return `<!doctype html><html><body style="margin:0; padding:0; background:#ffffff;"><table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;"><tr><td align="center" style="padding:24px 12px;"><table width="680" cellpadding="0" cellspacing="0" style="border-collapse:collapse; width:680px; max-width:680px;"><tr><td style="padding:0 0 10px 0;"><div style="font-family:Arial, sans-serif; font-size:20px; font-weight:800; color:${brandTextColor};">${escapeHtml(brandText)}</div></td></tr><tr><td style="border-top:2px solid ${brandLineColor}; padding:0;"></td></tr><tr><td style="padding:22px 0 12px 0; font-family:Arial, sans-serif; text-align:center;"><div style="font-size:18px; font-weight:800; color:${titleTextColor};">${escapeHtml(titleKo)}</div>${titleEn ? `<div style="font-size:13px; font-weight:700; color:#666; margin-top:4px;">${escapeHtml(titleEn)}</div>` : ""}</td></tr><tr><td style="padding:0 0 14px 0; font-family:Arial, sans-serif; font-size:13px; color:#333; line-height:1.7;">${introKo ? `<div>${introKo}</div>` : ""}${introEn ? `<div style="margin-top:8px; color:#444;">${introEn}</div>` : ""}</td></tr><tr><td style="border-top:1px solid #e6e6e6; padding:0;"></td></tr><tr><td style="padding:14px 0 0 0;"><table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse; font-family:Arial, sans-serif; font-size:13px;">${tableRowsHtml}</table></td></tr><tr><td style="padding:12px 0 0 0;"><div style="font-family:Arial, sans-serif; font-size:13px; color:#333; padding:10px 0 6px 0; font-weight:800;">${escapeHtml(messageLabelKo)}${messageLabelEn ? `<span style="font-weight:600; color:#666; margin-left:8px;">${escapeHtml(messageLabelEn)}</span>` : ""}</div><div style="border:1px solid #e6e6e6; background:#fafafa; padding:12px; font-family:Arial, sans-serif; font-size:13px; color:#333; line-height:1.7;">${messageHtml}</div></td></tr><tr><td style="padding:16px 0 0 0; font-family:Arial, sans-serif; font-size:12px; color:#777; line-height:1.6;">${footerKo ? `<div>${footerKo}</div>` : ""}${footerEn ? `<div style="margin-top:6px;">${footerEn}</div>` : ""}</td></tr><tr><td style="padding:18px 0 0 0; border-top:1px solid #efefef;"></td></tr><tr><td style="border-top:2px solid ${brandLineColor}; padding:0;"></td></tr><tr><td style="padding:10px 0 0 0; font-family:Arial, sans-serif; font-size:11px; color:#999;">© ${new Date().getFullYear()} ${escapeHtml(brandText)}. All rights reserved.</td></tr></table></td></tr></table></body></html>`.trim();
}

function buildAdminHtml(params: any) {
  const rowsHtml = [row("접수번호 / Ticket", params.ticket), row("이름 / Name", params.name), row("이메일 / Email", params.email), row("회사 / Company", params.company || "-"), row("연락처 / Phone", params.phone || "-"), row("문의 접수일 / Submitted at", params.submittedAt)].join("");
  const messageHtml = `<div style="white-space:pre-wrap;">${escapeHtml(params.message)}</div>`;
  return buildMailplugStyleBase({ ...params, titleKo: "문의사항 접수 (관리자)", titleEn: "New inquiry received (Admin)", introKo: "아래 내용으로 문의가 접수되었습니다.", introEn: "A new inquiry has been received.", tableRowsHtml: rowsHtml, messageLabelKo: "문의 내용", messageLabelEn: "Message", messageHtml, footerKo: "※ 본 메일은 시스템 자동 발송입니다.", footerEn: "※ This is an automated message." });
}

function buildUserHtml(params: any) {
  const rowsHtml = [row("접수번호 / Ticket", params.ticket), row("이름 / Name", params.name), row("문의 접수일 / Submitted at", params.submittedAt), row("회사 / Company", params.company || "-"), row("연락처 / Phone", params.phone || "-")].join("");
  const messageHtml = `<div style="white-space:pre-wrap;">${escapeHtml(params.summary)}</div>`;
  return buildMailplugStyleBase({ ...params, titleKo: "문의사항 접수", titleEn: "Inquiry Received", introKo: `안녕하세요. <b>${escapeHtml(params.brandText)}</b>입니다.<br/>문의가 정상적으로 접수되었습니다.`, introEn: `Hello <b>${escapeHtml(params.name)}</b>,<br/>We’ve received your inquiry successfully.`, tableRowsHtml: rowsHtml, messageLabelKo: "접수 내용(요약)", messageLabelEn: "Message (summary)", messageHtml, footerKo: "※ 본 메일은 발신전용입니다.", footerEn: "※ This email is sent from a no-reply address." });
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    if (req.method !== "POST") return res.status(405).json({ ok: false, error: "method_not_allowed" });
    const body = typeof req.body === "string" ? JSON.parse(req.body) : req.body;

    if (body?.hp && String(body.hp).trim() !== "") return res.status(200).json({ ok: true });

    const ip = (req.headers["x-forwarded-for"] as string | undefined)?.split(",")[0]?.trim() || (req.socket?.remoteAddress ?? "unknown");
    const rl = rateLimit(ip);
    if (!rl.ok) return res.status(429).json({ ok: false, error: "rate_limited" });

    // reCAPTCHA v3 검증
    const token = body?.token;
    if (!token) return res.status(400).json({ ok: false, error: "recaptcha_token_missing" });

    const secretKey = process.env.RECAPTCHA_SECRET_KEY;
    const verifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${token}`;
    const recaptchaRes = await fetch(verifyUrl, { method: "POST" });
    const recaptchaData = await recaptchaRes.json();

    if (!recaptchaData.success || recaptchaData.score < 0.5) {
      return res.status(403).json({ ok: false, error: "recaptcha_failed", score: recaptchaData.score });
    }

    const { name, email, message, company, phone } = body;
    if (!name || !email || !message) return res.status(400).json({ ok: false, error: "missing_fields" });
    if (!isValidEmail(email)) return res.status(400).json({ ok: false, error: "invalid_email" });

    const host = process.env.MAIL_HOST || "smtp.mailplug.co.kr";
    const user = process.env.MAIL_USER;
    const pass = process.env.MAIL_PASS;
    const to = process.env.MAIL_TO;

    if (!user || !pass || !to) return res.status(500).json({ ok: false, error: "server_not_configured" });

    const transporter = nodemailer.createTransport({ host, port: 465, secure: true, auth: { user, pass } });
    await transporter.verify();

    const ticket = makeTicket("GEONIX");
    const submittedAt = formatKST(new Date());
    const brandText = "GEONIX";
    const brandLineColor = "#f43e38";

    await transporter.sendMail({
      from: `"Website Contact" <${user}>`,
      to,
      replyTo: email,
      subject: `TICKET:${ticket} | ${name} <${email}>`,
      html: buildAdminHtml({ brandText, brandLineColor, brandTextColor: "#4A4A4A", titleTextColor: "#4A4A4A", ticket, submittedAt, name, email, company, phone, message }),
    });

    const lang = detectLang(`${name} ${company} ${message}`);
    const summary = message.length > 400 ? `${message.slice(0, 400)}...` : message;
    await transporter.sendMail({
      from: `"GEONIX" <${user}>`,
      to: email,
      replyTo: to,
      subject: lang === "en" ? `We’ve received your inquiry (Ticket: ${ticket})` : `문의가 접수되었습니다 (접수번호: ${ticket})`,
      html: buildUserHtml({ brandText, brandLineColor, brandTextColor: "#4A4A4A", titleTextColor: "#4A4A4A", lang, ticket, submittedAt, name, company, phone, summary }),
    });

    res.status(200).json({ ok: true, ticket });
  } catch (e: any) {
    console.error("CONTACT_API_ERROR:", e);
    return res.status(500).json({ ok: false, error: "send_failed" });
  }
}
