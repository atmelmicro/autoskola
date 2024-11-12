"use client"

import { useState } from 'react';
import { useStore } from '@/context/StoreContext';
import { Administrator } from '@/classes/Administrator';
import { Input } from '../components/ui/Input';
import { Button } from '../components/ui/Button';

export default function AdministratorsPage() {
  const { addAdministrator, administrators } = useStore();
  const [name, setName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const administrator = new Administrator(name);
    addAdministrator(administrator);
    setName('');
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Add New Administrator</h1>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <Button type="submit">Add Administrator</Button>
      </form>

      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Administrator List</h2>
        <div className="space-y-2">
          {administrators.map((admin, index) => (
            <div key={index} className="p-4 border rounded-md">
              {admin.jmeno}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 