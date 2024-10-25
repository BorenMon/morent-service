import { Controller, Post, Body } from '@nestjs/common';
import { ContactService } from './contact.service';
import { SendDto } from './contact.dto';

@Controller('contact')
export class ContactController {
  constructor(private readonly contactService: ContactService) {}

  @Post('/send')
  send(@Body() sendDto: SendDto) {
    return this.contactService.send(sendDto);
  }
}
