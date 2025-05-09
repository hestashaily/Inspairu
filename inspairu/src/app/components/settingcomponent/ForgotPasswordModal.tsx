
import { Closepopup, Forget } from "../../icon/route";
import React, { useState } from "react";
import OtpModal from "./OtpModal";
import ResetPasswordModal from "./ResetPasswordModal";

export const ForgotPasswordModal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
}> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState<"email" | "otp" | "reset">("email");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep("otp");
  };

  const handleVerify = () => {
    setStep("reset");
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-[#202020D6] z-50 flex justify-center items-center">
      {step === "email" ? (
        <div className="bg-white max-w-[793px] w-full rounded-[12px] p-[32px] relative shadow-lg  m-[20px]">
          <button
            onClick={onClose}
            className="absolute top-[10px] cursor-pointer right-[16px] text-[20px] font-bold"
          >
            <Closepopup />
          </button>
          <div className="flex items-center justify-center flex-col">
            <Forget />
            <h2 className="text-[20px] font-semibold text-[#333]">
              Forgot Your Password?
            </h2>
            <p className="mb-[30px] text-center text-[#666] text-[14px]">
              Don’t worry! Enter your email address and we’ll send an OTP to
              reset your password.
            </p>
          </div>
          <form className="flex flex-col gap-[12px]" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Email"
              className="border border-[#E2E8F0] rounded-[6px] px-[16px] py-[10px] text-[14px] text-[#525252] outline-none"
            />
            <button
              type="submit"
              className="bg-[#525252] cursor-pointer btn-gradient text-white rounded-[6px] py-[10px] mt-[10px]"
            >
              Submit
            </button>
          </form>
        </div>
      ) : step === "otp" ? (
        <OtpModal isOpen={true} onClose={() => setStep("email")} onVerify={handleVerify} />
      ) : (
        <ResetPasswordModal isOpen={true} onClose={onClose} />
      )}
    </div>
  );
};
