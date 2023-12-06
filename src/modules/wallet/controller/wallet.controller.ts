import { Controller,Post,Body,Put,Param, Get} from '@nestjs/common';
import { ApiTags} from '@nestjs/swagger';
import { wallet } from '@prisma/client';
import { WalletDto } from '../wallet.model';
import { WalletService } from '../service/wallet.service';

@ApiTags('Wallet')
@Controller('wallet')
export class WalletController {
    constructor (private readonly walletService: WalletService) {}

    @Post()
    create(@Body() walletDto: WalletDto): Promise<wallet> {
        return this.walletService.create(walletDto);
    }

    @Put(':id')
    update(@Body() walletDto: WalletDto, @Param('id') id: number): Promise<wallet> {
        return this.walletService.update(id, walletDto);
    }

    @Get(':id')
    get(@Param('id') id: number){
        const data = {id : id};
        return this.walletService.get(data);
    }

}
