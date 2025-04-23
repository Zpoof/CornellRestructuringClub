import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[70vh]">
        <div className="absolute inset-0">
          <video
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            poster="https://static.wixstatic.com/media/94f024_e2a59c987a7c49ecb6c5c1bd878e4721f000.jpg/v1/fill/w_1280,h_800,al_c,q_85,usm_0.33_1.00_0.00,enc_avif,quality_auto/94f024_e2a59c987a7c49ecb6c5c1bd878e4721f000.jpg"
          >
            <source src="https://video.wixstatic.com/video/94f024_e2a59c987a7c49ecb6c5c1bd878e4721/1080p/mp4/file.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative h-full flex flex-col items-center justify-center text-white text-center">
          <p className="text-lg mb-2">Cornell's Inaugural Financial Restructuring Organization</p>
          <h1 className="text-5xl font-semibold">CORNELL RESTRUCTURING CLUB</h1>
        </div>
      </div>

      {/* About Us Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h2 className="text-4xl font-semibold text-center mb-16">About Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          <div className="flex flex-col items-center text-center h-full">
            <div className="w-full h-px bg-gray-300 mb-8"></div>
            <h3 className="text-2xl font-semibold mb-6">Professional Development</h3>
            <p className="text-gray-700 mb-auto">
              Cornell Restructuring Club prepares students for opportunities in restructuring and distressed investing through our holistic education program. Our students apply their education from the club to become top performers once they begin their internships and full-time roles.
            </p>
            <Link 
              to="/apply" 
              className="bg-black text-white px-8 py-2 hover:bg-gray-800 transition-colors mt-8"
            >
              Apply
            </Link>
          </div>
          <div className="flex flex-col items-center text-center h-full">
            <div className="w-full h-px bg-gray-300 mb-8"></div>
            <h3 className="text-2xl font-semibold mb-6">Case Studies</h3>
            <p className="text-gray-700 mb-auto">
              The club's curriculum centers on in‑depth analysis of case studies—ranging from out‑of‑court restructurings and Chapter 11 proceedings to liquidations and the volatility of distressed investments. By dissecting these scenarios, members hone their critical‐thinking skills and learn to evaluate the interests and incentives of every stakeholder involved.
            </p>
            <Link 
              to="/what-we-do" 
              className="bg-black text-white px-8 py-2 hover:bg-gray-800 transition-colors mt-8"
            >
              Case Studies
            </Link>
          </div>
          <div className="flex flex-col items-center text-center h-full">
            <div className="w-full h-px bg-gray-300 mb-8"></div>
            <h3 className="text-2xl font-semibold mb-6">Education</h3>
            <p className="text-gray-700 mb-auto">
              Through the education program, selected students will acquire a robust foundation in corporate finance, restructuring-specific content, and financial modeling. The Cornell Restructuring Club is dedicated to preparing members for excellence—both throughout the recruitment process and for their professional experiences.
            </p>
            <Link 
              to="/resources" 
              className="bg-black text-white px-8 py-2 hover:bg-gray-800 transition-colors mt-8"
            >
              Resources
            </Link>
          </div>
        </div>
      </div>

      {/* Social Media */}
      <div className="text-center py-16 bg-gray-50">
        <p className="text-xl">
          Follow{' '}
          <a 
            href="https://instagram.com/cornellrestructuring" 
            className="text-black hover:underline font-semibold"
            target="_blank"
            rel="noopener noreferrer"
          >
            @CornellRestructuring
          </a>
          {' '}on Instagram to stay updated!
        </p>
      </div>
    </div>
  );
};

export default Home; 