import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';

@Injectable()
export class MailService {
  public static SUPPORT_GMAIL: string;
  private SUPPORT_GMAIL_PASSWORD: string;
  private transporter: nodemailer.Transporter;

  constructor() {
    MailService.SUPPORT_GMAIL = process.env.SUPPORT_GMAIL;
    this.SUPPORT_GMAIL_PASSWORD = process.env.SUPPORT_GMAIL_PASSWORD;
    this.transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: MailService.SUPPORT_GMAIL,
        pass: this.SUPPORT_GMAIL_PASSWORD,
      },
    });
  }

  async sendMail(mailOptions: Mail.Options) {
    await this.transporter.sendMail(mailOptions);
  }
}
