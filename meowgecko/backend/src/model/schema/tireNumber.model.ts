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
  @Prop()
  name: string; // 廠商名稱
  @Prop()
  shortName: string; // 廠商縮稱
  @Prop()
  uniformNumber: string; // 統一編號
  @Prop()
  fax: string; // 傳真
  @Prop()
  tax: string; // 稅別
  @Prop()
  phone1: string; // 電話1
  @Prop()
  phone2: string; // 電話2
  @Prop()
  mobile1: string; // 行動電話1
  @Prop()
  mobile2: string; // 行動電話2
  @Prop() // 負責人
  principle: string; // 負責人
  @Prop()
  postCode: string; // 郵遞區號
  @Prop()
  companyAddress: string; // 公司地址
  @Prop()
  address1: string; // 戶籍地址
  @Prop()
  address2: string; // 其他地址
  @Prop()
  checkDay: string; // 核銷日期
  @Prop()
  payType: string; // 付款方式
  @Prop()
  report: []; // 報表
}

export const AccountSchema = SchemaFactory.createForClass(Company);
