import { ConflictException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { Customer } from '../../model/schema/Customer.model';

@Injectable()
export class CustomersService {
  constructor(
    @InjectModel(Customer.name) private customerModel: Model<Customer>,
  ) {}

  async create(createCustomerDto: CreateCustomerDto): Promise<Customer> {
    const { customerId, departmentNumber, uniformNumber } = createCustomerDto;

    const existingCustomer = await this.customerModel.findOne({
      customerId,
      departmentNumber,
      uniformNumber,
    });
    if (existingCustomer) {
      throw new ConflictException(
        'Customer with same company, department, and id number already exists.',
      );
    }

    const createdCustomer = new this.customerModel(createCustomerDto);
    return createdCustomer.save();
  }

  async findAll(): Promise<Customer[]> {
    return this.customerModel.find().exec();
  }

  async findOne(id: string): Promise<Customer> {
    return this.customerModel.findById(id).exec();
  }

  async update(
    id: string,
    createCustomerDto: CreateCustomerDto,
  ): Promise<Customer> {
    return this.customerModel
      .findByIdAndUpdate(id, createCustomerDto, { new: true })
      .exec();
  }

  async delete(id: string): Promise<Customer> {
    return this.customerModel.findByIdAndDelete(id).exec();
  }
}
