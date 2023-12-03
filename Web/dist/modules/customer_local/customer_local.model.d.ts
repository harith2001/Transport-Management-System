export declare class CustomerLocalDto {
    id: never;
    name: string;
    email: string;
    phone: string;
    address: string;
    nic: string;
    password: string;
    DOB: Date;
}
declare const UpdateCustomerLocalDto_base: import("@nestjs/common").Type<Partial<CustomerLocalDto>>;
export declare class UpdateCustomerLocalDto extends UpdateCustomerLocalDto_base {
}
export {};
