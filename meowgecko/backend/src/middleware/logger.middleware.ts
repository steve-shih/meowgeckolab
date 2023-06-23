import { systemLogSchema } from '../model/schema/sysLog.model';
import { MongooseModule } from '@nestjs/mongoose';
import { Logger } from '@nestjs/common';

export const writeLog = (req, res, next) => {
  // Logger.log(`${apiPath}`);
  MongooseModule.forFeature([{ name: 'SystemLog', schema: systemLogSchema }]),
    next();
};
