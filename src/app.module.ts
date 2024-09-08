import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomerLocalModule } from './modules/customer_local/service/customer_local.module';
import { PrismaModule } from './prisma/prisma.module';
import { CustomerForeignModule } from './modules/customer_foreign/customer_foreign/service/customer_foreign.module';
import { AdminModule } from './modules/admin/service/admin.module';
import { BusModule } from './modules/bus_route/service/service/bus_route.module';
import { ScheduleBusModule } from './modules/schedule_bus/service/schedule_bus.module';
import { WalletModule } from './modules/wallet/service/wallet.module';

@Module({
  imports: [
    CustomerLocalModule, 
    PrismaModule,
    CustomerForeignModule,
    AdminModule,
    BusModule,
    ScheduleBusModule,
    WalletModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
