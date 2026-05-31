import { Injectable, NotFoundException, ConflictException } from '@nestjs/common'
import { PrismaService } from '../../config/prisma.service'
import * as bcrypt from 'bcryptjs'

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async findByEmail(email: string) {
    return this.prisma.user.findUnique({ where: { email } })
  }

  async findOne(id: string) {
    const user = await this.prisma.user.findUnique({
      where: { id },
      select: { id: true, email: true, name: true, phone: true, role: true, createdAt: true },
    })
    if (!user) throw new NotFoundException(`User #${id} not found`)
    return user
  }

  async create(data: { email: string; password: string; name: string; phone?: string }) {
    const existing = await this.findByEmail(data.email)
    if (existing) throw new ConflictException('Email already registered')
    const hashed = await bcrypt.hash(data.password, 12)
    return this.prisma.user.create({
      data: { ...data, password: hashed },
      select: { id: true, email: true, name: true, role: true, createdAt: true },
    })
  }

  async validatePassword(email: string, password: string) {
    const user = await this.findByEmail(email)
    if (!user) return null
    const valid = await bcrypt.compare(password, user.password)
    return valid ? user : null
  }
}
