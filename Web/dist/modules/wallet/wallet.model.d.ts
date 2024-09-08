export declare class WalletDto {
    id: never;
    balance: number;
    card_no: string;
    card_name: string;
    cvv: string;
    exp_date: Date;
}
declare const UpdatewalletDto_base: import("@nestjs/common").Type<Partial<WalletDto>>;
export declare class UpdatewalletDto extends UpdatewalletDto_base {
}
export {};
