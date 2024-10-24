import { Injectable } from '@nestjs/common';
import { createDirectus, rest } from '@directus/sdk';

@Injectable()
export class CmsService {
  private API_BASE_URL: string;
  private client: any;

  constructor() {
    this.API_BASE_URL = process.env.DIRECTUS_API_BASE_URL;
    this.client = createDirectus(this.API_BASE_URL).with(rest());
  }
}
