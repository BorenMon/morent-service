import { IsNotEmpty, IsString } from "class-validator";

export class NotifyReception {
  @IsNotEmpty()
  @IsString()
  email_address: string;
}