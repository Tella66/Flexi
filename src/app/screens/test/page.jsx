// export default function VideoGrid() {
//   const videos = Array(9).fill({
//     title: "Flexi Stock Count (FSC)",
//     description:
//       "Take control of your inventory accuracy with structured cycle counts, variance detection, and automated reconciliation.",
//     thumbnail: "../images/videothumbnail.png", // Make sure this image is in your public folder
//   });

//   return (
   
  

//  <section className="px-36 py-16 bg-white">
//         <h2 className="text-3xl font-bold text-center mb-12" style={{color: '#3E5773'}}>
//           A look at Flexi Business ERP Demo Videos
//         </h2>
//         <div className="space-y-6">
//           {/* Row 1 */}
//           <div className="grid grid-cols-3 gap-6">
//             {Array(3).fill('').map((_, index) => (
//               <div key={`row1-${index}`} className="bg-white rounded-2xl shadow-lg overflow-hidden">
//                 <div className="relative h-52 bg-gradient-to-br from-gray-400/20 to-gray-600/20">
//                   <div className="absolute inset-0 flex items-center justify-center">
//                     <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg">
//                       <img src="/images/play-icon.svg" alt="Play" className="w-5 h-5" />
//                     </div>
//                   </div>
//                 </div>
//                 <div className="p-6">
//                   <h3 className="text-lg font-bold text-gray-800 mb-3">Flexi Stock Count (FSC)</h3>
//                   <p className="text-gray-800 text-sm leading-relaxed">
//                     Take control of your inventory accuracy with structured cycle counts,
//                     variance detection, and automated reconciliation.
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
          
//           {/* Row 2 */}
//           <div className="grid grid-cols-3 gap-6">
//             {Array(3).fill('').map((_, index) => (
//               <div key={`row2-${index}`} className="bg-white rounded-2xl shadow-lg overflow-hidden">
//                 <div className="relative h-52 bg-gradient-to-br from-gray-400/20 to-gray-600/20">
//                   <div className="absolute inset-0 flex items-center justify-center">
//                     <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg">
//                       <img src="/images/play-icon.svg" alt="Play" className="w-5 h-5" />
//                     </div>
//                   </div>
//                 </div>
//                 <div className="p-6">
//                   <h3 className="text-lg font-bold text-gray-800 mb-3">Flexi Stock Count (FSC)</h3>
//                   <p className="text-gray-800 text-sm leading-relaxed">
//                     Take control of your inventory accuracy with structured cycle counts,
//                     variance detection, and automated reconciliation.
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
          
//           {/* Row 3 */}
//           <div className="grid grid-cols-3 gap-6">
//             {Array(3).fill('').map((_, index) => (
//               <div key={`row3-${index}`} className="bg-white rounded-2xl shadow-lg overflow-hidden">
//                 <div className="relative h-52 bg-gradient-to-br from-gray-400/20 to-gray-600/20">
//                   <div className="absolute inset-0 flex items-center justify-center">
//                     <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg">
//                       <img src="/images/play-icon.svg" alt="Play" className="w-5 h-5" />
//                     </div>
//                   </div>
//                 </div>
//                 <div className="p-6">
//                   <h3 className="text-lg font-bold text-gray-800 mb-3">Flexi Stock Count (FSC)</h3>
//                   <p className="text-gray-800 text-sm leading-relaxed">
//                     Take control of your inventory accuracy with structured cycle counts,
//                     variance detection, and automated reconciliation.
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>     
//   );
// };
 "use client";

import React, { useState } from "react";

const IntegrationRequestForm = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Submitted:", { email, message });
  };

  return (
    <section className="bg-[#f5f7fa] min-h-screen flex items-center justify-center px-4">
      <div className="max-w-xl w-full text-center">
        <h2 className="text-2xl sm:text-3xl font-semibold text-[#1e293b] mb-2">
          Need a Custom Integration?
        </h2>
        <p className="text-gray-600 mb-1">
          Let us know what tools you want to connect with FBS.
        </p>
        <p className="text-gray-600 mb-6">We’re always expanding</p>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center gap-4"
        >
          <input
            type="email"
            placeholder="Email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            placeholder="Type request for integrations"
            value={message}
            required
            onChange={(e) => setMessage(e.target.value)}
            className="w-full px-4 py-3 h-[100px] border border-gray-200 rounded-md text-sm resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            type="submit"
            className="mt-2 bg-[#3b4c66] hover:bg-[#2f3d53] text-white text-sm font-medium px-6 py-3 rounded-md"
          >
            Submit request
          </button>
        </form>
      </div>
    </section>
  );
};

export default IntegrationRequestForm;






















