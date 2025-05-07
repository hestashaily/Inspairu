"use client";

import { useState, useTransition } from "react";
import toast from "react-hot-toast";
import UploadDropZone from "./UploadDropZone";
import TextPost from "./TextPost";
import { createFeedAction } from "../backend/controllers/feed.controller";

export default function UploadContent() {
  const [mediaFormData, setMediaFormData] = useState({
    Media: "",
    Caption: "",
    Aitool: [],
    Prompts: "",
    Hastags: [],
    Description: "",
    GenratedText: "",
    feedType: "media",
  });

  const cleanedData = {
    media: mediaFormData.Media,
    caption: mediaFormData.Caption,
    aiTools: mediaFormData.Aitool,
    prompts: mediaFormData.Prompts,
    hashtags: mediaFormData.Hastags,
    description: mediaFormData.Description,
    genratedText: mediaFormData.GenratedText,
    feed_type: mediaFormData.feedType,
  };
  console.log("tuubuv", cleanedData.feed_type);

  const updateFormData = (newData: Partial<typeof mediaFormData>) => {
    setMediaFormData((prev) => ({ ...prev, ...newData }));
  };
  console.log("this is final data", mediaFormData);
  const [isPending, startTransition] = useTransition();
  const HandleFinalSubmit = () => {
    // e.preventDefault();
    startTransition(async () => {
      try {
        await createFeedAction(cleanedData);
        toast.success("Feed created!");
        setMediaFormData({
          Media: "",
          Caption: "",
          Aitool: [],
          Prompts: "",
          Hastags: [],
          Description: "",
          GenratedText: "",
          feedType: "media",
        });
      } catch (err: any) {
        toast.error(err.message || "Error creating feed");
      }
    });
  };
  const [activeTab, setActiveTab] = useState("tab1");

  return (
    <div className="w-full max-w-full mt-[24px] bg-white py-[18px] md:px-[32px] px-[12px] rounded-[12px] border border-[#ECF0F5]">
      {/* Tabs */}
      <div className="flex space-x-2 justify-between w-full border-b border-b-[#D1D1D1]">
        <div className="flex items-center space-x-2">
          <button
            onClick={() => {
              setActiveTab("tab1");
              updateFormData({
                feedType: "media",
              });
            }}
            className={`px-4 pb-[20px] cursor-pointer mb-0 font-medium flex items-center gap-[8px] border-b-[3px] ${
              activeTab === "tab1"
                ? " bg-gradient-to-b from-[#973998] to-[#DB5689] bg-clip-text text-transparent border-b-[2px] border-b-[#DB5689]"
                : "text-[#525252] border-transparent "
            }`}
          >
            Images/Videos/Music
          </button>
          <button
            onClick={() => {
              setActiveTab("tab2");
              updateFormData({
                feedType: "text",
              });
            }}
            className={`px-4 pb-[20px] cursor-pointer font-medium flex items-center gap-[8px] border-b-[3px] ${
              activeTab === "tab2"
                ? " bg-gradient-to-b from-[#973998] to-[#DB5689] bg-clip-text text-transparent border-b-[2px] border-b-[#DB5689]"
                : "text-[#525252] border-transparent"
            }`}
          >
            Texts
          </button>
        </div>

        <button
          onClick={HandleFinalSubmit}
          className="py-[12px] px-[27px] rounded-full btn-gradient font-[500] text-[16px] cursor-pointer text-white"
        >
          Post
        </button>
      </div>
      <div className="">
        {activeTab === "tab1" && (
          <UploadDropZone
            updateFormData={updateFormData}
            mediaFormData={mediaFormData}
          />
        )}
        {activeTab === "tab2" && (
          <TextPost
            updateFormData={updateFormData}
            mediaFormData={mediaFormData}
          />
        )}
      </div>
    </div>
  );
}
