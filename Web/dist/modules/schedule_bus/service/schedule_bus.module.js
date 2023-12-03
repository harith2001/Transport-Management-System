"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScheduleBusModule = void 0;
const prisma_module_1 = require("../../../prisma/prisma.module");
const common_1 = require("@nestjs/common");
const schedule_bus_service_1 = require("./schedule_bus.service");
const schedule_bus_controller_1 = require("../controller/schedule_bus.controller");
const schedule_bus_repository_1 = require("./schedule_bus.repository");
let ScheduleBusModule = class ScheduleBusModule {
};
exports.ScheduleBusModule = ScheduleBusModule;
exports.ScheduleBusModule = ScheduleBusModule = __decorate([
    (0, common_1.Module)({
        imports: [prisma_module_1.PrismaModule],
        providers: [schedule_bus_service_1.ScheduleBusService, schedule_bus_repository_1.ScheduleBusRepository],
        controllers: [schedule_bus_controller_1.ScheduleBusController],
    })
], ScheduleBusModule);
//# sourceMappingURL=schedule_bus.module.js.map