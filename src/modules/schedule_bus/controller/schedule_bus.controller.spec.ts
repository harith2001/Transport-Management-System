import { Test, TestingModule } from '@nestjs/testing';
import { ScheduleBusController } from './schedule_bus.controller';

describe('ScheduleBusController', () => {
  let controller: ScheduleBusController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ScheduleBusController],
    }).compile();

    controller = module.get<ScheduleBusController>(ScheduleBusController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
