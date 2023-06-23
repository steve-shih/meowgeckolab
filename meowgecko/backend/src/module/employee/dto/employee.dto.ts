import { IsString, IsNumber, IsOptional } from 'class-validator';
import { Types } from 'mongoose';

export class CreateEmployeeDto {
  @IsString()
  name: string;

  @IsString()
  birthDate: string;

  @IsString()
  buildDate: string;

  @IsOptional()
  @IsString()
  leaveDate?: string;

  @IsNumber()
  level: number;

  @IsString()
  companyId: Types.ObjectId;
}
