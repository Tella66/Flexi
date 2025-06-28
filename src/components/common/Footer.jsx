import React from 'react';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-secondary w-full px-6 md:px-[80px] lg:px-[150px] py-[30px]">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-[30px]">
        {/* Top Content */}
        <div className="flex flex-col lg:flex-row justify-between gap-[30px]">
          {/* Left Section */}
          <div className="flex flex-col max-w-[500px]">
            {/* Logo */}
            <div className="mb-[12px]">
              <span className="text-[21px] font-satoshi font-bold leading-[30px] text-white">
                Flexi
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-[20px] lg:text-[28px] font-satoshi font-medium leading-snug text-white mb-[16px]">
              All‑in‑one, Affordable ERP Built for African SMEs
            </h2>

            {/* Watch Demo Button */}
            <button className="flex items-center w-fit bg-white border border-light rounded-[12px] px-[20px] py-[8px] hover:bg-gray-100 transition">
              <span className="text-[14px] font-satoshi font-bold text-gray-900 mr-[6px]">
                Watch Demo
              </span>
              <Image
                src="/images/img_icon_play.svg"
                alt="Play icon"
                width={16}
                height={16}
              />
            </button>
          </div>

          {/* Right Section - Contact */}
          <div className="flex flex-col gap-[12px]">
            <h3 className="text-[16px] font-satoshi font-bold text-white">Contact Details</h3>
            <div className="flex items-center text-white text-[13px] gap-[8px]">
              <Image src="/images/img_icon_email.svg" alt="email" width={20} height={20} />
              <span>info@flexibusinesssolutions.com</span>
            </div>
            <div className="flex items-center text-white text-[13px] gap-[8px]">
              <Image src="/images/img_icon_phone_call_contact.svg" alt="phone" width={20} height={20} />
              <span>+234 800 123 4567</span>
            </div>
            <div className="flex items-center text-white text-[13px] gap-[8px]">
              <Image src="/images/img_icon_support.svg" alt="support" width={20} height={20} />
              <span>support.flexibusinesssolutions.com</span>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col sm:flex-row justify-between items-center border-t border-white border-opacity-20 pt-[20px] gap-[12px]">
          <span className="text-[13px] font-satoshi text-white text-center sm:text-left">
            © Flexi Business Solutions 2025 — ERP solution for Africa. All rights reserved.
          </span>
          <div className="flex gap-[16px] text-[13px] text-white font-satoshi">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
