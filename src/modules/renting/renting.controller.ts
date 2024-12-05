import { Body, Controller, Delete, Param, Post, Req, UseGuards } from '@nestjs/common';
import { BookDto } from './renting.dto';
import { AuthGuard } from 'src/auth.guard';
import { RentingService } from './renting.service';

@Controller('renting')
export class RentingController {
    constructor(
        private readonly rentingService: RentingService
    ) {}

    @Post('/book')
    @UseGuards(AuthGuard)
    async book(
        @Body() bookDto: BookDto,
        @Req() request: any
    ) {
        return await this.rentingService.book(request.user.id, bookDto);
    }

    @Delete('/:id')
    @UseGuards(AuthGuard)
    async cancel(
        @Req() request: any,
        @Param('id') bookingId: string
    ) {
        return await this.rentingService.cancel(request.user.id, bookingId);
    }
}
