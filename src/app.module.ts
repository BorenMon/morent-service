import { Module } from '@nestjs/common';
import { MailModule } from './modules/mail/mail.module';
import { ContactModule } from './modules/contact/contact.module';
import { CmsModule } from './modules/cms/cms.module';

@Module({
  imports: [MailModule, ContactModule, CmsModule],
})
export class AppModule {}
