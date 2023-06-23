// src/customer/customer.controller.ts
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { CustomersService } from './customer.service';
import { Customer } from '../../model/schema/Customer.model';

@Controller('customer')
export class CustomersController {
  constructor(private readonly customersService: CustomersService) {}

  @Post()
  async create(
    @Body() createCustomerDto: CreateCustomerDto,
  ): Promise<Customer> {
    return this.customersService.create(createCustomerDto);
  }

  @Get()
  async findAll(): Promise<Customer[]> {
    return this.customersService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Customer> {
    return this.customersService.findOne(id);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() createCustomerDto: CreateCustomerDto,
  ): Promise<Customer> {
    return this.customersService.update(id, createCustomerDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<Customer> {
    return this.customersService.delete(id);
  }
}
