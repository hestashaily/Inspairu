import { Closepopup, Successpasschange } from "../../icon/route";
import React from "react";

interface SuccessModalProps {
  isOpen: boolean;
  message: string;
  onClose: () => void;
}

const SuccessModal: React.FC<SuccessModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-[#0000008F] z-50 flex items-center justify-center ">
      <div className="bg-white rounded-[12px] p-[24px] w-[655px] text-center shadow-lg m-[40px]">
        <button
          onClick={onClose}
          className="flex items-end cursor-pointer justify-end w-full"
        >
          <Closepopup/>
        </button>
        <div>
          <div className="flex items-center justify-center">
          <Successpasschange/>
          </div>
          <p className="font-[600] md:text-[25px] text-[18px] text-[#525252] mb-[20px]">
            Password Changed successfully!
          </p>
        </div>
      </div>
    </div>
  );
};

export default SuccessModal;
