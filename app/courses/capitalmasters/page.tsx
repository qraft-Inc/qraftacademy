import React from 'react';

const CapitalMastersPage = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-6">Capital Masters</h1>
      <p className="text-lg mb-4">
        Welcome to the Capital Masters page. This is where we explore the world of capital,
        investment, and financial growth.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-100 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-3">Investment Strategies</h2>
          <p>Learn about various investment strategies to grow your capital.</p>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-3">Market Analysis</h2>
          <p>Understand how to analyze market trends and make informed decisions.</p>
        </div>
      </div>
      <div className="mt-8 text-center">
        <p className="text-xl font-medium">More creative content coming soon!</p>
      </div>
    </div>
  );
};

export default CapitalMastersPage;
