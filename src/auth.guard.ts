import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { JwtUtils } from './utils/jwt.util';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private readonly jwtUtils: JwtUtils) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const authHeader = request.headers['authorization'];

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      throw new UnauthorizedException('No token provided');
    }

    const token = authHeader.split(' ')[1];
    const decodedToken = this.jwtUtils.validateToken(token);

    // Optionally, perform additional checks, such as fetching the user from Directus
    request.user = decodedToken;
    return true;
  }
}
