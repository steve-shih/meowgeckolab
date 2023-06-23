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
export class Inventory extends Base {
  @Prop({ required: true })
  companyId: string;

  @Prop({ required: true })
  customerId: string;

  @Prop({ required: true })
  vehicleMileage: number;

  @Prop({ required: true })
  shipmentDate: Date;

  @Prop({ required: true })
  shipmentNumber: string;

  @Prop({ required: true })
  vehicleNumber: string;

  @Prop({ required: true })
  employeeId: string;

  @Prop({ required: true, enum: ['method1', 'method2', 'method3'] })
  paymentMethod: string;

  @Prop({ required: true, enum: ['貨車', '轎車'] })
  carType: string;

  @Prop({ required: true })
  customerAddress: string;

  @Prop({ required: true })
  workLocation: string;

  @Prop({ required: true })
  vehiclePosition: string;

  @Prop({ required: true })
  factory: string;

  @Prop({ required: true })
  quotationStaffId: string;

  @Prop({ required: true })
  vehicleTypePosition: string[];

  @Prop()
  photo1: string[];

  @Prop()
  photo2: string[];

  // 1貨到付款 2自取
  @Prop({ required: true, enum: ['1', '2'] })
  freightType: string;

  @Prop()
  freightCost: string;

  @Prop({ required: true, enum: ['reminder1', 'reminder2'] })
  importantReminder: string;

  // 權限等級
}

export const inventorySchema = SchemaFactory.createForClass(Inventory);
