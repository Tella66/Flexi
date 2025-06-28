
"use client"
import React, { useState } from "react";
import Link from 'next/link';

export default function FlexiProcurementSection() {
  const [hoverData, setHoverData] = useState({
    title: "Flexi Procurement & Planning (FPM)",
    description:
      "Manage procurement end-to-end from demand forecasting to purchase order creation. FPM includes reorder automation, RFQ management, vendor comparisons, materials requirement planning (MRP), and supply planning—all aimed at improving cost control and avoiding stock delays.",
  });

  const icons = [
    {
      id: 1,
      title: "Forecasting & Demand Planning",
      description:
        "Get accurate forecasts to plan ahead. Our tools use historical data to predict demand and reduce overstocking or shortages.",
    },
    {
      id: 2,
      title: "Vendor & Purchase Order Management",
      description:
        "Easily create purchase orders and manage vendor performance through an integrated interface and approval workflow.",
    },
    {
      id: 3,
      title: "Reorder Automation",
      description:
        "Automatically generate reorder requests based on safety stock levels, lead times, and real-time inventory data.",
    },
    {
      id: 4,
      title: "RFQs & Price Comparisons",
      description:
        "Send RFQs to multiple vendors and compare quotes side-by-side to get the best deal — fast and accurately.",
    },
    {
      id: 5,
      title: "MRP: Materials Requirement Planning",
      description:
        "Plan procurement of raw materials based on production schedules to ensure availability without excess.",
    },
    {
      id: 6,
      title: "Supply Planning Optimization",
      description:
        "Coordinate supply chain planning to meet demand efficiently while minimizing procurement and storage costs.",
    },
  ];

  return (
    <>
      <style>{`
        .fpm-section {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 48px;
          background-color: #f7fafc;
          border-radius: 24px;
          gap: 40px;
          flex-wrap: wrap;
          max-width: 1200px;
          margin: 0 auto;
        }

        .fpm-image-container.small {
          position: relative;
          width: 200px;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .fpm-image {
          width: 100%;
          height: auto;
          object-fit: contain;
          border-radius: 20px;
          display: block;
        }

        .icon-circle {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          aspect-ratio: 10 / 14;
          
        }

       .circle-icon {
  position: absolute;
  width: 45px;
  height: 45px;
  background: #ffffff;
  border-radius: 50%;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: transform 0.2s ease;
}

.circle-icon:hover {
  transform: scale(1.05);
}

.icon-tooltip {
  position: absolute;
  bottom: 110%;
  left: 50%;
  transform: translateX(-50%);
  background: #3e5773;
  color: white;
  padding: 6px 10px;
  border-radius: 6px;
  white-space: nowrap;
  font-size: 0.75rem;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease, transform 0.3s ease;
  transform: translateX(-50%) translateY(5px);
  z-index: 20;
}

.circle-icon:hover .icon-tooltip {
  opacity: 1;
  transform: translateX(-50%) translateY(0px);
}


        .icon-frame-1 { top: -4%; left: 30%; }
        .icon-frame-2 { top: 15%; left: 70%; }
        .icon-frame-3 { top: 40%; left: 88%; }
        .icon-frame-4 { top: 70%; left: 88%; }
        .icon-frame-5 { top: 102%; left: 65%; }
        .icon-frame-6 { top: 118%; left: 20%; }

        .fpm-content {
          flex: 1;
          max-width: 600px;
          color: #3e5773;
        }

        .fpm-content h2 {
          font-size: 2rem;
          font-weight: 700;
          margin-bottom: 1rem;
          transition: all 0.3s ease;
        }

        .fpm-content p {
          font-size: 1rem;
          line-height: 1.6;
          margin-bottom: 1.5rem;
          transition: all 0.3s ease;
        }

        .fpm-buttons {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .fpm-buttons .primary {
          background-color: #3e5773;
          color: white;
          padding: 12px 28px;
          border: none;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
        }

        .fpm-buttons .secondary {
          background-color: white;
          color: #3e5773;
          border: 1px solid #3e5773;
          padding: 12px 28px;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
        }

        @media (max-width: 768px) {
          .fpm-section {
            flex-direction: column;
            padding: 32px 24px;
          }

          .fpm-content {
            padding-top: 32px;
          }

          .fpm-buttons {
            flex-direction: column;
            align-items: stretch;
          }

          .fpm-buttons .primary,
          .fpm-buttons .secondary {
            width: 100%;
            text-align: center;
          }
        }
      `}</style>

      <div className="fpm-section">
        {/* Image and curved icons */}
        <div className="fpm-image-container small">
          <img
            src="/images/img_ellipse_2.png"
            alt="Cart"
            className="fpm-image"
          />

          <div className="icon-circle">
            {icons.map((icon, index) => (
              <div
                key={icon.id}
                className={`circle-icon icon-frame-${index + 1}`}
                onMouseEnter={() =>
                  setHoverData({
                    title: icon.title,
                    description: icon.description,
                  })
                }
                onMouseLeave={() =>
                  setHoverData({
                    title: "Flexi Procurement & Planning (FPM)",
                    description:
                      "Manage procurement end-to-end from demand forecasting to purchase order creation. FPM includes reorder automation, RFQ management, vendor comparisons, materials requirement planning (MRP), and supply planning—all aimed at improving cost control and avoiding stock delays.",
                  })
                }
              >
                <img
                  src="/images/img_icon_blocks_stocks.svg"
                  alt="icon"
                  className="w-8 h-8"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Right-hand content */}
        <div className="fpm-content">
          <h2>{hoverData.title}</h2>
          <p>{hoverData.description}</p>
          <div className="fpm-buttons">
          
           <Link href="/screens/bookademo" className="primary">
              Get Free Trial →
            </Link>

         <Link href="/screens/demovideos" className="secondary">
            Watch Demo ⏵
         </Link>
          </div>
        </div>
      </div>
    </>
  );
}
