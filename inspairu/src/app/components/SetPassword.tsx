import Image from "next/image";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { SignUpFormData } from "../../../types/global";
interface SetPasswordProps {
  formData: SignUpFormData;
  updateFormData: (data: Partial<SignUpFormData>) => void;
  heading: string;
  subHeading: string;
  buttonDesc: string;
  onFinalSubmit: (data: SignUpFormData) => Promise<void>;
}
export default function SetPassword({
  formData,
  updateFormData,
  onFinalSubmit,
  heading,
  subHeading,
  buttonDesc,
}: SetPasswordProps) {
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    const finalFormData = {
      ...formData,
      password,
    };

    console.log("tgis is updated password", finalFormData);
    updateFormData({ password });
    await onFinalSubmit(finalFormData);
  };

  const [password, setPassword] = useState(formData.password || "");
  const [confirmPassword, setConfirmPassword] = useState(
    formData.confirmPassword || ""
  );
  return (
    <>
      <div className="md:max-w-[490px] max-w-full w-full">
        <h2 className="font-[600] text-[24px] text-[#525252]">{heading}</h2>
        <p className="font-[400] text-[16px] text-[#525252]">{subHeading}</p>
        <form action="" onSubmit={handleSubmit}>
          <div className="border-b-[2px] border-b-[#E8E8E8] pb-[8px] flex items-center justify-between pt-[28px]">
            <input
              type="password"
              placeholder="Enter Password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
              value={confirmPassword}
              name="confirmPassword"
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="font-[500] text-[14px] text-[#A1A1A1] outline-none w-full"
            />
          </div>
          <button
            type="submit"
            className="btn-gradient max-w-full py-[8px] w-full rounded-[6px] font-[600] text-[16px] text-white mt-[32px] cursor-pointer"
          >
            {buttonDesc}
          </button>
        </form>
      </div>
    </>
  );
}
