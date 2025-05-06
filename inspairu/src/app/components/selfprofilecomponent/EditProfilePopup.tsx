import React, { useRef, useState, ChangeEvent } from "react";
import Image from "next/image";
import { Changeprofile, Closepopup, Uploadprofile } from "@/app/icon";

interface EditProfilePopupProps {
  onClose: () => void;
}

const EditProfilePopup: React.FC<EditProfilePopupProps> = ({ onClose }) => {
  const [profileImage, setProfileImage] = useState(
    "/auth-images/profile-avatar.png"
  );
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (reader.result) {
          setProfileImage(reader.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDeleteImage = () => {
    setProfileImage("/auth-images/profile-avatar.png");
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="fixed inset-0 bg-[#202020D6] flex items-center justify-center z-50">
      <div className="bg-white md:p-6 p-[10px] rounded-xl w-[655px] m-[20px]">
        <button
          onClick={onClose}
          className="flex cursor-pointer items-end justify-end w-full"
        >
          <Closepopup />
        </button>
        <div>
          <h2 className="text-xl text-[#525252] font-bold lg:mb-4 mb-[8px] text-center">
            Edit Profile
          </h2>
          <div className="flex items-center justify-between">
            <div className="w-full">
              <div className="flex items-center justify-center">
                <Image
                  src={profileImage}
                  width={78}
                  height={78}
                  alt="profile"
                  className="rounded-full object-cover  lg:w-[78px] w-[50px] lg:h-[78px] h-[50px]"
                />

                <input
                  type="file"
                  accept="image/*"
                  ref={fileInputRef}
                  onChange={handleImageUpload}
                  style={{ display: "none" }}
                />
              </div>
              <div className="flex items-center justify-between max-w-[231px] w-full m-auto lg:pt-[16px] pt-[10px] gap-[12px]">
                <button
                  type="button"
                  onClick={triggerFileInput}
                  className="btn-gradient cursor-pointer py-[10px] px-[21px] flex gap-[10px] items-center rounded-[33px] font-[400] lg:text-[16px] text-[14px] text-white"
                >
                  Edit <Uploadprofile />
                </button>
                <button
                  type="button"
                  onClick={handleDeleteImage}
                  className="flex items-center cursor-pointer gap-[10px] bg-[#CE1518] rounded-[33px] py-[10px] px-[20px] font-[400]  lg:text-[16px] text-[14px] text-white"
                >
                  Delete <Changeprofile />
                </button>
              </div>
              <form
                action=""
                className="lg:pt-[26px] pt-[10px] flex items-center justify-center flex-col"
              >
                <input
                  type="text"
                  placeholder="Cameron Williamson"
                  className="py-[10px] text-[#4B5669]  w-full outline-none px-[25px] border border-[#E2E8F0] rounded-[6px]"
                />
                <input
                  type="email"
                  placeholder="debra.holt@example.com"
                  className="py-[10px] text-[#4B5669]  lg:mt-[20px] mt-[10px] w-full outline-none px-[25px] border border-[#E2E8F0] rounded-[6px]"
                />
                <textarea
                  className="w-full lg:mb-[28px] mb-[10px] py-[9px] px-[24px] font-[400] text-[14px] text-[#4B5669] md:min-h-[128px] min-h-[80px] h-full border border-[#E2E8F0] rounded-[6px] outline-none lg:mt-[24px] mt-[10px] resize-none"
                  placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco"
                ></textarea>
                <button className="lg:py-[14px] py-[10px] cursor-pointer px-[40px] rounded-full btn-gradient font-[500] text-[16px] text-[#FFFFFF]  max-w-[124px] w-full m-auto">
                  Save
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfilePopup;
