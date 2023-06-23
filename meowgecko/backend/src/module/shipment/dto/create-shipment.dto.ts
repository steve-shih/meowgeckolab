import { IsNotEmpty, IsUUID } from 'class-validator';

export class CreateShipmentDto {
  @IsNotEmpty()
  companyId: string;

  @IsNotEmpty()
  customerId: string;

  @IsNotEmpty()
  vehicleMileage: number;

  @IsNotEmpty()
  shipmentDate: Date;

  @IsNotEmpty()
  carType: string;

  @IsNotEmpty()
  shipmentNumber: string;

  @IsNotEmpty()
  vehicleNumber: string;

  @IsNotEmpty()
  employeeId: string;

  @IsNotEmpty()
  paymentMethod: string;

  @IsNotEmpty()
  customerAddress: string;

  @IsNotEmpty()
  workLocation: string;

  vehiclePosition: string[];

  @IsNotEmpty()
  factory: string;

  @IsNotEmpty()
  quotationStaffId: string;

  @IsNotEmpty()
  vehicleTypePosition: string;

  photo1: string[];
  photo2: string[];

  @IsNotEmpty()
  importantReminder: string;
}
