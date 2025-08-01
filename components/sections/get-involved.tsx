"use client";
import Link from 'next/link';

export default function GetInvolved() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-8">GET INVOLVED</h2>
        <div className="max-w-2xl mx-auto">
          <p className="text-lg text-gray-800 mb-8">
          Join our community of learners and innovators. Whether you're a student, mentor, or partner, there's a place for you at Qraft Academy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/courses/coursemasters" className="px-6 py-3 bg-blue-700 text-white font-bold rounded-lg hover:bg-blue-800 transition-colors flex items-center justify-center">
              Apply Now
            </Link>
            <button className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
