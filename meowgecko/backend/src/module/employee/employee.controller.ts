import { Controller, Get, Post, Body, Put, Param, Query } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { Employee } from '../../model/schema/Employee.model';
import { CreateEmployeeDto } from './dto/employee.dto';

@Controller('employee')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  @Post()
  async create(
    @Body() createEmployeeDto: CreateEmployeeDto,
  ): Promise<Employee> {
    return this.employeeService.create(createEmployeeDto);
  }

  @Get()
  async findAll(@Query('companyId') companyId: string): Promise<Employee[]> {
    return this.employeeService.findAll(companyId);
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Employee> {
    return this.employeeService.findOne(id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateEmployeeDto: CreateEmployeeDto,
  ): Promise<Employee> {
    return this.employeeService.update(id, updateEmployeeDto);
  }
}
