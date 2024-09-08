import { Injectable } from '@nestjs/common';
import { BusRouteRepository } from './bus_route.repository';
import { bus_route, Prisma } from '@prisma/client';

@Injectable()
export class BusRouteService {
    constructor(private readonly busRouteRepository: BusRouteRepository) {}

    async findAll(): Promise<bus_route[]> {
        return this.busRouteRepository.findAll();
    }

    async create(data: Prisma.bus_routeCreateInput): Promise<bus_route> {
        return this.busRouteRepository.create(data);
    }

    async update(id: number, data: Prisma.bus_routeUpdateInput): Promise<bus_route> {
        return this.busRouteRepository.update(id, data);
    }
    
}
