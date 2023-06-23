import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from './module/core/app/app.module';
import * as session from 'express-session';
import { ValidationPipe } from '@nestjs/common';

async function server() {
  const app = await NestFactory.create(ApplicationModule);
  app.useGlobalPipes(new ValidationPipe());
  app.use(
    session({
      secret: 'tire_erp_key',
      resave: false,
      saveUninitialized: false,
    }),
  );
  app.enableCors(); // 前後端分離可能不同域
  await app.listen(8080);
}
server();
