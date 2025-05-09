"use client";
import React, { useState, useRef, ChangeEvent } from "react";
import Image from "next/image";
import {
  Blackarrow,
  Changepassword,
  Changeprofile,
  Uploadprofile,
} from "../../icon/route";
import { ChangePasswordModal } from "./ChangePasswordModal";
import { ForgotPasswordModal } from "./ForgotPasswordModal";

const Settingprofile: React.FC = () => {
  const [profileImage, setProfileImage] = useState<string>(
    "/auth-images/profile-avatar.png"
  );
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [showChangePassword, setShowChangePassword] = useState(false);
  const [showForgotPopup, setShowForgotPopup] = useState(false);

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
    <div>
      <div className="bg-white border border-[#E3E3E3] rounded-[12px] shadow-[0px_0px_19px_0px_#C2C2C240] m-[24px]">
        <div className="flex items-center gap-[16px] py-[8px] border-b-2 border-b-[#DCDCDC] px-[26px]">
          <Image
            src="/auth-images/notifyOne.png"
            width={52}
            height={52}
            alt="profile"
          />
          <p className="font-[600] md:text-[20px] text-[18px] text-[#525252]">Your Profile</p>
        </div>
        <div className="py-[34px] px-[35px] ">
          <form>
            <div className="flex lg:items-center items-start lg:flex-row flex-col lg:gap-[287px] gap-[10px]">
              <p className="font-[500] md:text-[18px] text-[16px] max-w-[123px] w-full  text-[#525252]">
                Profile Picture
              </p>
              <div className="flex items-center md:gap-[23px] gap-[10px]">
                <Image
                  src={profileImage}
                  width={78}
                  height={78}
                  alt="profile"
                  className="rounded-full object-cover md:w-[60px]  "
                />
                <input
                  type="file"
                  accept="image/*"
                  ref={fileInputRef}
                  onChange={handleImageUpload}
                  style={{ display: "none" }}
                />
                <button
                  type="button"
                  onClick={triggerFileInput}
                  className="btn-gradient cursor-pointer py-[10px] px-[21px] flex gap-[10px] items-center rounded-[33px] font-[400] md:text-[16px] text-[14px] text-white"
                >
                  Edit <Uploadprofile />
                </button>
                <button
                  type="button"
                  onClick={handleDeleteImage}
                  className="flex items-center cursor-pointer gap-[10px] bg-[#CE1518] rounded-[33px] py-[10px] px-[20px] font-[400] md:text-[16px] text-[14px] text-white"
                >
                  Delete
                  <Changeprofile />
                </button>
              </div>
            </div>

            <div className="flex lg:items-center items-start lg:flex-row flex-col lg:gap-[287px] gap-[10px] mt-[16px]">
              <p className="font-[500] md:text-[18px] text-[16px] max-w-[123px] w-full  text-[#525252]">
                Full Name
              </p>
              <input
                type="text"
                placeholder="Theresa Webb"
                className="border max-w-[549px] w-full border-[#E2E8F0] rounded-[6px] outline-none font-[400] text-[14px] text-[#4B5669] py-[10px] px-[24px]"
              />
            </div>

            <div className="flex lg:items-center items-start lg:flex-row flex-col lg:gap-[287px] gap-[10px] mt-[16px]">
              <p className="font-[500] md:text-[18px] text-[16px] max-w-[123px] w-full  text-[#525252]">
                User Name
              </p>
              <input
                type="text"
                placeholder="Edwards"
                className="border max-w-[549px] w-full border-[#E2E8F0] rounded-[6px] outline-none font-[400] text-[14px] text-[#4B5669] py-[10px] px-[24px]"
              />
            </div>

            <div className="flex lg:items-center items-start lg:flex-row flex-col lg:gap-[287px] gap-[10px] mt-[16px]">
              <p className="max-w-[123px] w-full font-[500] md:text-[18px] text-[16px] text-[#525252]">
                Email ID
              </p>
              <input
                type="email"
                placeholder="willie.jennings@example.com"
                className="border max-w-[549px] w-full border-[#E2E8F0] rounded-[6px] outline-none font-[400] text-[14px] text-[#4B5669] py-[10px] px-[24px]"
              />
            </div>

            <div className="flex lg:items-center items-start lg:flex-row flex-col lg:gap-[287px] gap-[10px] mt-[16px]">
              <p className="max-w-[123px] w-full font-[500] md:text-[18px] text-[16px] text-[#525252]">
                Bio
              </p>
              <textarea
                className="font-[400] outline-none max-w-[549px] w-full border border-[#E2E8F0] rounded-[6px] px-[18px] py-[9px] resize-none min-h-[125px] h-full text-[14px] text-[#4B5669]"
                placeholder="Lorem ipsum dolor sit amet consectetur. Non consectetur convallis justo adipiscing vel lorem congue. Sit elementum feugiat sociis pellentesque consectetur erat. Quam neque id scelerisque at sit ultricies cras quam at. Mauris nunc volutpat nulla cursus molestie."
              ></textarea>
            </div>
          </form>
        </div>
        <div className="border-t border-t-[#DCDCDC] flex items-start">
          <div className=" px-[26px] py-[21px] flex items-center md:gap-[160px] gap-[101px] ">
            <div
              className="flex items-center md:max-w-[267px] max-w-[180px] w-full md:gap-[23px] gap-[12px] cursor-pointer "
              onClick={() => setShowChangePassword(true)}
            >
              <Changepassword />

              <p className="font-[600] text-[#525252] md:text-[20px] text-[16px] whitespace-nowrap">
                Change Password
              </p>
            </div>
            <Blackarrow />
          </div>
        </div>
      </div>

      <ChangePasswordModal
        isOpen={showChangePassword}
        onClose={() => setShowChangePassword(false)}
        onForgotPassword={() => {
          setShowChangePassword(false);
          setShowForgotPopup(true);
        }}
      />

      <ForgotPasswordModal
        isOpen={showForgotPopup}
        onClose={() => setShowForgotPopup(false)}
      />
    </div>
  );
};

export default Settingprofile;
