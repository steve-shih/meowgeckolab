import {
  Body,
  Controller,
  Logger,
  Post,
  HttpException,
  HttpStatus,
  UseGuards,
  Request,
} from '@nestjs/common';
import { SignUpDto } from './dto/signup-account.dto';
import { LoginCompanyDto } from './dto/login-account.dto';
import { AccountService } from './account.service';
import * as bcrypt from 'bcrypt';
import { LocalAuthGuard } from '../auth/local.strategy';
import { AuthService } from '../auth/auth.service';


const SALT = 10;

@Controller('account')
export class AccountController {
  constructor(
    private readonly accountService: AccountService,
    private authService: AuthService,
  ) {}
  @Post('/signup')
  async signup(@Body() dtoSign: SignUpDto) {
    try {
      const hashedPassword = await bcrypt.hash(dtoSign.password, SALT);
      Logger.log(`${dtoSign.password} ${dtoSign.account} ${hashedPassword}`);
      const userObj = await this.accountService.checkUser(dtoSign.account);
      if (userObj && userObj.length > 0) {
        throw new HttpException('帳號已存在', HttpStatus.BAD_REQUEST);
      }
      const result = await this.accountService.insertUser(
        dtoSign.account,
        hashedPassword,
      );
      return {
        msg: 'User successfully registered',
        userId: result.id,
      };
    } catch (error) {
      return {
        code: 400,
        data: {
          msg: error.message,
          level: 1,
        },
      };
    }
  }

  @Post('/login')
  async login(@Body() dtoLogin: LoginCompanyDto, @Request() req) {
    try {
      const userObj = await this.accountService.checkUser(dtoLogin.account);
      if (userObj && userObj.length > 0) {
        const corret = await this.accountService.checkPassword(
          dtoLogin.account,
        );
        if (!corret) {
          throw new HttpException('帳號不存在', HttpStatus.BAD_REQUEST);
        }
        const loginSuccess = await bcrypt.compare(
          dtoLogin.password,
          corret.password,
        );
        if (loginSuccess) {
          const userToken = this.authService.login({
            account: req.body.account,
            password: req.body.password,
          });
          req.session.token = userToken;
          return userToken;
        } else {
          throw new HttpException('登入失敗', HttpStatus.BAD_REQUEST);
        }
      }
    } catch (error) {
      return {
        code: 400,
        data: {
          msg: error.message,
          level: 1,
        },
      };
    }
  }
  @UseGuards(LocalAuthGuard)
  @Post('/logout')
  async logout(@Request() req) {
    if (req.session['user']) {
      req.session['user'] = null;
    }
  }
  /**
   * forgot password or account
   * reset password
   * add password 綁定公司
   */
}

/**
 * 第一個帳號由DB直接建立
 */
