import { Controller, Post, Body } from '@nestjs/common'
import { ApiTags, ApiOperation } from '@nestjs/swagger'
import { AuthService } from './auth.service'
import { IsEmail, IsString, MinLength, IsOptional } from 'class-validator'
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'

class RegisterDto {
  @ApiProperty() @IsEmail() email: string
  @ApiProperty() @IsString() @MinLength(8) password: string
  @ApiProperty() @IsString() name: string
  @ApiPropertyOptional() @IsOptional() @IsString() phone?: string
}

class LoginDto {
  @ApiProperty() @IsEmail() email: string
  @ApiProperty() @IsString() password: string
}

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  @ApiOperation({ summary: 'Register a new user' })
  register(@Body() dto: RegisterDto) {
    return this.authService.register(dto.email, dto.password, dto.name, dto.phone)
  }

  @Post('login')
  @ApiOperation({ summary: 'Login and get JWT token' })
  login(@Body() dto: LoginDto) {
    return this.authService.login(dto.email, dto.password)
  }
}
