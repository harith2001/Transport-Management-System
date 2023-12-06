import {Injectable,HttpException,HttpStatus} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { admin, Prisma } from '@prisma/client';

@Injectable()
export class AdminRepository {
    constructor(private readonly prisma: PrismaService) {}
    
    // create admin
    async create(data: Prisma.adminCreateInput): Promise<admin> {
        return this.prisma.admin.create({ data });
    }


    // login user for admin
    async login(data: { email: string; password: string }) {
    const { email, password } = data;
 
    //console.log(email, password);

    let whereCls = '';

    if (email && password) {
      whereCls = `where email = "${email}" and password = "${password}"`;
    }
    const query = `select name from admin ${whereCls}`;

    const result = await this.prisma.$queryRawUnsafe(query);

    if ((result as { length: number }[]).length === 1) {
      return result[0];
    } else {
      throw new HttpException('Invalid email or password', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

}