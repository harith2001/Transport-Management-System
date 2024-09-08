"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const customer_local_module_1 = require("./modules/customer_local/service/customer_local.module");
const prisma_module_1 = require("./prisma/prisma.module");
const customer_foreign_module_1 = require("./modules/customer_foreign/customer_foreign/service/customer_foreign.module");
const admin_module_1 = require("./modules/admin/service/admin.module");
const bus_route_module_1 = require("./modules/bus_route/service/service/bus_route.module");
const schedule_bus_module_1 = require("./modules/schedule_bus/service/schedule_bus.module");
const wallet_module_1 = require("./modules/wallet/service/wallet.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            customer_local_module_1.CustomerLocalModule,
            prisma_module_1.PrismaModule,
            customer_foreign_module_1.CustomerForeignModule,
            admin_module_1.AdminModule,
            bus_route_module_1.BusModule,
            schedule_bus_module_1.ScheduleBusModule,
            wallet_module_1.WalletModule
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map