'use client';
import React from 'react';

export default function ContactPage() {
  return (
     <div>
     <div className="max-w-4xl mx-auto px-4 py-8 ml-7"> {/* Added ml-7 here */}
      {/* Breadcrumb */}
      <div className="text-sm text-gray-600 mb-4">
        <span className="text-gray-800">Home</span> &gt; Contact Us Today
      </div>

      {/* Main heading */}
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Contact Us Today</h1>

      {/* Subheading */}
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        Learn More About Flexi Business Solutions
      </h2>

      {/* Content */}
      <div className="prose prose-lg text-gray-700 mb-8">
        <p>
          Contents here, an encouragement to contact for help if needed to get to know more and be onboarded into the solution easily
        </p>
      </div>

      {/* Optional: Add a contact form or contact information */}
      <div className="bg-gray-50 p-6 rounded-lg">
        <h3 className="text-xl font-medium mb-4">Get in touch</h3>
        <p className="mb-4">Fill out our contact form or reach us directly:</p>
        <ul className="space-y-2">
          <li>Email: info@flexibusiness.com</li>
          <li>Phone: (123) 456-7890</li>
          <li>Address: 123 Business St, Suite 100</li>
        </ul>
      </div>
    </div>
    <section className="bg-[#1E293B] min-h-[35vh] px-6 py-10 flex flex-col items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl w-full justify-center">
        {/* Customer Support */}
        <div className="bg-white rounded-lg p-[12px] flex flex-col items-center text-center gap-3 text-sm">
          <h3 className="text-[#1E2A38] font-medium">Customer Support</h3>
          <img src="/icons/customer-support.svg" alt="Customer Support Icon" className="w-8 h-8" />
          <div className="text-[#1E2A38]">
            <p>1-900-FLEXI</p>
            <p>800-900-0987</p>
            <p className="text-[#3E5773]">info@flexibusiness.com</p>
          </div>
        </div>

        {/* Head Office */}
        <div className="bg-white rounded-lg p-[12px] flex flex-col items-center text-center gap-3 text-sm">
          <h3 className="text-[#1E2A38] font-medium">Head Office</h3>
          <img src="/icons/head-office.svg" alt="Head Office Icon" className="w-8 h-8" />
          <p className="text-[#1E2A38]">210 Kols town, Lagos, Nigeria</p>
        </div>

        {/* Product Demo */}
        <div className="bg-white rounded-lg p-[12px] flex flex-col text-[#1E2A38] gap-3 text-sm items-center text-center">
          <h3 className="font-medium">Get a Product Demo</h3>
          <svg viewBox="0 0 24 24" className="w-8 h-8">
            <path d="M3 5h18v14H3z" stroke="#1E2A38" fill="none" strokeWidth="1.5"/>
            <path d="M12 11l3 2H9z" fill="#1E2A38"/>
          </svg>
          <ul className="leading-relaxed pl-5 list-disc space-y-1 text-left">
            <li>See how Flexi works for your specific use case</li>
            <li>Ask questions live</li>
            <li>Get expert recommendations</li>
          </ul>
          <a href="#" className="text-[#3E5773] font-semibold mt-1 underline hover:no-underline">
            Get Demo
            <svg viewBox="0 0 24 24" className="w-4 h-4 inline ml-1">
              <path d="M9 5l7 7-7 7" fill="none" stroke="#3E5773" strokeWidth="2"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
      <div className="max-w-2xl mx-auto p-6">
      {/* Heading */}
      <h1 className="text-3xl font-bold text-[#3E5773] mb-8">Request a Call Back</h1>
      
      {/* Form */}
      <form className="space-y-6">
        {/* First Name */}
        <div>
          <label className="block font-bold mb-1">
            First Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="Your first name"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3E5773]"
            required
          />
        </div>

        {/* Last Name */}
        <div>
          <label className="block font-bold mb-1">
            Last Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="Your last name"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3E5773]"
            required
          />
        </div>

        {/* Work Email */}
        <div>
          <label className="block font-bold mb-1">
            Work email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            placeholder="abc@sample.com"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3E5773]"
            required
          />
        </div>

        {/* Phone Number */}
        <div>
          <label className="block font-bold mb-1">
            Phone number <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            placeholder="+1(555) 000-0000"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3E5773]"
            required
          />
        </div>

        {/* Company Name */}
        <div>
          <label className="block font-bold mb-1">
            Company name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="Company name"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3E5773]"
            required
          />
        </div>

        {/* Additional Comments */}
        <div>
          <label className="block font-bold mb-1">Additional comments</label>
          <textarea
            placeholder=""
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3E5773]"
            rows={4}
          />
        </div>

        {/* Checkbox */}
        <div className="flex items-start">
          <div className="flex items-center h-5">
            <input
              type="checkbox"
              className="w-4 h-4 text-[#3E5773] border-gray-300 rounded focus:ring-[#3E5773]"
            />
          </div>
          <label className="ml-2 block text-sm text-gray-700">
            I authorize dsp to keep me informed about it's products, services and events through emails and phone calls. My data will be handled according to the Privacy Notice.
          </label>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-[#3E5773] text-white py-3 px-4 rounded-md font-medium hover:bg-[#2d4057] transition-colors"
        >
          Submit
        </button>
      </form>
    </div>  

    </div>
  );
}
