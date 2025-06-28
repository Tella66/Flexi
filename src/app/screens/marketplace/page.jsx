'use client';

import React, { useState } from 'react';

export default function Home() {
  const tabs = ['All', 'Featured', 'Popular'];
  const activeTab = 'Popular';

  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted:', { email, message });
    setEmail('');
    setMessage('');
  };

  const categories = [
    {
      icon: '🧾',
      title: 'Finance & Payments',
      description:
        'Connect to payment gateways, digital banks, and accounting systems to streamline AR/AP, handle taxes, and reconcile transactions',
    },
    {
      icon: '🚚',
      title: 'Logistics & Delivery',
      description:
        'Integrate with courier APIs, route planners, and fleet trackers. Sync Flexi Last-Mile Delivery in real time for seamless order fulfillment',
    },
    {
      icon: '🛒',
      title: 'Retail POS',
      description:
        'Plug in barcode scanners, eCommerce platforms, and digital receipts to extend Flexi Retail POS across channels',
    },
    {
      icon: '📦',
      title: 'Inventory Hardware',
      description:
        'Connect to RFID readers, handheld barcode scanners, and smart shelving for live inventory updates with Flexi Stock Count & WMS.',
    },
    {
      icon: '💼',
      title: 'HR & Payroll',
      description:
        'Hook into payroll engines, attendance systems, or biometric tools to automate HR operations inside Flexi HR',
    },
    {
      icon: '🚚',
      title: 'Logistics & Delivery',
      description:
        'Integrate with courier APIs, route planners, and fleet trackers. Sync Flexi Last-Mile Delivery in real time for seamless order fulfillment',
    },
  ];

  const integrations = [
    {
      name: 'Paystack',
      category: 'Finance & Payments',
      description:
        'Accept payments across multiple channels and sync with Flexi Finance for instant reconciliation and reporting',
    },
    {
      name: 'GIG Logistics',
      category: 'Finance & Payments',
      description:
        'Auto-generate waybills, track deliveries live, and push updates to Flexi Last-Mile dashboard',
    },
    {
      name: 'Shopify',
      category: 'Retail & POS',
      description:
        'Sync your inventory and orders between Flexi and Shopify to create a unified commerce experience',
    },
    {
      name: 'Zebra RFID',
      category: 'Inventory Hardware',
      description:
        'Integrate RFID-based stock tracking to improve visibility and automate physical counts in Flexi Stock Count',
    },
    {
      name: 'WhatsApp Business API',
      category: 'CRM',
      description:
        'Send order updates, delivery notifications, and customer support messages, all from your Flexi CRM',
    },
    {
      name: 'SeamlessPayroll',
      category: 'HR & Payroll',
      description:
        'Run payroll from employee data in Flexi HR and send payouts directly to bank APIs',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <main className="flex justify-center bg-white px-4 text-center pt-6">
        <div className="max-w-2xl">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Expand Your ERP. Unlock <br /> More Possibilities
          </h1>
          <p className="text-gray-600 mb-6">
            Seamlessly connect Flexi Business Solutions to the tools you already use. From payments and
            logistics to HR and customer communication, our growing ecosystem of integrations helps you
            streamline operations, reduce manual work, and scale faster
          </p>
          <button className="bg-slate-700 text-white px-6 py-2 rounded-md hover:bg-slate-800 transition">
            Become a Partner
          </button>
        </div>
      </main>

      {/* Categories Section */}
      <section className="py-16 px-4 md:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-slate-800 mb-6">
          Featured Integration Categories
        </h2>

        <div className="flex justify-center gap-3 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`px-4 py-2 rounded-full border ${
                tab === activeTab
                  ? 'bg-slate-800 text-white'
                  : 'bg-white text-slate-800 border-slate-300'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.map((cat, index) => (
            <div
              key={index}
              className="border rounded-2xl p-5 flex flex-col justify-between shadow-sm hover:shadow-md transition"
            >
              <div className="mb-4">
                <div className="text-2xl mb-2">{cat.icon}</div>
                <h3 className="font-semibold text-slate-800 mb-2">{cat.title}</h3>
                <p className="text-sm text-gray-600">{cat.description}</p>
              </div>
              <button className="mt-4 text-sm text-slate-700 font-medium border rounded-lg py-2 w-full hover:bg-gray-100 transition">
                Learn more
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-16 px-4 md:px-8">
        <div className="flex justify-center gap-3 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`px-4 py-2 rounded-full border text-sm font-medium transition ${
                tab === activeTab
                  ? 'bg-slate-800 text-white'
                  : 'bg-white text-slate-800 border-slate-300'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {integrations.map((item, i) => (
            <div
              key={i}
              className="border rounded-2xl p-5 flex flex-col justify-between shadow-sm hover:shadow-md transition"
            >
              <div className="mb-4">
                <img
                  src="/images/img_frame_blue_gray_700.svg"
                  alt={`${item.name} icon`}
                  className="h-6 w-6 mb-2"
                />
                <h3 className="text-slate-800 font-semibold">{item.name}</h3>
                <p className="text-sm text-gray-500 mb-2">{item.category}</p>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
              <button className="mt-4 text-sm text-slate-700 font-medium border rounded-lg py-2 w-full hover:bg-gray-100 transition">
                Learn more
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Custom Integration Form */}
      <section className="bg-[#f5f7fa] py-20 px-4 flex justify-center items-center">
        <div className="max-w-xl w-full text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold text-[#1e293b] mb-2">
            Need a Custom Integration?
          </h2>
          <p className="text-gray-600">Let us know what tools you want to connect with FBS.</p>
          <p className="text-gray-600 mb-6">We’re always expanding</p>

          <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4">
            <input
              type="email"
              placeholder="Email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              placeholder="Type request for integrations"
              value={message}
              required
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-4 py-3 h-[100px] border border-gray-200 rounded-md text-sm resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="mt-2 bg-[#3b4c66] hover:bg-[#2f3d53] text-white text-sm font-medium px-6 py-3 rounded-md"
            >
              Submit request
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
