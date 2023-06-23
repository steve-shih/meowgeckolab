import { Module } from '@nestjs/common';
import { AccountService } from './account.service';
import { MongooseModule } from '@nestjs/mongoose';
import { AccountController } from './account.controller';
import { AuthService } from '../auth/auth.service';
import { Account, AccountSchema } from '../../model/schema/Account.model';
import { JwtService } from '@nestjs/jwt';
import { LocalStrategy, LocalAuthGuard } from '../auth/local.strategy';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Account.name, schema: AccountSchema }]),
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
  ],
  providers: [
    AccountService,
    AuthService,
    JwtService,
    LocalAuthGuard,
    LocalStrategy,
  ],
  controllers: [AccountController],
})
export class AccountModule {}
