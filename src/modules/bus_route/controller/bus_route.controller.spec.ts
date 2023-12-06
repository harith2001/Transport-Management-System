import { Test, TestingModule } from '@nestjs/testing';
import { BusRouteController } from './bus_route.controller';

describe('ScheduleBusController', () => {
  let controller: BusRouteController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BusRouteController],
    }).compile();

    controller = module.get<BusRouteController>(BusRouteController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
