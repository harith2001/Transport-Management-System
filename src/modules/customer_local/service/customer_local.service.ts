import { Injectable } from '@nestjs/common';
import { CustomerLocalRepository } from './customer_local.repository';
import { customer_local,Prisma } from '@prisma/client';

@Injectable()
export class CustomerLocalService {
  constructor(private readonly customerLocalRepository: CustomerLocalRepository) {}

  async create(data: Prisma.customer_localCreateInput): Promise<customer_local> {
    return this.customerLocalRepository.create(data);
  }

  async findUnique(id: number): Promise<customer_local | null> {
    return this.customerLocalRepository.findById(id);
  }

  async update(id: number, data: Prisma.customer_localUpdateInput): Promise<customer_local> {
    return this.customerLocalRepository.update(id, data);
  }

  async delete(id: number): Promise<customer_local> {
    return this.customerLocalRepository.delete(id);
  }

  async login(data: { email: string; password: string }){
    return this.customerLocalRepository.login(data);
  }
}
