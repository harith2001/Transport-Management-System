import { Injectable } from '@nestjs/common';
import { ScheduleBusRepository } from './schedule_bus.repository';
import { schedule_bus, Prisma } from '@prisma/client';

@Injectable()
export class ScheduleBusService {
    constructor(private readonly scheduleBusRepository: ScheduleBusRepository) {}

    async findAll(): Promise<schedule_bus[]> {
        return this.scheduleBusRepository.findAll();
    }

    async create(data: Prisma.schedule_busCreateInput): Promise<schedule_bus> {
        return this.scheduleBusRepository.create(data);
    }

    async update(id: number, data: Prisma.schedule_busUpdateInput): Promise<schedule_bus> {
        return this.scheduleBusRepository.update(id, data);
    }
    
}
