"use client"

import { useState } from 'react';
import { useStore } from '@/context/StoreContext';
import { Report } from '@/classes/Report';
import { Input } from '../components/ui/Input';
import { Button } from '../components/ui/Button';

export default function ReportsPage() {
  const { addReport, reports, learningPlans } = useStore();
  const [description, setDescription] = useState('');
  const [rating, setRating] = useState('');
  const [selectedPlan, setSelectedPlan] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const plan = learningPlans.find(p => 
      `${p.zak.jmeno}-${p.instruktor.jmeno}` === selectedPlan
    );
    
    if (!plan) return;

    const report = new Report(
      plan,
      description,
      parseInt(rating)
    );
    
    addReport(report);
    setDescription('');
    setRating('');
    setSelectedPlan('');
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Create New Report</h1>
      
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
          label="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />

        <Input
          label="Rating (1-10)"
          type="number"
          min="1"
          max="10"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          required
        />

        <Button type="submit">Create Report</Button>
      </form>

      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Report List</h2>
        <div className="space-y-4">
          {reports.map((report, index) => (
            <div key={index} className="p-4 border rounded-md">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <p className="font-medium">
                    Student: {report.vyukovyPlan.zak.jmeno}
                  </p>
                  <p className="text-gray-600">
                    Instructor: {report.vyukovyPlan.instruktor.jmeno}
                  </p>
                </div>
                <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                  Rating: {report.hodnoceni}/10
                </span>
              </div>
              <p className="text-gray-700 mt-2">{report.popis}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 