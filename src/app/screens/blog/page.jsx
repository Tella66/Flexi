'use client';
import React from 'react';
import {
  Search,
  ChevronRight,
  ChevronLeft,
  MoreHorizontal,
} from 'lucide-react';
import Image from 'next/image';

const BlogMarketplace = () => {
  const videos = Array(3).fill({
    title: 'Flexi Stock Count (FSC)',
    description:
      'Take control of your inventory accuracy with structured cycle counts, variance detection, and automated reconciliation.',
    thumbnail: '/images/videothumbnail.png', // ✅ Put image inside /public/images
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-12 xl:px-36 py-8">
        <div className="space-y-6">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm">
            <span className="text-gray-900 font-bold">Home</span>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <span className="text-[#3E5773] font-bold">Blog</span>
          </div>

          {/* Title and Description */}
          <div className="space-y-4">
            <h1 className="text-3xl sm:text-4xl font-semibold text-gray-900 leading-tight">
              Blog & Insights
            </h1>
            <p className="text-gray-900 text-base max-w-4xl leading-relaxed">
              Explore expert articles, industry insights, and best practices to
              help you get the most from your Flexi Business Solution
              subscription.
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-md">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search..."
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-500 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="px-4 sm:px-6 lg:px-12 xl:px-36 py-12">
        <div className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#3E5773]">
            Featured Articles
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.map((video, index) => (
              <div key={index} className="w-full">
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
                <p className="mt-1 text-sm text-[#3E5773]">
                  {video.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Articles */}
      <section className="px-4 sm:px-6 lg:px-12 xl:px-36 py-12">
        <div className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#3E5773]">
            Latest Articles
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.map((video, index) => (
              <div key={index} className="w-full">
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
                <p className="mt-1 text-sm text-[#3E5773]">
                  {video.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pagination */}
      <section className="px-4 sm:px-6 lg:px-12 xl:px-36 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Previous Page */}
          <div className="flex items-center gap-2">
            <ChevronLeft className="w-5 h-5 text-gray-900" />
            <span className="text-gray-900 font-bold">Previous Page</span>
          </div>

          {/* Page Numbers */}
          <div className="flex items-center gap-2 flex-wrap justify-center">
            {[1, 2, 3, 4].map((num) => (
              <div
                key={num}
                className={`w-10 h-10 border ${
                  num === 1 ? 'border-gray-900' : 'border-gray-300'
                } rounded-lg flex items-center justify-center`}
              >
                <span className="text-gray-900 font-bold">{num}</span>
              </div>
            ))}
            <div className="w-10 h-10 border border-gray-300 rounded-lg flex items-center justify-center">
              <MoreHorizontal className="w-5 h-5 text-gray-900" />
            </div>
            <div className="w-10 h-10 border border-gray-300 rounded-lg flex items-center justify-center">
              <span className="text-gray-900 font-bold">10</span>
            </div>
          </div>

          {/* Next Page */}
          <div className="flex items-center gap-2">
            <span className="text-gray-900 font-bold">Next Page</span>
            <ChevronRight className="w-5 h-5 text-gray-900" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogMarketplace;
