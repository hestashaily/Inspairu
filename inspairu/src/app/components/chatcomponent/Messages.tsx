// import React, { useState, useRef, useEffect } from "react";
// import Image from "next/image";
// import { Delete, Report, Repost, Threedost } from "@/app/icon";

// const Messages = () => {
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const dropdownRef = useRef<HTMLDivElement>(null);

//   const toggleDropdown = () => {
//     setIsDropdownOpen((prev) => !prev);
//   };

//   const handleClickOutside = (event: MouseEvent) => {
//     if (
//       dropdownRef.current &&
//       !dropdownRef.current.contains(event.target as Node)
//     ) {
//       setIsDropdownOpen(false);
//     }
//   };

//   useEffect(() => {
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   return (
//     <div className="max-w-[327px] w-full">
//       <div>
//         <h2 className="border-b-2 font-[500] text-[18px] text-[#0C1024] border-[#C8C8C8] pt-[24px] border-r-2 pl-[32px] pb-[15px]">
//           Messages
//         </h2>
//         <div className=" px-[17px] py-[32px] flex flex-col gap-[8px] border-r-2 border-r-[#C8C8C8] min-h-[calc(100vh-162px)]">
//           <div className="bg-[#F8F8F8] rounded-[10px] flex flex-col items-start pt-[11px] pb-[23px] px-[14px] relative cursor-pointer hover:bg-[#F9DFE9]">
//             <div
//               className="flex items-end justify-end w-full"
//               ref={dropdownRef}
//             >
//               <button onClick={toggleDropdown} className="cursor-pointer">
//                 <Threedost />
//               </button>

//               {isDropdownOpen && (
//                 <div className="max-w-[122px] w-full absolute right-[14px] top-[40px] bg-white shadow-md rounded-[8px] p-[8px] flex flex-col gap-[8px] z-10">
//                   <button className="flex items-center cursor-pointer gap-[9px] font-[400] text-[14px] text-[#525252] hover:bg-gray-100 p-2 rounded-md text-left">
//                     <Report />
//                     Report
//                   </button>
//                   <button className="flex items-center cursor-pointer gap-[9px] font-[400] text-[14px] text-[#525252] hover:bg-gray-100 p-2 rounded-md text-left">
//                     <Delete />
//                     Delete
//                   </button>
//                 </div>
//               )}
//             </div>

//             <div className="flex items-start gap-[24px]">
//               <div className="w-[48px] h-[48px] relative">
//                 <Image
//                   src="/message-user.png"
//                   width={48}
//                   height={48}
//                   alt="messageperson"
//                 />
//                 <p className="bg-[#036B30] absolute right-0 top-[34px] rounded-full border border-white w-[8px] h-[8px]"></p>
//               </div>
//               <div>
//                 <p className="font-[700] text-[14px] text-[#1E293B]">
//                   X_AE_A-13
//                 </p>
//                 <p className="font-[400] text-[12px] text-[#27364B]">
//                   Hi, Robert. I'm facing some chall ...
//                 </p>
//               </div>
//             </div>
//           </div>
//           <div className="bg-[#F8F8F8] rounded-[10px] flex flex-col items-start pt-[11px] pb-[23px] px-[14px] relative cursor-pointer hover:bg-[#F9DFE9]">
//             <div
//               className="flex items-end justify-end w-full"
//               ref={dropdownRef}
//             >
//               <button onClick={toggleDropdown} className="cursor-pointer">
//                 <Threedost />
//               </button>

//               {isDropdownOpen && (
//                 <div className="max-w-[122px] w-full absolute right-[14px] top-[40px] bg-white shadow-md rounded-[8px] p-[8px] flex flex-col gap-[8px] z-10">
//                   <button className="flex items-center cursor-pointer gap-[9px] font-[400] text-[14px] text-[#525252] hover:bg-gray-100 p-2 rounded-md text-left">
//                     <Report />
//                     Report
//                   </button>
//                   <button className="flex items-center cursor-pointer gap-[9px] font-[400] text-[14px] text-[#525252] hover:bg-gray-100 p-2 rounded-md text-left">
//                     <Delete />
//                     Delete
//                   </button>
//                 </div>
//               )}
//             </div>

//             <div className="flex items-start gap-[24px]">
//               <div className="w-[48px] h-[48px] relative">
//                 <Image
//                   src="/message-user.png"
//                   width={48}
//                   height={48}
//                   alt="messageperson"
//                 />
//                 <p className="bg-[#036B30] absolute right-0 top-[34px] rounded-full border border-white w-[8px] h-[8px]"></p>
//               </div>
//               <div>
//                 <p className="font-[700] text-[14px] text-[#1E293B]">
//                   X_AE_A-13
//                 </p>
//                 <p className="font-[400] text-[12px] text-[#27364B]">
//                   Hi, Robert. I'm facing some chall ...
//                 </p>
//               </div>
//             </div>
//           </div>
//           <div className="bg-[#F8F8F8] rounded-[10px] flex flex-col items-start pt-[11px] pb-[23px] px-[14px] relative cursor-pointer hover:bg-[#F9DFE9]">
//             <div
//               className="flex items-end justify-end w-full"
//               ref={dropdownRef}
//             >
//               <button onClick={toggleDropdown} className="cursor-pointer">
//                 <Threedost />
//               </button>

//               {isDropdownOpen && (
//                 <div className="max-w-[122px] w-full absolute right-[14px] top-[40px] bg-white shadow-md rounded-[8px] p-[8px] flex flex-col gap-[8px] z-10">
//                   <button className="flex items-center cursor-pointer gap-[9px] font-[400] text-[14px] text-[#525252] hover:bg-gray-100 p-2 rounded-md text-left">
//                     <Report />
//                     Report
//                   </button>
//                   <button className="flex items-center cursor-pointer gap-[9px] font-[400] text-[14px] text-[#525252] hover:bg-gray-100 p-2 rounded-md text-left">
//                     <Delete />
//                     Delete
//                   </button>
//                 </div>
//               )}
//             </div>

//             <div className="flex items-start gap-[24px]">
//               <div className="w-[48px] h-[48px] relative">
//                 <Image
//                   src="/message-user.png"
//                   width={48}
//                   height={48}
//                   alt="messageperson"
//                 />
//                 <p className="bg-[#036B30] absolute right-0 top-[34px] rounded-full border border-white w-[8px] h-[8px]"></p>
//               </div>
//               <div>
//                 <p className="font-[700] text-[14px] text-[#1E293B]">
//                   X_AE_A-13
//                 </p>
//                 <p className="font-[400] text-[12px] text-[#27364B]">
//                   Hi, Robert. I'm facing some chall ...
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Messages;
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Delete, Report, Threedost } from "@/app/icon";

type Message = {
  id: number;
  userName: string;
  message: string;
  image: string;
};

const dummyMessages: Message[] = [
  {
    id: 1,
    userName: "X_AE_A-13",
    message: "Hi, Robert. I'm facing some chall ...",
    image: "/message-user.png",
  },
  {
    id: 2,
    userName: "X_AE_A-13",
    message: "Hi, Robert. I'm facing some chall ...",
    image: "/message-user.png",
  },
  {
    id: 3,
    userName: "X_AE_A-13",
    message: "Hi, Robert. I'm facing some chall ...",
    image: "/message-user.png",
  },
];

const Messages = () => {
  const [openDropdownId, setOpenDropdownId] = useState<number | null>(null);

  // Use object instead of array for refs
  const dropdownRefs = useRef<{ [key: number]: HTMLDivElement | null }>({});

  const toggleDropdown = (id: number) => {
    setOpenDropdownId((prevId) => (prevId === id ? null : id));
  };

  const handleClickOutside = (event: MouseEvent) => {
    const isOutside = Object.values(dropdownRefs.current).every(
      (ref) => !ref || !ref.contains(event.target as Node)
    );
    if (isOutside) {
      setOpenDropdownId(null);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="lg:max-w-[327px] max-w-full w-full">
      <div>
        <h2 className="border-b-2   font-[500] text-[18px] text-[#0C1024] border-[#C8C8C8] pt-[24px] lg:border-r-2 border-r-none pl-[32px] pb-[15px]">
          Messages
        </h2>

        <div className="px-[17px] py-[32px] flex flex-col gap-[8px] lg:border-r-2 border-r-none border-[#C8C8C8]  lg:min-h-[calc(100vh-162px)] min-h-0">
          {dummyMessages.map((msg) => (
            <div
              key={msg.id}
              className="bg-[#F8F8F8] rounded-[10px] flex flex-col items-start pt-[11px] pb-[23px] px-[14px] relative cursor-pointer hover:bg-[#F9DFE9]"
            >
              <div
                className="flex items-end justify-end w-full"
                ref={(el) => {
                  dropdownRefs.current[msg.id] = el;
                }}
              >
                <button
                  onClick={() => toggleDropdown(msg.id)}
                  className="cursor-pointer"
                >
                  <Threedost />
                </button>

                {openDropdownId === msg.id && (
                  <div className="max-w-[122px] w-full absolute right-[14px] top-[40px] bg-white shadow-md rounded-[8px] p-[8px] flex flex-col gap-[8px] z-10">
                    <button className="flex items-center gap-[9px] text-[14px] text-[#525252] hover:bg-gray-100 p-2 rounded-md text-left">
                      <Report />
                      Report
                    </button>
                    <button className="flex items-center gap-[9px] text-[14px] text-[#525252] hover:bg-gray-100 p-2 rounded-md text-left">
                      <Delete />
                      Delete
                    </button>
                  </div>
                )}
              </div>

              <div className="flex items-start gap-[24px]">
                <div className="w-[48px] h-[48px] relative">
                  <Image
                    src={msg.image}
                    width={48}
                    height={48}
                    alt="messageperson"
                  />
                  <p className="bg-[#036B30] absolute right-0 top-[34px] rounded-full border border-white w-[8px] h-[8px]"></p>
                </div>
                <div>
                  <p className="font-[700] text-[14px] text-[#1E293B]">
                    {msg.userName}
                  </p>
                  <p className="font-[400] text-[12px] text-[#27364B]">
                    {msg.message}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Messages;
