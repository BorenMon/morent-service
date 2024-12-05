import { ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { CmsService } from '../cms/cms.service';
import { BookDto } from './renting.dto';

@Injectable()
export class RentingService {
    constructor(
        private readonly cmsService: CmsService
    ) {}

    async book(customerId: string, bookDto: BookDto) {
        const carData = await this.cmsService.read('cars', bookDto.car_id);
        
        if (!carData) {
            throw new NotFoundException('Car not found');
        }

        this.cmsService.update('cars', carData.id, {
            number: carData.number - 1
        });

        const bookingData = {
            customer_id: customerId,
            car_id: bookDto.car_id,
            name: bookDto.name,
            phone: bookDto.phone,
            address: bookDto.address,
            pick_up_city: bookDto.pick_up_city,
            pick_up_date: bookDto.pick_up_date,
            pick_up_time: bookDto.pick_up_time,
            drop_off_city: bookDto.drop_off_city,
            drop_off_date: bookDto.drop_off_date,
            drop_off_time: bookDto.drop_off_time,
            stage: 'booking',
            payment_status: 'pending',
            progess_status: 'pending',
        }

        return await this.cmsService.create('bookings', bookingData);
    }

    async cancel(customerId: string, bookingId: string) {
        const bookingData = (await this.cmsService.read('bookings', bookingId)).data;

        if (!bookingData || bookingData.customer_id!== customerId) {
            throw new NotFoundException('Booking not found or not owned by the customer');
        }

        if (!(['booking', 'renting'].includes(bookingData.stage))) {
            throw new ForbiddenException('Booking cannot be cancelled in this stage');
        }

        if (bookingData.progress_status === 'cancelled') {
            throw new ForbiddenException('Booking is already cancelled');
        }

        const carNumber = (await this.cmsService.read('car', bookingData.car_id)).data.number

        this.cmsService.update('cars', bookingData.car_id, {
            number: carNumber + 1
        });

        return await this.cmsService.update('bookings', bookingId, {
            progress_status: 'cancelled',
            payment_status: 'refunding',
        });
    }
}
