import {Injectable,HttpException,HttpStatus} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma, wallet } from '@prisma/client';

@Injectable()
export class WalletRepository {
    constructor(private readonly prisma: PrismaService) {}
    
    // create wallet
    async create(data: Prisma.walletCreateInput): Promise<wallet> {
        data.exp_date = data.exp_date + "T00:00:00.000Z";
        return this.prisma.wallet.create({ data });
    }

    // update wallet
    async update(id: number, data: Prisma.walletUpdateInput): Promise<wallet> {
        return this.prisma.wallet.update({
            data,
            where: { id },
        });
    }

    // get wallet
    async get(id: number){
        console.log(id);
        let whereCls = '';
        if (id) {
            whereCls = `where id = ${id}`;
        }
        const query = `select balance from wallet ${whereCls}`;

        const result = await this.prisma.$queryRawUnsafe(query);

        return result[0];
    }

}