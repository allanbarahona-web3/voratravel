import { Body, Controller, Get, Post } from '@nestjs/common'
import { ApiOperation, ApiTags } from '@nestjs/swagger'
import { Throttle } from '@nestjs/throttler'
import { CreateHeroCtaLeadDto } from './dto/create-hero-cta-lead.dto'
import { HeroCtaLeadsService } from './hero-cta-leads.service'

@ApiTags('hero-cta-leads')
@Controller('hero-cta-leads')
export class HeroCtaLeadsController {
  constructor(private readonly heroCtaLeadsService: HeroCtaLeadsService) {}

  @Post()
  @Throttle({ default: { ttl: 60000, limit: 10 } })
  @ApiOperation({ summary: 'Register a hero CTA interaction' })
  create(@Body() dto: CreateHeroCtaLeadDto) {
    return this.heroCtaLeadsService.create(dto)
  }

  @Get()
  @ApiOperation({ summary: 'List hero CTA interactions (Admin)' })
  findAll() {
    return this.heroCtaLeadsService.findAll()
  }
}
