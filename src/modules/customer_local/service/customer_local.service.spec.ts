import { Test, TestingModule } from '@nestjs/testing';
import { CustomerLocalService } from './customer_local.service';

describe('CustomerLocalService', () => {
  let service: CustomerLocalService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CustomerLocalService],
    }).compile();

    service = module.get<CustomerLocalService>(CustomerLocalService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
