import { Controller, Get, Session } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  root(@Session() session: Record<string, any>): string {
    console.log(session);

    return this.appService.default();
  }
}
