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
Object.defineProperty(exports, "__esModule", { value: true });
exports.BusRouteService = void 0;
const common_1 = require("@nestjs/common");
const bus_route_repository_1 = require("./bus_route.repository");
let BusRouteService = class BusRouteService {
    constructor(busRouteRepository) {
        this.busRouteRepository = busRouteRepository;
    }
    async findAll() {
        return this.busRouteRepository.findAll();
    }
    async create(data) {
        return this.busRouteRepository.create(data);
    }
    async update(id, data) {
        return this.busRouteRepository.update(id, data);
    }
};
exports.BusRouteService = BusRouteService;
exports.BusRouteService = BusRouteService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [bus_route_repository_1.BusRouteRepository])
], BusRouteService);
//# sourceMappingURL=bus_route.service.js.map