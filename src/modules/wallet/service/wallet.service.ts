import { Injectable } from '@nestjs/common';
import { WalletRepository } from './wallet.repository';
import { wallet, Prisma } from '@prisma/client';

@Injectable()
export class WalletService {
    constructor(private readonly walletRepository: WalletRepository) {}

    async create(data: Prisma.walletCreateInput): Promise<wallet> {
        return this.walletRepository.create(data);
    }

    async update(id: number, data: Prisma.walletUpdateInput): Promise<wallet> {
        return this.walletRepository.update(id, data);
    }

    async get(data:{id :number}){
        return this.walletRepository.get(data.id);
    }

}
