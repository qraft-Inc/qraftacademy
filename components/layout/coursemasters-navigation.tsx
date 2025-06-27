"use client";

import React, { useState } from "react";
import Link from "next/link";

const CoursemastersNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Become A Course Creator", href: "/courses/coursemasters/become-creator" },
    { name: "Let Us Build Your Course", href: "/courses/coursemasters/build-your-course" },
    { name: "Browse All Our Courses", href: "/courses/coursemasters/browse-courses" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center h-16">
            {/* Desktop Navigation */}
            <nav className="hidden md:flex w-full justify-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-blue-600 font-medium py-2 px-1 transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Mobile menu button */}
            <button
              className="md:hidden text-gray-500 p-2"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
              aria-label="Menu"
            >
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="md:hidden bg-gray-50 pb-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-6 py-3 text-gray-700 hover:bg-gray-100 border-t border-gray-200"
                  onClick={() => {
                    setIsOpen(false);
                  }}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default CoursemastersNavigation;