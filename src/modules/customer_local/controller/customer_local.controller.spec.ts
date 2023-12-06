import { Test, TestingModule } from '@nestjs/testing';
import { CustomerLocalController } from './customer_local.controller';

describe('CustomerLocalController', () => {
  let controller: CustomerLocalController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CustomerLocalController],
    }).compile();

    controller = module.get<CustomerLocalController>(CustomerLocalController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
  //Test case CustomerLocalController

  // describe('create', () => {
  //   it('should create a new customer local', async () => {
  //     // Mock the customerLocalService's create method
  //     const createResult = { id: 1, name: 'Test Customer', email: 'test@example.com', password: 'password123' };
  //     jest.spyOn(customerLocalService, 'create').mockImplementation(() => Promise.resolve(createResult);

  //     // Define a sample customerLocalDto
  //     const customerLocalDto = {
  //       name: 'Test Customer',
  //       email: 'test@example.com',
  //       password: 'password123',
  //     };

  //     // Call the controller method
  //     const result = await controller.create(customerLocalDto);

  //     // Assert the result
  //     expect(result).toEqual(createResult);
  //   });
  // });

  // describe('login', () => {
  //   it('should log in a customer local', async () => {
  //     // Mock the customerLocalService's login method
  //     const loginResult = { id: 1, name: 'Test Customer' };
  //     jest.spyOn(customerLocalService, 'login').mockImplementation(() => Promise.resolve(loginResult));
  
  //     // Define a sample login request
  //     const loginRequest = { email: 'test@example.com', password: 'password123' };
  
  //     // Call the controller method
  //     const result = await controller.login(loginRequest);
  
  //     // Assert the result
  //     expect(result).toEqual(loginResult);
  //   });
  // });
  



});
