import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';
import { BookDto } from './renting.dto';
import { AuthGuard } from 'src/auth.guard';

@Controller('renting')
export class RentingController {
    @Post('')
    @UseGuards(AuthGuard)
    book(
        // @Body() bookDto: BookDto
        @Req() request: any
    ) {
        console.log(request.user)
    }
}
