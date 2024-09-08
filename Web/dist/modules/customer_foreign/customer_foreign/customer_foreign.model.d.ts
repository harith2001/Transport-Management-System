export declare class CustomerForeignDto {
    id: never;
    name: string;
    email: string;
    phone: string;
    address: string;
    passport_no: string;
    password: string;
    depature_date: Date;
    arrival_date: Date;
}
declare const UpdateCustomerForeignDto_base: import("@nestjs/common").Type<Partial<CustomerForeignDto>>;
export declare class UpdateCustomerForeignDto extends UpdateCustomerForeignDto_base {
}
export {};
