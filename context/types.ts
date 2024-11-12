import { Student } from "@/classes/Student";
import { Instructor } from "@/classes/Instructor";
import { Administrator } from "@/classes/Administrator";
import { LearningPlan } from "@/classes/LearningPlan";
import { DrivingLesson } from "@/classes/DrivingLesson";
import { Payment } from "@/classes/Payment";
import { Report } from "@/classes/Report";

export interface StoreContextType {
  students: Student[];
  instructors: Instructor[];
  administrators: Administrator[];
  learningPlans: LearningPlan[];
  drivingLessons: DrivingLesson[];
  payments: Payment[];
  reports: Report[];
  
  // Actions
  addStudent: (student: Student) => void;
  addInstructor: (instructor: Instructor) => void;
  addAdministrator: (administrator: Administrator) => void;
  addLearningPlan: (plan: LearningPlan) => void;
  addDrivingLesson: (lesson: DrivingLesson) => void;
  addPayment: (payment: Payment) => void;
  addReport: (report: Report) => void;
} 