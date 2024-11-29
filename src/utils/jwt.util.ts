import { Injectable, UnauthorizedException } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class JwtUtils {
  private readonly secret = process.env.DIRECTUS_SECRET_KEY;

  validateToken(token: string): any {
    try {
      return jwt.verify(token, this.secret);
    } catch (error) {
      throw new UnauthorizedException('Invalid token');
    }
  }
}
