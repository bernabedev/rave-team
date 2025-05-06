import { ActionError, defineAction } from "astro:actions";
import { Resend } from "resend";

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const server = {
  send: defineAction({
    accept: "form",
    handler: async ({ request }) => {
      const formData = await request.formData();

      const emailTo = formData.get("to")?.toString();
      const message = formData.get("message")?.toString();

      if (!emailTo) return;

      const { data, error } = await resend.emails.send({
        from: "delivered@resend.dev", // rave team email
        to: ["delivered@resend.dev"], // rave team email
        replyTo: emailTo,
        subject: "¡Estoy interesado/a en contactar con vosotros!",
        html: `<strong>${message}. El mensaje fue enviado por ${emailTo}</strong>`,
      });

      if (error) {
        throw new ActionError({
          code: "BAD_REQUEST",
          message: error.message,
        });
      }

      return data;
    },
  }),
};
