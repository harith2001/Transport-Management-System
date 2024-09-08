import { wallet } from '@prisma/client';
import { WalletDto } from '../wallet.model';
import { WalletService } from '../service/wallet.service';
export declare class WalletController {
    private readonly walletService;
    constructor(walletService: WalletService);
    create(walletDto: WalletDto): Promise<wallet>;
    update(walletDto: WalletDto, id: number): Promise<wallet>;
    get(id: number): Promise<any>;
}
