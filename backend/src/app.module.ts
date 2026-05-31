import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { ThrottlerModule } from '@nestjs/throttler'
import { PrismaModule } from './config/prisma.module'
import { ToursModule } from './modules/tours/tours.module'
import { BookingsModule } from './modules/bookings/bookings.module'
import { InsuranceModule } from './modules/insurance/insurance.module'
import { UsersModule } from './modules/users/users.module'
import { AuthModule } from './modules/auth/auth.module'
import { ContactModule } from './modules/contact/contact.module'
import { HeroCtaLeadsModule } from './modules/hero-cta-leads/hero-cta-leads.module'

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    ThrottlerModule.forRoot([{ ttl: 60000, limit: 60 }]),
    PrismaModule,
    ToursModule,
    BookingsModule,
    InsuranceModule,
    UsersModule,
    AuthModule,
    ContactModule,
    HeroCtaLeadsModule,
  ],
})
export class AppModule {}
