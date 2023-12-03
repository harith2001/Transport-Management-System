export declare class ScheduleBusDto {
    id: never;
    route_name: string;
    traffic: string;
    bus_count: number;
}
declare const UpdatescheduleBusDto_base: import("@nestjs/common").Type<Partial<ScheduleBusDto>>;
export declare class UpdatescheduleBusDto extends UpdatescheduleBusDto_base {
}
export {};
