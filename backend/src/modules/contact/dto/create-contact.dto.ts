import { IsString, IsEmail, IsOptional, MinLength, MaxLength } from 'class-validator'
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'

export class CreateContactLeadDto {
  @ApiProperty() @IsString() @MinLength(2) @MaxLength(100) name: string
  @ApiProperty() @IsEmail() email: string
  @ApiPropertyOptional() @IsOptional() @IsString() phone?: string
  @ApiPropertyOptional() @IsOptional() @IsString() destination?: string
  @ApiProperty() @IsString() @MinLength(10) @MaxLength(2000) message: string
  @ApiPropertyOptional() @IsOptional() @IsString() locale?: string
}
