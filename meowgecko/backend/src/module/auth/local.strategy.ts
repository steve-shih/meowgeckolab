import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthService } from './auth.service';

@Injectable()
export class LocalAuthGuard extends AuthGuard('local') {
  handleRequest(err: any, user: any) {
    if (err || !user) {
      throw err || new UnauthorizedException('请先登录');
    }
    return user;
  }
}

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy, 'local') {
  constructor(private authService: AuthService) {
    super();
  }

  async validate(userObj: any): Promise<any> {
    await this.authService.login(userObj);
  }
}
