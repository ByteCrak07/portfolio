import { type NextRequest, NextResponse } from 'next/server';
import { type ReactElement } from 'react';
import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';
import { render } from '@react-email/render';
import ContactEmail from '@/emails';

export async function POST(request: NextRequest) {
  const { email, fullname, subject, message, copy } = await request.json();

  const transport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.NODEMAILER_EMAIL,
      pass: process.env.NODEMAILER_PASSWORD,
    },
  });

  const emailHtml = render(
    ContactEmail({ email, fullname, subject, message }) as ReactElement
  );

  const mailOptions: Mail.Options = {
    from: process.env.NODEMAILER_EMAIL,
    to: process.env.MY_EMAIL,
    subject: subject,
    html: emailHtml,
  };

  if (copy) mailOptions.cc = email;

  const sendMailPromise = () =>
    new Promise<string>((resolve, reject) => {
      transport.sendMail(mailOptions, function (err) {
        if (!err) {
          resolve('Email sent');
        } else {
          reject(err.message);
        }
      });
    });

  try {
    await sendMailPromise();
    return NextResponse.json({ message: 'Email sent' });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}
