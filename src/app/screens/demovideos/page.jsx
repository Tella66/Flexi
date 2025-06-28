'use client';
import React from 'react';

const MarketplacePage = () => {
  const videos = Array(9).fill({
    title: 'Flexi Stock Count (FSC)',
    description:
      'Take control of your inventory accuracy with structured cycle counts, variance detection, and automated reconciliation.',
    thumbnail: '/images/videothumbnail.png', // ✅ 
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-12 xl:px-36 py-12 flex flex-col-reverse lg:flex-row items-center gap-10">
        <div className="w-full lg:w-1/2">
          <nav className="flex items-center space-x-2 mb-6">
            <span className="text-gray-800 font-bold">Home</span>
            <img
              src="/images/chevron-right.svg"
              alt=">"
              className="w-4 h-4"
            />
            <span className="font-bold text-[#3E5773]">Demo Videos</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-800 mb-6 leading-tight">
            Flexi Business Solutions Demo Videos
          </h1>
          <p className="text-base sm:text-lg text-gray-800 leading-relaxed max-w-2xl">
            Demo videos of Flexi Business Solutions to help you get a sense of the
            benefits we offer on our platform. Watch our ERP demo videos of core
            products and see how they help your business work more effectively.
          </p>
        </div>

        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="relative w-full max-w-md aspect-video bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-400/20 to-gray-600/20" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
                <img
                  src="/images/play-icon.svg"
                  alt="Play"
                  className="w-6 h-6"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Videos Section */}
      <section className="bg-white py-12 px-4 sm:px-6 lg:px-12 xl:px-36">
        <h2 className="text-center text-2xl md:text-3xl font-semibold text-[#3E5773] mb-10">
          A look at Flexi Business ERP Demo Videos
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {videos.map((video, index) => (
            <div key={index} className="w-full max-w-sm mx-auto">
              <div className="relative rounded-lg overflow-hidden">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-auto object-cover"
                />
                <button className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md">
                    <svg
                      className="w-5 h-5 text-[#3E5773]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M6.5 5.5v9l7-4.5-7-4.5z" />
                    </svg>
                  </div>
                </button>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-[#3E5773]">
                {video.title}
              </h3>
              <p className="mt-1 text-sm text-[#3E5773]">{video.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default MarketplacePage;
