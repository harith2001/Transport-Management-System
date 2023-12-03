import { BusRouteRepository } from './bus_route.repository';
import { bus_route, Prisma } from '@prisma/client';
export declare class BusRouteService {
    private readonly busRouteRepository;
    constructor(busRouteRepository: BusRouteRepository);
    findAll(): Promise<bus_route[]>;
    create(data: Prisma.bus_routeCreateInput): Promise<bus_route>;
    update(id: number, data: Prisma.bus_routeUpdateInput): Promise<bus_route>;
}
