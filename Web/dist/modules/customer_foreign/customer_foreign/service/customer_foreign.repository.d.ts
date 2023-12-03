import { PrismaService } from 'src/prisma/prisma.service';
import { customer_foreign, Prisma } from '@prisma/client';
export declare class CustomerForeignRepository {
    private prisma;
    constructor(prisma: PrismaService);
    create(data: Prisma.customer_foreignCreateInput): Promise<customer_foreign>;
    findUnique(id: number): Promise<customer_foreign | null>;
    update(id: number, data: Prisma.customer_foreignUpdateInput): Promise<customer_foreign>;
    delete(id: number): Promise<customer_foreign>;
    login(data: {
        email: string;
        password: string;
    }): Promise<any>;
}
