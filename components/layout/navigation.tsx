"use client"

import React, { useState } from 'react'
import Link from "next/link"
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  
  const navItems = [
    {
      name: "WorkMasters",
      href: "/courses/workmasters",
      dropdown: [
        { name: "Work Readiness Bootcamp", href: "/courses/workmasters/readiness-bootcamp" }, // Placeholder href
        { name: "Apprenticeship &Employability Opportunities", href: "/courses/workmasters/apprenticeship-employability" }, // Placeholder href
        { name: "Browse All Our Freelance Talent", href: "/courses/workmasters/browse-talent" }, // Placeholder href
      ]
    },
    {
      name: "CourseMasters",
      href: "/courses/coursemasters",
      dropdown: [
        { name: "Become A Course Creator", href: "/courses/coursemasters/become-creator" }, // Placeholder href
        { name: "Let Us Build Your Course", href: "/courses/coursemasters/build-your-course" }, // Placeholder href
        { name: "Browse All Our Courses", href :"/courses/coursemasters/browse-courses" }, // Placeholder href
      ]
    },
    {
      name: "CapitalMasters",
      href: "/courses/capitalmasters",
      dropdown: [
        { name: "Investor Network", href: "/courses/capitalmasters/investor-network" }, // Placeholder href
        { name: "Startup&Business Growth Hub", href: "/courses/capitalmasters/startup-business-growth-hub" }, // Placeholder href
        { name: "Browse All Our StartUps", href: "/courses/capitalmasters/browse-startups" }, // Placeholder href
      ]
    },
    {
      name: "TechMasters",
      href: "/courses/techmasters",
      dropdown: [
        { name: "Hackathons And Open Source", href: "/courses/techmasters/hackathons-open-source" }, // Placeholder href
        { name: "Research &Development Labs", href: "/courses/techmasters/research-development-labs" }, // Placeholder href
        { name: "Browse All Our EdTech Solutions", href: "/courses/techmasters/browse-edtech-solutions" }, // Placeholder href
      ]
    },
    {
      name: "Future of Work Consortium",
      href: "https://futureofworkconsortium.netlify.app",
      dropdown: [
        { name: "Board", href: "/future-of-work-consortium/board" }, // Placeholder href
        { name: "Policies", href: "/future-of-work-consortium/policies" }, // Placeholder href
        { name: "Members", href: "/future-of-work-consortium/members" }, // Placeholder href
      ]
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
      ]
    },
    {
      name: "Community",
      href: "/community",
      dropdown: [
        { name: "Future of work tour", href: "/future-of-work-consortium" },
        { name: "events", href: "#" },
        { name: "special groups", href: "#" },
      ]
    },
    { name: "QraftLabs", href: "https://labs.qraftacademy.com/" }
  ]

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      {/* Navigation Bar Only */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center h-16">
            {/* Desktop Navigation */}
            <nav className="hidden md:flex w-full justify-center space-x-8">
              {navItems.map((item) => (
                item.dropdown ? (
                  <div key={item.name} className="relative group flex items-center"> {/* Added flex items-center */}
                    <Link href={item.href} className="text-gray-700 hover:text-blue-600 font-medium py-2 px-1 transition-colors">
                      {item.name}
                    </Link>
                    <div className="absolute left-0 top-full mt-0 w-48 bg-white rounded-md shadow-lg z-10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-200"> {/* Adjusted top and mt */}
                      {item.dropdown.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.name}
                          href={dropdownItem.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          {dropdownItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-gray-700 hover:text-blue-600 font-medium py-2 px-1 transition-colors flex items-center" // Added flex items-center
                  >
                    {item.name}
                  </Link>
                )
              ))}
            </nav>

            {/* Mobile menu button */}
            <button
              className="md:hidden text-gray-500 p-2"
              onClick={() => { setIsOpen(!isOpen) }}
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
                item.dropdown ? (
                  <div key={item.name}>
                    <Link href={item.href} className="block px-6 py-3 text-gray-700 hover:bg-gray-100 border-t border-gray-200 w-full text-left" onClick={() => { setIsOpen(false) }}>
                      {item.name}
                    </Link>
                    <div className="pl-8 bg-gray-100">
                      {item.dropdown.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.name}
                          href={dropdownItem.href}
                          className="block px-6 py-3 text-gray-700 hover:bg-gray-200 border-t border-gray-200 text-sm"
                          onClick={() => { setIsOpen(false) }}
                        >
                          {dropdownItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block px-6 py-3 text-gray-700 hover:bg-gray-100 border-t border-gray-200"
                    onClick={() => { setIsOpen(false) }}
                  >
                    {item.name}
                  </Link>
                )
              ))}
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

export default Navigation
