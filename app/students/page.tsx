"use client"

import { useState } from 'react';
import { useStore } from '@/context/StoreContext';
import { Student } from '@/classes/Student';
import { Input } from '../components/ui/Input';
import { Button } from '../components/ui/Button';

export default function StudentsPage() {
  const { addStudent, students } = useStore();
  const [name, setName] = useState('');
  const [birthDate, setBirthDate] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const student = new Student(name, new Date(birthDate));
    addStudent(student);
    setName('');
    setBirthDate('');
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Add New Student</h1>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <Input
          label="Birth Date"
          type="date"
          value={birthDate}
          onChange={(e) => setBirthDate(e.target.value)}
          required
        />
        <Button type="submit">Add Student</Button>
      </form>

      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Student List</h2>
        <div className="space-y-2">
          {students.map((student, index) => (
            <div key={index} className="p-4 border rounded-md">
              {student.jmeno} - {student.datumNarozeni.toLocaleDateString()}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 