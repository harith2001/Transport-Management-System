export declare class AdminDto {
    id: never;
    name: string;
    email: string;
    password: string;
}
declare const UpdateadminDto_base: import("@nestjs/common").Type<Partial<AdminDto>>;
export declare class UpdateadminDto extends UpdateadminDto_base {
}
export {};
