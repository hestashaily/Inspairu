"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import {
  Profile,
  Setting,
  TermsCondition,
  Privacypolicy,
  Help,
  Logout,
  GradientCross,
} from "../icon";

export default function Header() {
  const [showNotificationDropdown, setShowNotificationDropdown] =
    useState(false);
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);

  const notificationRef = useRef<HTMLDivElement>(null);
  const profileRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        notificationRef.current &&
        !notificationRef.current.contains(event.target as Node)
      ) {
        setShowNotificationDropdown(false);
      }
      if (
        profileRef.current &&
        !profileRef.current.contains(event.target as Node)
      ) {
        setShowProfileDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="header-bg p-[10px] flex items-center justify-between">
      <Image
        src="/auth-images/header-logo.png"
        width={185}
        height={60}
        alt="logo"
      />

      <div className="flex items-center gap-[20px]">
        <button className="flex items-center gap-[12px] bg-white rounded-full py-[12px] px-[18px] cursor-pointer">
          <span className="bg-gradient-to-b from-[#973998] to-[#DB5689] bg-clip-text text-transparent">
            Chat
          </span>
          <Image
            src="/auth-images/chat.png"
            width={15}
            height={16}
            alt="chat"
          />
        </button>

        <button className="flex items-center gap-[12px] bg-white rounded-full py-[12px] px-[18px] cursor-pointer">
          <span className="bg-gradient-to-b from-[#973998] to-[#DB5689] bg-clip-text text-transparent">
            Post
          </span>
          <Image
            src="/auth-images/add-post.png"
            width={15}
            height={16}
            alt="post"
          />
        </button>

        <div ref={notificationRef} className="relative">
          <div
            className="bg-white w-[40px] h-[40px] rounded-full flex items-center justify-center cursor-pointer relative"
            onClick={() => setShowNotificationDropdown((prev) => !prev)}
          >
            <Image
              src="/auth-images/notification.png"
              width={15}
              height={16}
              alt="notification"
            />
            <div className="bg-[#EC5252] rounded-full w-[6px] h-[6px] absolute right-[12px] top-[12px]" />
          </div>
          {showNotificationDropdown && (
            <div className="absolute right-0 mt-2 w-[365px] bg-white rounded-md shadow-lg py-4 z-10">
              <div className="flex items-center justify-between px-[16px]">
                <p className="font-[400] text-[16px]  text-[#1A1918]">
                  Notifications
                </p>
                {/* <GradientCross /> */}
              </div>
              <div className="flex items-start gap-[16px] mt-[16px] p-[16px] border-t border-t-[#DBDBDB]  hover:bg-[#F9DFE9A3]">
                <Image
                  src="/auth-images/notifyOne.png"
                  width={36}
                  height={36}
                  alt="notifyOne"
                />
                <div>
                  <p className="font-[400] text-[14px] text-[#222222]">
                    Lorem ipsum dolor sit amet consectetur. In interdum nunc{" "}
                  </p>
                  <p className="font-[400] text-[13px] text-[#717171]">
                    2d ago
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-[16px]  p-[16px] border-t border-t-[#DBDBDB]  hover:bg-[#F9DFE9A3]">
                <Image
                  src="/auth-images/notifyTwo.png"
                  width={36}
                  height={36}
                  alt="notifyOne"
                />
                <div>
                  <p className="font-[400] text-[14px] text-[#222222]">
                    Lorem ipsum dolor sit amet consectetur. In interdum nunc{" "}
                  </p>
                  <p className="font-[400] text-[13px] text-[#717171]">
                    2d ago
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-[16px]  p-[16px] border-t border-t-[#DBDBDB]  hover:bg-[#F9DFE9A3]">
                <Image
                  src="/auth-images/notifyThree.png"
                  width={36}
                  height={36}
                  alt="notifyOne"
                />
                <div>
                  <p className="font-[400] text-[14px] text-[#222222]">
                    Lorem ipsum dolor sit amet consectetur. In interdum nunc{" "}
                  </p>
                  <p className="font-[400] text-[13px] text-[#717171]">
                    2d ago
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-[16px] mt-[16px] p-[16px] border-t border-t-[#DBDBDB]  hover:bg-[#F9DFE9A3]">
                <Image
                  src="/auth-images/notifyOne.png"
                  width={36}
                  height={36}
                  alt="notifyOne"
                />
                <div>
                  <p className="font-[400] text-[14px] text-[#222222]">
                    Lorem ipsum dolor sit amet consectetur. In interdum nunc{" "}
                  </p>
                  <p className="font-[400] text-[13px] text-[#717171]">
                    2d ago
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-[16px]  p-[16px] border-t border-t-[#DBDBDB]  hover:bg-[#F9DFE9A3]">
                <Image
                  src="/auth-images/notifyTwo.png"
                  width={36}
                  height={36}
                  alt="notifyOne"
                />
                <div>
                  <p className="font-[400] text-[14px] text-[#222222]">
                    Lorem ipsum dolor sit amet consectetur. In interdum nunc{" "}
                  </p>
                  <p className="font-[400] text-[13px] text-[#717171]">
                    2d ago
                  </p>
                </div>
              </div>
          
             
            </div>
          )}
        </div>
        <div ref={profileRef} className="relative">
          <div
            className="cursor-pointer"
            onClick={() => setShowProfileDropdown((prev) => !prev)}
          >
            <Image
              src="/auth-images/profile-avatar.png"
              width={40}
              height={40}
              alt="profile"
            />
          </div>
          {showProfileDropdown && (
            <div className="absolute right-0 mt-2 w-[190px] bg-white rounded-md shadow-lg p-4 z-10">
              <p className="text-[14px] text-[#525252] font-[400] flex items-center gap-[12px] cursor-pointer ">
                <Profile />
                Profile
              </p>
              <p className="text-[14px] mt-[10px] text-[#525252] font-[400] flex items-center gap-[12px] cursor-pointer">
                <Setting />
                Settings
              </p>
              <p className="text-[14px] mt-[10px] text-[#525252] font-[400] flex items-center gap-[12px] cursor-pointer">
                <TermsCondition />
                Terms & Conditions
              </p>
              <p className="text-[14px] mt-[10px] text-[#525252] font-[400] flex items-center gap-[12px] cursor-pointer">
                <Privacypolicy />
                Privacy Policy
              </p>
              <p className="text-[14px] mt-[10px] text-[#525252] font-[400] flex items-center gap-[12px] cursor-pointer">
                <Help />
                Help
              </p>
              <p className="text-[14px] mt-[10px] text-[#525252] font-[400] flex items-center gap-[12px] cursor-pointer ">
                <Logout />
                Logout
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
