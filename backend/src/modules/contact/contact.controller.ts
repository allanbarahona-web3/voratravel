import { Controller, Get, Post, Body, Param, Patch } from '@nestjs/common'
import { ApiTags, ApiOperation } from '@nestjs/swagger'
import { ContactService } from './contact.service'
import { CreateContactLeadDto } from './dto/create-contact.dto'
import { Throttle } from '@nestjs/throttler'

@ApiTags('contact')
@Controller('contact')
export class ContactController {
  constructor(private readonly contactService: ContactService) {}

  @Post()
  @Throttle({ default: { ttl: 60000, limit: 3 } })
  @ApiOperation({ summary: 'Submit a contact form / travel inquiry' })
  create(@Body() dto: CreateContactLeadDto) {
    return this.contactService.create(dto)
  }

  @Get()
  @ApiOperation({ summary: 'Get all contact leads (Admin)' })
  findAll() {
    return this.contactService.findAll()
  }

  @Patch(':id/respond')
  @ApiOperation({ summary: 'Mark a lead as responded (Admin)' })
  markResponded(@Param('id') id: string) {
    return this.contactService.markResponded(id)
  }
}
