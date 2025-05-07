// import React from "react";
// import Image from "next/image";
// import { Commented, Threedost } from "@/app/icon";

// const Chatbox = () => {
//   return (
//     <div className="max-w-full w-full">
//       <div className="border-b-2 border-b-[#C8C8C8] py-[9px] px-[15px] w-full">
//         <div className="flex items-center gap-[8px]">
//           <div className="w-[48px] h-[48px] relative">
//             <Image
//               src="/message-user.png"
//               width={48}
//               height={48}
//               alt="messageperson"
//             />
//             <p className="bg-[#036B30] absolute right-0 top-[34px] rounded-full border border-white w-[8px] h-[8px]"></p>
//           </div>
//           <p className="font-[700] text-[14px] text-[#1E293B]">X_AE_A-13</p>
//         </div>
//       </div>
//       <div className="px-[32px] py-[40px] ">
//         <div>
//           <div className="flex items-start gap-[12px]">
//             <Image
//               src="/message-user.png"
//               width={48}
//               height={48}
//               alt="messageperson"
//             />
//             <div className="max-w-[405px] w-full bg-[#F4F4F4] p-[12px] rounded-[8px]">
//               <div className="flex justify-between  ">
//                 <p className="font-[500] text-[14px] text-[#0C1024]">Bessie</p>
//                 <div>
//                   <Threedost />
//                 </div>
//               </div>
//               <p className="font-[400] text-[14px] text-[#27364B] mt-[12px]">
//                 Aliquam magna Lorem ipsum dolor sit amet consectetur. Aliquam
//                 magna. Lorem ipsum dolor sit
//               </p>
//               <p className="font-[400] text-[12px]  text-[#5D6778] mt-[12px] text-end ">
//                 12:45 PM
//               </p>
//             </div>
//           </div>
//           <div className="flex items-end justify-end mt-[24px]">
//             <div className="max-w-[410px] w-full bg-[#CD508C] p-[12px] rounded-[8px] ">
//               <p className="font-[400] text-[14px] text-[#FFFFFF]">
//                 Aliquam magna Lorem ipsum dolor sit amet consectetur. Aliquam
//                 magna. Lorem ipsum dolor sit Aliquam magna Lorem ipsum dolor sit
//                 amet consectetur. Aliquam magna. LoresitAliquam magna Lorem
//                 ipsum dolor sit amet consectetur. Aliquamagna. Lorem ipsum dolor
//                 sit
//               </p>
//               <p className="font-[400] text-[12px]  text-[#F1F4F9] mt-[12px] text-end ">
//                 12:45 PM
//               </p>
//             </div>
//           </div>
//         </div>
//         <div className="flex items-center gap-[27px] justify-between w-full mt-[64px]">
//           <div className="flex items-center gap-[10px] w-full">
//             <Image
//               src="/auth-images/notifyOne.png"
//               width={40}
//               height={40}
//               alt="messageperson"
//             />
//             <input
//               type="text"
//               placeholder="Write your comment.."
//               className="py-[8px] px-[12px] rounded-full border border-[#CBD5E1] max-w-full w-full"
//             />
//           </div>
//           <Commented />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Chatbox;

"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Commented, Delete, Report, Threedost } from "@/app/icon";

const Chatbox = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !(dropdownRef.current as any).contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="max-w-full w-full">
      {/* Header */}
      <div className="border-b-2 border-b-[#C8C8C8] py-[9px] px-[15px] w-full">
        <div className="flex items-center gap-[8px]">
          <div className="w-[48px] h-[48px] relative">
            <Image
              src="/message-user.png"
              width={48}
              height={48}
              alt="messageperson"
            />
            <p className="bg-[#036B30] absolute right-0 top-[34px] rounded-full border border-white w-[8px] h-[8px]"></p>
          </div>
          <p className="font-[700] text-[14px] text-[#1E293B]">X_AE_A-13</p>
        </div>
      </div>

      {/* Messages */}
      <div className="lg:px-[32px] px-[10px] py-[40px]">
        <div>
          {/* Received Message */}
          <div className="flex items-start gap-[12px] relative">
            <Image
              src="/message-user.png"
              width={48}
              height={48}
              alt="messageperson"
            />
            <div className="max-w-[405px] w-full bg-[#F4F4F4] p-[12px] rounded-[8px]">
              <div className="flex justify-between relative">
                <p className="font-[500] text-[14px] text-[#0C1024]">Bessie</p>
                <div className="relative" ref={dropdownRef}>
                  <div onClick={() => setDropdownOpen(!dropdownOpen)} className="cursor-pointer">
                    <Threedost />
                  </div>
                  {dropdownOpen && (
                    <div className="absolute right-0 mt-2 w-[120px] bg-white shadow-[0px_0px_4px_0px_#8C8C8C40]  rounded ">
                      <button
                        className="flex items-center font-[600] text-[14px] text-[#525252] gap-[12px] w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                        onClick={() => {
                          setDropdownOpen(false);
                          alert("Report clicked");
                        }}
                      >
                        <Report/>
                        Report
                      </button>
                      <button
                        className="flex items-center gap-[16px] font-[600] text-[14px] text-[#525252] w-full text-left px-4 py-2 text-sm hover:bg-gray-100 "
                        onClick={() => {
                          setDropdownOpen(false);
                          alert("Delete clicked");
                        }}
                      >
                        <Delete/>
                        Delete
                      </button>
                    </div>
                  )}
                </div>
              </div>
              <p className="font-[400] text-[14px] text-[#27364B] mt-[12px]">
                Aliquam magna Lorem ipsum dolor sit amet consectetur. Aliquam
                magna. Lorem ipsum dolor sit
              </p>
              <p className="font-[400] text-[12px] text-[#5D6778] mt-[12px] text-end">
                12:45 PM
              </p>
            </div>
          </div>

          {/* Sent Message */}
          <div className="flex items-end justify-end mt-[24px]">
            <div className="max-w-[410px] w-full bg-[#CD508C] p-[12px] rounded-[8px]">
              <p className="font-[400] text-[14px] text-[#FFFFFF]">
              Aliquam magna Lorem ipsum dolor sit amet consectetur. Aliquam magna. Lorem ipsum dolor sit
              Aliquam magna Lorem ipsum dolor sit amet consectetur. Aliquam magna. LoresitAliquam magna Lorem ipsum dolor sit amet consectetur. Aliquamagna. Lorem ipsum dolor sit
              </p>
              <p className="font-[400] text-[12px] text-[#F1F4F9] mt-[12px] text-end">
                12:45 PM
              </p>
            </div>
          </div>
        </div>

        {/* Input box */}
        <div className="flex items-center gap-[27px] justify-between w-full mt-[64px]">
          <div className="flex items-center gap-[10px] w-full">
            <Image
              src="/auth-images/notifyOne.png"
              width={40}
              height={40}
              alt="messageperson"
            />
            <input
              type="text"
              placeholder="Write your comment.."
              className="py-[8px] outline-none px-[12px] rounded-full border border-[#CBD5E1] max-w-full w-full"
            />
          </div>
          <Commented />
        </div>
      </div>
    </div>
  );
};

export default Chatbox;
