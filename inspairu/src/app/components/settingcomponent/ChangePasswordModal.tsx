
import { Closepopup, Setpass } from "@/app/icon";
import Image from "next/image";
import React, { useState } from "react";
import SuccessModal from "./SuccessModal"; 

export const ChangePasswordModal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  onForgotPassword: () => void;
}> = ({ isOpen, onClose, onForgotPassword }) => {
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowSuccessModal(true);
  };

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 bg-[#202020D6] z-50 flex justify-center items-center">
        <div className="bg-white max-w-[793px] w-full rounded-[12px] p-[32px] relative shadow-lg m-[20px]">
          <button
            onClick={onClose}
            className="absolute top-[10px] cursor-pointer right-[16px] text-[20px] font-bold"
          >
            <Closepopup />
          </button>
          <div className="flex items-center justify-center flex-col">
            <Setpass />
            <h2 className="text-[20px] font-semibold text-[#333] md:mt-[30px] mt-[10px]">
              Change Password
            </h2>
            <p className="mb-[30px]">
              Create a strong password to keep your account secure.
            </p>
          </div>
          <form className="flex flex-col gap-[12px]" onSubmit={handleSubmit}>
            <div className="border border-[#E2E8F0] flex items-center justify-between text-[#525252] rounded-[6px] px-[16px] py-[10px] text-[14px]">
              <input
                type={showCurrentPassword ? "text" : "password"}
                placeholder="Current Password"
                className="outline-none w-full"
              />
              <Image
                src={
                  showCurrentPassword
                    ? "/auth-images/eye.png"
                    : "/auth-images/eyeclosed.png"
                }
                width={20}
                height={20}
                alt="toggle eye"
                className="cursor-pointer ml-2"
                onClick={() => setShowCurrentPassword(!showCurrentPassword)}
              />
            </div>
            <div className="border border-[#E2E8F0] flex items-center justify-between text-[#525252] rounded-[6px] px-[16px] py-[10px] text-[14px]">
              <input
                type={showNewPassword ? "text" : "password"}
                placeholder="New Password"
                className="outline-none w-full"
              />
              <Image
                src={
                  showNewPassword
                    ? "/auth-images/eye.png"
                    : "/auth-images/eyeclosed.png"
                }
                width={20}
                height={20}
                alt="toggle eye"
                className="cursor-pointer ml-2"
                onClick={() => setShowNewPassword(!showNewPassword)}
              />
            </div>
            <div className="border border-[#E2E8F0] flex items-center justify-between text-[#525252] rounded-[6px] px-[16px] py-[10px] text-[14px]">
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm New Password"
                className="outline-none w-full"
              />
              <Image
                src={
                  showConfirmPassword
                    ? "/auth-images/eye.png"
                    : "/auth-images/eyeclosed.png"
                }
                width={20}
                height={20}
                alt="toggle eye"
                className="cursor-pointer ml-2"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              />
            </div>

            <span
              onClick={onForgotPassword}
              className="font-[500] text-[16px] text-[#973998] cursor-pointer"
            >
              Forgot Password?
            </span>
            <button
              type="submit"
              className="bg-[#525252] cursor-pointer btn-gradient text-white rounded-[6px] py-[10px]"
            >
              Change Password
            </button>
          </form>
        </div>
      </div>


      <SuccessModal
        isOpen={showSuccessModal}
        message="Password changed successfully."
        onClose={() => {
          setShowSuccessModal(false);
          onClose(); 
        }}
      />
    </>
  );
};
