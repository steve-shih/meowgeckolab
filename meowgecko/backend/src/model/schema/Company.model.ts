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
export class Company extends Base {
  @Prop({ required: true })
  companyId: string;

  @Prop({ required: true, type: Date })
  createdDate: Date;

  @Prop({ required: true })
  shortName: string;

  @Prop({ required: true })
  companyName: string;

  @Prop({ required: true })
  uniformNumber: string;

  @Prop({ required: true })
  taxType: string;

  @Prop({ required: true })
  suppliedGoods: string;

  @Prop({ required: true })
  mobilePhone: string;

  @Prop({ required: true })
  contactPhone1: string;

  @Prop({ required: true })
  contactPhone2: string;

  @Prop({ required: true })
  faxNumber: string;

  @Prop({ required: true })
  responsiblePerson: string;

  @Prop({ required: true })
  postalCode: string;

  @Prop({ required: true })
  companyAddress: string;

  @Prop({ required: true })
  addressLabelName: string;

  @Prop({ required: true })
  addressLabelAddress: string;

  @Prop({ required: true })
  settlementDate: string;

  @Prop({ required: true })
  paymentMethod: string;

  @Prop()
  report: []; // 報表
}

export const CompanySchema = SchemaFactory.createForClass(Company);
