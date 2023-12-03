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
exports.ScheduleBusController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const schedule_bus_model_1 = require("../schedule_bus.model");
const schedule_bus_service_1 = require("../service/schedule_bus.service");
let ScheduleBusController = class ScheduleBusController {
    constructor(scheduleBusService) {
        this.scheduleBusService = scheduleBusService;
    }
    async findAll() {
        return this.scheduleBusService.findAll();
    }
    create(scheduleBusDto) {
        return this.scheduleBusService.create(scheduleBusDto);
    }
    update(scheduleBusDto, id) {
        return this.scheduleBusService.update(+id, scheduleBusDto);
    }
};
exports.ScheduleBusController = ScheduleBusController;
__decorate([
    (0, common_1.Get)('all'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ScheduleBusController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [schedule_bus_model_1.ScheduleBusDto]),
    __metadata("design:returntype", Promise)
], ScheduleBusController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [schedule_bus_model_1.ScheduleBusDto, Number]),
    __metadata("design:returntype", Promise)
], ScheduleBusController.prototype, "update", null);
exports.ScheduleBusController = ScheduleBusController = __decorate([
    (0, swagger_1.ApiTags)('Schedule Bus'),
    (0, common_1.Controller)('schedule-bus'),
    __metadata("design:paramtypes", [schedule_bus_service_1.ScheduleBusService])
], ScheduleBusController);
//# sourceMappingURL=schedule_bus.controller.js.map