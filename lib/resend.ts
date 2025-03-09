"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

type EmailData = {
  name: string;
  email: string;
  message: string;
};

export const sendEmail = async (data: EmailData) => {
  try {
    await resend.emails.send({
      to: "lupuadelin1999@yahoo.com",
      from: `${data.name} <onboarding@resend.dev>`,
      replyTo: data.email,
      subject: `Mesaj nou de la ${data.name}`,
      html: `
        
          <p><strong>Nume:</strong> ${data.name}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Mesaj:</strong> ${data.message}</p>
        `,
    });
    return { success: true };
  } catch (error) {
    console.error("Failed to send email:", error);
    return { success: false, error };
  }
};
