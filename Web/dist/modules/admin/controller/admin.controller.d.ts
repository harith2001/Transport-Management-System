import { admin } from '@prisma/client';
import { AdminService } from '../service/admin.service';
import { AdminDto } from '../admin.model';
export declare class AdminController {
    private readonly adminService;
    constructor(adminService: AdminService);
    create(adminDto: AdminDto): Promise<admin>;
    login(login: AdminDto): Promise<any>;
}
