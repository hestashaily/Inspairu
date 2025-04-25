"use client";
import React, { useState } from "react";
import Carousel from "@/app/components/Carousel";
import SignUpform from "@/app/components/SignUpform";
import OtpVerification from "@/app/components/OtpVerification";
import SetPassword from "@/app/components/SetPassword";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { settingsProps } from "../../../../types/global";

const Page: React.FC = () => {
  const route = useRouter();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    userEmail: "",
    otp: "",
    password: "",
    confirmPassword: "",
  });
  const updateFormData = (newData: Partial<typeof formData>) => {
    setFormData((prev) => ({ ...prev, ...newData }));
  };
  const settings = {
    theme: "light",
    position: "top-center",
    duration: 5000,
    style: {
      background: "#fff",
      color: "#000",
      fontSize: "16px",
      padding: "16px",
      borderRadius: "8px",
    },
  };
  const saveSettings = async (settings: settingsProps) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Settings saved:", settings);
        resolve(true);
      }, 2000);
    });
  };
  const handleFinalSubmit = async (finalFormData: typeof formData) => {
    console.log("Final form data:of sign up", finalFormData);
    if (
      !finalFormData.firstName ||
      !finalFormData.lastName ||
      !finalFormData.userName ||
      !finalFormData.userEmail ||
      !finalFormData.password
    ) {
      toast.error("Please fill all the fields");
      return;
    }

    //api call
    const response = await fetch("/api/sign-up", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(finalFormData),
    });

    if (response.ok) {
      console.log("User signed up successfully");
      // toast.success("User signed up successfully");
      toast.promise(saveSettings(settings), {
        loading: "Saving...",
        success: <b>User Signed Up Sucessfully</b>,
        error: <b>Could not save.</b>,
      });
      route.push("/login");
    } else {
      console.error("Error signing up");
      toast.error("Error signing up");
    }

    console.log("this is the final data submitted to backend: ", finalFormData);
  };

  return (
    <main className="px-[40px]">
      <div className="px-[20px] py-[40px] flex items-center justify-center gap-[66px] lg:flex-row flex-col">
        <Carousel />
        {step === 1 && (
          <SignUpform
            onNextStep={() => setStep(2)}
            updateFormData={updateFormData}
            formData={formData}
          />
        )}
        {step === 2 && (
          <OtpVerification
            onNextStep={() => setStep(3)}
            formData={formData}
            updateFormData={updateFormData}
          />
        )}
        {step === 3 && (
          <SetPassword
            heading={"Set a strong password"}
            subHeading={"Create a strong password to keep your account secure."}
            formData={formData}
            updateFormData={updateFormData}
            onFinalSubmit={handleFinalSubmit}
            buttonDesc={"Create Account"}
          />
        )}
      </div>
      <p className="text-[12px] text-[#525252] font-[300] lg:text-end text-center lg:mr-[60px] mr-[0px] lg:mt-[0px] mt-[10px]">
        By continuing, you agree to the INSPAIRU
        <span className="bg-gradient-to-b from-[#973998] to-[#DB5689] bg-clip-text text-transparent">
          User Account Agreement
        </span>
        and
        <span className="bg-gradient-to-b from-[#973998] to-[#DB5689] bg-clip-text text-transparent">
          Privacy Policy
        </span>
      </p>
    </main>
  );
};

export default Page;
