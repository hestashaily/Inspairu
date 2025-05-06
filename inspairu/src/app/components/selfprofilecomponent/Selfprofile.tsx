import React, { useState } from "react";
import Image from "next/image";
import { Closepopup, EditProfileIcon } from "@/app/icon";
import EditProfilePopup from "./EditProfilePopup";

const Selfprofile = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [showFollowersPopup, setShowFollowersPopup] = useState(false);
  const [showFollowingPopup, setShowFollowingPopup] = useState(false);

  const handleEditClick = () => setShowPopup(true);
  const handleClosePopup = () => setShowPopup(false);

  const handleFollowersClick = () => setShowFollowersPopup(true);
  const handleFollowingClick = () => setShowFollowingPopup(true);

  const handleCloseFollowersPopup = () => setShowFollowersPopup(false);
  const handleCloseFollowingPopup = () => setShowFollowingPopup(false);

  return (
    <div className="bg-white py-[30px] md:px-[40px] px-[10px] rounded-[15px] relative">
      <div className="w-full">
        <div className="w-full flex items-start lg:gap-[33px] gap-[15px] lg:flex-row flex-col">
          <div className="border-[4px] border-[#973998] rounded-full p-[10px]">
            <Image
              src="/home-images/Avatar.png"
              width={121}
              height={121}
              alt="repostperson"
              className="md:w-[121px] w-[90px]"
            />
          </div>
          <div className="w-full">
            <div className="flex items-center justify-between w-full">
              <p className="font-[700] text-[16px] text-[#1E293B]">X_AE_A-13</p>
              <button
                className="flex md:text-[16px] text-[14px] items-center cursor-pointer gap-[10px] btn-gradient py-[12px] px-[27px] rounded-full text-white"
                onClick={handleEditClick}
              >
                Edit Profile <EditProfileIcon />
              </button>
            </div>

            <p className="font-[400] text-[#525252] sm:text-[16px] text-[14px] mt-[12px] max-w-[666px] w-full">
              Aliquam magna Lorem ipsum dolor sit amet consectetur. Aliquam
              magna. Lorem ipsum dolor sit . Aliquam magna Lorem ipsum dolor sit
              amet consectetur. magna Lorem ipsum dolor sit amet consectetur.
            </p>

            <div className="flex flex-row sm:gap-[16px] gap-[12px] items-start mt-[12px]">
              <p
                onClick={handleFollowersClick}
                className="font-[600] md:text-[18px] text-[14px] text-[#CD508C] cursor-pointer"
              >
                19k Follower
              </p>
              <p
                onClick={handleFollowingClick}
                className="font-[600] md:text-[18px] text-[14px]  text-[#CD508C] cursor-pointer"
              >
                2k Following
              </p>
              <p className="font-[600] md:text-[18px] text-[14px]  text-[#CD508C]">3 Posts</p>
            </div>
          </div>
        </div>
      </div>

      {showPopup && <EditProfilePopup onClose={handleClosePopup} />}

      {showFollowersPopup && (
        <div className="fixed inset-0 z-50 bg-[#202020D6] flex justify-center items-center">
          <div className="bg-white rounded-lg w-[563px] relative m-[20px]">
            <button
              onClick={handleCloseFollowersPopup}
              className="absolute top-2 right-2 text-gray-600 cursor-pointer hover:text-black text-xl"
            >
              <Closepopup />
            </button>
            <div>
              <h2 className="border-b p-4 border-b-[#C5C5C5] text-center font-[600] md:text-[25px] text-[20px] text-[#525252]">
                Followers
              </h2>
              <div className="p-[20px]">
              <div className=" custom-scroll p-[20px] flex flex-col gap-[15px] overflow-y-scroll md:h-[400px] h-[280px]">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-[14px]">
                    <Image
                      src="/home-images/Avatar.png"
                      width={50}
                      height={50}
                      alt="repostperson"
                    />
                    <p className="font-[700] text-[16px] text-[#1E293B]">
                      X_AE_A-13
                    </p>
                  </div>
                  <button className="font-[500] cursor-pointer md:text-[16px] text-[12px] text-white btn-gradient md:py-[14px] py-[10px] px-[26px] rounded-full">
                    Remove
                  </button>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-[14px]">
                    <Image
                      src="/home-images/Avatar.png"
                      width={50}
                      height={50}
                      alt="repostperson"
                    />
                    <p className="font-[700] text-[16px] text-[#1E293B]">
                      X_AE_A-13
                    </p>
                  </div>
                  <button className="font-[500] cursor-pointer md:text-[16px] text-[12px] text-white btn-gradient md:py-[14px] py-[10px] px-[26px] rounded-full">
                    Remove
                  </button>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-[14px]">
                    <Image
                      src="/home-images/Avatar.png"
                      width={50}
                      height={50}
                      alt="repostperson"
                    />
                    <p className="font-[700] text-[16px] text-[#1E293B]">
                      X_AE_A-13
                    </p>
                  </div>
                  <button className="font-[500] cursor-pointer md:text-[16px] text-[12px] text-white btn-gradient md:py-[14px] py-[10px] px-[26px] rounded-full">
                    Remove
                  </button>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-[14px]">
                    <Image
                      src="/home-images/Avatar.png"
                      width={50}
                      height={50}
                      alt="repostperson"
                    />
                    <p className="font-[700] text-[16px] text-[#1E293B]">
                      X_AE_A-13
                    </p>
                  </div>
                  <button className="font-[500] cursor-pointer md:text-[16px] text-[12px] text-white btn-gradient md:py-[14px] py-[10px] px-[26px] rounded-full">
                    Remove
                  </button>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-[14px]">
                    <Image
                      src="/home-images/Avatar.png"
                      width={50}
                      height={50}
                      alt="repostperson"
                    />
                    <p className="font-[700] text-[16px] text-[#1E293B]">
                      X_AE_A-13
                    </p>
                  </div>
                  <button className="font-[500] cursor-pointer md:text-[16px] text-[12px] text-white btn-gradient md:py-[14px] py-[10px] px-[26px] rounded-full">
                    Remove
                  </button>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-[14px]">
                    <Image
                      src="/home-images/Avatar.png"
                      width={50}
                      height={50}
                      alt="repostperson"
                    />
                    <p className="font-[700] text-[16px] text-[#1E293B]">
                      X_AE_A-13
                    </p>
                  </div>
                  <button className="font-[500] cursor-pointer md:text-[16px] text-[12px] text-white btn-gradient md:py-[14px] py-[10px] px-[26px] rounded-full">
                    Remove
                  </button>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Following Popup */}
      {showFollowingPopup && (
        <div className="fixed inset-0 z-50 bg-[#202020D6] flex justify-center items-center">
          <div className="bg-white rounded-lg w-[563px] relative m-[20px]">
            <button
              onClick={handleCloseFollowingPopup}
              className="absolute top-2 right-2 text-gray-600 cursor-pointer hover:text-black text-xl"
            >
              <Closepopup />
            </button>
            <div>
              <h2 className="border-b p-4 border-b-[#C5C5C5] text-center font-[600] md:text-[25px] text-[20px] text-[#525252]">
                Following
              </h2>
              <div className="p-[20px]">
              <div className="custom-scroll p-[20px] flex flex-col gap-[15px] overflow-y-scroll md:h-[400px] h-[280px]">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-[14px]">
                    <Image
                      src="/home-images/Avatar.png"
                      width={50}
                      height={50}
                      alt="repostperson"
                    />
                    <p className="font-[700] text-[16px] text-[#1E293B]">
                      X_AE_A-13
                    </p>
                  </div>
                  <div className="bg-gradient-to-b from-[#973998] to-[#DB5689] p-[2px] rounded-[33px] max-w-[132px] w-full">
                    <div className="bg-white text-center py-[8px] font-[400] text-[#CD508C] text-[16px] rounded-[30px] ">Following</div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-[14px]">
                    <Image
                      src="/home-images/Avatar.png"
                      width={50}
                      height={50}
                      alt="repostperson"
                    />
                    <p className="font-[700] text-[16px] text-[#1E293B]">
                      X_AE_A-13
                    </p>
                  </div>
                  <div className="bg-gradient-to-b from-[#973998] to-[#DB5689] p-[2px] rounded-[33px] max-w-[132px] w-full">
                    <div className="bg-white text-center py-[8px] font-[400] text-[#CD508C] text-[16px] rounded-[30px] ">Following</div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-[14px]">
                    <Image
                      src="/home-images/Avatar.png"
                      width={50}
                      height={50}
                      alt="repostperson"
                    />
                    <p className="font-[700] text-[16px] text-[#1E293B]">
                      X_AE_A-13
                    </p>
                  </div>
                  <div className="bg-gradient-to-b from-[#973998] to-[#DB5689] p-[2px] rounded-[33px] max-w-[132px] w-full">
                    <div className="bg-white text-center py-[8px] font-[400] text-[#CD508C] text-[16px] rounded-[30px] ">Following</div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-[14px]">
                    <Image
                      src="/home-images/Avatar.png"
                      width={50}
                      height={50}
                      alt="repostperson"
                    />
                    <p className="font-[700] text-[16px] text-[#1E293B]">
                      X_AE_A-13
                    </p>
                  </div>
                  <div className="bg-gradient-to-b from-[#973998] to-[#DB5689] p-[2px] rounded-[33px] max-w-[132px] w-full">
                    <div className="bg-white text-center py-[8px] font-[400] text-[#CD508C] text-[16px] rounded-[30px] ">Following</div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-[14px]">
                    <Image
                      src="/home-images/Avatar.png"
                      width={50}
                      height={50}
                      alt="repostperson"
                    />
                    <p className="font-[700] text-[16px] text-[#1E293B]">
                      X_AE_A-13
                    </p>
                  </div>
                  <div className="bg-gradient-to-b from-[#973998] to-[#DB5689] p-[2px] rounded-[33px] max-w-[132px] w-full">
                    <div className="bg-white text-center py-[8px] font-[400] text-[#CD508C] text-[16px] rounded-[30px] ">Following</div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-[14px]">
                    <Image
                      src="/home-images/Avatar.png"
                      width={50}
                      height={50}
                      alt="repostperson"
                    />
                    <p className="font-[700] text-[16px] text-[#1E293B]">
                      X_AE_A-13
                    </p>
                  </div>
                  <div className="bg-gradient-to-b from-[#973998] to-[#DB5689] p-[2px] rounded-[33px] max-w-[132px] w-full">
                    <div className="bg-white text-center py-[8px] font-[400] text-[#CD508C] text-[16px] rounded-[30px] ">Following</div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-[14px]">
                    <Image
                      src="/home-images/Avatar.png"
                      width={50}
                      height={50}
                      alt="repostperson"
                    />
                    <p className="font-[700] text-[16px] text-[#1E293B]">
                      X_AE_A-13
                    </p>
                  </div>
                  <div className="bg-gradient-to-b from-[#973998] to-[#DB5689] p-[2px] rounded-[33px] max-w-[132px] w-full">
                    <div className="bg-white text-center py-[8px] font-[400] text-[#CD508C] text-[16px] rounded-[30px] ">Following</div>
                  </div>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Selfprofile;
