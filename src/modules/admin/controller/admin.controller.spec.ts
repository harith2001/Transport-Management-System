import { Test, TestingModule } from '@nestjs/testing';
import { AdminController } from './admin.controller';
import { AdminService } from '../service/admin.service';


describe('AdminController', () => {
  let controller: AdminController;
  let adminService: AdminService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AdminController],
      providers: [AdminService],
    }).compile();

    controller = module.get<AdminController>(AdminController);
    adminService = module.get<AdminService>(AdminService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  //Test case AdminController

  // describe('create', () => {
  //   it('should create a new admin', async () => {
  //     // Mock the adminService's create method
  //     const createResult = { id: 1, name: 'Test Admin', email: 'test@admin.com', password: 'password123' };
  //     jest.spyOn(adminService, 'create').mockImplementation(() => Promise.resolve(createResult));

  //     // Define a sample adminDto
  //     const AdminDto = { id: 1, name: 'Test Admin', email: 'test@admin.com', password: 'password123' };

  //     // Call the controller method
  //     const result = await controller.create(AdminDto);

  //     // Assert the result
  //     expect(result).toEqual(createResult);
  //   });
  // });

  // describe('login', () => {
  //   it('should log in an admin', async () => {
  //     // Mock the adminService's login method
  //     const loginResult = { id: 1, name: 'Test Admin' };
  //     jest.spyOn(adminService, 'login').mockImplementation(() => Promise.resolve(loginResult));
  
  //     // Define a sample login request
  //     const loginRequest = { email: 'admin@test.com', password: 'password123' };
  
  //     // Create a valid AdminDto object for the login request
  //     const adminDto = {
  //       id: 1, // Provide a valid id
  //       name: 'Test Admin',
  //       email: loginRequest.email, // Use the email from the login request
  //       password: loginRequest.password, // Use the password from the login request
  //     };
  
  //     // Call the controller method
  //     const result = await controller.login(adminDto);
  
  //     // Assert the result
  //     expect(result).toEqual(loginResult);
  //   });
  // });
  
});
