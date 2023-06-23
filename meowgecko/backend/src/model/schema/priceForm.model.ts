// 出貨單(對客人)
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Base } from '../baseSchema/base.model';

@Schema({
  toJSON: {
    virtuals: true,
    transform: function (doc: any, ret: any) {
      delete ret._id;
      delete ret.__v;
      return ret;
    },
  },
})
export class SystemLog extends Base {
  @Prop({ required: true, unique: true })
  target: string;

  @Prop({ required: true })
  apiStr: string;

  @Prop({ required: false })
  oldData: string;

  @Prop({ required: false })
  newData: string;

  @Prop({ required: true })
  time: string;
}

export const systemLogSchema = SchemaFactory.createForClass(SystemLog);
