import { PrismaService } from 'src/prisma/prisma.service';
import { customer_local, Prisma } from '@prisma/client';
export declare class CustomerLocalRepository {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(data: Prisma.customer_localCreateInput): Promise<customer_local>;
    findById(id: number): Promise<customer_local | null>;
    update(id: number, data: Prisma.customer_localUpdateInput): Promise<customer_local>;
    delete(id: number): Promise<customer_local>;
    login(data: {
        email: string;
        password: string;
    }): Promise<any>;
}
