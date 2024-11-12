"use client"

import { useState } from 'react';
import { useStore } from '@/context/StoreContext';
import { Payment, PaymentType } from '@/classes/Payment';
import { Button } from '../components/ui/Button';

export default function PaymentsPage() {
  const { addPayment, makePayment, payments, students } = useStore();
  const [selectedStudent, setSelectedStudent] = useState<string>('');
  const [selectedType, setSelectedType] = useState<PaymentType>(PaymentType.CASH);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const student = students.find(x => x.jmeno === selectedStudent);

    if (student!.platba) {
      alert('This student has already made a payment.');
      return;
    }

    const payment = new Payment(selectedType);
    student!.platba = payment;
    addPayment(payment);
    setSelectedStudent('');
    setSelectedType(PaymentType.CASH);
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Create New Payment</h1>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">Select Student</label>
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

        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">Payment Type</label>
          <select
            value={selectedType}
            onChange={(e) => setSelectedType(Number(e.target.value))}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            required
          >
            {Object.entries(PaymentType)
              .filter(([key]) => isNaN(Number(key)))
              .map(([key, value]) => (
                <option key={key} value={value}>
                  {key}
                </option>
            ))}
          </select>
        </div>

        <Button type="submit">Create Payment</Button>
      </form>

      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Payment List</h2>
        <div className="space-y-4">
          {payments.map((payment, index) => (
            <div key={index} className="p-4 border rounded-md">
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-medium">
                    Student: {students.find(x => x.platba === payment)?.jmeno} - Type: {PaymentType[payment.typ]}
                  </p>
                  <p className="text-gray-600">
                    Status: {payment.splnena ? 'Completed' : 'Pending'}
                  </p>
                  <Button onClick={() => makePayment(students.find(x => x.platba === payment)!)}>Pay</Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 