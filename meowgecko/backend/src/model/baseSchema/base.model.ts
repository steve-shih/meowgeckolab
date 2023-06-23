import { Prop, Schema } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type BaseDocument = Base & Document;

@Schema()
export class Base {
  @Prop({
    type: Types.ObjectId,
    required: true,
    default: Types.ObjectId,
  })
  nonce: Types.ObjectId;

  @Prop() // 是否有效
  valid: boolean;
  @Prop() // 創建日
  createDate: Date;
  @Prop() // 創建者
  creator: Date;
  @Prop() // 上次修改日
  modifyDate: Date;
}
