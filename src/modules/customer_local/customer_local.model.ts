import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsNotEmpty } from '@nestjs/class-validator';


export class CustomerLocalDto {
  id: never;

  @ApiProperty()
  @IsNotEmpty()
  name: string;

  @ApiProperty()
  @IsNotEmpty()
  email: string;

  @ApiProperty()
  @IsNotEmpty()
  phone: string;

  @ApiProperty()
  @IsNotEmpty()
  address: string;

  @ApiProperty()
  @IsNotEmpty()
  nic: string;

  @ApiProperty()
  @IsNotEmpty()
  password: string;

  @ApiProperty()
  @IsNotEmpty()
  DOB: Date;
}

export class UpdateCustomerLocalDto extends PartialType(CustomerLocalDto) {}
