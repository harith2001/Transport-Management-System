import { Test, TestingModule } from '@nestjs/testing';
import { CustomerForeignService } from './customer_foreign.service';

describe('CustomerForeignService', () => {
  let service: CustomerForeignService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CustomerForeignService],
    }).compile();

    service = module.get<CustomerForeignService>(CustomerForeignService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
