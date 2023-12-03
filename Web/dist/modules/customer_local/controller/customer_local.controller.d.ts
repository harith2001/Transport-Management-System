import { CustomerLocalDto } from '../customer_local.model';
import { customer_local } from '@prisma/client';
import { CustomerLocalService } from '../service/customer_local.service';
export declare class CustomerLocalController {
    private readonly customerLocalService;
    constructor(customerLocalService: CustomerLocalService);
    findUnique(id: number): Promise<{
        id: number;
        name: string;
        email: string;
        phone: string;
        address: string;
        nic: string;
        password: string;
        DOB: Date;
    }>;
    create(customerLocalDto: CustomerLocalDto): Promise<customer_local>;
    login(login: CustomerLocalDto): Promise<any>;
    update(id: number, customerLocalDto: CustomerLocalDto): Promise<customer_local>;
    delete(id: number): Promise<customer_local>;
}
