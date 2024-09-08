import { CustomerLocalRepository } from './customer_local.repository';
import { customer_local, Prisma } from '@prisma/client';
export declare class CustomerLocalService {
    private readonly customerLocalRepository;
    constructor(customerLocalRepository: CustomerLocalRepository);
    create(data: Prisma.customer_localCreateInput): Promise<customer_local>;
    findUnique(id: number): Promise<customer_local | null>;
    update(id: number, data: Prisma.customer_localUpdateInput): Promise<customer_local>;
    delete(id: number): Promise<customer_local>;
    login(data: {
        email: string;
        password: string;
    }): Promise<any>;
}
