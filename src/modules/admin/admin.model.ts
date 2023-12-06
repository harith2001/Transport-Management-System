import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsNotEmpty } from '@nestjs/class-validator';

export class AdminDto {
    id: never;
  
    @ApiProperty()
    @IsNotEmpty()
    name: string;
  
    @ApiProperty()
    @IsNotEmpty()
    email: string;
  
    @ApiProperty()
    @IsNotEmpty()
    password: string;
}
export class UpdateadminDto extends PartialType(AdminDto) {}