import { Injectable } from '@nestjs/common';
import { MailService } from '../mail/mail.service';
import { SendDto } from './contact.dto';
import { CmsService } from '../cms/cms.service';

@Injectable()
export class ContactService {
  constructor(
    private readonly mailSevice: MailService,
    private readonly cmsService: CmsService,
  ) {}

  async send(data: SendDto) {
    const mailOptions = {
      from: MailService.SUPPORT_GMAIL,
      to: data.email,
      subject: 'Reception Notification',
      text: `You contacted us.`,
      html: `<p>We've received your message</p>`,
    };

    this.mailSevice.sendMail(mailOptions);

    return await this.cmsService.create('contacts', data);
  }
}
