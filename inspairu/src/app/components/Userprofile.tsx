import React, { useState } from "react";
import { Chat } from "../icon/route";
import Image from "next/image";
import Link from "next/link";

const Userprofile = () => {
  const [following, setfollowing] = useState(false);

  const handleFollowClick = () => {
    setfollowing(!following);
  };
  return (
    <div className="bg-white py-[30px] md:px-[40px] px-[10px] rounded-[15px]">
      <div className="w-full">
        <div className="flex lg:items-center items-start gap-[33px] lg:flex-row flex-col">
          <div className="border-[4px] border-[#973998] rounded-full p-[10px]">
            <Image
              src="/home-images/Avatar.png"
              width={121}
              height={121}
              alt="repostperson"
              className="md:w-[121px] w-[90px]"
            />
          </div>
          <div>
            <p className="font-[700] text-[16px] text-[#1E293B]">
              Eleanor_pena
            </p>
            <p className="font-[500] text-[14px] text-[#1E293B]">
              Eleonar Pena{" "}
            </p>
            <p className="font-[400] text-[#525252] md:text-[16px] text-[14px] mt-[12px] max-w-[666px] w-full">
              Aliquam magna Lorem ipsum dolor sit amet consectetur. Aliquam
              magna. Lorem ipsum dolor sit . Aliquam magna Lorem ipsum dolor sit
              amet consectetur.m{" "}
            </p>
            <div className="flex gap-[16px] items-start mt-[12px]">
              <p className="font-[600] text-[18px] text-[#525252]">
                19k Follower
              </p>
              <p className="font-[600] text-[18px] text-[#525252]">21 Posts</p>
            </div>
            <div className="flex items-start gap-[10px] mt-[20px]">
              <button
                onClick={handleFollowClick}
                className={`py-[12px] px-[26px] cursor-pointer rounded-full font-[400] text-[16px] 
                  ${
                    following
                      ? "bg-white text-[#CD508C] border border-[#CD508C]"
                      : "btn-gradient text-white"
                  }`}
              >
                {following ? "Following" : "Follow"}
              </button>
              <Link href="/chat">
                <button className="btn-gradient py-[12px] px-[26px] cursor-pointer rounded-full font-[400] text-[16px] text-[#FFFFFF] flex items-center gap-[12px]">
                  Chat
                  <Chat />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Userprofile;
