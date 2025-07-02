'use client';
import React from 'react';
import Image from 'next/image';

export default function PartnerForm() {
  return (
    <div className="max-w-[520px] mx-auto bg-white rounded-[18px] shadow-xl overflow-hidden text-[#1E2A38] border border-gray-200">
      {/* Header */}
      <div className="px-6 pt-8 text-center">
        <h2 className="text-[24px] sm:text-[26px] font-bold mb-2">Become a Partner</h2>
        <p className="text-[14px] sm:text-[15px] font-medium leading-relaxed text-[#4A4A4A]">
          Are you a software vendor, logistics provider, or service platform?
          <br />
          Join the Flexi ecosystem and give SMEs across Africa the tools to grow
        </p>
      </div>

      {/* Banner Image with curved top corners */}
      <div className="w-full mt-5 px-6">
        <Image
          src="/images/emoji-banner.jpg" // Replace with correct path
          alt="Emoji Banner"
          width={500}
          height={160}
          className="rounded-[12px] object-cover w-full h-[160px]"
        />
      </div>

      {/* Form Fields */}
      <form className="px-6 pt-6 pb-8 flex flex-col gap-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium block mb-1">First Name *</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Your first name"
              required
            />
          </div>
          <div>
            <label className="text-sm font-medium block mb-1">Last Name *</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Your last name"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium block mb-1">Work email *</label>
            <input
              type="email"
              className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="abc@sample.com"
              required
            />
          </div>
          <div>
            <label className="text-sm font-medium block mb-1">Phone number *</label>
            <input
              type="tel"
              className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="+1 (555) 000-0000"
              required
            />
          </div>
        </div>

        <div>
          <label className="text-sm font-medium block mb-1">Company name *</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Company name"
            required
          />
        </div>

        <div>
          <label className="text-sm font-medium block mb-1">Additional comments</label>
          <textarea
            rows={4}
            className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm resize-none focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Write any comments here..."
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="flex justify-end mt-4">
          <button
            type="submit"
            className="bg-[#3E5773] hover:bg-[#33485f] text-white rounded-md text-sm font-medium px-5 py-2 transition"
          >
            Submit request
          </button>
        </div>
      </form>
    </div>
  );
}
