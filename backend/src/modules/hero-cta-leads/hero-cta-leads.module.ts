import { Module } from '@nestjs/common'
import { HeroCtaLeadsController } from './hero-cta-leads.controller'
import { HeroCtaLeadsService } from './hero-cta-leads.service'

@Module({
  controllers: [HeroCtaLeadsController],
  providers: [HeroCtaLeadsService],
})
export class HeroCtaLeadsModule {}
