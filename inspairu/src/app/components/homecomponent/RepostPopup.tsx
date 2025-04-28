"use client";

import { Closepopup, Repost } from "@/app/icon";
import CustomAudioPlayer from "../CustomAudioPlayer";
import CustomVideoPlayer from "../CustomVideoPlayer";

type RepostProps = {
  data: {
    postId: string;
    type: "text" | "image" | "audio" | "video";
    userName: string;
    userImage: string;
    title?: string;
    description?: string;
    contentText?: string;
    contentHeading?: string;
    contentDescription?: string;
    tags?: string[];
    imageSrc?: string;
    audioSrc?: string;
    videoSrc?: string;
  };
  onClose: () => void;
};

export default function RepostPopup({ data, onClose }: RepostProps) {



  return (
    <div className="fixed inset-0 bg-[#202020B5] flex   items-center justify-center z-50">
      <div className="flex flex-col gap-[28px] bg-white rounded-lg p-6 shadow-xl max-w-[993px] w-full text-center relative">
      <div className="w-full ">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-xl text-gray-500 hover:text-gray-700 cursor-pointer "
        >
          <Closepopup />
        </button>
        <div className="flex items-center justify-center flex-col">
          <Repost />
          <h2 className="font-[600] text-[25px] text-[#525252]">Repost</h2>
        </div>

        <div className="flex items-start justify-start gap-4 border-b border-b-[#C8CBD9] pb-[18px]">
          <img
            src={data.userImage}
            alt={data.userName}
            className="rounded-full w-10 h-10"
          />
          <div className="mt-[10px]">
            <h3 className="font-bold text-xl">{data.userName}</h3>
            {data.title && (
              <p className="text-sm text-gray-500">{data.title}</p>
            )}
          </div>
        </div>

        
        {data.contentHeading && (
          <div className="text-left mb-4 ">
            <h3 className="font-semibold text-xl text-[#333] mt-[8px]">
              {data.contentHeading}
            </h3>
          </div>
        )}
        {data.contentDescription && (
          <div className="text-left mb-4">
            <p className="text-sm text-gray-600">{data.contentDescription}</p>
          </div>
        )}


        {data.title && (
          <div className="text-left  mt-[10px]">
            <h3 className="font-semibold text-xl text-[#333]">{data.title}</h3>
          </div>
        )}
        {data.description && (
          <div className="text-left mb-4">
            <p className="text-sm text-gray-600">{data.description}</p>
          </div>
        )}
        {data.type === "text" && (
          <>
            {data.description && (
              <p className="mt-4 text-lg">{data.description}</p>
            )}
            {data.contentText && (
              <div className="mt-3 p-3 bg-gray-100 text-left text-sm rounded-lg">
                {data.contentText}
              </div>
            )}
          </>
        )}

        {data.imageSrc && (
          <div className="mt-4">
            <img
              src={data.imageSrc}
              alt="Post Image"
              className="w-full h-[300px]  rounded-lg"
            />
          </div>
        )}

        {data.type === "audio" && data.audioSrc && (
          <CustomAudioPlayer audioSrc={data.audioSrc} />
        )}
        {data.videoSrc && (
          <div className="">
           
            <CustomVideoPlayer videoSrc={data.videoSrc}  />
          </div>
        )}

      </div>
      <button className="font-[500] cursor-pointer text-[#FFFFFF] text-[16px] btn-gradient py-[10px] rounded-[33px]">Post</button>
      </div>

    </div>
  );
}
