import { Injectable,HttpException,HttpStatus } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { customer_foreign, Prisma } from '@prisma/client';

@Injectable()
export class CustomerForeignRepository {
  constructor(private prisma: PrismaService) {}

  //create new user
  async create(data: Prisma.customer_foreignCreateInput): Promise<customer_foreign> {
    data.depature_date = data.depature_date + 'T00:00:00Z';
    data.arrival_date = data.arrival_date + 'T00:00:00Z';
    return this.prisma.customer_foreign.create({ data });
  }

  //find user by id
  async findUnique(id: number): Promise<customer_foreign | null> {
    return this.prisma.customer_foreign.findUnique({ where: { id } });
  }

  //update user by id
  async update(id: number, data: Prisma.customer_foreignUpdateInput): Promise<customer_foreign> {
    return this.prisma.customer_foreign.update({ where: { id }, data });
  }

  //delete user by id
  async delete(id: number): Promise<customer_foreign> {
    return this.prisma.customer_foreign.delete({ where: { id } });
  }

  // login user for foreign customer
  async login(data: { email: string; password: string }) {
    const { email, password } = data;
 
    console.log(email, password);

    let whereCls = '';

    if (email && password) {
      whereCls = `where email = "${email}" and password = "${password}"`;
    }
    const query = `select name from customer_foreign ${whereCls}`;

    const result = await this.prisma.$queryRawUnsafe(query);

    if ((result as { length: number }[]).length === 1) {
      return result[0];
    } else {
      throw new HttpException('Invalid email or password', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

}
