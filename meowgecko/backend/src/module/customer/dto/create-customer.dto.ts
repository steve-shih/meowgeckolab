// src/customer/dto/create-customer.dto.ts
import {
  IsNotEmpty,
  IsString,
  IsDate,
  Length,
  IsOptional,
  IsPhoneNumber,
} from 'class-validator';

export class CreateCustomerDto {
  @IsNotEmpty()
  @IsString()
  readonly customerId: string;

  @IsNotEmpty()
  @IsString()
  @Length(1, 100)
  readonly departmentNumber: string;

  @IsNotEmpty()
  @IsDate()
  readonly createdDate: Date;

  @IsNotEmpty()
  @IsString()
  @Length(1, 100)
  readonly shortName: string;

  @IsNotEmpty()
  @IsString()
  @Length(1, 100)
  readonly companyName: string;

  @IsNotEmpty()
  @IsString()
  @Length(1, 100)
  readonly addressLabelName: string;

  @IsNotEmpty()
  @IsString()
  readonly taxType: string;

  @IsOptional()
  @IsString()
  readonly notes: string;

  @IsNotEmpty()
  @IsString()
  readonly uniformNumber: string;

  @IsNotEmpty()
  @IsString()
  readonly designatedAccount: string;

  @IsNotEmpty()
  @IsString()
  readonly settlementDate: string;

  @IsNotEmpty()
  @IsPhoneNumber(null)
  readonly mobilePhone: string;

  @IsNotEmpty()
  @IsPhoneNumber(null)
  readonly contactPhone1: string;

  @IsOptional()
  @IsPhoneNumber(null)
  readonly contactPhone2: string;

  @IsOptional()
  @IsPhoneNumber(null)
  readonly faxNumber: string;

  @IsNotEmpty()
  @IsDate()
  readonly dateOfBirth: Date;

  @IsNotEmpty()
  @IsString()
  readonly idNumber: string;

  @IsNotEmpty()
  @IsString()
  @Length(1, 100)
  readonly responsiblePerson: string;

  @IsNotEmpty()
  @IsString()
  readonly postalCode: string;

  @IsNotEmpty()
  @IsString()
  readonly registeredAddress: string;

  @IsNotEmpty()
  @IsString()
  readonly contactAddress: string;

  @IsNotEmpty()
  @IsString()
  readonly mailingAddress: string;
}
