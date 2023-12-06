import { PrismaModule } from 'src/prisma/prisma.module';
import { Module } from '@nestjs/common';
import { CustomerForeignService } from './customer_foreign.service';
import { CustomerForeignController } from 'src/modules/customer_foreign/customer_foreign/controller/customer_foreign.controller';
import { CustomerForeignRepository } from './customer_foreign.repository';

@Module({
  imports: [PrismaModule],
  providers: [CustomerForeignService,CustomerForeignRepository],
  controllers: [CustomerForeignController],
})
export class CustomerForeignModule {}
