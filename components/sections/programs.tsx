"use client";

import Link from "next/link";

export default function Programs() {
  return (
    <div className="w-full bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-12">OUR PRODUCTS</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {/* CourseMasters Card */}
          <Link href="/courses/coursemasters">
            <div className="p-8 border rounded-lg bg-blue-50 cursor-pointer hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">CourseMasters</h3>
              <p className="text-lg text-gray-800 mb-6">
                Master essential skills and knowledge through expertly designed courses tailored to your personal and professional growth.
              </p>
              <button className="font-bold text-blue-700 hover:text-blue-900">
                Learn more →
              </button>
            </div>
          </Link>
          {/* TechMasters Card */}
          <Link href="/courses/techmasters">
            <div className="p-8 border rounded-lg bg-green-50 cursor-pointer hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">TechMasters</h3>
              <p className="text-lg text-gray-800 mb-6">
                Dive into cutting-edge technology with immersive, hands-on training programs that prepare you for the future of work.
              </p>
              <button className="font-bold text-blue-700 hover:text-blue-900">
                Learn more →
              </button>
            </div>
          </Link>
          {/* WorkMasters Card */}
          <Link href="/courses/workmasters">
            <div className="p-8 border rounded-lg bg-yellow-50 cursor-pointer hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">WorkMasters</h3>
              <p className="text-lg text-gray-800 mb-6">
                Enhance your career with flexible, industry-relevant programs designed to fit your busy schedule and learning preferences.
              </p>
              <button className="font-bold text-blue-700 hover:text-blue-900">
                Learn more →
              </button>
            </div>
          </Link>
          {/* CapitalMasters Card */}
          <Link href="/courses/capitalmasters">
            <div className="p-8 border rounded-lg bg-purple-50 cursor-pointer hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">CapitalMasters</h3>
              <p className="text-lg text-gray-800 mb-6">
                Build financial acumen and strategic insights with comprehensive training programs focused on capital growth and management.
              </p>
              <button className="font-bold text-blue-700 hover:text-blue-900">
                Learn more →
              </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}