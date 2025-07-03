import React from 'react';

const TechMastersPage = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-6">Tech Masters</h1>
      <p className="text-lg mb-4">
        Welcome to the Tech Masters page. This is where we dive deep into the world of technology,
        software development, and innovation.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-100 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-3">Software Development</h2>
          <p>Explore various programming languages, frameworks, and development methodologies.</p>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-3">Emerging Technologies</h2>
          <p>Stay updated on the latest trends and advancements in the tech industry.</p>
        </div>
      </div>
      <div className="mt-8 text-center">
        <p className="text-xl font-medium">More exciting content coming soon!</p>
      </div>
    </div>
  );
};

export default TechMastersPage;
