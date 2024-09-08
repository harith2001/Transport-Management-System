import { PrismaModule } from 'src/prisma/prisma.module';
import { Module } from '@nestjs/common';
import { AdminService } from './admin.service';
import { AdminController } from 'src/modules/admin/controller/admin.controller';
import { AdminRepository } from './admin.repository';

@Module({
  imports: [PrismaModule],
  providers: [AdminService,AdminRepository],
  controllers: [AdminController],
})
export class AdminModule {}
