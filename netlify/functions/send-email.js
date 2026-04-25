import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export const handler = async (event) => {
  console.log("🔥 Function triggered");

  try {
    console.log("📥 Raw body:", event.body);

    const data = JSON.parse(event.body);
    console.log("✅ Parsed data:", data);

    const {
      full_name,
      company,
      email,
      phone_whatsapp,
      shipment_details
    } = data;

    // 📩 Email to Universcargo team
    console.log("📤 Sending email to team...");

    const teamResponse = await resend.emails.send({
      from: 'UniversCargo AOG <aog@universcargo.md>',
      to: 'info@universcargo.md',
      reply_to: email,
      subject: `Срочный AOG-запрос – ${company}`,
      text: `
Получен новый AOG-запрос:

Имя: ${full_name}
Компания: ${company}
Email: ${email}
Телефон: ${phone_whatsapp}

Детали:
${shipment_details}
      `
    });

    console.log("✅ Team email response:", teamResponse);

    // ✉️ Auto-response to CLIENT
    console.log("📤 Sending auto-response to client...");

    const clientResponse = await resend.emails.send({
      from: 'UniversCargo AOG <aog@universcargo.md>',
      to: email,
      subject: 'Ваш AOG-запрос получен',
      text: `
Dear ${full_name},

Thank you for your request.

Your AOG inquiry has been successfully received and is currently being processed by our operations team.
We will get back to you shortly.

If your request is urgent, please feel free to contact us directly via phone or WhatsApp.

Best regards,
AOG Team
      `
    });

    console.log("✅ Client email response:", clientResponse);

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true })
    };

  } catch (error) {
    console.error("❌ ERROR:", error);

    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message })
    };
  }
};