import { PrismaModule } from 'src/prisma/prisma.module';
import { Module } from '@nestjs/common';
import { ScheduleBusService } from './schedule_bus.service';
import { ScheduleBusController } from '../controller/schedule_bus.controller';
import { ScheduleBusRepository } from './schedule_bus.repository';


@Module({
  imports: [PrismaModule],
  providers: [ScheduleBusService,ScheduleBusRepository],
  controllers: [ScheduleBusController],
})
export class ScheduleBusModule {}
