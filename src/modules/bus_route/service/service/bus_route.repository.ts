import {Injectable} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { bus_route, Prisma } from '@prisma/client';

@Injectable()
export class BusRouteRepository {
    constructor (private readonly prisma: PrismaService) {}

    async findAll(): Promise<bus_route[]> {
        return this.prisma.bus_route.findMany();
    }

    async create(data: Prisma.bus_routeCreateInput): Promise<bus_route> {
        return this.prisma.bus_route.create({data});
    }

    async update(id: number, data: Prisma.bus_routeUpdateInput): Promise<bus_route> {
        return this.prisma.bus_route.update({
            where: {id},
            data,
        });
    }

}