import { Injectable, NotFoundException } from '@nestjs/common'
import { PrismaService } from '../../config/prisma.service'

@Injectable()
export class BookingsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: {
    guestName: string
    guestEmail: string
    guestPhone?: string
    guestCountry?: string
    tourId?: string
    tourDateId?: string
    insuranceId?: string
    numTravelers: number
    totalAmount: number
    notes?: string
    userId?: string
  }) {
    return this.prisma.booking.create({ data })
  }

  async findAll() {
    return this.prisma.booking.findMany({
      include: { tour: true, tourDate: true, insurance: true, user: true },
      orderBy: { createdAt: 'desc' },
    })
  }

  async findOne(id: string) {
    const booking = await this.prisma.booking.findUnique({
      where: { id },
      include: { tour: true, tourDate: true, insurance: true, user: true },
    })
    if (!booking) throw new NotFoundException(`Booking #${id} not found`)
    return booking
  }

  async updateStatus(id: string, status: string) {
    await this.findOne(id)
    return this.prisma.booking.update({ where: { id }, data: { status: status as any } })
  }
}
