import { Payment } from "./Payment";

export class Student {
    pocetHodin: number;
    jmeno: string;
    platba: Payment | undefined;
    datumNarozeni: Date;

    constructor(jmeno: string, datumNarozeni: Date) {
        this.jmeno = jmeno;
        this.datumNarozeni = datumNarozeni;
        this.pocetHodin = 0;
    }
} 