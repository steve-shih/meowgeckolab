import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  default(): string {
    return '無此路徑';
  }
}
