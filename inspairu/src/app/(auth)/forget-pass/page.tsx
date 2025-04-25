"use client";
import Carousel from "@/app/components/Carousel";
import ForgotPassword from "@/app/components/ForgotPassword";
import OtpVerification from "@/app/components/OtpVerification";
import SetPassword from "@/app/components/SetPassword";
import { useState } from "react";
import toast from "react-hot-toast";
const Page: React.FC = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    userEmail: "",
    otp: "",
    password: "",
    firstName: "",
    lastName: "",
    userName: "",
    confirmPassword: "",
  });
  const updateFormData = (newData: Partial<typeof formData>) => {
    setFormData((prev) => ({ ...prev, ...newData }));
  };

  const onFinalSubmit = async () => {
    try {
      console.log("Final form data:", formData);
      const response = await fetch("/api/update-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.userEmail,
          password: formData.password,
        }),
      });
      const data = await response.json();
      if (!response.ok) {
        if (data.error === "Missing email or name") {
          toast.error("Please enter both email and name.");
        } else if (data.error === "Failed to save OTP") {
          toast.error("Could not save OTP. Please try again later.");
        } else {
          toast.error(data.error || "Something went wrong");
        }
      }
      if (response.ok) {
        toast.success("Password updated successfully");
        // setTimeout(() => {
        //   window.location.href = "/login";
        // }, 2000);
      }
    } catch (error) {
      console.error("Error updating password:", error);
      toast.error("An error occurred while updating password");
    }
  };
  return (
    <main className="px-[40px]">
      <div className=" pt-[40px] flex items-center justify-center gap-[66px] lg:flex-row flex-col">
        <Carousel />

        {step === 1 && (
          <ForgotPassword
            onNextStep={() => setStep(2)}
            formData={formData}
            updateFormData={updateFormData}
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
            heading={"Reset Password"}
            subHeading={
              "Your previous password has been reseted. Please set a new password for your account"
            }
            formData={formData}
            updateFormData={updateFormData}
            onFinalSubmit={onFinalSubmit}
            buttonDesc={"Reset Password"}
          />
        )}
      </div>
    </main>
  );
};

export default Page;
