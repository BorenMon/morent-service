import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';

@Injectable()
export class CmsService {
  private axiosClient: AxiosInstance;

  constructor() {
    this.axiosClient = axios.create({
      baseURL: process.env.DIRECTUS_API_BASE_URL,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.DIRECTUS_ADMIN_TOKEN}`,
      },
    });
  }

  async create(collection: string, data: any) {
    try {
      const response = await this.axiosClient.post(`/items/${collection}`, data);
      console.log(`Created item in ${collection}: ${JSON.stringify(response.data)}`);
      return response.data;
    } catch (error) {
      console.error(`Error creating item in ${collection}: ${error.message}`);
      throw error;
    }
  }

  async read(collection: string, id: string, isSystem: boolean = false) {
    try {
      const response = await this.axiosClient.get(`${isSystem ? '' : '/items'}/${collection}/${id}`);
      console.log(`Read item from ${collection} with ID ${id}: ${JSON.stringify(response.data)}`);
      return response.data;
    } catch (error) {
      console.error(`Error reading item from ${collection} with ID ${id}: ${error.message}`);
      throw error;
    }
  }

  async update(collection: string, id: string, data: any) {
    try {
      const response = await this.axiosClient.patch(`/items/${collection}/${id}`, data);
      console.log(`Updated item in ${collection} with ID ${id}: ${JSON.stringify(response.data)}`);
      return response.data;
    } catch (error) {
      console.error(`Error updating item in ${collection} with ID ${id}: ${error.message}`);
      throw error;
    }
  }

  async delete(collection: string, id: string) {
    try {
      const response = await this.axiosClient.delete(`/items/${collection}/${id}`);
      console.log(`Deleted item from ${collection} with ID ${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error deleting item from ${collection} with ID ${id}: ${error.message}`);
      throw error;
    }
  }
}
