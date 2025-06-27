import React from "react";

const BrowseTalent = () => {
  const menu = {
    name: "WorkMasters",
    href: "/courses/workmasters",
    dropdown: [
      { name: "Work Readiness Bootcamp", href: "/courses/workmasters/readiness-bootcamp" },
      { name: "Apprenticeship & Employability Opportunities", href: "/courses/workmasters/apprenticeship-employability" },
      { name: "Browse All Our Freelance Talent", href: "/courses/workmasters/browse-talent" },
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Browse All Our Freelance Talent</h1>
        <p className="text-lg text-gray-700">
          Discover a diverse pool of freelance talent ready to take on your projects. Browse profiles, review portfolios, and connect with skilled professionals to meet your needs.
        </p>
      </div>
    </div>
  );
};

export default BrowseTalent;