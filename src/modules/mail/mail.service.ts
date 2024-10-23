import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';
import { SUPPORT_GMAIL, SUPPORT_GMAIL_PASSWORD } from '../../configs/global.config'
import Mail from 'nodemailer/lib/mailer';

@Injectable()
export class MailService {
  private transporter: nodemailer.Transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: SUPPORT_GMAIL,
        pass: SUPPORT_GMAIL_PASSWORD,
      },
    });
  }

  async sendMail(mailOptions: Mail.Options) {
    await this.transporter.sendMail(mailOptions);
  }
}
