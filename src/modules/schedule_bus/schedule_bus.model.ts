import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsNotEmpty } from '@nestjs/class-validator';

export class ScheduleBusDto {
    id: never;
  
    @ApiProperty()
    @IsNotEmpty()
    route_name: string;
  
    @ApiProperty()
    @IsNotEmpty()
    traffic: string;
  
    @ApiProperty()
    @IsNotEmpty()
    bus_count: number;
}
export class UpdatescheduleBusDto extends PartialType(ScheduleBusDto) {}