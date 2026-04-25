import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export const handler = async (event) => {
  try {
    const data = JSON.parse(event.body);

    const {
      full_name,
      company,
      email,
      phone_whatsapp,
      shipment_details
    } = data;

    // 📩 Email to Universcargo team
    await resend.emails.send({
      from: 'AOG Website <info@universcargo.md>',
      to: 'deniscercasin@gmail.com',
      replyTo: email,
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

    // Auto-response to CLIENT
    await resend.emails.send({
      from: 'UniversCargo AOG <info@universcargo.md>',
      to: email,
      subject: 'Ваш AOG-запрос получен',
      text: `
Здравствуйте, ${full_name}!

Спасибо за ваше обращение.

Ваш AOG-запрос получен и уже обрабатывается нашей командой.
Мы свяжемся с вами в ближайшее время.

Если срочно — пожалуйста, свяжитесь с нами по телефону или WhatsApp.

С уважением,
Команда AOG
      `
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true })
    };

  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message })
    };
  }
};