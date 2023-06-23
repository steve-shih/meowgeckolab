import { Injectable } from '@nestjs/common';
import { UpdateCompanyDto } from './dto/update-company.dto';
import { Company } from '../../model/schema/Company.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

class CustomError extends Error {
  code: string;

  constructor(code: string, message: string) {
    super(message);
    this.code = code;

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, CustomError);
    }
  }
}

@Injectable()
export class CompanyService {
  constructor(
    @InjectModel(Company.name) private companyModel: Model<Company>,
  ) {}

  async createMany(companies): Promise<Company[] | CustomError> {
    console.log(companies);
    const _companies = companies.map((dto) => new this.companyModel(dto));

    const uniqueCompanies = [];

    for (const company of _companies) {
      const existingCompany = await this.companyModel.findOne({
        companyName: company.companyName,
      });
      if (!existingCompany) {
        uniqueCompanies.push(company);
      }
    }

    return this.companyModel.insertMany(uniqueCompanies);
  }

  async findAll(): Promise<Company[]> {
    return this.companyModel.find().exec();
  }

  async findOne(id: string): Promise<Company> {
    return this.companyModel.findById(id);
  }

  async update(id: string, companyDto: UpdateCompanyDto): Promise<Company> {
    return this.companyModel.findByIdAndUpdate(id, companyDto, { new: true });
  }

  async delete(id: string): Promise<Company> {
    return this.companyModel.findByIdAndUpdate(
      id,
      { isDelete: true },
      { new: true },
    );
  }
}
