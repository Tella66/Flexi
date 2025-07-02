'use client';
import React from 'react';
import Image from 'next/image';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function ClientStories() {
  return (
    <section className="bg-[#29394C] px-4 sm:px-8 lg:px-20 py-16 flex flex-col items-center gap-12">
      {/* Section Header: Icon beside text */}
      <div className="flex items-center gap-3">
        <Image 
          src="/images/frame78.png" // Make sure this path is correct
          alt="Section Icon"
          width={28}
          height={28}
          className="object-contain"
        />
        <Link href="/screens/successStories">
           <h2 className="text-white font-medium text-[26px] sm:text-[30px] cursor-pointer hover:underline">
                Customer Stories
              </h2>
         </Link>
      </div>

      {/* Testimonials */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-[1140px]">
        {[
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
        ].map((testimonial, index) => (
          <div
            key={index}
            className="bg-white border border-[rgba(176,196,222,0.2)] rounded-[15px] p-5 flex flex-col gap-4"
          >
            <div className="bg-[#EBF0F4] rounded-[13px] px-4 py-3 flex justify-center">
              <div className="bg-[#D8E0EA] rounded-md px-2 py-1">
                <span className="text-[#1E2A38] text-[18px] font-medium">{testimonial.company}</span>
              </div>
            </div>
            <p className="text-[#1E2A38] text-base font-medium leading-relaxed">
              "{testimonial.quote}"
            </p>
            <p className="text-[#737373] text-sm font-medium">{testimonial.author}</p>
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <svg key={i} viewBox="0 0 21 21" className="w-5 h-5">
                  <polygon
                    points="10.5,1 13.5,7 21,7 15.75,11.5 18,18 10.5,14 3,18 5.25,11.5 0,7 6.5,7"
                    fill="#FFDA00"
                  />
                </svg>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <div className="flex gap-4 mt-6">
        <button className="w-12 h-12 rounded-full border border-white flex items-center justify-center text-white hover:bg-white hover:text-[#1E2A38] transition">
          <ArrowLeft className="w-5 h-5" />
        </button>
        <button className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#1E2A38] hover:bg-gray-200 transition">
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
}
