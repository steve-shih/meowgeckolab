// 出貨單(對客人)
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Base } from '../baseSchema/base.model';
import { Types } from 'mongoose';

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
export class ShipmentContent extends Base {
  @Prop({ required: true, type: Types.ObjectId, ref: 'Shipment' }) // 對應的出貨單號，引用 'Shipment' 集合
  shipmentNumber: Types.ObjectId;

  @Prop() // 維修內容
  repairContent: string;

  @Prop() // 規格
  specification: string;

  @Prop() // 數量
  quantity: number;

  @Prop() // 單價
  unitPrice: number;

  @Prop() // 如保固幾年或者其他資訊
  memo: string;
}

export const ShipmentContentSchema =
  SchemaFactory.createForClass(ShipmentContent);
