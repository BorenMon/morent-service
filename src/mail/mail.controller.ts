import { Body, Controller, Post } from '@nestjs/common';
import { NotifyReception } from './mail.dto';
import { MailService } from './mail.service';

@Controller('mail')
export class MailController {
  constructor(
    private readonly mailService: MailService,
  ) {}

  @Post('/notify-reception')
  noifyReception(@Body() body: NotifyReception) {
    return this.mailService.notifyReception(body);
  }
}
