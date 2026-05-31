import { IsString, IsNumber, IsBoolean, IsOptional, IsEnum, IsArray, Min } from 'class-validator'
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'
import { TourCategory, Difficulty } from '@prisma/client'

export class CreateTourDto {
  @ApiProperty() @IsString() slug: string
  @ApiProperty({ enum: TourCategory }) @IsEnum(TourCategory) category: TourCategory
  @ApiPropertyOptional() @IsOptional() @IsBoolean() featured?: boolean
  @ApiProperty() @IsString() image: string
  @ApiPropertyOptional({ type: [String] }) @IsOptional() @IsArray() gallery?: string[]
  @ApiProperty() @IsString() titleEs: string
  @ApiProperty() @IsString() titleEn: string
  @ApiProperty() @IsString() subtitleEs: string
  @ApiProperty() @IsString() subtitleEn: string
  @ApiProperty() @IsString() descriptionEs: string
  @ApiProperty() @IsString() descriptionEn: string
  @ApiProperty() @IsNumber() @Min(1) duration: number
  @ApiProperty() @IsNumber() @Min(0) price: number
  @ApiPropertyOptional() @IsOptional() @IsString() currency?: string
  @ApiPropertyOptional() @IsOptional() @IsNumber() maxGroupSize?: number
  @ApiPropertyOptional({ enum: Difficulty }) @IsOptional() @IsEnum(Difficulty) difficulty?: Difficulty
  @ApiProperty({ type: [String] }) @IsArray() destinations: string[]
  @ApiProperty({ type: [String] }) @IsArray() highlightsEs: string[]
  @ApiProperty({ type: [String] }) @IsArray() highlightsEn: string[]
  @ApiProperty({ type: [String] }) @IsArray() includesEs: string[]
  @ApiProperty({ type: [String] }) @IsArray() includesEn: string[]
  @ApiProperty({ type: [String] }) @IsArray() excludesEs: string[]
  @ApiProperty({ type: [String] }) @IsArray() excludesEn: string[]
  @ApiPropertyOptional() @IsOptional() @IsString() badgeEs?: string
  @ApiPropertyOptional() @IsOptional() @IsString() badgeEn?: string
}
