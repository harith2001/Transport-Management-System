import { PrismaModule } from 'src/prisma/prisma.module';
import { Module } from '@nestjs/common';
import { CustomerLocalService } from './customer_local.service';
import { CustomerLocalController } from 'src/modules/customer_local/controller/customer_local.controller';
import { CustomerLocalRepository } from './customer_local.repository';

@Module({
  imports: [PrismaModule],
  providers: [CustomerLocalService, CustomerLocalRepository],
  controllers: [CustomerLocalController],
})
export class CustomerLocalModule {}
