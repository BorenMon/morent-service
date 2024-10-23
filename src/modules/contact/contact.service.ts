import { Injectable } from '@nestjs/common';
import { MailService } from '../mail/mail.service';
import { SendContactDto } from './dto/send-contact.dto';
import { SUPPORT_GMAIL } from 'src/configs/global.config';

@Injectable()
export class ContactService {
  constructor(
    private readonly mailSevice: MailService
  ) {}

  sendContact(data: SendContactDto) {
    const mailOptions = {
      from: SUPPORT_GMAIL,
      to: data.email,
      subject: 'Reception Notification',
      text: `You contacted us.`,
      html: `<p>We've received your message</p>`,
    };

    this.mailSevice.sendMail(mailOptions);
  }
}
