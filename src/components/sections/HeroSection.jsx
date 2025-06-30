'use client';
import React from 'react';
import Image from 'next/image';
import Button from '../ui/Button';
import Benefits from '../sections/Benefits';
import Link from 'next/link';

export default function HeroSection({
  onWatchDemo,
  onGetFreeTrial,
  onBookDemo,
  email,
  setEmail,
  onSubmitEmail,
}) {
  return (
    <div className="bg-secondary text-white w-full px-6 md:px-10 lg:px-[150px] pt-[40px] pb-[60px] flex flex-col items-center">
      {/* Main Hero Layout */}
      <div className="flex flex-col md:flex-col lg:flex-row gap-10 lg:gap-[80px] items-center w-full max-w-[1200px]">
        {/* Left Side */}
        <div className="flex-1 w-full">
          <h1 className="text-[28px] md:text-[36px] lg:text-[48px] font-inter font-semibold leading-tight mb-[20px] md:mb-[24px]">
            All‑in‑one, Affordable ERP Built with flexibility for African Businesses
          </h1>
          <p className="text-[15px] md:text-[17px] lg:text-[19px] font-satoshi font-medium leading-relaxed mb-[24px] md:mb-[32px]">
            Flexi Business Solutions is an all‑in‑one, affordable ERP built for African SMEs, streamlining inventory, stock counts, procurement, finance and analytics so you can ditch the grunt work and grow.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            <Link
              href="/screens/demovideos"
              className="flex items-center bg-white border border-light rounded-[12px] px-[20px] py-[12px] text-gray-800 transition-all duration-300 hover:bg-gray-100 hover:shadow-md hover:scale-[1.02]"
            >
              <span className="font-satoshi font-bold text-[14px] mr-2">Watch Demo</span>
              <Image src="/images/img_icon_play.svg" alt="Play icon" width={16} height={16} />
            </Link>

            <Link
              href="/screens/bookademo"
              className="flex items-center border border-white rounded-[12px] px-[20px] py-[12px] bg-transparent text-white transition-all duration-300 hover:bg-white hover:text-[#3E5773] hover:shadow-md hover:scale-[1.02]"
            >
              <span className="font-satoshi font-bold text-[14px] mr-2">Get Free Trial</span>
              <Image src="/images/img_arrowright.svg" alt="Arrow icon" width={16} height={16} />
            </Link>
          </div>
        </div>

        {/* Right Side: Email Form */}
        <div className="flex-1 w-full max-w-[450px] bg-white text-black rounded-[20px] border border-light shadow-md p-[24px] md:p-[32px]">
          <h3 className="text-[18px] md:text-[21px] lg:text-[23px] font-satoshi font-bold text-secondary mb-[16px] md:mb-[20px]">
            Please provide your email to see Flexi Business in Action
          </h3>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Business email address*"
            className="w-full border border-light rounded-[6px] px-[16px] py-[12px] mb-[12px] text-[14px]"
          />
          <p className="text-[13px] text-gray-600 mb-[16px]">
            I authorize <strong>fbs</strong> to keep me informed about its products, services and events through emails and phone calls. My data will be handled according to the <span className="underline">Privacy Notice</span>.
          </p>
          <Button variant="primary" className="w-full py-[14px]" onClick={onSubmitEmail}>
            Get free trial
          </Button>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="mt-[48px] md:mt-[64px] w-full flex justify-center">
        <div className="w-full max-w-[1200px] flex flex-col items-center justify-center">
          <Benefits />
        </div>
      </div>
    </div>
  );
}
