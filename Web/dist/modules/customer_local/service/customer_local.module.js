"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerLocalModule = void 0;
const prisma_module_1 = require("../../../prisma/prisma.module");
const common_1 = require("@nestjs/common");
const customer_local_service_1 = require("./customer_local.service");
const customer_local_controller_1 = require("../controller/customer_local.controller");
const customer_local_repository_1 = require("./customer_local.repository");
let CustomerLocalModule = class CustomerLocalModule {
};
exports.CustomerLocalModule = CustomerLocalModule;
exports.CustomerLocalModule = CustomerLocalModule = __decorate([
    (0, common_1.Module)({
        imports: [prisma_module_1.PrismaModule],
        providers: [customer_local_service_1.CustomerLocalService, customer_local_repository_1.CustomerLocalRepository],
        controllers: [customer_local_controller_1.CustomerLocalController],
    })
], CustomerLocalModule);
//# sourceMappingURL=customer_local.module.js.map