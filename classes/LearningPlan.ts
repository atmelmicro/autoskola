import { Instructor } from './Instructor';
import { Student } from './Student';
import { DrivingLesson } from './DrivingLesson';

export class LearningPlan {
    name: string;
    instruktor: Instructor;
    zak: Student;
    datumZalozeni: Date;
    hodinyJizdy: DrivingLesson[];

    constructor(name: string, instruktor: Instructor, zak: Student) {
        this.name = name;
        this.instruktor = instruktor;
        this.zak = zak;
        this.datumZalozeni = new Date();
        this.hodinyJizdy = [];
    }
} 