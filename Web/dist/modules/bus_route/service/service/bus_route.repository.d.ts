import { PrismaService } from 'src/prisma/prisma.service';
import { bus_route, Prisma } from '@prisma/client';
export declare class BusRouteRepository {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAll(): Promise<bus_route[]>;
    create(data: Prisma.bus_routeCreateInput): Promise<bus_route>;
    update(id: number, data: Prisma.bus_routeUpdateInput): Promise<bus_route>;
}
