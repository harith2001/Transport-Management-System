import { Controller,Post,Get,Body,Put,Param} from '@nestjs/common';
import { ApiTags,ApiQuery } from '@nestjs/swagger';
import { bus_route } from '@prisma/client';
import { BusRouteService } from '../service/service/bus_route.service';
import { BusRouteDTO } from '../bus_route.model';

@ApiTags('Bus Route')
@Controller('bus-route')
export class BusRouteController {
    constructor(private readonly busRouteService: BusRouteService) {}

    @Get('all')
    async findAll(): Promise<bus_route[]> {
        return this.busRouteService.findAll();
    }

    @Post()
    create(@Body() busRouteDTO: BusRouteDTO): Promise<bus_route> {
        return this.busRouteService.create(busRouteDTO);
    }

    @Put(':id')
    update(
        @Body() busRouteDTO: BusRouteDTO,
        @Param('id') id: number,
    ): Promise<bus_route> {
        return this.busRouteService.update(id, busRouteDTO);
    }

}
