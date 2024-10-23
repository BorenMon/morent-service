import { Injectable } from '@nestjs/common';
import { NotifyReception } from './mail.dto';
import * as nodemailer from 'nodemailer';

@Injectable()
export class MailService {
  private transporter: nodemailer.Transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.SUPPORT_GMAIL,
        pass: process.env.SUPPORT_GMAIL_PASSWORD,
      },
    });
  }

  async notifyReception(data: NotifyReception) {
    const mailOptions = {
      from: process.env.SUPPORT_GMAIL,
      to: data.email_address,
      subject: 'Reception Notification',
      text: `You contacted us.`,
      html: `<p>We've received your message</p>`,
    };

    await this.transporter.sendMail(mailOptions);
  }
}
