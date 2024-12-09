import { Injectable, CanActivate, ExecutionContext, UnauthorizedException, NotFoundException } from '@nestjs/common';
import { JwtUtils } from './utils/jwt.util';
import { CmsService } from './modules/cms/cms.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private readonly jwtUtils: JwtUtils,
    private readonly cmsService: CmsService
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const authHeader = request.headers['authorization'];

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      throw new UnauthorizedException('No token provided');
    }

    const token = authHeader.split(' ')[1];
    let decoded = this.jwtUtils.validateToken(token);

    try {
      decoded = (await this.cmsService.read('users', decoded.id, true)).data;
    } catch (error) {
      console.error(error)
      if (error.status === 401) {
        throw new UnauthorizedException('Invalid token');
      }
      throw new NotFoundException('Could not find user')
    }

    if (decoded.role != process.env.DIRECTUS_CUSTOMER_ROLE) {
      throw new UnauthorizedException('Invalid role');
    }

    request.user = decoded;

    return true;
  }
}
