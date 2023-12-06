import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsNotEmpty } from '@nestjs/class-validator';

export class WalletDto {
    id: never;
  
    @ApiProperty()
    @IsNotEmpty()
    balance: number;
  
    @ApiProperty()
    @IsNotEmpty()
    card_no: string;

    @ApiProperty()
    @IsNotEmpty()
    card_name: string;

    @ApiProperty()
    @IsNotEmpty()
    cvv: string;

    @ApiProperty()
    @IsNotEmpty()
    exp_date: Date;
}
export class UpdatewalletDto extends PartialType(WalletDto) {}