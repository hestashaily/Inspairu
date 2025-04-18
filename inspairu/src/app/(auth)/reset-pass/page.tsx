

"use client";
import { useState } from "react";
import Carousel from "@/app/components/Carousel";
import Image from "next/image";

const Page: React.FC = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleResetPassword = (e: React.FormEvent) => {
    e.preventDefault();
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <main className="px-[40px] relative">
      <div className="pt-[40px] flex items-center justify-center gap-[66px] lg:flex-row flex-col">
        <Carousel />
        <div className="md:max-w-[490px] max-w-full w-full">
          <h2 className="font-[600] text-[24px] text-[#525252]">
            Reset Password
          </h2>
          <p className="font-[400] text-[16px] text-[#525252]">
            Your previous password has been reset. Please set a new password for
            your account.
          </p>
          <form onSubmit={handleResetPassword}>
            <div className="border-b-[2px] border-b-[#E8E8E8] pb-[8px] flex items-center justify-between pt-[28px]">
              <input
                type="password"
                placeholder="Enter Password"
                className="font-[500] text-[14px] text-[#A1A1A1] outline-none w-full"
              />
              <Image
                src="/auth-images/eyeclosed.png"
                width={26}
                height={26}
                alt="eyeclosed"
              />
            </div>
            <div className="border-b-[2px] border-b-[#E8E8E8] pb-[8px] flex items-center justify-between pt-[28px]">
              <input
                type="password"
                placeholder="Confirm Password"
                className="font-[500] text-[14px] text-[#A1A1A1] outline-none w-full"
              />
            </div>
            <button
              type="submit"
              className="btn-gradient max-w-full py-[8px] w-full rounded-[6px] font-[600] text-[16px] text-white mt-[32px] cursor-pointer"
            >
              Reset Password
            </button>
          </form>
        </div>
      </div>
      {showPopup && (
        <div className="fixed inset-0 bg-[#202020B5] flex  justify-center z-50">
          <div className="bg-white rounded-[10px] p-[32px] shadow-lg max-w-[617px] w-full h-[197px] mt-[97px] text-center">
            <div className="flex items-end justify-end  w-full">
            <button onClick={closePopup} >
              <Image
                src="/auth-images/close.png"
                width={16}
                height={16}
                alt="cross-icon"
                className="cursor-pointer"
              />
            </button>
            </div>
            <div className="flex items-center justify-center flex-col">
              <Image
                src="/auth-images/passreset.png"
                width={86}
                height={86}
                alt="cross-icon"
              />
              <p className="text-[#525252] text-[18px] font-[600] mb-[20px]">
              Password Reset Successfully!
              </p>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default Page;
