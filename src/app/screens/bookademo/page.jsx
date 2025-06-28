"use client";

import React, { useState } from 'react';
import ClientStories from '../../../components/sections/ClientStories';

const FlexiLandingPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    companyName: '',
    email: '',
    phoneNumber: '',
    region: '',
    employeeSize: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-[#EBF0F4] px-4 py-10">
      {/* Stacked Layout */}
      <div className="flex flex-col items-center gap-16">
        {/* Top Section with FSC and Form */}
        <div className="flex flex-col md:flex-row gap-28 items-start justify-center w-full max-w-7xl">
          {/* FSC Section */}
          <div className="w-full md:w-1/2 flex flex-col gap-8">
            <h1 className="text-[#334155] font-bold text-[30px] leading-[1.2]">
              FREE trial of flexi business solutions ERP
            </h1>
            <p className="text-[#334155] text-sm leading-[1.5]">
              Explore the capabilities of flexi business and see how we can help you manage your business better.
            </p>

            <div className="flex flex-col gap-2">
              <h2 className="text-[#334155] font-bold text-[16px] leading-[1.5]">
                Functionality Includes
              </h2>
              <p className="text-[#334155] font-medium text-sm whitespace-pre-line">
                {`Flexi Warehouse (Inventory Mmt)
Flexi Stock Count (FSC)
Flexi Last‑Mile Delivery (FLMD)
Flexi Procurement & Planning (FPM)
Finance & Analytics:
Integrated CRM
Maintenance Management
HR
RFID/IoT
Plus many more`}
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {[{
                title: "Boosts Buyer Confidence",
                description: "Prompt fulfillment = better ratings"
              }, {
                title: "Reliable Order Fulfillment",
                description: "Smooth delivery, satisfied customers"
              }, {
                title: "Inventory in Your Hands",
                description: "Full control, real-time stock visibility"
              }, {
                title: "Tailored to Your Flow",
                description: "Works with your Process, your rules"
              }].map((feature, index) => (
                <div key={index} className="bg-[#F5F7FA] rounded-xl p-3 flex items-center gap-2 w-[220px] h-[100px]">
                  <svg viewBox="0 0 24 24" className="w-5 h-5">
                    <circle cx="12" cy="12" r="10" fill="#737373" stroke="#1E2A38" strokeWidth="1.2" />
                    <path d="M8 12l4-4m0 0l4 4m-4-4v8" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <div>
                    <h3 className="text-[#1E2A38] font-bold text-sm leading-[1.5]">{feature.title}</h3>
                    <p className="text-[#3E5773] font-medium text-xs leading-[1.5]">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form Section */}
          <div className="w-full md:w-[500px] flex flex-col border border-[#D8E0EA] rounded-lg bg-[#EBF0F4]">
            <div className="border-b border-[#EBF0F4] px-6 py-4">
              <h2 className="text-[#334155] font-bold text-[20px] leading-[1.5] text-center">
                See flexi business in Action
              </h2>
            </div>

            <div className="px-6 py-6">
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="flex gap-4">
                  {['firstName', 'lastName'].map((field, idx) => (
                    <div key={idx} className="flex flex-col w-full">
                      <label className="text-[#4A4A4A] text-sm">{field === 'firstName' ? 'First Name *' : 'Last Name *'}</label>
                      <input
                        type="text"
                        name={field}
                        value={formData[field]}
                        onChange={handleInputChange}
                        placeholder={field === 'firstName' ? 'Your first name' : 'Your last name'}
                        className="border border-[#D8E0EA] rounded-md px-3 py-2 text-sm text-[#C2C7CC]"
                      />
                    </div>
                  ))}
                </div>

                {['companyName', 'email', 'phoneNumber'].map((field, idx) => (
                  <div key={idx} className="flex flex-col">
                    <label className="text-[#4A4A4A] text-sm">{field.replace(/([A-Z])/g, ' $1')} *</label>
                    <input
                      type={field === 'email' ? 'email' : 'text'}
                      name={field}
                      value={formData[field]}
                      onChange={handleInputChange}
                      placeholder={field === 'email' ? 'abc@sample.com' : ''}
                      className="border border-[#D8E0EA] rounded-md px-3 py-2 text-sm text-[#C2C7CC]"
                    />
                  </div>
                ))}

                <div className="flex flex-col">
                  <label className="text-[#4A4A4A] text-sm">Region *</label>
                  <select
                    name="region"
                    value={formData.region}
                    onChange={handleInputChange}
                    className="border border-[#D8E0EA] rounded-md px-3 py-2 text-sm text-[#C2C7CC] bg-white"
                  >
                    <option value="">Please select</option>
                    <option value="africa">Africa</option>
                    <option value="north-america">North America</option>
                    <option value="europe">Europe</option>
                    <option value="asia">Asia</option>
                  </select>
                </div>

                <div className="flex flex-col">
                  <label className="text-[#4A4A4A] text-sm">Employee size</label>
                  <input
                    type="text"
                    name="employeeSize"
                    value={formData.employeeSize}
                    onChange={handleInputChange}
                    placeholder="Enter value"
                    className="border border-[#D8E0EA] rounded-md px-3 py-2 text-sm text-[#C2C7CC]"
                  />
                </div>

                <div className="bg-white border-2 border-[#3E5773] rounded-xl px-4 py-3">
                  <span className="text-[#1E2A38] font-bold text-sm">
                    Flexi Warehouse (Inventory Mgmt), Flexi Stock Count (FSC)
                  </span>
                </div>

                <p className="text-[#737373] text-xs text-center">
                  I authorize fbs to keep me informed about its products and services.
                </p>

                <button
                  type="submit"
                  className="bg-[#3E5773] text-white font-bold text-sm rounded-md px-4 py-2 w-full"
                >
                  Get a free trial
                </button>

                <p className="text-[#737373] text-xs text-center">
                  We'll reach out within one business day to schedule your demo
                </p>
              </form>
            </div>
          </div>
        </div>

        {/* Full Width Customer Stories Section */}
        <div className="w-full max-w-none">
          <ClientStories />
        </div>
      </div>
    </div>
  );
};

export default FlexiLandingPage;
