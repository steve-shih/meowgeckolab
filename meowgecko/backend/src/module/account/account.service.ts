import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Account } from '../../model/schema/Account.model';
@Injectable()
export class AccountService {
  constructor(
    @InjectModel('Account') private readonly AccountModel: Model<Account>,
  ) {}
  async insertUser(account: string, password: string) {
    const userAccount = account.toLowerCase();
    const newUser = new this.AccountModel({
      account: userAccount,
      password: password,
    });
    await newUser.save();
    return newUser;
  }

  async checkUser(account: string) {
    const userAccount = account.toLowerCase();
    const user = this.AccountModel.find({ account: userAccount }).lean();
    return user;
  }

  async checkPassword(account: string) {
    const userAccount = account.toLowerCase();
    const user = this.AccountModel.findOne({
      account: userAccount,
    }).lean();
    return user;
  }
}
