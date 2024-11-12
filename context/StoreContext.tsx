import { createContext, useContext, useState, ReactNode } from 'react';
import { StoreContextType } from './types';
import { Student } from "@/classes/Student";
import { Instructor } from "@/classes/Instructor";
import { Administrator } from "@/classes/Administrator";
import { LearningPlan } from "@/classes/LearningPlan";
import { DrivingLesson } from "@/classes/DrivingLesson";
import { Payment } from "@/classes/Payment";
import { Report } from "@/classes/Report";

const StoreContext = createContext<StoreContextType | undefined>(undefined);

export function StoreProvider({ children }: { children: ReactNode }) {
  const [students, setStudents] = useState<Student[]>([]);
  const [instructors, setInstructors] = useState<Instructor[]>([]);
  const [administrators, setAdministrators] = useState<Administrator[]>([]);
  const [learningPlans, setLearningPlans] = useState<LearningPlan[]>([]);
  const [drivingLessons, setDrivingLessons] = useState<DrivingLesson[]>([]);
  const [payments, setPayments] = useState<Payment[]>([]);
  const [reports, setReports] = useState<Report[]>([]);

  const addStudent = (student: Student) => {
    setStudents(prev => [...prev, student]);
  };

  const addInstructor = (instructor: Instructor) => {
    setInstructors(prev => [...prev, instructor]);
  };

  const addAdministrator = (administrator: Administrator) => {
    setAdministrators(prev => [...prev, administrator]);
  };

  const addLearningPlan = (plan: LearningPlan) => {
    setLearningPlans(prev => [...prev, plan]);
  };

  const addDrivingLesson = (lesson: DrivingLesson) => {
    setDrivingLessons(prev => [...prev, lesson]);
  };

  const addPayment = (payment: Payment) => {
    setPayments(prev => [...prev, payment]);
  };

  const addReport = (report: Report) => {
    setReports(prev => [...prev, report]);
  };

  const makePayment = (student: Student) => {
    student.platba!.splnena = true;
    setStudents(prev => [...prev])
  };

  const value = {
    students,
    instructors,
    administrators,
    learningPlans,
    drivingLessons,
    payments,
    reports,
    addStudent,
    addInstructor,
    addAdministrator,
    addLearningPlan,
    addDrivingLesson,
    addPayment,
    addReport,
    makePayment
  };

  return (
    <StoreContext.Provider value={value}>
      {children}
    </StoreContext.Provider>
  );
}

export function useStore() {
  const context = useContext(StoreContext);
  if (context === undefined) {
    throw new Error('useStore must be used within a StoreProvider');
  }
  return context;
} 