"use client"

import Image from "next/image"
import Link from "next/link"
import React, { useState } from 'react'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    {
      name: "WorkMasters",
      href: "/courses/workmasters",
      dropdown: [
        { name: "Work Readiness Bootcamp", href: "/courses/workmasters/readiness-bootcamp" },
        { name: "Apprenticeship & Employability Opportunities", href: "/courses/workmasters/apprenticeship-employability" },
        { name: "Browse All Our Freelance Talent", href: "/courses/workmasters/browse-talent" },
      ],
    },
    {
      name: "CourseMasters",
      href: "/courses/coursemasters",
      dropdown: [
        { name: "Become A Course Creator", href: "/courses/coursemasters/become-creator" },
        { name: "Let Us Build Your Course", href: "/courses/coursemasters/build-your-course" },
        { name: "Browse All Our Courses", href: "https://classroom.qraftacademy.com/" }, // Updated to external link
      ],
    },
    {
      name: "CapitalMasters",
      href: "/courses/capitalmasters",
      dropdown: [
        { name: "Investor Network", href: "/courses/capitalmasters/investor-network" },
        { name: "Financial Literacy & Business Growth", href: "/courses/capitalmasters/startup-business-growth-hub" },
        { name: "Browse All Our StartUps", href: "/courses/capitalmasters/browse-startups" },
      ],
    },
    {
      name: "TechMasters",
      href: "/courses/techmasters",
      dropdown: [
        { name: "Hackathons And Open Source", href: "/courses/techmasters/hackathons-open-source" },
        { name: "Research & Development", href: "/courses/techmasters/research-development-labs" },
        { name: "Browse All Our Tech Solutions", href: "/courses/techmasters/browse-edtech-solutions" },
      ],
    },
    {
      name: "Our Spaces",
      href: "/spaces",
      dropdown: [
        { name: "QraftLabs", href: "https://labs.qraftacademy.com/" },
        { name: "Qraft Solutions Hub", href: "#" },
      ],
    },
    {
      name: "Future of Work Consortium",
      href: "https://futureofwork.qraftacademy.com/", // Updated to external link
      dropdown: [
        { name: "Boards And Committees", href: "https://futureofwork.qraftacademy.com/board" }, // Updated to external link
        { name: "Policies And Advocacy", href: "https://futureofwork.qraftacademy.com/policies" }, // Updated to external link
        { name: "Members", href: "https://futureofwork.qraftacademy.com/members" }, // Updated to external link
      ],
    },
    {
      name: "Programs",
      href: "/programs",
      dropdown: [
        { name: "Care Economy", href: "/programs/care-economy" },
        { name: "Knowledge Economy", href: "/programs/knowledge-economy" },
        { name: "Digital Economy", href: "/programs/digital-economy" },
        { name: "Gig Economy", href: "/programs/gig-economy" },
        { name: "Creative Economy", href: "/programs/creative-economy" },
        { name: "Innovation Economy", href: "/programs/innovation-economy" },
      ],
    },
    {
      name: "Community",
      href: "/community",
      dropdown: [
        { name: "Future of work tour", href: "/future-of-work-consortium" },
        { name: "Events", href: "#" },
        { name: "Special groups", href: "#" },
      ],
    },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center h-16">
            <nav className="hidden md:flex w-full justify-center space-x-8">
              {navItems.map((item) =>
                item.dropdown ? (
                  <div className="relative group flex items-center" key={item.name}>
                    <Link
                      className="text-gray-700 hover:text-blue-600 font-medium py-2 px-1 transition-colors"
                      href={item.href}
                    >
                      {item.name}
                    </Link>
                    <div className="absolute left-0 top-full mt-0 w-48 bg-white rounded-md shadow-lg z-10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-200">
                      {item.dropdown.map((dropdownItem) => (
                        <Link
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          href={dropdownItem.href}
                          key={dropdownItem.name}
                        >
                          {dropdownItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    className="text-gray-700 hover:text-blue-600 font-medium py-2 px-1 transition-colors flex items-center"
                    href={item.href}
                    key={item.name}
                  >
                    {item.name}
                  </Link>
                )
              )}
            </nav>
            <button
              aria-label="Menu"
              className="md:hidden text-gray-500 p-2"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              <svg className="size-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path
                    d="M6 18L18 6M6 6l12 12"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                  />
                ) : (
                  <path
                    d="M4 6h16M4 12h16M4 18h16"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                  />
                )}
              </svg>
            </button>
          </div>
          {isOpen ? (
            <div className="md:hidden bg-gray-50 pb-4">
              {navItems.map((item) =>
                item.dropdown ? (
                  <div key={item.name}>
                    <Link
                      className="block px-6 py-3 text-gray-700 hover:bg-gray-100 border-t border-gray-200 w-full text-left"
                      href={item.href}
                      onClick={() => {
                        setIsOpen(false);
                      }}
                    >
                      {item.name}
                    </Link>
                    <div className="pl-8 bg-gray-100">
                      {item.dropdown.map((dropdownItem) => (
                        <Link
                          className="block px-6 py-3 text-gray-700 hover:bg-gray-200 border-t border-gray-200 text-sm"
                          href={dropdownItem.href}
                          key={dropdownItem.name}
                          onClick={() => {
                            setIsOpen(false);
                          }}
                        >
                          {dropdownItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
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
                )
              )}
            </div>
          ) : null}
        </div>
      </div>
    </header>
  );
};

export default Navigation;
