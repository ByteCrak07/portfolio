import { type NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';

export async function POST(request: NextRequest) {
  const { email, fullname, message } = await request.json();

  const transport = nodemailer.createTransport({
    host: process.env.NODEMAILER_SMTP_HOST,
    port: 465,
    secure: true,
    auth: {
      user: process.env.NODEMAILER_EMAIL,
      pass: process.env.NODEMAILER_PASSWORD,
    },
  });

  const mailOptions: Mail.Options = {
    to: process.env.MY_EMAIL,
    subject: `Message from ${fullname} (${email}) (via abilsavio.tech)`,
    text: message,
  };

  const sendMailPromise = new Promise<boolean>((resolve) => {
    transport.sendMail(mailOptions, function (err) {
      if (err) {
        resolve(false);
      } else {
        resolve(true);
      }
    });
  });

  const isMailSent = await sendMailPromise;

  if (isMailSent) {
    return NextResponse.json({ message: 'Email sent' });
  } else {
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
