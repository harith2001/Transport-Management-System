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
exports.BusRouteController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const bus_route_service_1 = require("../service/service/bus_route.service");
const bus_route_model_1 = require("../bus_route.model");
let BusRouteController = class BusRouteController {
    constructor(busRouteService) {
        this.busRouteService = busRouteService;
    }
    async findAll() {
        return this.busRouteService.findAll();
    }
    create(busRouteDTO) {
        return this.busRouteService.create(busRouteDTO);
    }
    update(busRouteDTO, id) {
        return this.busRouteService.update(id, busRouteDTO);
    }
};
exports.BusRouteController = BusRouteController;
__decorate([
    (0, common_1.Get)('all'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BusRouteController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [bus_route_model_1.BusRouteDTO]),
    __metadata("design:returntype", Promise)
], BusRouteController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [bus_route_model_1.BusRouteDTO, Number]),
    __metadata("design:returntype", Promise)
], BusRouteController.prototype, "update", null);
exports.BusRouteController = BusRouteController = __decorate([
    (0, swagger_1.ApiTags)('Bus Route'),
    (0, common_1.Controller)('bus-route'),
    __metadata("design:paramtypes", [bus_route_service_1.BusRouteService])
], BusRouteController);
//# sourceMappingURL=bus_route.controller.js.map