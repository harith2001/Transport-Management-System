import { PrismaModule } from 'src/prisma/prisma.module';
import { Module } from '@nestjs/common';
import { BusRouteService } from './bus_route.service';
import { BusRouteRepository } from './bus_route.repository';
import { BusRouteController } from '../../controller/bus_route.controller';


@Module({
  imports: [PrismaModule],
  providers: [BusRouteService,BusRouteRepository],
  controllers: [BusRouteController],
})
export class BusModule {}
