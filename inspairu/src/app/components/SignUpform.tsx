import { signIn, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { SignUpFormData } from "../../../types/global";
interface signUpformProps {
  onNextStep: () => void;
  updateFormData: (data: Partial<SignUpFormData>) => void;
  formData: SignUpFormData;
}
export default function SignUpform({
  onNextStep,
  updateFormData,
  formData,
}: signUpformProps) {
  const handleGoogleSignIn = () => {
    signIn("google", { callbackUrl: "/home" });
  };
  const { data: session, status } = useSession();

  console.log("Session:", session);
  console.log("Status:", status);

  const [firstName, setFirstName] = useState(formData.firstName || "");
  const [lastName, setLastName] = useState(formData.lastName || "");
  const [userName, setUserName] = useState(formData.userName || "");
  const [userEmail, setUserEmail] = useState(formData.userEmail || "");

  const formSubmitted = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!firstName || !lastName || !userName || !userEmail) {
      toast.error("Please fill all the fields");
      return;
    }

    try {
      const response = await fetch("/api/send-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: userEmail,
          name: `${firstName} ${lastName}`,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        const errorMessage =
          data.error || "Something went wrong. Please try again.";
        console.log("this is error message", errorMessage);
        toast.error(errorMessage);
        throw new Error(errorMessage);
      }
      toast.success("OTP sent to your email");
      updateFormData({
        firstName,
        lastName,
        userName,
        userEmail,
        otp: data.otp,
      });
      onNextStep();
    } catch (error) {
      toast.error("Failed to send OTP. Try again.");
      console.error(error);
    }
  };

  return (
    <>
      <div className="lg:max-w-[490px] max-w-full w-full">
        <h1 className=" dark:text-gray-800 font-[600] text-[28px] text-[#525252] text-center mb-[38px]">
          Join AI Hub
        </h1>
        <form action="" onSubmit={formSubmitted}>
          <div className="flex items-center gap-[40px] ">
            <input
              type="text"
              placeholder="First Name"
              name={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="border-b-[2px] border-[#E8E8E8] lg:max-w-[239px] max-w-[50%] w-full pb-[9px] font-[500] text-[14px] text-[#A1A1A1] outline-none"
            />
            <input
              type="text"
              placeholder="Last Name"
              name={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="border-b-[2px] border-[#E8E8E8] lg:max-w-[239px] max-w-[50%] w-full pb-[9px] font-[500] text-[14px] text-[#A1A1A1] outline-none"
            />
          </div>
          <div className="flex items-center gap-[40px] mt-[40px]">
            <input
              type="text"
              placeholder="Username"
              name={userName}
              onChange={(e) => setUserName(e.target.value)}
              className="border-b-[2px] border-[#E8E8E8] lg:max-w-[239px] max-w-[50%] w-full pb-[9px] font-[500] text-[14px] text-[#A1A1A1] outline-none"
            />
            <input
              type="email"
              placeholder="E-mail ID"
              name={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
              className="border-b-[2px] border-[#E8E8E8] lg:max-w-[239px] max-w-[50%] w-full pb-[9px] font-[500] text-[14px] text-[#A1A1A1] outline-none"
            />
          </div>
          <button className="btn-gradient mt-[118px] max-w-full w-full py-[8px] rounded-[6px] font-[600] text-[16px] text-white cursor-pointer">
            Create Account
          </button>
          <p className=" dark:text-gray-800 w-full font-[400] text-[16px] text-[#525252] mt-[25px] text-center">
            Already have an account?{"  "}
            <Link href="/login">
              <span className="font-[600] cursor-pointer bg-gradient-to-b from-[#973998] to-[#DB5689] bg-clip-text text-transparent">
                Login
              </span>
            </Link>
          </p>
        </form>
        <p className="mt-[37px] text-center font-[500] text-[14px] text-[#A1A1A1]">
          - OR -{" "}
        </p>
        <div className="flex items-center justify-center gap-[14px] mt-[39px]">
          <button
            onClick={handleGoogleSignIn}
            className="max-w-[163px] w-full border border-[#E8E8E8] py-[8px] rounded-[6px] flex items-center justify-center cursor-pointer"
          >
            <Image
              src="/auth-images/google.png"
              width={34}
              height={25}
              alt="google"
              className="h-[28px]"
            />
          </button>
          <button className="max-w-[163px] w-full border border-[#E8E8E8] py-[8px] rounded-[6px] flex items-center justify-center cursor-pointer">
            <Image
              src="/auth-images/apple.png"
              width={24}
              height={22}
              alt="apple"
              className="h-[28px]"
            />
          </button>
        </div>
        {/* <p className="mt-[26px] text-[12px] text-[#525252] font-[300] text-center">
          By continuing, you agree to the INSPAIRU{" "}
          <span className="bg-gradient-to-b from-[#973998] to-[#DB5689] bg-clip-text text-transparent">
            User Account Agreement{" "}
          </span>{" "}
          and{" "}
          <span className="bg-gradient-to-b from-[#973998] to-[#DB5689] bg-clip-text text-transparent">
            {" "}
            Privacy Policy
          </span>
        </p> */}
      </div>
    </>
  );
}
