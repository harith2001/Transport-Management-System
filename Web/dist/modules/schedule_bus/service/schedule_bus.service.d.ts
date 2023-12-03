import { ScheduleBusRepository } from './schedule_bus.repository';
import { schedule_bus, Prisma } from '@prisma/client';
export declare class ScheduleBusService {
    private readonly scheduleBusRepository;
    constructor(scheduleBusRepository: ScheduleBusRepository);
    findAll(): Promise<schedule_bus[]>;
    create(data: Prisma.schedule_busCreateInput): Promise<schedule_bus>;
    update(id: number, data: Prisma.schedule_busUpdateInput): Promise<schedule_bus>;
}
