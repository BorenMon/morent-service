import { Global, Module } from '@nestjs/common';
import { MailModule } from './modules/mail/mail.module';
import { ContactModule } from './modules/contact/contact.module';
import { CmsModule } from './modules/cms/cms.module';
import { RentingModule } from './modules/renting/renting.module';
import { JwtUtils } from './utils/jwt.util';

@Global()
@Module({
  imports: [MailModule, ContactModule, CmsModule, RentingModule],
  providers: [JwtUtils],
  exports: [JwtUtils]
})
export class AppModule {}
