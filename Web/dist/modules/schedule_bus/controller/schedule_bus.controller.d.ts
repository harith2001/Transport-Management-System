import { ScheduleBusDto } from '../schedule_bus.model';
import { schedule_bus } from '@prisma/client';
import { ScheduleBusService } from '../service/schedule_bus.service';
export declare class ScheduleBusController {
    private readonly scheduleBusService;
    constructor(scheduleBusService: ScheduleBusService);
    findAll(): Promise<schedule_bus[]>;
    create(scheduleBusDto: ScheduleBusDto): Promise<schedule_bus>;
    update(scheduleBusDto: ScheduleBusDto, id: number): Promise<schedule_bus>;
}
