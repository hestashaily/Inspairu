import { useState } from "react";
import { Closepopup, Resetpass } from "@/app/icon";
import React from "react";
import Image from "next/image";
import SuccessModal from "./SuccessModal";

interface ResetPasswordModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ResetPasswordModal: React.FC<ResetPasswordModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
    const [showSuccessModal, setShowSuccessModal] = useState(false);
  

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setShowSuccessModal(true)
  };

  return (
    <>
    <div className="bg-white max-w-[793px] w-full rounded-[12px] p-[32px] relative shadow-lg">
      <button
        onClick={onClose}
        className="absolute top-[10px] cursor-pointer right-[16px] text-[20px] font-bold"
      >
        <Closepopup />
      </button>
      <div className="flex items-center justify-center flex-col">
        <Resetpass />
        <div className="flex items-center justify-center flex-col w-full">
          <h2 className="text-[20px] font-semibold text-[#333]">
            Reset Password
          </h2>
          <p className="mb-[30px] text-center text-[#666] text-[14px]">
            Your previous password has been reseted. Please set a new password
            for your account.
          </p>
          <form
            className="flex flex-col w-full gap-[12px]"
            onSubmit={handleSubmit}
          >
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
                placeholder="Confirm New Password"
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
            <button
              type="submit"
              className="bg-[#525252] w-full cursor-pointer btn-gradient text-white rounded-[6px] py-[10px] mt-[10px]"
            >
              Reset Password
            </button>
          </form>
        </div>
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

export default ResetPasswordModal;
