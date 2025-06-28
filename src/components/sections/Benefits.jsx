import React from 'react';
import Image from 'next/image';

const features = [
  {
    title: 'Boosts Buyer Confidence',
    subtitle: 'Prompt fulfillment = better ratings'
  },
  {
    title: 'Reliable Order Fulfillment',
    subtitle: 'Smooth delivery, satisfied customers'
  },
  {
    title: 'Inventory in Your Hands',
    subtitle: 'Full control, real-time stock visibility'
  },
  {
    title: 'Tailored to Your Flow',
    subtitle: 'Works with your Process, your rules'
  }
];

export default function HeroFeatures() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-[1200px] mx-auto mt-0">
   
      {features.map((feature, index) => (
        <div
          key={index}
          className="bg-overlay border-2 border-white border-opacity-20 rounded-[12px] p-[14px] w-[277px] h-[72px] flex items-center"
        >
          <Image
            src="/images/img_icon_radiocirclecheck.svg"
            alt="Check icon"
            width={24}
            height={24}
            className="mr-[10px]"
          />
          <div className="flex flex-col">
            <span className="text-[16px] font-satoshi font-bold leading-[22px] text-white">
              {feature.title}
            </span>
            <span className="text-[13px] font-satoshi font-medium leading-[18px] text-light">
              {feature.subtitle}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
