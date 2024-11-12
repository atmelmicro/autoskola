"use client"

import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';

export function Navigation() {
  const pathname = usePathname();
  
  const links = [
    { href: '/students', label: 'Students' },
    { href: '/instructors', label: 'Instructors' },
    { href: '/administrators', label: 'Administrators' },
    { href: '/learning-plans', label: 'Learning Plans' },
    { href: '/driving-lessons', label: 'Driving Lessons' },
    { href: '/payments', label: 'Payments' },
    { href: '/reports', label: 'Reports' },
  ];

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="max-w-7xl mx-auto flex gap-6">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`hover:text-blue-300 transition-colors ${
              pathname === link.href ? 'text-blue-400' : ''
            }`}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
} 