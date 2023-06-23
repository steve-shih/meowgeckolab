import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { ObjectId } from 'mongoose';
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
export class Employee extends Base {
  @Prop() // 姓名
  name: string;
  @Prop() // 出生日期
  birthDate: string;
  @Prop() // 入職日
  buildDate: string;
  @Prop() // 離職日
  leaveDate: string;
  @Prop() // 職等
  level: number;
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Company' })
  companyId: ObjectId;
}

export const EmployeeSchema = SchemaFactory.createForClass(Employee);
