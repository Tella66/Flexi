import React from 'react';
import Image from 'next/image';

export default function CertificationsAndFSC() {
  return (
    <div className="bg-white w-full px-6 md:px-[80px] lg:px-[150px] py-[60px] lg:py-[96px]">
      {/* Heading */}
      <div className="flex flex-col sm:flex-row items-center justify-center mb-[50px] lg:mb-[90px] text-center sm:text-left">
        <Image
          src="/images/img_frame.svg"
          alt="Frame icon"
          width={36}
          height={36}
          className="mr-0 sm:mr-[9px] mb-2 sm:mb-0"
        />
        <h2 className="text-[24px] lg:text-[30px] font-inter font-medium leading-tight text-accent">
          Certification & Awards
        </h2>
      </div>

      {/* Content */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-[24px] lg:gap-[36px]">
        <Image
          src="/images/img_image_51.png"
          alt="Certification"
          width={120}
          height={120}
          className="rounded-full"
        />

        <div className="bg-white border-2 border-light border-opacity-40 rounded-[15px] shadow-sm p-[20px] w-full max-w-[364px] h-auto flex flex-row items-center">
          {/* Star + Icon */}
          <div className="flex flex-col items-center w-[40px] h-[40px] mr-[16px]">
            <div className="bg-primary border border-primary rounded-[10px] w-[20px] h-[20px] flex items-center justify-center mb-[1px]">
              <div
                className="bg-white w-[6px] h-[6px]"
                style={{
                  clipPath:
                    'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
                }}
              />
            </div>
            <Image
              src="/images/img_vector_black_900.svg"
              alt="Award icon"
              width={15}
              height={16}
            />
          </div>

          {/* Text */}
          <div className="flex flex-col">
            <span className="text-[16px] font-satoshi font-bold leading-[24px] text-primary">
              Nigeria Tech Forum
            </span>
            <span className="text-[14px] lg:text-[16px] font-satoshi font-medium leading-[24px] text-primary">
              SaaS Startup of the Year" 2024
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
