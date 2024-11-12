import { Administrator } from './Administrator';

export class Instructor {
    administrator: Administrator;
    jmeno: string;
    auto: string;

    constructor(jmeno: string, auto: string, administrator: Administrator) {
        this.jmeno = jmeno;
        this.auto = auto;
        this.administrator = administrator;
    }
} 