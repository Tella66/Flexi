// "use client";

// import { useState } from "react";
// import { ArrowLeft, ArrowRight } from "lucide-react";
// import TestimonialCard from "./TestimonialCard";
// import Image from "next/image";

// const CustomerSuccessStories = () => {
//   return (
//     <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-4xl mx-auto text-center">
//         <h2 className="text-3xl font-medium text-gray-800 sm:text-4xl mb-4">
//           Customer success stories
//         </h2>
//         <p className="text-lg text-gray-600 leading-relaxed">
//           Find out yourself how our customers are enjoying success with Sage
//           solutions that are transforming their business and helping them thrive
//         </p>
//       </div>
      
//            <div className="flex w-full max-w-5xl mx-auto bg-[#F5F7FA] rounded-[20px] p-6 md:p-10">
//       {/* Left side */}
//       <div className="w-full md:w-1/2 flex flex-col justify-between">
//         <div className="text-3xl text-black mb-2">❝</div>

//         <div className="flex mb-4">
//           {[...Array(5)].map((_, i) => (
//             <span key={i} className="text-yellow-400 text-xl mr-1">★</span>
//           ))}
//         </div>

//         <p className="text-gray-700 text-sm mb-4">
//           “With FBS we slashed our stock-audit time by 60% and virtually eliminated shrinkage”
//         </p>

//         <p className="text-sm text-gray-700 mb-4">
//           Handle payments, AR/AP, general ledger—and slice your data into live KPI reports. Handle payments, AR/AP, general ledger—and slice your data into live KPI reports. Handle payments, AR/AP, general ledger—and slice your data into live KPI reports.
//         </p>

//         <p className="text-base font-medium text-gray-900">
//           Chukwuemeka Okoye – <br />
//           <span className="text-blue-700">Operations Manager, Altrust Pharmacy</span>
//         </p>
//       </div>

//       {/* Right side image */}
//       <div className="rounded-[20px] overflow-hidden w-[250px] md:w-[300px] h-[280px] relative">
// <div className="rounded-[20px] overflow-hidden w-[300px] md:w-[350px] h-[320px] relative">
//   <Image
//     src="/images/Frame737.png"
//     alt="emotions"
//     fill
//     className="object-cover"
//   />
// </div>

// </div>
//         </div>
//       </div>
    

    
//   );
// };

// export default CustomerSuccessStories;
"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function CustomerSuccessStoriess() {
  const [current, setCurrent] = useState(0);

  const testimonials = [
    {
      quote: "With FBS we slashed our stock-audit time by 60% and virtually eliminated shrinkage",
      description:
        "Handle payments, AR/AP, general ledger—and slice your data into live KPI reports. Handle payments, AR/AP, general ledger—and slice your data into live KPI reports.",
      name: "Chukwuemeka Okoye",
      title: "Operations Manager, Altrust Pharmacy",
      image: "/images/Frame737.png",
    },
  ];

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev - 1 + testimonials.length) % testimonials.length);

  const testimonial = testimonials[current];

  return (
    <div>
      {/* Section Header */}
      <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-medium text-gray-800 sm:text-4xl mb-4">
            Customer success stories
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Find out yourself how our customers are enjoying success with Sage
            solutions that are transforming their business and helping them thrive
          </p>
        </div>
      </div>

      {/* Testimonial Carousel */}
      <section className="bg-[#F0F2F5] py-10 px-4">
        <div className="flex justify-center items-center gap-6">
          {/* Left Arrow */}
          <button onClick={prev} className="p-3 rounded-full border bg-white shadow hover:bg-gray-100">
            <ArrowLeft className="h-5 w-5" />
          </button>

          {/* Testimonial Row */}
          <div className="flex gap-4 items-center">
            {/* Text Column */}
            <div className="w-[450px] h-[450px] flex flex-col justify-between bg-white p-6 rounded-[20px] shadow">
              <div className="text-4xl text-black mb-2 leading-tight">❝</div>

              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl mr-1">★</span>
                ))}
              </div>

              <p className="text-gray-700 text-base mb-4 leading-relaxed">
                {testimonial.quote}
              </p>
              <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                {testimonial.description}
              </p>

              <p className="text-base font-medium text-gray-900">
                {testimonial.name} – <br />
                <span className="text-blue-700">{testimonial.title}</span>
              </p>
            </div>

            {/* Image Column */}
            <Image
              src={testimonial.image}
              alt="testimonial"
              width={350}
              height={480}
              className="rounded-[20px] object-cover"
            />
          </div>

          {/* Right Arrow */}
          <button onClick={next} className="p-3 rounded-full border bg-white shadow hover:bg-gray-100">
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="mt-6 flex justify-center gap-2">
          {testimonials.map((_, index) => (
            <div
              key={index}
              className={`w-6 h-2 rounded-full transition-all duration-300 ${
                index === current ? "bg-gray-800" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

