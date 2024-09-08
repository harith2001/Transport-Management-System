import { Injectable, Inject } from '@nestjs/common';
import { Request } from 'express';
import { REQUEST } from '@nestjs/core';
import { CustomerForeignDto } from '../customer_foreign.model';
import { customer_foreign } from '@prisma/client';
import { CustomerForeignRepository } from './customer_foreign.repository';

@Injectable()
export class CustomerForeignService {
  constructor(
    @Inject(REQUEST) private readonly request: Request,
    private readonly customerForeignRepository: CustomerForeignRepository,
  ) {}

  async create(data: CustomerForeignDto): Promise<customer_foreign> {
    return this.customerForeignRepository.create(data);
  }

  async findUnique(id: number): Promise<customer_foreign | null> {
    return this.customerForeignRepository.findUnique(id);
  }

  async update(id: number, data: CustomerForeignDto): Promise<customer_foreign> {
    return this.customerForeignRepository.update(id, data);
  }

  async delete(id: number): Promise<customer_foreign> {
    return this.customerForeignRepository.delete(id);
  }

  async login(data: { email: string; password: string }){
    return this.customerForeignRepository.login(data);
  }
}
