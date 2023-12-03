import { PrismaService } from 'src/prisma/prisma.service';
import { schedule_bus, Prisma } from '@prisma/client';
export declare class ScheduleBusRepository {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAll(): Promise<schedule_bus[]>;
    create(data: Prisma.schedule_busCreateInput): Promise<schedule_bus>;
    update(id: number, data: Prisma.schedule_busUpdateInput): Promise<schedule_bus>;
}
