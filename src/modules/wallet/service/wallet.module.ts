import { PrismaModule } from 'src/prisma/prisma.module';
import { Module } from '@nestjs/common';
import { WalletService } from './wallet.service';
import { WalletRepository } from './wallet.repository';
import { WalletController } from '../controller/wallet.controller';


@Module({
  imports: [PrismaModule],
  providers: [WalletService,WalletRepository],
  controllers: [WalletController],
})
export class WalletModule {}
