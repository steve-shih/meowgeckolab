import { Module } from '@nestjs/common';
import { CustomersController } from './customer.controller';
import { CustomersService } from './customer.service';
import { Customer, CustomerSchema } from '../../model/schema/Customer.model';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Customer.name, schema: CustomerSchema },
    ]),
  ],
  controllers: [CustomersController],
  providers: [CustomersService],
})
export class CustomerModule {}
