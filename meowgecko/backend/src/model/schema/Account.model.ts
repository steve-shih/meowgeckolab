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
export class Account extends Base {
  @Prop({ required: true, unique: true })
  account: string;

  @Prop({ required: true })
  password: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Company' })
  companyId: ObjectId;
}

export const AccountSchema = SchemaFactory.createForClass(Account);
