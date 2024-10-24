import { Module } from '@nestjs/common';
import { ContactService } from './contact.service';
import { ContactController } from './contact.controller';
import { MailModule } from '../mail/mail.module';
import { CmsModule } from '../cms/cms.module';

@Module({
  imports: [MailModule, CmsModule],
  controllers: [ContactController],
  providers: [ContactService],
})
export class ContactModule {}
