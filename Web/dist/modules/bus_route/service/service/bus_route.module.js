"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BusModule = void 0;
const prisma_module_1 = require("../../../../prisma/prisma.module");
const common_1 = require("@nestjs/common");
const bus_route_service_1 = require("./bus_route.service");
const bus_route_repository_1 = require("./bus_route.repository");
const bus_route_controller_1 = require("../../controller/bus_route.controller");
let BusModule = class BusModule {
};
exports.BusModule = BusModule;
exports.BusModule = BusModule = __decorate([
    (0, common_1.Module)({
        imports: [prisma_module_1.PrismaModule],
        providers: [bus_route_service_1.BusRouteService, bus_route_repository_1.BusRouteRepository],
        controllers: [bus_route_controller_1.BusRouteController],
    })
], BusModule);
//# sourceMappingURL=bus_route.module.js.map