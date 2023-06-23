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
export class Customer extends Base {
  @Prop()
  customerId: string;

  @Prop()
  departmentNumber: string;

  @Prop()
  createdDate: string;

  @Prop()
  shortName: string;

  @Prop()
  companyName: string;

  @Prop()
  addressLabelName: string;

  @Prop()
  taxType: string;

  @Prop()
  notes: string;

  @Prop()
  uniformNumber: string;

  @Prop()
  designatedAccount: string;

  @Prop()
  settlementDate: string;

  @Prop()
  mobilePhone: string;

  @Prop()
  contactPhone1: string;

  @Prop()
  contactPhone2: string;

  @Prop()
  faxNumber: string;

  @Prop()
  dateOfBirth: string;

  @Prop()
  idNumber: string;

  @Prop()
  responsiblePerson: string;

  @Prop()
  postalCode: string;

  @Prop()
  registeredAddress: string;

  @Prop()
  contactAddress: string;

  @Prop()
  mailingAddress: string;
}

export const CustomerSchema = SchemaFactory.createForClass(Customer);
