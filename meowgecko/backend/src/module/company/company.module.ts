import { Module } from '@nestjs/common';
import { CompanyService } from './company.service';
import { CompanyController } from './company.controller';
import { Company, CompanySchema } from '../../model/schema/Company.model';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Company.name, schema: CompanySchema }]),
  ],
  providers: [CompanyService],
  controllers: [CompanyController],
})
export class CompanyModule {}
