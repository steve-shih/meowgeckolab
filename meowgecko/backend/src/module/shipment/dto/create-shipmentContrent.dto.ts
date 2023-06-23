import { IsNotEmpty } from 'class-validator';

export class CreateShipmentContentDto {
  @IsNotEmpty()
  repairContent: string;

  @IsNotEmpty()
  specification: string;

  @IsNotEmpty()
  quantity: number;

  @IsNotEmpty()
  unitPrice: number;
}
