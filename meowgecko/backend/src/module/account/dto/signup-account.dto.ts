import { IsNotEmpty, IsString, MinLength, MaxLength } from 'class-validator';

export class SignUpDto {
  @IsNotEmpty()
  @IsString()
  @MinLength(8)
  @MaxLength(100)
  readonly password: string;
  @IsNotEmpty()
  @IsString()
  @MinLength(8)
  @MaxLength(100)
  readonly account: string;
}
