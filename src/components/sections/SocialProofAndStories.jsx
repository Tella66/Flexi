import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function SocialProofAndStories() {
  const clients = ["Altrust Pharmacy", "MedPlus", "Pure Marketplace", "GreenLeaf Logistics"];

  const stories = [
    {
      company: "Altrust Pharmacy",
      quote: "With FBS we slashed our stock‑audit time by 60% and virtually eliminated shrinkage",
      author: "Chukwuemeka Okoye - Operations Manager"
    },
    {
      company: "Pure Marketplace",
      quote: "Their forecasting cut our procurement lead times by 20%, saving us ₦2M in tied‑up cash",
      author: "Funke Adeyemi - Head of Supply Chain"
    },
    {
      company: "Altrust Pharmacy",
      quote: "With FBS we slashed our stock‑audit time by 60% and virtually eliminated shrinkage",
      author: "Chukwuemeka Okoye - Operations Manager"
    }
  ];

  return (
    <div className="bg-light-2 w-full px-6 lg:px-[150px] py-[96px]">
      {/* Social Proof */}
      <div className="flex flex-col items-center mb-[90px]">
        <div className="flex flex-row items-center justify-center mb-[24px]">
          <Image src="/images/img_frame.svg" alt="Frame icon" width={36} height={36} className="mr-[12px]" />
          <h2 className="text-[24px] lg:text-[30px] font-inter font-medium leading-[30px] lg:leading-[37px] text-accent">
            Our Clients' Social Proof
          </h2>
        </div>
        <div className="flex flex-wrap justify-center gap-x-[60px] gap-y-6">
          {clients.map((client, index) => (
            <div key={index} className="text-[20px] lg:text-[29px] font-satoshi font-medium leading-[32px] lg:leading-[41px] text-primary">
              {client}
            </div>
          ))}
        </div>
      </div>

      {/* Customer Stories */}
      <div className="flex flex-col items-center">
        <div className="flex flex-row items-center justify-center mb-[60px]">
          <Image
            src="/images/img_frame_blue_gray_700_36x36.svg"
            alt="Frame icon"
            width={36}
            height={36}
            className="mr-[15px]"
          />
      <Link href="/screens/successStories">
        <h2 className="text-[24px] lg:text-[30px] font-inter font-medium leading-[30px] lg:leading-[37px] text-accent cursor-pointer hover:underline transition">
          Customer Stories
      </h2>
     </Link>
        </div>
        <div className="flex flex-wrap gap-[24px] justify-center">
          {stories.map((story, index) => (
            <div
              key={index}
              className="bg-white border border-light rounded-[15px] p-[20px] w-full max-w-[364px] h-[auto] flex flex-col"
            >
              <button className="bg-white rounded-[15px] text-[18px] lg:text-[21px] font-satoshi font-medium leading-[26px] lg:leading-[30px] text-primary mb-[24px] text-left">
                {story.company}
              </button>
              <p className="text-[16px] font-satoshi font-medium leading-[24px] text-primary mb-[12px] flex-1">
                {story.quote}
              </p>
              <div className="text-[13px] font-satoshi leading-[18px] text-gray-2">
                <span className="font-bold">{story.author.split(' - ')[0]} -</span>
                <span className="font-medium"> {story.author.split(' - ')[1]}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
