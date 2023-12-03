import { WalletRepository } from './wallet.repository';
import { wallet, Prisma } from '@prisma/client';
export declare class WalletService {
    private readonly walletRepository;
    constructor(walletRepository: WalletRepository);
    create(data: Prisma.walletCreateInput): Promise<wallet>;
    update(id: number, data: Prisma.walletUpdateInput): Promise<wallet>;
    get(data: {
        id: number;
    }): Promise<any>;
}
