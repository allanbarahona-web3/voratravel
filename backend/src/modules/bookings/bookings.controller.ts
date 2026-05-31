import { Controller, Get, Post, Body, Param, Patch } from '@nestjs/common'
import { ApiTags, ApiOperation } from '@nestjs/swagger'
import { BookingsService } from './bookings.service'

@ApiTags('bookings')
@Controller('bookings')
export class BookingsController {
  constructor(private readonly bookingsService: BookingsService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new booking' })
  create(@Body() body: any) {
    return this.bookingsService.create(body)
  }

  @Get()
  @ApiOperation({ summary: 'Get all bookings (Admin)' })
  findAll() {
    return this.bookingsService.findAll()
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get booking by ID' })
  findOne(@Param('id') id: string) {
    return this.bookingsService.findOne(id)
  }

  @Patch(':id/status')
  @ApiOperation({ summary: 'Update booking status' })
  updateStatus(@Param('id') id: string, @Body('status') status: string) {
    return this.bookingsService.updateStatus(id, status)
  }
}
