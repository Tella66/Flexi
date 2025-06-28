import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function VideoSection() {
  return (
    <div className="bg-white w-full px-6 lg:px-[150px] py-[100px]">
      <div className="flex flex-col items-center text-center">
        {/* Section Header */}
        <div className="flex items-center mb-[24px]">
          <Image src="/images/img_frame.svg" alt="Frame icon" width={36} height={36} className="mr-[10px]" />
          <h2 className="text-[24px] lg:text-[30px] font-inter font-medium text-accent">
            Introducing Flexi Business Solutions
          </h2>
        </div>

        {/* Video Image */}
        <Image
          src="/images/img_frame_1000008739.png"
          alt="Flexi Demo Video"
          width={1030}
          height={443}
          className="rounded-[20px] w-full max-w-[1030px] mb-[40px]"
        />

        {/* Benefits Grid */}
        <div className="flex flex-wrap justify-center gap-[10px] mb-[40px]">
          {Array.from({ length: 4 }, (_, index) => (
            <div
              key={index}
              className="bg-white border-2 border-light border-opacity-20 rounded-[12px] p-[16px] w-[250px] flex items-center"
            >
              <Image
                src="/images/img_icon_radiocirclecheck_blue_gray_900.svg"
                alt="Check icon"
                width={30}
                height={30}
                className="mr-[10px]"
              />
              <div>
                <span className="text-[16px] font-satoshi font-bold text-primary block">
                  Flexible UX
                </span>
                <span className="text-[13px] font-satoshi font-medium text-accent">
                  Works good, easy early usage
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <p className="text-[19px] font-satoshi font-medium text-primary mb-[24px]">
          "Start Your Free 14‑Day Trial"
        </p>
       <Link
  href="screens/bookademo"
  className="flex items-center bg-button-primary text-white font-satoshi font-bold text-[16px] leading-[22px] rounded-[12px] px-[36px] py-[16px] hover:bg-opacity-90">

  Book Demo
  <Image
    src="/images/img_icon_play_blue_gray_700.svg"
    alt="Play icon"
    width={16}
    height={16}
    className="ml-[5px]"
  />
</Link>

      </div>
    </div>
  );
}
