import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'
import { HeroCtaActionType } from '@prisma/client'
import { IsEnum, IsOptional, IsString, MaxLength } from 'class-validator'

export class CreateHeroCtaLeadDto {
  @ApiProperty({ enum: HeroCtaActionType })
  @IsEnum(HeroCtaActionType)
  actionType: HeroCtaActionType

  @ApiProperty({ example: 'ruta-imperial-europa' })
  @IsString()
  @MaxLength(120)
  tourSlug: string

  @ApiProperty({ example: 'Ruta Imperial y Alpes Europeos' })
  @IsString()
  @MaxLength(200)
  tourName: string

  @ApiPropertyOptional({ example: '2026-10-06' })
  @IsOptional()
  @IsString()
  @MaxLength(30)
  selectedDate?: string

  @ApiPropertyOptional({ example: '/es/europe-2026' })
  @IsOptional()
  @IsString()
  @MaxLength(200)
  sourcePage?: string

  @ApiPropertyOptional({ example: 'es' })
  @IsOptional()
  @IsString()
  @MaxLength(10)
  locale?: string
}
