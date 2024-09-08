import { PrismaService } from 'src/prisma/prisma.service';
import { admin, Prisma } from '@prisma/client';
export declare class AdminRepository {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(data: Prisma.adminCreateInput): Promise<admin>;
    login(data: {
        email: string;
        password: string;
    }): Promise<any>;
}
