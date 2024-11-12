"use client"

import { useState } from 'react';
import { useStore } from '@/context/StoreContext';
import { Instructor } from '@/classes/Instructor';
import { Input } from '../components/ui/Input';
import { Button } from '../components/ui/Button';

export default function InstructorsPage() {
  const { addInstructor, instructors, administrators } = useStore();
  const [name, setName] = useState('');
  const [car, setCar] = useState('');
  const [selectedAdmin, setSelectedAdmin] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const admin = administrators.find(a => a.jmeno === selectedAdmin);
    if (!admin) return;
    
    const instructor = new Instructor(name, car, admin);
    addInstructor(instructor);
    setName('');
    setCar('');
    setSelectedAdmin('');
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Add New Instructor</h1>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <Input
          label="Car"
          value={car}
          onChange={(e) => setCar(e.target.value)}
          required
        />
        <select
          value={selectedAdmin}
          onChange={(e) => setSelectedAdmin(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
          required
        >
          <option value="">Select Administrator</option>
          {administrators.map((admin, index) => (
            <option key={index} value={admin.jmeno}>
              {admin.jmeno}
            </option>
          ))}
        </select>
        <Button type="submit">Add Instructor</Button>
      </form>

      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Instructor List</h2>
        <div className="space-y-2">
          {instructors.map((instructor, index) => (
            <div key={index} className="p-4 border rounded-md">
              {instructor.jmeno} - {instructor.auto}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 