import nodemailer from "nodemailer";

export default async function handler(req: any, res: any) {
  // CORS 필요하면 여기에 추가 가능
  if (req.method !== "POST") {
    return res.status(405).json({ ok: false, error: "Method Not Allowed" });
  }

  try {
    const { MAIL_HOST, MAIL_PORT, MAIL_USER, MAIL_PASS, MAIL_TO } = process.env;

    // 1) 환경변수 누락 체크
    const missing = {
      MAIL_HOST: !MAIL_HOST,
      MAIL_PORT: !MAIL_PORT,
      MAIL_USER: !MAIL_USER,
      MAIL_PASS: !MAIL_PASS,
    };
    if (missing.MAIL_HOST || missing.MAIL_PORT || missing.MAIL_USER || missing.MAIL_PASS) {
      return res.status(500).json({ ok: false, error: "Missing env vars", missing });
    }

    const transporter = nodemailer.createTransport({
      host: MAIL_HOST,
      port: Number(MAIL_PORT),
      secure: true, // ✅ 465면 true 고정
      auth: {
        user: MAIL_USER,
        pass: MAIL_PASS,
      },
    });

    // 2) SMTP 연결/인증 확인
    await transporter.verify();

    // 3) 테스트 메일 발송 (관리자에게)
    const info = await transporter.sendMail({
      from: MAIL_USER,
      to: MAIL_TO || MAIL_USER,
      subject: "[TEST] SMTP OK",
      text: "SMTP verify + sendMail success",
    });

    return res.status(200).json({ ok: true, messageId: info.messageId });
  } catch (e: any) {
    console.error("CONTACT_API_ERROR:", e);

    return res.status(500).json({
      ok: false,
      error: e?.message || String(e),
      code: e?.code,
      response: e?.response,     // 예: 535 5.7.8 Authentication failed
      command: e?.command,       // 예: 'AUTH PLAIN'
    });
  }
}
