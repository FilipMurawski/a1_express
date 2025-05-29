'use server';
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendMail({from = "Acme <onboarding@resend.dev>", to = "delivered@resend.dev", name, Contactemail, message}:{
  from?: string,
  to?: string,
  subject: string,
  template?: React.ReactElement<Record<string, string>> | null,
  confirmationLink?: string,
  type?: "confirm-email" | "reset-password" |"welcome" | "contact",
  text?: string,
  name?: string,
  Contactemail?: string,
  message?: string,
  resetLink?: string
}) {
  try {

    const data = {
      from,
      to,
      subject: "Formularz kontaktowy od A1 Express",
      html: `
        <div style="font-family: Arial, sans-serif; font-size: 16px; color: #333;">
          <h2 style="color: #FFCC00;">Formularz kontaktowy od A1 Express</h2>
          <p><strong>Imię i nazwisko:</strong> ${name}</p>
          <p><strong>Email:</strong> ${Contactemail}</p>
          <p><strong>Wiadomość:</strong></p>
          <p>${message}</p>
        </div>`,
    };
    const response = await resend.emails.send(data);
    return response;
  }
   catch (error) {
    console.error("Error sending email:", error);
    return error
  }
}
