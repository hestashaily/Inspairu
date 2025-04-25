import Link from "next/link";
import React from "react";
import toast from "react-hot-toast";
import { SignUpFormData } from "../../../types/global";

interface OtpVerificationProps {
  onNextStep: () => void;
  updateFormData: (data: Partial<SignUpFormData>) => void;
  formData: SignUpFormData;
}
export default function ForgotPassword({
  formData,
  updateFormData,
  onNextStep,
}: OtpVerificationProps) {
  const [email, setEmail] = React.useState(formData.userEmail || "");
  const handleForgetPassword = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email) {
      toast.error("Please enter your email");
      return;
    }
    updateFormData({ userEmail: email });
    onNextStep();

    try {
      const response = await fetch("/api/send-otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
        }),
      });
      const data = await response.json();
      // if (response.ok) {
      //   toast.success("OTP sent to your email");
      //   console.log("OTP sent successfully", data);
      // } else {
      //   toast.error("Failed to send OTP");
      // }

      if (!response.ok) {
        if (data.error === "Missing email or name") {
          toast.error("Please enter both email and name.");
        } else if (data.error === "Failed to save OTP") {
          toast.error("Could not save OTP. Please try again later.");
        } else {
          toast.error(data.error || "Something went wrong");
        }
      } else {
        toast.success("OTP sent to your email");
        console.log("OTP sent successfully", data);
      }
    } catch (error) {
      console.error("Error sending OTP:", error);
      toast.error("An error occurred while sending OTP");
    }
  };
  return (
    <>
      <div className="md:max-w-[490px] max-w-full w-full">
        <h2 className="font-[600] text-[24px] text-[#525252]">
          Forgot Password
        </h2>
        <p className="mt-[8px] font-[400] text-[16px] text-[#525252]">
          Enter your email address and we’ll OTP to reset password
        </p>
        <form onSubmit={handleForgetPassword} action="">
          <div className="border-b-[2px] border-b-[#E8E8E8] pb-[8px] flex items-center justify-between pt-[28px]">
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="font-[500] text-[14px] text-[#A1A1A1] outline-none w-full"
            />
          </div>

          <button className="btn-gradient max-w-full py-[8px] w-full rounded-[6px] font-[600] text-[16px] text-white mt-[32px] cursor-pointer">
            Submit
          </button>
        </form>
        <p className="font-[400] mt-[30px] text-[16px] text-[#344054]">
          Go to{" "}
          <Link href="/login">
            <span
              className="loginbg-gradient-to-b font-[600] cursor-pointer
         from-[#973998] to-[#DB5689] bg-clip-text text-transparent"
            >
              Sign In
            </span>
          </Link>
        </p>
      </div>
    </>
  );
}
