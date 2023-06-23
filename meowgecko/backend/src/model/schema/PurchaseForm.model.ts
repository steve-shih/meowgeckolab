import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Date, ObjectId } from 'mongoose';
import { Base } from '../baseSchema/base.model';
import { Company } from '../schema/Company.model';

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
export class PurchaseForm extends Base {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Company' })
  company: Company;
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Employee' })
  employeeId: ObjectId;
  @Prop()
  purchaseDate: Date;
  @Prop()
  type: string;
  @Prop()
  purchaseNumber: string;
  @Prop()
  list: {
    contents: string;
    memo: string;
    count: number;
  };
  @Prop()
  totalCost: number;
}
export const AccountSchema = SchemaFactory.createForClass(PurchaseForm);
