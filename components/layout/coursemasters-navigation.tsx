"use client";

import Link from "next/link";
import React, { useState } from "react";

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
                  className="text-gray-700 hover:text-blue-600 font-medium py-2 px-1 transition-colors"
                  href={item.href}
                  key={item.name}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Mobile menu button */}
            <button
              aria-label="Menu"
              className="md:hidden text-gray-500 p-2"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              <svg className="size-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Navigation */}
          {isOpen ? <div className="md:hidden bg-gray-50 pb-4">
              {navItems.map((item) => (
                <Link
                  className="block px-6 py-3 text-gray-700 hover:bg-gray-100 border-t border-gray-200"
                  href={item.href}
                  key={item.name}
                  onClick={() => {
                    setIsOpen(false);
                  }}
                >
                  {item.name}
                </Link>
              ))}
            </div> : null}
        </div>
      </div>
    </header>
  );
};

export default CoursemastersNavigation;