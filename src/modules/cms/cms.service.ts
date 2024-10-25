import { Injectable, Logger } from '@nestjs/common';
import { createDirectus, createItem, rest, RestClient } from '@directus/sdk';

@Injectable()
export class CmsService {
  private client: RestClient<any>;
  private readonly logger = new Logger(CmsService.name);

  constructor() {
    this.client = createDirectus(process.env.DIRECTUS_API_BASE_URL).with(rest());
  }

  async create(collection: string, data: any) {
    try {
      const response = await this.client.request(createItem(collection, data));
      this.logger.log(`Created item in ${collection}: ${JSON.stringify(response)}`);
      return response;
    } catch (error) {
      this.logger.error(`Error creating item in ${collection}: ${error.message}`);
      throw error;
    }
  }
}
