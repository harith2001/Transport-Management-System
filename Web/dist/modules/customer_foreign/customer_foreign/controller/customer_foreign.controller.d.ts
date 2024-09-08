import { CustomerForeignDto } from '../customer_foreign.model';
import { customer_foreign } from '@prisma/client';
import { CustomerForeignService } from '../service/customer_foreign.service';
export declare class CustomerForeignController {
    private readonly customerForeignService;
    constructor(customerForeignService: CustomerForeignService);
    findUnique(id: number): Promise<{
        id: number;
        name: string;
        email: string;
        phone: string;
        address: string;
        passport_no: string;
        password: string;
        depature_date: Date;
        arrival_date: Date;
    }>;
    create(data: CustomerForeignDto): Promise<customer_foreign>;
    login(login: CustomerForeignDto): Promise<any>;
    update(id: number, data: CustomerForeignDto): Promise<customer_foreign>;
    delete(id: number): Promise<customer_foreign>;
}
