import {Injectable} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { schedule_bus, Prisma } from '@prisma/client';

@Injectable()
export class ScheduleBusRepository {
    constructor (private readonly prisma: PrismaService) {}

    async findAll(): Promise<schedule_bus[]> {
        return this.prisma.schedule_bus.findMany();
    }

    async create(data: Prisma.schedule_busCreateInput): Promise<schedule_bus> {
        return this.prisma.schedule_bus.create({data});
    }

    async update(id: number, data: Prisma.schedule_busUpdateInput): Promise<schedule_bus> {
        return this.prisma.schedule_bus.update({
            where: {id},
            data,
        });
    }

}