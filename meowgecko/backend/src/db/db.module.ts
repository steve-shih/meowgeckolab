import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

const MONGO = {
  username: '<Example>',
  password: encodeURIComponent('<YOUR_PASSWORD>'),
  getUrl: function () {
    return `mongodb+srv://${this.username}:${this.password}@<YOUR_DB>`;
  },
  localUrl: function () {
    return 'mongodb://203.77.60.140:443/pet';
  },
};

@Module({
  imports: [MongooseModule.forRoot(MONGO.localUrl())],
  controllers: [],
  providers: [],
})
export class dbModule {}
