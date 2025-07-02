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
    {
      quote: "Their forecasting cut our procurement lead times by 20%, saving us ₦2M in tied‑up cash",
      description:
        "We now avoid overstocking, get better prices from suppliers, and deliver more reliably to customers.",
      name: "Funke Adeyemi",
      title: "Head of Supply Chain, Pure Marketplace",
      image: "/images/Frame737.png",
    }
  ];

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

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
            Find out how our customers are succeeding with Flexi Business Solutions.
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

          {/* Testimonial Content */}
          <div className="flex gap-6 items-center flex-wrap justify-center">
            {/* Left Side - Text */}
            <div className="w-[350px] md:w-[450px] h-auto flex flex-col justify-between bg-white p-6 rounded-[20px] shadow">
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

            {/* Right Side - Image */}
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
