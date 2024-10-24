import { Injectable } from '@nestjs/common';
import { MailService } from '../mail/mail.service';
import { SendContactDto } from './dto/send-contact.dto';
import { CmsService } from '../cms/cms.service';

@Injectable()
export class ContactService {
  constructor(
    private readonly mailSevice: MailService,
    private readonly cmsService: CmsService,
  ) {}

  sendContact(data: SendContactDto) {
    const mailOptions = {
      from: MailService.SUPPORT_GMAIL,
      to: data.email,
      subject: 'Reception Notification',
      text: `You contacted us.`,
      html: `<p>We've received your message</p>`,
    };

    this.mailSevice.sendMail(mailOptions);
  }
}
