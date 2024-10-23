import { Module } from '@nestjs/common';
import { MailModule } from './modules/mail/mail.module';
import { ContactModule } from './modules/contact/contact.module';

@Module({
  imports: [
    MailModule,
    ContactModule
  ]
})
export class AppModule {}
