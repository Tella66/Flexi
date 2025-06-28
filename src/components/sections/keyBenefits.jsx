import React from 'react';
import Image from 'next/image';
import Button from '../ui/Button';
import Link from 'next/link';

export default function KeyBenefits({ onBookDemo }) {
  const benefits = [
    "Reduce stock‑outs by up to 30% with real‑time inventory visibility",
    "Cut cycle‑count time in half using automated Flexi Stock Count",
    "Slash procurement lead times by 25% with integrated demand forecasting",
    "Boost on‑time deliveries through optimized last‑mile routing",
    "Make data‑driven decisions with enterprise‑grade analytics dashboards"
  ];

  const products = [
    {
      icon: "/images/img_frame_blue_gray_700.svg",
      title: "Finance & Analytics:",
      description: "Handle payments, AR/AP, general ledger—and slice your data into live KPI reports."
    },
    {
      icon: "/images/img_icon_warehousewms.svg",
      title: "Flexi Warehouse (Inventory Mgmt.)",
      description: "Track stock levels, batch/expiry dates and multi‑location warehouses."
    },
    {
      icon: "/images/img_frame_blue_gray_700_30x30.svg",
      title: "Flexi Procurement & Planning (FPM)",
      description: "Trigger reorders, forecast demand, manage RFQs and supplier quotes."
    },
    {
      icon: "/images/img_icon_blocks_stocks.svg",
      title: "Flexi Stock Count (FSC)",
      description: "Automate cycle counts, reconcile variances and push adjustments in one click."
    },
    {
      icon: "/images/img_frame_30x30.svg",
      title: "Flexi Integrated CRM & Sales",
      description: "Boost customer retention and sales conversion by managing leads, tracking communication, and nurturing relationships"
    },
    {
      icon: "/images/img_frame_black_900.svg",
      title: "HR and Email Services",
      description: "Streamline people operations with employee records, onboarding, leave and attendance tracking, and role-based access control"
    }
  ];

  return (
    <div className="bg-white w-full shadow-sm">
      <div className="flex flex-col lg:flex-row px-6 lg:px-[150px] py-[99px] gap-[50px]">
        <div className="flex flex-col w-full lg:w-[587px]">
          <div className="flex flex-row items-center mb-[48px] lg:mb-[96px]">
            <Image src="/images/img_frame.svg" alt="Frame icon" width={36} height={36} className="mr-[24px]" />
            <h2 className="text-[24px] lg:text-[30px] font-inter font-medium leading-[30px] lg:leading-[37px] text-accent">
              Key Benefits
            </h2>
          </div>
          <div className="flex flex-col gap-[32px] lg:gap-[82px] mb-[48px] lg:mb-[95px]">
            {benefits.map((text, i) => (
              <div key={i} className="flex flex-row items-start">
                <Image src="/images/img_icon_radiocirclecheck_blue_gray_900.svg" alt="Check" width={36} height={36} className="mr-[24px] mt-[6px]" />
                <span className="text-[16px] lg:text-[19px] font-satoshi font-medium leading-[24px] lg:leading-[28px] text-primary">
                  {text}
                </span>
              </div>
            ))}
          </div>
         
<Link href="/screens/bookademo" className="w-full lg:w-[207px]">
  <Button
    variant="primary"
    className="w-full lg:w-[207px] rounded-[12px] py-[16px]"
  >
    Book Demo
  </Button>
</Link>
        </div>

        <div className="bg-white rounded-[20px] shadow-lg p-[24px] lg:p-[36px] w-full lg:w-[503px]">
          <h3 className="text-[16px] font-satoshi font-bold leading-[22px] text-secondary mb-[24px]">
            CORE PRODUCTS
          </h3>
          <div className="flex flex-col">
            {products.map((product, index) => (
              <div key={index}>
                <div className="flex flex-row items-start py-[12px]">
                  <Image src={product.icon} alt="Icon" width={30} height={30} className="mr-[24px] mt-1" />
                  <div className="flex flex-col flex-1">
                    <span className="text-[16px] font-satoshi font-bold leading-[22px] text-accent">{product.title}</span>
                    <span className="text-[13px] font-satoshi font-medium leading-[19px] text-gray-1 mt-[4px]">{product.description}</span>
                  </div>
                  <Image src="/images/img_arrowright_gray_800.svg" alt="Arrow" width={20} height={20} className="hidden sm:block" />
                </div>
                {index < 5 && <div className="bg-light-1 h-[1px] w-full my-[12px]" />}
              </div>
            ))}
            <div className="mt-[24px]">
              <span className="text-[13px] font-satoshi font-medium leading-[19px] text-secondary">
                Plus: Maintenance Management, Last-Mile Delivery, and RFID/IoT modules.
              </span>
            </div>
            <div className="flex flex-row items-center mt-[24px] cursor-pointer">
              <span className="text-[16px] font-satoshi font-bold leading-[22px] text-secondary">
                EXPLORE ALL
              </span>
              <Image
                src="/images/img_arrowright_gray_800.svg"
                alt="Arrow right"
                width={20}
                height={20}
                className="ml-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
