import { Module, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { writeLog } from '../../../middleware/logger.middleware';
import { AccountModule } from '../../account/account.module';
import { dbModule } from '../../../db/db.module';
import { NestModule, MiddlewareConsumer } from '@nestjs/common/interfaces';

@Module({
  imports: [
    dbModule,
    AccountModule,
    // EmployeeModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class ApplicationModule implements NestModule {
  configure(consumer: MiddlewareConsumer): void {
    consumer
      .apply(writeLog)
      .forRoutes({ path: '/account', method: RequestMethod.ALL });
  }
}
