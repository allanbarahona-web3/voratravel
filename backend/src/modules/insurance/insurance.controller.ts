import { Controller, Get, Param } from '@nestjs/common'
import { ApiTags, ApiOperation } from '@nestjs/swagger'
import { InsuranceService } from './insurance.service'

@ApiTags('insurance')
@Controller('insurance')
export class InsuranceController {
  constructor(private readonly insuranceService: InsuranceService) {}

  @Get()
  @ApiOperation({ summary: 'Get all active insurance plans' })
  findAll() {
    return this.insuranceService.findAll()
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get insurance plan by ID' })
  findOne(@Param('id') id: string) {
    return this.insuranceService.findOne(id)
  }
}
