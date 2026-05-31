import { Injectable } from '@nestjs/common'
import { PrismaService } from '../../config/prisma.service'
import { CreateHeroCtaLeadDto } from './dto/create-hero-cta-lead.dto'

@Injectable()
export class HeroCtaLeadsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreateHeroCtaLeadDto) {
    return this.prisma.heroCtaLead.create({
      data: {
        actionType: dto.actionType,
        tourSlug: dto.tourSlug,
        tourName: dto.tourName,
        selectedDate: dto.selectedDate,
        sourcePage: dto.sourcePage ?? '/tours',
        locale: dto.locale ?? 'es',
      },
    })
  }

  async findAll() {
    return this.prisma.heroCtaLead.findMany({
      orderBy: { createdAt: 'desc' },
    })
  }
}
