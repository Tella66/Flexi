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
    <div className="bg-secondary text-white w-full px-6 lg:px-[150px] pt-[100px] pb-[60px] flex flex-col items-center">
      {/* Main Hero Layout */}
      <div className="flex flex-col lg:flex-row gap-[80px] items-center w-full max-w-[1200px]">
        {/* Left Side */}
        <div className="flex-1">
          <h1 className="text-[32px] lg:text-[48px] font-inter font-semibold leading-tight mb-[24px]">
            All‑in‑one, Affordable ERP Built with flexibility for African Businesses
          </h1>
          <p className="text-[16px] lg:text-[19px] font-satoshi font-medium leading-relaxed mb-[32px]">
            Flexi Business Solutions is an all‑in‑one, affordable ERP built for African SMEs, streamlining inventory, stock counts, procurement, finance and analytics so you can ditch the grunt work and grow
          </p>

         <div className="flex flex-col sm:flex-row gap-[16px]">
  <Link
    href="/screens/demovideos"
    className="flex items-center bg-white border border-light rounded-[12px] px-[24px] py-[12px] hover:bg-gray-50 text-gray-800"
  >
    <span className="font-satoshi font-bold text-[14px] mr-2">Watch Demo</span>
    <Image src="/images/img_icon_play.svg" alt="Play icon" width={16} height={16} />
  </Link>

  <Link
    href="/screens/bookademo"
    className="flex items-center bg-transparent hover:bg-white hover:bg-opacity-10 rounded-[12px] px-[24px] py-[12px] border border-white"
  >
    <span className="font-satoshi font-bold text-[14px] text-white mr-2">Get Free Trial</span>
    <Image src="/images/img_arrowright.svg" alt="Arrow icon" width={16} height={16} />
  </Link>
</div>

        </div> 

        {/* Right Side Form */}
        <div className="flex-1 max-w-[450px] bg-white text-black rounded-[20px] border border-light shadow-md p-[32px]">
          <h3 className="text-[20px] lg:text-[23px] font-satoshi font-bold text-secondary mb-[20px]">
            Please provide your email to see Flexi Business in Action
          </h3>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Business email address*"
            className="w-full border border-light rounded-[6px] px-[16px] py-[12px] mb-[16px] text-[14px]"
          />
          <p className="text-[13px] text-gray-600 mb-[16px]">
            I authorize <strong>fbs</strong> to keep me informed about its products, services and events through emails and phone calls. My data will be handled according to the <span className="underline">Privacy Notice</span>.
          </p>
          <Button variant="primary" className="w-full py-[14px]" onClick={onSubmitEmail}>
            Get free trial
          </Button>
        </div>
      </div>

      {/* Four Columns */}
      <div className="mt-[64px] w-full">
        <Benefits />
      </div>
    </div>
  );
}
