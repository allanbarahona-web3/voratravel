import {
  Controller, Get, Post, Body, Patch, Param, Delete, Query, UseGuards
} from '@nestjs/common'
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger'
import { ToursService } from './tours.service'
import { CreateTourDto } from './dto/create-tour.dto'
import { UpdateTourDto } from './dto/update-tour.dto'
import { TourCategory } from '@prisma/client'

@ApiTags('tours')
@Controller('tours')
export class ToursController {
  constructor(private readonly toursService: ToursService) {}

  @Get()
  @ApiOperation({ summary: 'Get all active tours with optional filters' })
  findAll(
    @Query('category') category?: TourCategory,
    @Query('featured') featured?: string,
  ) {
    const featuredBool = featured !== undefined ? featured === 'true' : undefined
    return this.toursService.findAll(category, featuredBool)
  }

  @Get(':slug')
  @ApiOperation({ summary: 'Get a tour by slug (for frontend routing)' })
  findBySlug(@Param('slug') slug: string) {
    return this.toursService.findBySlug(slug)
  }

  @Post()
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Create a new tour (Admin only)' })
  create(@Body() dto: CreateTourDto) {
    return this.toursService.create(dto)
  }

  @Patch(':id')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Update a tour (Admin only)' })
  update(@Param('id') id: string, @Body() dto: UpdateTourDto) {
    return this.toursService.update(id, dto)
  }

  @Delete(':id')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Deactivate a tour (Admin only)' })
  remove(@Param('id') id: string) {
    return this.toursService.remove(id)
  }
}
