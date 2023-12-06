import { Test, TestingModule } from '@nestjs/testing';
import { CustomerForeignController } from './customer_foreign.controller';

describe('CustomerForeignController', () => {
  let controller: CustomerForeignController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CustomerForeignController],
    }).compile();

    controller = module.get<CustomerForeignController>(CustomerForeignController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
