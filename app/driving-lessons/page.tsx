"use client"

import { useState } from 'react';
import { useStore } from '@/context/StoreContext';
import { DrivingLesson } from '@/classes/DrivingLesson';
import { Input } from '../components/ui/Input';
import { Button } from '../components/ui/Button';

export default function DrivingLessonsPage() {
  const { addDrivingLesson, drivingLessons, learningPlans } = useStore();
  const [selectedPlan, setSelectedPlan] = useState('');
  const [lessonDate, setLessonDate] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const plan = learningPlans.find(p => 
      `${p.zak.jmeno}-${p.instruktor.jmeno}` === selectedPlan
    );
    
    if (!plan) return;

    const lesson = new DrivingLesson(new Date(lessonDate));
    plan.hodinyJizdy.push(lesson);
    addDrivingLesson(lesson);
    
    setLessonDate('');
    setSelectedPlan('');
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Schedule New Driving Lesson</h1>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">Learning Plan</label>
          <select
            value={selectedPlan}
            onChange={(e) => setSelectedPlan(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            required
          >
            <option value="">Select Learning Plan</option>
            {learningPlans.map((plan, index) => (
              <option 
                key={index} 
                value={`${plan.zak.jmeno}-${plan.instruktor.jmeno}`}
              >
                {plan.zak.jmeno} - {plan.instruktor.jmeno}
              </option>
            ))}
          </select>
        </div>

        <Input
          label="Lesson Date"
          type="datetime-local"
          value={lessonDate}
          onChange={(e) => setLessonDate(e.target.value)}
          required
        />

        <Button type="submit">Schedule Lesson</Button>
      </form>

      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Scheduled Lessons</h2>
        <div className="space-y-4">
          {drivingLessons.map((lesson, index) => (
            <div key={index} className="p-4 border rounded-md">
              <p>Date: {lesson.datum.toLocaleString()}</p>
              <p>Completed: {lesson.splnena ? 'Yes' : 'No'}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 