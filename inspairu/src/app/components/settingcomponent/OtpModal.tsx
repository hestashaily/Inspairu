
import { Closepopup, Forget } from "@/app/icon";
import React from "react";
import OTPInputField from "../OTPInputField";

interface OtpModalProps {
  isOpen: boolean;
  onClose: () => void;
  onVerify: () => void;  
}

const OtpModal: React.FC<OtpModalProps> = ({ isOpen, onClose, onVerify }) => {
  return (
    <div className="fixed inset-0 bg-[#202020D6] z-50 flex justify-center items-center ">
      <div className="bg-white max-w-[793px] w-full rounded-[12px] p-[32px] relative shadow-lg text-center m-[20px]">
        <button onClick={onClose} className="flex items-end w-full justify-end">
          <Closepopup />
        </button>
        <div className="flex items-center justify-center flex-col">
          <Forget />
          <h2 className="text-[20px] font-semibold text-[#333] mb-[10px]">Enter OTP</h2>
          <p className="font-[400] md:text-[16px] text-[14px] text-[#525252]">
            We have sent an OTP to your registered e-mail ID
          </p>
          <div className="w-full">
            <OTPInputField />
          </div>
          <button
            onClick={onVerify} 
            className="btn-gradient md:mt-[24px] mt-[12px] py-[8px] rounded-[30px] w-full font-[600] text-[16px] text-white cursor-pointer"
          >
            Verify
          </button>
        </div>
        <p className="font-[400] text-start text-[16px] md:mt-[24px] mt-[10px] text-[#525252]">
          Didn’t receive code?{" "}
          <span className="font-[600] text-[#973998] cursor-pointer">Resend OTP</span>
        </p>
      </div>
    </div>
  );
};

export default OtpModal;
