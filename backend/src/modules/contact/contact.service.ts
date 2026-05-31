import { Injectable } from '@nestjs/common'
import { PrismaService } from '../../config/prisma.service'
import { CreateContactLeadDto } from './dto/create-contact.dto'

@Injectable()
export class ContactService {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreateContactLeadDto) {
    return this.prisma.contactLead.create({ data: dto })
  }

  async findAll() {
    return this.prisma.contactLead.findMany({
      orderBy: { createdAt: 'desc' },
    })
  }

  async markResponded(id: string) {
    return this.prisma.contactLead.update({
      where: { id },
      data: { responded: true },
    })
  }
}
