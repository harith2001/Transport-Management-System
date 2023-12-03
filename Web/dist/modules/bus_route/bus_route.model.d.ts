export declare class BusRouteDTO {
    id: never;
    bus_from: string;
    bus_to: string;
    estimated_fee: number;
    current_balance: number;
}
declare const UpdatebusRouteDTO_base: import("@nestjs/common").Type<Partial<BusRouteDTO>>;
export declare class UpdatebusRouteDTO extends UpdatebusRouteDTO_base {
}
export {};
