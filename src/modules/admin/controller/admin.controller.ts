import { Controller,Post,Body} from '@nestjs/common';
import { ApiTags} from '@nestjs/swagger';
import { admin } from '@prisma/client';
import { AdminService } from '../service/admin.service';
import { AdminDto } from '../admin.model';

@ApiTags('Admin')
@Controller('admin')
export class AdminController {
    constructor (private readonly adminService: AdminService) {}

    @Post()
    create(@Body() adminDto: AdminDto): Promise<admin> {
        return this.adminService.create(adminDto);
    }

    @Post('login')
    login(@Body() login: AdminDto) {
        const { email, password } = login;
        return this.adminService.login({ email, password });
    }
}
