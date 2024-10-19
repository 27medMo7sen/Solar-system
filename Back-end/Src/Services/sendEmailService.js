import nodemailer from "nodemailer";
export async function sendEmailServices({
  to,
  subject,
  message,
  attachments = [],
} = {}) {
  const transporter = nodemailer.createTransport({
    host: process.env.HOST,
    port: 587,
    secure: false,
    service: "gmail",
    auth: {
      user: process.env.SENDER_EMAIL,
      pass: process.env.SENDER_PASSWORD,
    },
  });

  const emailInfo = await transporter.sendMail({
    from: `"solar ease" <${process.env.SENDER_EMAIL}>`,
    to: to ? to : "",
    subject: subject ? subject : "Hello",
    html: message ? message : "<h1>Hello</h1>",
    attachments,
  });
  if (emailInfo.accepted.length) {
    return true;
  }
  return false;
}
