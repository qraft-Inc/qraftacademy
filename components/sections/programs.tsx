"use client";

import Link from 'next/link';

export default function Programs() {
  return (
    <div className="w-full bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-12">OUR PROGRAMS</h2>
         <div className="grid md:grid-cols-2 gap-8">
          <div className="p-8 border rounded-lg bg-blue-50">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">2 Months Hybrid Internship</h3>
            <p className="text-lg text-gray-800 mb-6">Gain practical experience and skills.</p>
            <Link href="/courses/workmasters" className="font-bold text-blue-700 hover:text-blue-900">
              Learn more →
            </Link>
          </div>
          <div className="p-8 border rounded-lg bg-purple-50">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">1 Year Residential Apprenticeship</h3>
            <p className="text-lg text-gray-800 mb-6">Deep dive with comprehensive training.</p>
            <Link href="/courses/workmasters" className="font-bold text-blue-700 hover:text-blue-900">
              Learn more →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
