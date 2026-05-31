import { Injectable, NotFoundException } from '@nestjs/common'
import { PrismaService } from '../../config/prisma.service'

@Injectable()
export class InsuranceService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    return this.prisma.insurancePlan.findMany({
      where: { active: true },
      orderBy: { pricePerDay: 'asc' },
    })
  }

  async findOne(id: string) {
    const plan = await this.prisma.insurancePlan.findUnique({ where: { id } })
    if (!plan) throw new NotFoundException(`Insurance plan #${id} not found`)
    return plan
  }
}
