
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
    <div className="bg-white py-[30px] px-[40px] rounded-[15px] relative">
      <div className="w-full">
        <div className="w-full flex items-start gap-[33px]">
          <div className="border-[4px] border-[#973998] rounded-full p-[10px]">
            <Image
              src="/home-images/Avatar.png"
              width={121}
              height={121}
              alt="repostperson"
            />
          </div>
          <div className="w-full">
            <div className="flex items-center justify-between w-full">
              <p className="font-[700] text-[16px] text-[#1E293B]">X_AE_A-13</p>
              <button
                className="flex items-center cursor-pointer gap-[10px] btn-gradient py-[12px] px-[27px] rounded-full text-white"
                onClick={handleEditClick}
              >
                Edit Profile <EditProfileIcon />
              </button>
            </div>

            <p className="font-[400] text-[#525252] text-[16px] mt-[12px] max-w-[666px] w-full">
              Aliquam magna Lorem ipsum dolor sit amet consectetur. Aliquam
              magna. Lorem ipsum dolor sit . Aliquam magna Lorem ipsum dolor sit
              amet consectetur. magna Lorem ipsum dolor sit amet consectetur.
            </p>

            <div className="flex gap-[16px] items-start mt-[12px]">
              <p
                onClick={handleFollowersClick}
                className="font-[600] text-[18px] text-[#CD508C] cursor-pointer"
              >
                19k Follower
              </p>
              <p
                onClick={handleFollowingClick}
                className="font-[600] text-[18px] text-[#CD508C] cursor-pointer"
              >
                2k Following
              </p>
              <p className="font-[600] text-[18px] text-[#CD508C]">3 Posts</p>
            </div>
          </div>
        </div>
      </div>

 
      {showPopup && <EditProfilePopup onClose={handleClosePopup} />}

      {showFollowersPopup && (
        <div className="fixed inset-0 z-50 bg-[#202020D6] flex justify-center items-center">
          <div className="bg-white rounded-lg w-[400px] relative">
           
            <button
              onClick={handleCloseFollowersPopup}
              className="absolute top-2 right-2 text-gray-600 hover:text-black text-xl"
            >
              <Closepopup/>
            </button>
            <div>
            <h2 className="border-b p-4 border-b-[#C5C5C5] text-center font-[600] text-[25px] text-[#525252]">Followers</h2>
           
            <div className="p-[20px]">
             <div>

              <div>
              <Image
              src="/home-images/Avatar.png"
              width={50}
              height={50}
              alt="repostperson"
            />
                <p>X_AE_A-13</p>
              </div>
              <button className="font-[500] text-[16px] text-white btn-gradient py-[14px] px-[26px] rounded-full">Remove</button>
             </div>
              
            </div>
            </div>
          </div>
        </div>
      )}

      {/* Following Popup */}
      {showFollowingPopup && (
        <div className="fixed inset-0 z-50 bg-[#202020D6] flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg w-[400px] relative">
            <button
              onClick={handleCloseFollowingPopup}
              className="absolute top-2 right-2 text-gray-600 hover:text-black text-xl"
            >
              ✕
            </button>
            <h2 className="text-[20px] font-semibold mb-4">Following</h2>
            <div className="space-y-2">
              <p>Following 1</p>
              <p>Following 2</p>
              <p>Following 3</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Selfprofile;
