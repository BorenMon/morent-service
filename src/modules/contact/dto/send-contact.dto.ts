import { IsEmail, IsNotEmpty, IsPhoneNumber, IsString } from "class-validator";

export class SendContactDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsPhoneNumber()
  phone: string;

  @IsNotEmpty()
  @IsString()
  message: string;
}