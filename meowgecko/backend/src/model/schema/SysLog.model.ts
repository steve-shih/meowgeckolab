import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Base } from '../baseSchema/base.model';
import { Company } from '../schema/Company.model';
import { Employee } from '../schema/Employee.model';

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

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Company' })
  company: Company;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Employee' })
  employee: Employee;

  @Prop()
  action: string;

  @Prop()
  oldValue: string;

  @Prop()
  newValue: string;
}

export const systemLogSchema = SchemaFactory.createForClass(SystemLog);
