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
exports.CustomerLocalController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const customer_local_model_1 = require("../customer_local.model");
const customer_local_service_1 = require("../service/customer_local.service");
let CustomerLocalController = class CustomerLocalController {
    constructor(customerLocalService) {
        this.customerLocalService = customerLocalService;
    }
    async findUnique(id) {
        return this.customerLocalService.findUnique(+id);
    }
    create(customerLocalDto) {
        return this.customerLocalService.create(customerLocalDto);
    }
    login(login) {
        const { email, password } = login;
        return this.customerLocalService.login({ email, password });
    }
    update(id, customerLocalDto) {
        return this.customerLocalService.update(+id, customerLocalDto);
    }
    delete(id) {
        return this.customerLocalService.delete(+id);
    }
};
exports.CustomerLocalController = CustomerLocalController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiQuery)({ name: 'id', required: false }),
    __param(0, (0, common_1.Query)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CustomerLocalController.prototype, "findUnique", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [customer_local_model_1.CustomerLocalDto]),
    __metadata("design:returntype", Promise)
], CustomerLocalController.prototype, "create", null);
__decorate([
    (0, common_1.Post)('login'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [customer_local_model_1.CustomerLocalDto]),
    __metadata("design:returntype", void 0)
], CustomerLocalController.prototype, "login", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, customer_local_model_1.CustomerLocalDto]),
    __metadata("design:returntype", Promise)
], CustomerLocalController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CustomerLocalController.prototype, "delete", null);
exports.CustomerLocalController = CustomerLocalController = __decorate([
    (0, swagger_1.ApiTags)('Customer Local'),
    (0, common_1.Controller)('customer-local'),
    __metadata("design:paramtypes", [customer_local_service_1.CustomerLocalService])
], CustomerLocalController);
//# sourceMappingURL=customer_local.controller.js.map