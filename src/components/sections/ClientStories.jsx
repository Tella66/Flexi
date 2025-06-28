import React from 'react';

export default function ClientStories() {
  return (
    <section className="bg-[#29394C] px-4 sm:px-8 lg:px-20 py-16 flex flex-col items-center gap-12">
      {/* Section Header */}
      <div className="flex justify-center items-center gap-4">
        <h2 className="text-white font-medium text-[26px] sm:text-[30px]">Customer Stories</h2>
        <div className="w-9 h-9 bg-white rounded flex justify-center items-center">
          <svg viewBox="0 0 36 36" className="w-6 h-6">
            <path d="M4.5 4.5l27 27M4.5 31.5l27-27" stroke="white" strokeWidth="1.25" />
          </svg>
        </div>
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
                  <polygon points="10.5,1 13.5,7 21,7 15.75,11.5 18,18 10.5,14 3,18 5.25,11.5 0,7 6.5,7" fill="#FFDA00" />
                </svg>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons with Opposite Arrows */}
      <div className="flex gap-4">
        {/* Left Arrow Button */}
        <button className="bg-white border border-white rounded-full w-12 h-12 flex items-center justify-center">
          <svg viewBox="0 0 24 24" className="w-5 h-5 rotate-180">
            <path d="M5 12l14 0M12 5l7 14" stroke="#1E2A38" strokeWidth="1.25" />
          </svg>
        </button>

        {/* Right Arrow Button */}
        <button className="bg-white border border-white rounded-full w-12 h-12 flex items-center justify-center">
          <svg viewBox="0 0 24 24" className="w-5 h-5">
            <path d="M5 12l14 0M12 5l7 14" stroke="#1E2A38" strokeWidth="1.25" />
          </svg>
        </button>
      </div>
    </section>
  );
}
