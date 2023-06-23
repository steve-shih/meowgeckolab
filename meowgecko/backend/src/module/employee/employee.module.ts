import { Module } from '@nestjs/common';
import { EmployeeController } from './employee.controller';
import { EmployeeService } from './employee.service';
import { Employee, EmployeeSchema } from '../../model/schema/Employee.model';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Employee.name, schema: EmployeeSchema },
    ]),
  ],
  controllers: [EmployeeController],
  providers: [EmployeeService],
})
export class EmployeeModule {}
