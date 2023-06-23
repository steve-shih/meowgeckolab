import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ApplicationModule } from './core/app/app.module';
import * as session from 'express-session';

async function server() {
  const app = await NestFactory.create(ApplicationModule);
  const config = new DocumentBuilder()
    .setTitle('Cats example')
    .setDescription('The cats API description')
    .setVersion('1.0')
    .addTag('cats')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  app.enableCors(); // 前後端分離可能不同域
  await app.listen(8088);
}
server();
