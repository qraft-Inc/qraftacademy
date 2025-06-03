'use client';

import React from 'react';

export default function CourseMastersPage() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 py-12">
      <div className="w-full max-w-3xl bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">CourseMasters Application Form</h1>
        <div className="relative" style={{ height: '800px' }}>
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLScyVIzVvJQ-8r3v8N5Iy_jBfDD_hTfdUQgz3hMdoHbFlVs7Cg/viewform?embedded=true"
            width="100%"
            height="100%"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
            title="CourseMasters Application Form"
          >
            Loading...
          </iframe>
        </div>
      </div>
    </div>
  );
}
