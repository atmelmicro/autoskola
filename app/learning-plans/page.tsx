"use client"

import { useState } from 'react';
import { useStore } from '@/context/StoreContext';
import { LearningPlan } from '@/classes/LearningPlan';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';

export default function LearningPlansPage() {
  const { addLearningPlan, learningPlans, instructors, students } = useStore();
  const [selectedInstructor, setSelectedInstructor] = useState('');
  const [name, setName] = useState('');
  const [selectedStudent, setSelectedStudent] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const instructor = instructors.find(i => i.jmeno === selectedInstructor);
    const student = students.find(s => s.jmeno === selectedStudent);
    
    if (!instructor || !student) return;
    
    const plan = new LearningPlan(name, instructor, student);
    addLearningPlan(plan);
    setSelectedInstructor('');
    setSelectedStudent('');
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Create New Learning Plan</h1>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
            label='Name'
            onChange={(e) => setName(e.target.value)}
        />
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">Instructor</label>
          <select
            value={selectedInstructor}
            onChange={(e) => setSelectedInstructor(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            required
          >
            <option value="">Select Instructor</option>
            {instructors.map((instructor, index) => (
              <option key={index} value={instructor.jmeno}>
                {instructor.jmeno}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">Student</label>
          <select
            value={selectedStudent}
            onChange={(e) => setSelectedStudent(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            required
          >
            <option value="">Select Student</option>
            {students.map((student, index) => (
              <option key={index} value={student.jmeno}>
                {student.jmeno}
              </option>
            ))}
          </select>
        </div>

        <Button type="submit">Create Learning Plan</Button>
      </form>

      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Learning Plans</h2>
        <div className="space-y-2">
          {learningPlans.map((plan, index) => (
            <div key={index} className="p-4 border rounded-md">
              <p>Name: {plan.name}</p>
              <p>Instructor: {plan.instruktor.jmeno}</p>
              <p>Student: {plan.zak.jmeno}</p>
              <p>Created: {plan.datumZalozeni.toLocaleDateString()}</p>
              <p>Jizdy</p>
              {plan.hodinyJizdy.map(jizda => (
                <>
                    <p>{jizda.datum.toLocaleDateString()}</p>
                    <p>{jizda.splnena}</p>
                    <hr />
                </>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 