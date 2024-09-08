import { AdminRepository } from './admin.repository';
import { admin, Prisma } from '@prisma/client';
export declare class AdminService {
    private readonly adminRepository;
    constructor(adminRepository: AdminRepository);
    create(data: Prisma.adminCreateInput): Promise<admin>;
    login(data: {
        email: string;
        password: string;
    }): Promise<any>;
}
