import { bus_route } from '@prisma/client';
import { BusRouteService } from '../service/service/bus_route.service';
import { BusRouteDTO } from '../bus_route.model';
export declare class BusRouteController {
    private readonly busRouteService;
    constructor(busRouteService: BusRouteService);
    findAll(): Promise<bus_route[]>;
    create(busRouteDTO: BusRouteDTO): Promise<bus_route>;
    update(busRouteDTO: BusRouteDTO, id: number): Promise<bus_route>;
}
