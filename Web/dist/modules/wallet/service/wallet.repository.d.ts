import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma, wallet } from '@prisma/client';
export declare class WalletRepository {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(data: Prisma.walletCreateInput): Promise<wallet>;
    update(id: number, data: Prisma.walletUpdateInput): Promise<wallet>;
    get(id: number): Promise<any>;
}
