export enum PaymentType {
    CASH,
    CARD,
    TRANSFER
}

export class Payment {
    typ: PaymentType;
    splnena: boolean;

    constructor(typ: PaymentType) {
        this.typ = typ;
        this.splnena = false;
    }
} 