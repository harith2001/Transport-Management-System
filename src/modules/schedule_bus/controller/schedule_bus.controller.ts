import { Controller,Post,Get,Body,Put,Param} from '@nestjs/common';
import { ApiTags,ApiQuery } from '@nestjs/swagger';
import { ScheduleBusDto } from '../schedule_bus.model';
import { schedule_bus } from '@prisma/client';
import { ScheduleBusService } from '../service/schedule_bus.service';

@ApiTags('Schedule Bus')
@Controller('schedule-bus')
export class ScheduleBusController {
    constructor(private readonly scheduleBusService: ScheduleBusService) {}

    @Get('all')
    async findAll(): Promise<schedule_bus[]> {
        return this.scheduleBusService.findAll();
    }

    @Post()
    create(@Body() scheduleBusDto: ScheduleBusDto): Promise<schedule_bus> {
        return this.scheduleBusService.create(scheduleBusDto);
    }

    @Put(':id')
    update(
        @Body() scheduleBusDto: ScheduleBusDto,
        @Param('id') id: number,
    ): Promise<schedule_bus> {
        return this.scheduleBusService.update(+id, scheduleBusDto);
    }

}
