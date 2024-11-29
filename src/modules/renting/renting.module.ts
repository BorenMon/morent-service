import { Module } from '@nestjs/common';
import { RentingController } from './renting.controller';
import { RentingService } from './renting.service';
import { AuthGuard } from 'src/auth.guard';

@Module({
  controllers: [RentingController],
  providers: [RentingService]
})
export class RentingModule {}
