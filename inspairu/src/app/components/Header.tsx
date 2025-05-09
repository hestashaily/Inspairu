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
  Closepopup,
  LogoutIcon,
} from "../icon/route";
import Link from "next/link";

export default function Header() {
  const [showNotificationDropdown, setShowNotificationDropdown] =
    useState(false);
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false); // Track modal state

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
    <div className="header-bg p-2 sm:p-[10px] flex flex-wrap items-center justify-between">
      <Link href="/home">
        <Image
          src="/auth-images/header-logo.png"
          width={185}
          height={60}
          alt="logo"
          className="h-auto w-full sm:w-[150px]"
        />
      </Link>

      <div className="flex items-center gap-3 sm:gap-5 flex-wrap justify-end mt-2 sm:mt-0">
        <button className="flex items-center gap-2 sm:gap-[12px] bg-white rounded-full py-2 sm:py-[12px] sm:px-4 px-[8px] cursor-pointer text-sm sm:text-base">
          <span className="md:block hidden bg-gradient-to-b from-[#973998] to-[#DB5689] bg-clip-text text-transparent">
            Chat
          </span>
          <Image
            src="/auth-images/chat.png"
            width={15}
            height={16}
            alt="chat"
          />
        </button>

        <button className="flex items-center gap-2 sm:gap-[12px] bg-white rounded-full py-2 sm:py-[12px] sm:px-4 px-[8px] cursor-pointer text-sm sm:text-base">
          <span className="md:block hidden bg-gradient-to-b from-[#973998] to-[#DB5689] bg-clip-text text-transparent">
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
            className="bg-white md:p-[16px] p-[8px] rounded-full flex items-center justify-center cursor-pointer relative"
            onClick={() => setShowNotificationDropdown((prev) => !prev)}
          >
            <Image
              src="/auth-images/notification.png"
              width={15}
              height={16}
              alt="notification"
              className="relative"
            />
            <div className="bg-[#EC5252] rounded-full w-[6px] h-[6px] absolute md:right-[15px] right-[8px] md:top-[15px] top-[6px]" />
          </div>

          {showNotificationDropdown && (
            <div className="absolute md:right-0 right-[-45px] mt-2 w-[90vw] md:max-w-[365px] max-w-[300px] bg-white rounded-md shadow-lg pt-4 z-10">
              <div className="flex items-center justify-between px-4">
                <p className="font-normal text-base text-[#1A1918] mb-[17px]">
                  Notifications
                </p>
              </div>

              {[1, 2, 3, 4, 5].map((item, i) => (
                <div
                  key={i}
                  className="flex flex-wrap sm:flex-nowrap items-start gap-4 p-4 border-t border-t-[#DBDBDB] hover:bg-[#F9DFE9A3]"
                >
                  <Image
                    src={`/auth-images/notify${
                      item <= 3 ? ["One", "Two", "Three"][i % 3] : "One"
                    }.png`}
                    width={36}
                    height={36}
                    alt={`notify${i}`}
                  />
                  <div>
                    <p className="text-sm text-[#222222] font-normal">
                      Lorem ipsum dolor sit amet consectetur. In interdum nunc{" "}
                    </p>
                    <p className="text-xs text-[#717171] font-normal">2d ago</p>
                  </div>
                </div>
              ))}
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
              className="md:w-[40px] w-[30px]"
            />
          </div>

          {showProfileDropdown && (
            <div className="absolute right-0 mt-2 w-[80vw] max-w-[270px] bg-white rounded-md shadow-lg p-4 z-10">
             

              {[
                { label: "Profile", icon: <Profile />, href: "/self-profile" },
                { label: "Settings", icon: <Setting />, href: "/setting" },
                {
                  label: "Terms & Conditions",
                  icon: <TermsCondition />,
                  href: "/terms-condition",
                },
                {
                  label: "Privacy Policy",
                  icon: <Privacypolicy />,
                  href: "/privacy-policy",
                },
                { label: "Help", icon: <Help />, href: "/help" },
                {
                  label: "Logout",
                  icon: <Logout />,
                  onClick: () => setShowLogoutModal(true),
                },
              ].map((item, index) =>
                item.href ? (
                  <Link
                    key={index}
                    href={item.href}
                    className="text-sm text-[#525252] font-normal flex items-center gap-3 cursor-pointer p-2 hover:bg-[#F9DFE9A3] mt-2 first:mt-0"
                  >
                    {item.icon}
                    {item.label}
                  </Link>
                ) : (
                  <p
                    key={index}
                    className="text-sm text-[#525252] font-normal flex items-center gap-3 cursor-pointer p-2 hover:bg-[#F9DFE9A3] mt-2 first:mt-0"
                    onClick={item.onClick}
                  >
                    {item.icon}
                    {item.label}
                  </p>
                )
              )}
            </div>
          )}
        </div>
      </div>
      {showLogoutModal && (
        <div className="fixed inset-0 bg-[#202020D6] z-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-[593px] relative m-[20px]">
            <button
              onClick={() => setShowLogoutModal(false)}
              className="absolute top-2 right-2 text-xl text-gray-600 cursor-pointer"
            >
              <Closepopup />
            </button>
            <div className="flex items-center justify-center flex-col">
              <LogoutIcon />
              <h2 className="text-lg font-semibold text-[#1A1918] mb-4">
                Are you sure you want to logout?
              </h2>
            </div>

            <div className="flex justify-center gap-4">
              <button
                onClick={() => {
                  setShowLogoutModal(false);
                }}
                className="px-4 py-2 text-[16px] font-[600] cursor-pointer btn-gradient max-w-[230px] w-full text-white rounded-full "
              >
                Logout
              </button>

              <div className="gradient-border-wrapper">
                <button
                  onClick={() => setShowLogoutModal(false)}
                  className=" gradient-border-content rounded-full text-[#CD508C] font-[600] text-[16px] cursor-pointer py-[9px] px-[82px]"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
