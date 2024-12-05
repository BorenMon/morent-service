import { IsInt, IsString, IsNotEmpty, IsDate } from 'class-validator';
import { Type } from 'class-transformer';
import { IsTime } from '../../decorators/is-time.decorator';

export class BookDto {
  @IsInt()
  @IsNotEmpty()
  car_id: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  phone: string;

  @IsString()
  @IsNotEmpty()
  address: string;

  @IsString()
  @IsNotEmpty()
  pick_up_city: string;

  @IsDate()
  @Type(() => Date)
  @IsNotEmpty()
  pick_up_date: Date;

  @IsTime({ message: 'Pick-up time must be in the format HH:MM' })
  @IsNotEmpty()
  pick_up_time: string;

  @IsString()
  @IsNotEmpty()
  drop_off_city: string;

  @IsDate()
  @Type(() => Date)
  @IsNotEmpty()
  drop_off_date: Date;

  @IsTime({ message: 'Drop-off time must be in the format HH:MM' })
  @IsNotEmpty()
  drop_off_time: string;
}
