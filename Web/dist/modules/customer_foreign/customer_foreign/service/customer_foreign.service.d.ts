import { Request } from 'express';
import { CustomerForeignDto } from '../customer_foreign.model';
import { customer_foreign } from '@prisma/client';
import { CustomerForeignRepository } from './customer_foreign.repository';
export declare class CustomerForeignService {
    private readonly request;
    private readonly customerForeignRepository;
    constructor(request: Request, customerForeignRepository: CustomerForeignRepository);
    create(data: CustomerForeignDto): Promise<customer_foreign>;
    findUnique(id: number): Promise<customer_foreign | null>;
    update(id: number, data: CustomerForeignDto): Promise<customer_foreign>;
    delete(id: number): Promise<customer_foreign>;
    login(data: {
        email: string;
        password: string;
    }): Promise<any>;
}
