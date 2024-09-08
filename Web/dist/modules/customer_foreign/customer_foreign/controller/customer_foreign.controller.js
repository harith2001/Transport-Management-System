"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerForeignController = void 0;
const common_1 = require("@nestjs/common");
const customer_foreign_model_1 = require("../customer_foreign.model");
const swagger_1 = require("@nestjs/swagger");
const customer_foreign_service_1 = require("../service/customer_foreign.service");
let CustomerForeignController = class CustomerForeignController {
    constructor(customerForeignService) {
        this.customerForeignService = customerForeignService;
    }
    async findUnique(id) {
        return this.customerForeignService.findUnique(+id);
    }
    async create(data) {
        return this.customerForeignService.create(data);
    }
    login(login) {
        const { email, password } = login;
        return this.customerForeignService.login({ email, password });
    }
    async update(id, data) {
        return this.customerForeignService.update(+id, data);
    }
    async delete(id) {
        return this.customerForeignService.delete(+id);
    }
};
exports.CustomerForeignController = CustomerForeignController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiQuery)({ name: 'id', required: false }),
    __param(0, (0, common_1.Query)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CustomerForeignController.prototype, "findUnique", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [customer_foreign_model_1.CustomerForeignDto]),
    __metadata("design:returntype", Promise)
], CustomerForeignController.prototype, "create", null);
__decorate([
    (0, common_1.Post)('login'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [customer_foreign_model_1.CustomerForeignDto]),
    __metadata("design:returntype", void 0)
], CustomerForeignController.prototype, "login", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Query)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, customer_foreign_model_1.CustomerForeignDto]),
    __metadata("design:returntype", Promise)
], CustomerForeignController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(),
    __param(0, (0, common_1.Query)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CustomerForeignController.prototype, "delete", null);
exports.CustomerForeignController = CustomerForeignController = __decorate([
    (0, swagger_1.ApiTags)('Customer Foreign'),
    (0, common_1.Controller)('customer-foreign'),
    __metadata("design:paramtypes", [customer_foreign_service_1.CustomerForeignService])
], CustomerForeignController);
//# sourceMappingURL=customer_foreign.controller.js.map