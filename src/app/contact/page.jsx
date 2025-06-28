import React from 'react';

export default function Page() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4 py-12">
      <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-8 bg-white shadow-lg rounded-lg overflow-hidden">
        
        {/* Left Section */}
        <div className="p-8">
          <div className="mb-6">
            <img src="/logo.svg" alt="Flexi Logo" className="h-8" />
          </div>
          <h2 className="text-3xl font-bold text-gray-800 mb-2">FREE trial of flexi business solutions ERP</h2>
          <p className="text-gray-600 mb-6">
            Explore the capabilities of flexi business and see how we can help you manage your business better.
          </p>

          <h3 className="text-xl font-semibold text-gray-700 mb-2">Functionality Includes</h3>
          <ul className="list-disc list-inside text-gray-600 space-y-1">
            <li>Flexi Warehouse (Inventory Mmt)</li>
            <li>Flexi Stock Count (FSC)</li>
            <li>Flexi Last-Mile Delivery (FLMD)</li>
            <li>Flexi Procurement & Planning (FPM)</li>
            <li>Finance & Analytics</li>
            <li>Integrated CRM</li>
            <li>Maintenance Management</li>
            <li>HR</li>
            <li>RFID/IoT</li>
            <li>Plus many more</li>
          </ul>

          <div className="mt-8 grid grid-cols-2 gap-4 text-sm text-gray-700">
            <div className="p-4 bg-gray-100 rounded">
              <strong>Boosts Buyer Confidence</strong><br />
              Prompt fulfillment = better ratings
            </div>
            <div className="p-4 bg-gray-100 rounded">
              <strong>Reliable Order Fulfillment</strong><br />
              Smooth delivery, satisfied customers
            </div>
            <div className="p-4 bg-gray-100 rounded">
              <strong>Inventory in Your Hands</strong><br />
              Full control, real-time stock visibility
            </div>
            <div className="p-4 bg-gray-100 rounded">
              <strong>Tailored to Your Flow</strong><br />
              Works with your Process, your rules
            </div>
          </div>
        </div>

        {/* Right Section: Form */}
        <div className="bg-blue-50 p-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">See flexi business in Action</h3>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" placeholder="First Name *" className="input" />
              <input type="text" placeholder="Last Name *" className="input" />
              <input type="text" placeholder="Company name *" className="input md:col-span-2" />
              <input type="email" placeholder="Email *" className="input" />
              <input type="tel" placeholder="Phone number *" className="input" />
              <select className="input md:col-span-2">
                <option value="">Region *</option>
                <option>Nigeria</option>
                <option>Ghana</option>
              </select>
              <input type="text" placeholder="Employee size" className="input md:col-span-2" />
              <select className="input md:col-span-2">
                <option>Flexi Warehouse, FSC...</option>
              </select>
            </div>
            <p className="text-xs text-gray-500">
              I authorize flexi to keep me informed... <a href="#" className="underline">Privacy Notice</a>.
            </p>
            <button type="submit" className="w-full bg-blue-900 text-white py-2 rounded hover:bg-blue-800">
              Get a free trial
            </button>
            <p className="text-xs text-center text-gray-500">
              We’ll reach out to you within one business day to schedule your demo
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
