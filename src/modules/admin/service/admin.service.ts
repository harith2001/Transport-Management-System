import { Injectable } from '@nestjs/common';
import { AdminRepository } from './admin.repository';
import { admin, Prisma } from '@prisma/client';

@Injectable()
export class AdminService {
    constructor(private readonly adminRepository: AdminRepository) {}

    async create(data: Prisma.adminCreateInput): Promise<admin> {
        return this.adminRepository.create(data);
    }

    async login(data: { email: string; password: string }) {
        return this.adminRepository.login(data);
    }
}
