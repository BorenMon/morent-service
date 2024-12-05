import { Module } from '@nestjs/common';
import { RentingController } from './renting.controller';
import { RentingService } from './renting.service';
import { CmsModule } from '../cms/cms.module';

@Module({
  imports: [CmsModule],
  controllers: [RentingController],
  providers: [RentingService]
})
export class RentingModule {}
