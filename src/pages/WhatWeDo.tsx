import React from 'react';
import Marquee from 'react-fast-marquee';

const WhatWeDo = () => {
  const firstRowLogos = [
    '/logos/image1.png',
    '/logos/image2.png',
    '/logos/image3.png',
    '/logos/image4.png',
    '/logos/image5.png',
    '/logos/image6.png',
  ];

  const secondRowLogos = [
    '/logos/image7.png',
    '/logos/image8.png',
    '/logos/image9.png',
    '/logos/image10.png',
    '/logos/image11.png',
    '/logos/image13.png',
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[40vh] w-full">
        <div className="absolute inset-0">
          <img
            src="https://static.wixstatic.com/media/eefa83c233f24b8d9d616a3132f36c11.jpg/v1/fill/w_3004,h_570,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/eefa83c233f24b8d9d616a3132f36c11.jpg"
            alt="Modern glass building architecture"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" /> {/* Increased overlay opacity */}
        </div>
        <div className="relative h-full flex items-center justify-center">
          <h1 className="text-white text-2xl md:text-5xl pt-16 font-normal">
            What We Do
          </h1>
        </div>
      </div>

      {/* Education Series Section - Black Background */}
      <div className="bg-black text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-normal mb-8">Our Education Series</h2>
            <p className="text-lg leading-relaxed">
              Cornell Restructuring Club prepares our students for success in the recruitment process and for their professional experiences through our rigorous education program for sophomore students in their fall semester. Through our education program, students will develop an understanding of accounting, valuation, financial modeling, and restructuring specific content. Exposing students to restructuring case studies is a cornerstone of the education program, empowering them to apply their learning critically to real‑world scenarios.
            </p>
          </div>
        </div>
      </div>

      {/* Case Studies Section */}
      <div className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold mb-16">Case Studies</h2>
          
          {/* First Row - Moving Right */}
          <div className="mb-20">
            <Marquee
              gradient={true}
              gradientColor="#f9fafb"
              speed={40}
              pauseOnHover={true}
            >
              {firstRowLogos.map((logo, index) => (
                <div key={index} className="mx-8">
                  <img src={logo} alt={`Company Logo ${index + 1}`} className="h-24 w-auto" />
                </div>
              ))}
            </Marquee>
          </div>

          {/* Second Row - Moving Left */}
          <div>
            <Marquee
              gradient={true}
              gradientColor="#f9fafb"
              speed={40}
              direction="right"
              pauseOnHover={true}
            >
              {secondRowLogos.map((logo, index) => (
                <div key={index} className="mx-8">
                  <img src={logo} alt={`Company Logo ${index + 1}`} className="h-24 w-auto" />
                </div>
              ))}
            </Marquee>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo; 