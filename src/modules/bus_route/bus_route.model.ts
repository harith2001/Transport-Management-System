import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsNotEmpty } from '@nestjs/class-validator';

export class BusRouteDTO {
    id: never;
  
    @ApiProperty()
    @IsNotEmpty()
    bus_from: string;
  
    @ApiProperty()
    @IsNotEmpty()
    bus_to: string;
  
    @ApiProperty()
    @IsNotEmpty()
    estimated_fee: number;

    @ApiProperty()
    @IsNotEmpty()
    current_balance: number;
}
export class UpdatebusRouteDTO extends PartialType(BusRouteDTO) {}