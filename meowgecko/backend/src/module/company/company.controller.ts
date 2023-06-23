import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UsePipes,
} from '@nestjs/common';
import { ValidationPipe } from '@nestjs/common';
import { CompanyService } from './company.service';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
import { Company } from '../../model/schema/Company.model';
import { CustomError } from '../../common/req/CustomError';
import { successReq } from '../../common/req/CommonSuccess';

@Controller('company')
export class CompanyController {
  constructor(private readonly companyService: CompanyService) {}

  @Post()
  @UsePipes(new ValidationPipe({ disableErrorMessages: false }))
  async createMany(@Body() createCompanyDto: CreateCompanyDto[]): Promise<any> {
    try {
      const ans = await this.companyService.createMany(createCompanyDto);
      return successReq(ans);
    } catch (error) {
      return new CustomError('400', error.message);
    }
  }

  @Get()
  findAll(): Promise<Company[]> {
    return this.companyService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Company> {
    return this.companyService.findOne(id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateCompanyDto: UpdateCompanyDto,
  ): Promise<Company> {
    return this.companyService.update(id, updateCompanyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<Company> {
    return this.companyService.delete(id);
  }
}
