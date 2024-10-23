import { Controller, Post, Body} from '@nestjs/common';
import { ContactService } from './contact.service';
import { SendContactDto } from './dto/send-contact.dto';

@Controller('contact')
export class ContactController {
  constructor(private readonly contactService: ContactService) {}

  @Post()
  sendContact(@Body() sendContactDto: SendContactDto) {
    return this.contactService.sendContact(sendContactDto);
  }
}
