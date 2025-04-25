import React, { useState } from "react";
import OTPInputField from "./OTPInputField";
import { SignUpFormData } from "../../../types/global";
import toast from "react-hot-toast";

interface OtpVerificationProps {
  onNextStep: () => void;
  updateFormData: (data: Partial<SignUpFormData>) => void;
  formData: SignUpFormData;
}
export default function OtpVerification({
  onNextStep,
  updateFormData,
  formData,
}: OtpVerificationProps) {
  const [otpValue, setOtpValue] = useState(formData.otp || "");
  const handleVerify = async () => {
    console.log("OTP Value:", otpValue);

    try {
      console.log("Form Data:", formData);
      const res = await fetch("/api/verify-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: formData.userEmail,
          otp: otpValue.toString(),
        }),
      });

      const data = await res.json();
      console.log("Response Data:", data);

      if (data.success) {
        toast.success("OTP verified successfully!");
        updateFormData({ otp: otpValue, userEmail: formData.userEmail });
        onNextStep();
      } else {
        toast.error(data.message || "Invalid OTP");
      }
    } catch (error) {
      toast.error("Failed to verify OTP");
      console.error("OTP verification error:", error);
    }
    // updateFormData({ otpValue });
    // onNextStep();
  };
  return (
    <>
      <div className="lg:max-w-[490px] max-w-full w-full">
        <h2 className="font-[600] text-[24px] text-[#525252]">Enter OTP</h2>
        <p className="font-[400] text-[16px] text-[#525252]">
          We have sent a OTP to your registered e-mail ID
        </p>
        <OTPInputField setOtpValue={setOtpValue} otpValue={otpValue} />
        <button
          onClick={handleVerify}
          className="btn-gradient max-w-full py-[8px] w-full rounded-[6px] font-[600] text-[16px] text-white mt-[32px] cursor-pointer"
        >
          Verify
        </button>
        <p className="mt-[24px] font-[600] text-[#525252] text-[16px]">
          Didn’t receive code?{" "}
          <span className="bg-gradient-to-b from-[#973998] to-[#DB5689] bg-clip-text text-transparent cursor-pointer">
            Resend OTP
          </span>
        </p>
      </div>
    </>
  );
}
