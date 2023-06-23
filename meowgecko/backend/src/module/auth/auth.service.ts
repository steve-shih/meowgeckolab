import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private configService: ConfigService,
  ) {}

  async login(user: any) {
    // 之後必用CONFIG 設定的
    // const secret = this.configService.get<string>('JWT_SECRET');
    const secret = '132164516ds1vsdvvd';

    // 根据实际需求修改 payload 对象的属性
    const payload = {
      id: user.id,
      username: user.account,
      role: user.role,
    };

    console.log(secret);

    // 签发 JWT 令牌
    const access_token = this.jwtService.sign(payload, { secret });

    return {
      access_token,
    };
  }
}
