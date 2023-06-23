import { IsNotEmpty, IsString } from 'class-validator';

export class CreateCompanyDto {
  companyId: string;
  createdDate: Date;
  @IsNotEmpty()
  shortName: string;
  @IsNotEmpty()
  companyName: string;
  uniformNumber: string;
  @IsString()
  taxType: string;
  suppliedGoods: string;
  mobilePhone: string;
  contactPhone1: string;
  contactPhone2: string;
  faxNumber: string;
  responsiblePerson: string;
  postalCode: string;
  companyAddress: string;
  addressLabelName: string;
  addressLabelAddress: string;
  settlementDate: string;
  paymentMethod: string;
}
