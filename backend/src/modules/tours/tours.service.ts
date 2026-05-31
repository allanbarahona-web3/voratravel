import { Injectable, NotFoundException } from '@nestjs/common'
import { PrismaService } from '../../config/prisma.service'
import { CreateTourDto } from './dto/create-tour.dto'
import { UpdateTourDto } from './dto/update-tour.dto'
import { TourCategory } from '@prisma/client'

@Injectable()
export class ToursService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(category?: TourCategory, featured?: boolean) {
    return this.prisma.tour.findMany({
      where: {
        active: true,
        ...(category && { category }),
        ...(featured !== undefined && { featured }),
      },
      include: {
        tourDates: {
          where: { date: { gte: new Date() }, available: true },
          orderBy: { date: 'asc' },
          take: 5,
        },
      },
      orderBy: [{ featured: 'desc' }, { createdAt: 'desc' }],
    })
  }

  async findBySlug(slug: string) {
    const tour = await this.prisma.tour.findUnique({
      where: { slug },
      include: {
        itinerary: { orderBy: { day: 'asc' } },
        tourDates: {
          where: { date: { gte: new Date() }, available: true },
          orderBy: { date: 'asc' },
        },
      },
    })
    if (!tour) throw new NotFoundException(`Tour '${slug}' not found`)
    return tour
  }

  async findOne(id: string) {
    const tour = await this.prisma.tour.findUnique({
      where: { id },
      include: {
        itinerary: { orderBy: { day: 'asc' } },
        tourDates: { orderBy: { date: 'asc' } },
        _count: { select: { bookings: true } },
      },
    })
    if (!tour) throw new NotFoundException(`Tour #${id} not found`)
    return tour
  }

  async create(dto: CreateTourDto) {
    return this.prisma.tour.create({ data: dto })
  }

  async update(id: string, dto: UpdateTourDto) {
    await this.findOne(id)
    return this.prisma.tour.update({ where: { id }, data: dto })
  }

  async remove(id: string) {
    await this.findOne(id)
    return this.prisma.tour.update({ where: { id }, data: { active: false } })
  }
}
