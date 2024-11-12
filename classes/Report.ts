import { LearningPlan } from './LearningPlan';

export class Report {
    vyukovyPlan: LearningPlan;
    popis: string;
    hodnoceni: number;

    constructor(vyukovyPlan: LearningPlan, popis: string, hodnoceni: number) {
        this.vyukovyPlan = vyukovyPlan;
        this.popis = popis;
        this.hodnoceni = hodnoceni;
    }
} 