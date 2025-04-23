import React from 'react';

const Resources = () => {
  return (
    <div className="min-h-screen pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h1 className="text-4xl font-semibold mb-12">Resources</h1>

        {/* Educational Resources */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Educational Resources</h2>
          <p className="text-gray-700 max-w-4xl mb-8">
            We believe in making restructuring education accessible to all Cornell students. Below you'll find our complete educational series, covering everything from the basics of restructuring to advanced case studies.
          </p>
          
          {/* Resource Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Sample Resource Card */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Introduction to Restructuring</h3>
              <p className="text-gray-600 mb-4">
                Learn the fundamentals of corporate restructuring and bankruptcy processes.
              </p>
              <button className="text-black hover:text-gray-700 font-semibold">
                Download PDF →
              </button>
            </div>
          </div>
        </div>

        {/* Case Studies */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Case Studies</h2>
          <p className="text-gray-700 max-w-4xl mb-8">
            Explore our collection of real-world restructuring case studies, analyzing notable corporate restructurings and their outcomes.
          </p>
          
          {/* Case Studies Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Sample Case Study Card */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Hertz Bankruptcy</h3>
              <p className="text-gray-600 mb-4">
                Analysis of Hertz's Chapter 11 bankruptcy and successful reorganization.
              </p>
              <button className="text-black hover:text-gray-700 font-semibold">
                View Case Study →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resources; 