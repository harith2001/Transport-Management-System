import { Test, TestingModule } from '@nestjs/testing';
import { ScheduleBusService } from './schedule_bus.service';

describe('ScheduleBusService', () => {
  let service: ScheduleBusService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ScheduleBusService],
    }).compile();

    service = module.get<ScheduleBusService>(ScheduleBusService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
