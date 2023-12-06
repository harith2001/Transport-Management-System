import { Controller, Post, Get, Body, Put, Param, Query, Delete } from '@nestjs/common';
import { ApiTags, ApiQuery } from '@nestjs/swagger';
import { CustomerLocalDto } from '../customer_local.model';
import { customer_local } from '@prisma/client';
import { CustomerLocalService } from '../service/customer_local.service';

@ApiTags('Customer Local')
@Controller('customer-local')
export class CustomerLocalController {
  constructor(private readonly customerLocalService: CustomerLocalService) {}

  @Get()
  @ApiQuery({ name: 'id', required: false })
  async findUnique(@Query('id') id: number) {
    return this.customerLocalService.findUnique(+id);
  }

  @Post()
  create(@Body() customerLocalDto: CustomerLocalDto): Promise<customer_local> {
    return this.customerLocalService.create(customerLocalDto);
  }

  @Post('login')
  login(@Body() login: CustomerLocalDto) {
    const { email, password } = login;
    return this.customerLocalService.login({ email, password });
  }
  

  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() customerLocalDto: CustomerLocalDto,
  ): Promise<customer_local> {
    return this.customerLocalService.update(+id, customerLocalDto);
  }

  @Delete(':id')
  delete(@Param('id') id: number): Promise<customer_local> {
    return this.customerLocalService.delete(+id);
  }
}
