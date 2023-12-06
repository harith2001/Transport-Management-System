import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { customer_local, Prisma } from '@prisma/client';
import { error } from 'console';

@Injectable()
export class CustomerLocalRepository {
  constructor(private readonly prisma: PrismaService) {}

  //create new user
  async create(
    data: Prisma.customer_localCreateInput,
  ): Promise<customer_local> {
    data.DOB = data.DOB + 'T00:00:00Z';
    return this.prisma.customer_local.create({ data });
  }

  //find user by id
  async findById(id: number): Promise<customer_local | null> {
    return this.prisma.customer_local.findUnique({
      where: { id },
    });
  }

  //update user by id
  async update(
    id: number,
    data: Prisma.customer_localUpdateInput,
  ): Promise<customer_local> {
    return this.prisma.customer_local.update({
      where: { id },
      data,
    });
  }

  //delete user by id
  async delete(id: number): Promise<customer_local> {
    return this.prisma.customer_local.delete({
      where: { id },
    });
  }

 // login user for local customer
  async login(data: { email: string; password: string }) {
    const { email, password } = data;
 
    //console.log(email, password);

    let whereCls = '';

    if (email && password) {
      whereCls = `where email = "${email}" and password = "${password}"`;
    }
    const query = `select name from customer_local ${whereCls}`;

    const result = await this.prisma.$queryRawUnsafe(query);

    if ((result as { length: number }[]).length === 1) {
      return result[0];
    } else {
      throw new HttpException('Invalid email or password', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

}