import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Employee } from '../../model/schema/Employee.model';
import { CreateEmployeeDto } from './dto/employee.dto';

@Injectable()
export class EmployeeService {
  constructor(
    @InjectModel(Employee.name) private employeeModel: Model<Employee>,
  ) {}

  async create(createEmployeeDto: CreateEmployeeDto): Promise<Employee> {
    const createdEmployee = new this.employeeModel(createEmployeeDto);
    return createdEmployee.save();
  }

  async findAll(companyId: string): Promise<Employee[]> {
    return this.employeeModel.find({ companyId }).exec();
  }

  async findOne(id: string): Promise<Employee> {
    let employee: Employee | PromiseLike<Employee>;
    try {
      employee = await this.employeeModel.findById(id).exec();
    } catch (error) {
      throw new NotFoundException('Could not find employee.');
    }
    if (!employee) {
      throw new NotFoundException('Could not find employee.');
    }
    return employee;
  }

  async update(
    id: string,
    updateEmployeeDto: CreateEmployeeDto,
  ): Promise<Employee> {
    let updatedEmployee: Employee | PromiseLike<Employee>;
    try {
      updatedEmployee = await this.employeeModel
        .findByIdAndUpdate(id, updateEmployeeDto, { new: true })
        .exec();
    } catch (error) {
      throw new NotFoundException('Could not find employee.');
    }
    if (!updatedEmployee) {
      throw new NotFoundException('Could not find employee.');
    }
    return updatedEmployee;
  }
}
