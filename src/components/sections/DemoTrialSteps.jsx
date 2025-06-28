import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function DemoTrialSteps({ onBookDemo }) {
  const steps = [
    "Sign up with your company email",
    "Receive a welcome email with a 2‑minute guided‑tour video link",
    "Get instant sandbox access for a 14‑day free trial",
    "Schedule an onboarding call with our team to configure your first module"
  ];

  return (
    <div className="bg-light-2 w-full px-6 lg:px-[150px] py-[96px]">
      <div className="flex flex-row items-center justify-center mb-[60px] lg:mb-[90px]">
        <Image
          src="/images/img_frame.svg"
          alt="Frame icon"
          width={36}
          height={36}
          className="mr-[24px]"
        />
        <h2 className="text-[24px] lg:text-[30px] font-inter font-medium leading-[30px] lg:leading-[37px] text-accent">
          Demo & Trial Details
        </h2>
      </div>

      <div className="flex flex-col lg:flex-row justify-center items-center gap-[24px] lg:gap-[10px] mb-[50px]">
        {steps.map((title, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="bg-white border-2 border-light border-opacity-20 rounded-[15px] p-[20px] w-[261px] h-[196px] flex flex-col items-center justify-center mb-[10px]">
              <div
                className="w-[30px] h-[30px] rounded-full flex items-center justify-center mb-[20px]"
                style={{ backgroundImage: 'url(/images/img_vector.svg)' }}
              >
                <span className="text-[14px] font-inter font-medium leading-[17px] text-accent">
                  {index + 1}
                </span>
              </div>
              <span className="text-[16px] font-satoshi font-bold leading-[24px] text-primary text-center">
                {title}
              </span>
            </div>
            {index < steps.length - 1 && (
              <Image
                src="/images/img_vector_6.svg"
                alt="Arrow"
                width={2}
                height={12}
                className="mt-[10px] hidden lg:block"
              />
            )}
          </div>
        ))}
      </div>

      <div className="flex flex-col items-center">
        <p className="text-[19px] font-satoshi font-medium leading-[26px] text-primary mb-[24px]">
          &quot;Start Your Free 14‑Day Trial&quot;
        </p>
        <button
          onClick={onBookDemo}
          className="flex flex-row items-center bg-button-primary rounded-[12px] px-[36px] py-[16px] hover:bg-opacity-90"
        >
<Link
  href="/screens/bookademo"
  className="text-[16px] font-satoshi font-bold leading-[22px] text-white mr-[5px]"
>
  Book Demo
</Link>
          <Image
            src="/images/img_icon_play_blue_gray_700.svg"
            alt="Play icon"
            width={16}
            height={16}
          />
        </button>
      </div>
    </div>
  );
}
