export const runtime = "nodejs"

import nodemailer from "nodemailer"

export async function POST(request) {
  try {
    const formData = await request.formData()

    const name = formData.get("name")
    const email = formData.get("email")
    const phone = formData.get("phone")
    const message = formData.get("message")
    const photo = formData.get("photo")

    const SMTP_USER = process.env.SMTP_USER
    const SMTP_PASS = process.env.SMTP_PASS
    const MAIL_DESTINATION = process.env.MAIL_DESTINATION

    if (!SMTP_USER || !SMTP_PASS || !MAIL_DESTINATION) {
      return new Response(
        JSON.stringify({ success: false, error: "Missing SMTP configuration" }),
        { status: 500 }
      )
    }

    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ success: false, error: "Missing required fields" }),
        { status: 400 }
      )
    }

    const transporter = nodemailer.createTransport({
      host: "mail.infomaniak.com",
      port: 465,
      secure: true,
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
    })

    const attachments = []

    if (photo) {
      const buffer = Buffer.from(await photo.arrayBuffer())
      attachments.push({
        filename: photo.name,
        content: buffer,
      })
    }

    await transporter.sendMail({
      from: `"Mod'Elle" <${SMTP_USER}>`,
      to: MAIL_DESTINATION,
      replyTo: email,
      subject: `📩 Nouveau message de ${name}`,
      text: `
Nom : ${name}
Email : ${email}
Téléphone : ${phone || "Non renseigné"}

Message :
${message}
      `,
      attachments,
    })

    return new Response(JSON.stringify({ success: true }), { status: 200 })
  } catch (error) {
    console.error(error)
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      { status: 500 }
    )
  }
}
