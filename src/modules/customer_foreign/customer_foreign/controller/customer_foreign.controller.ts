import { Controller, Post, Body, Get, Put, Query, Delete } from '@nestjs/common';
import { CustomerForeignDto } from '../customer_foreign.model';
import { ApiTags, ApiQuery } from '@nestjs/swagger'; 
import { customer_foreign } from '@prisma/client'; 
import { CustomerForeignService } from '../service/customer_foreign.service';


@ApiTags('Customer Foreign')
@Controller('customer-foreign')
export class CustomerForeignController {
  constructor(private readonly customerForeignService: CustomerForeignService) {}

  @Get()
  @ApiQuery({ name: 'id', required: false })
  async findUnique(@Query('id') id: number) {
    return this.customerForeignService.findUnique(+id);
  }

  @Post()
  async create(@Body() data: CustomerForeignDto): Promise<customer_foreign> {
    return this.customerForeignService.create(data);
  }

  @Post('login')
  login(@Body() login: CustomerForeignDto) {
    const { email, password } = login;
    return this.customerForeignService.login({ email, password });
  }

  @Put(':id')
  async update(@Query('id') id: number, @Body() data: CustomerForeignDto): Promise<customer_foreign> {
    return this.customerForeignService.update(+id, data);
  }

  @Delete()
  async delete(@Query('id') id: number): Promise<customer_foreign> {
    return this.customerForeignService.delete(+id);
  }
}
