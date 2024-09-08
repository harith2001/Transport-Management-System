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
exports.CustomerForeignService = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const customer_foreign_repository_1 = require("./customer_foreign.repository");
let CustomerForeignService = class CustomerForeignService {
    constructor(request, customerForeignRepository) {
        this.request = request;
        this.customerForeignRepository = customerForeignRepository;
    }
    async create(data) {
        return this.customerForeignRepository.create(data);
    }
    async findUnique(id) {
        return this.customerForeignRepository.findUnique(id);
    }
    async update(id, data) {
        return this.customerForeignRepository.update(id, data);
    }
    async delete(id) {
        return this.customerForeignRepository.delete(id);
    }
    async login(data) {
        return this.customerForeignRepository.login(data);
    }
};
exports.CustomerForeignService = CustomerForeignService;
exports.CustomerForeignService = CustomerForeignService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(core_1.REQUEST)),
    __metadata("design:paramtypes", [Object, customer_foreign_repository_1.CustomerForeignRepository])
], CustomerForeignService);
//# sourceMappingURL=customer_foreign.service.js.map