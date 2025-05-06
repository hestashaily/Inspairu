"use client";
import { useState } from "react";
import { ImageVedio, ImageVedioFilled, Text, TextFilled } from "../icon";
import TextPost from "./TextPost";
import UploadDropZone from "./UploadDropZone";

export default function UploadContent() {
  const [activeTab, setActiveTab] = useState("tab1");

  return (
    <div className="w-full max-w-full mt-[24px] bg-white py-[18px] md:px-[32px] px-[12px] rounded-[12px] border border-[#ECF0F5]">
      {/* Tabs */}
      <div className="flex space-x-2 justify-between w-full border-b border-b-[#D1D1D1]">
        <div className="flex items-center space-x-2  ">
          <button
            onClick={() => setActiveTab("tab1")}
            className={`px-4 md:pb-[20px] pb-[9px] md:text-[20px] text-[14px] mb-0 font-medium flex items-center gap-[8px] border-b-[3px] ${
              activeTab === "tab1"
                ? " bg-gradient-to-b from-[#973998] to-[#DB5689] bg-clip-text text-transparent border-b-[2px] border-b-[#DB5689]"
                : "text-[#525252] border-transparent "
            }`}
          >
            {activeTab === "tab1" ? <ImageVedioFilled /> : <ImageVedio />}
            Images/Videos/Music
          </button>
          <button
            onClick={() => setActiveTab("tab2")}
            className={`px-4  md:pb-[20px] pb-[10px]  md:text-[20px] text-[14px] font-medium flex items-center gap-[8px] border-b-[3px] ${
              activeTab === "tab2"
                ? " bg-gradient-to-b from-[#973998] to-[#DB5689] bg-clip-text text-transparent border-b-[2px] border-b-[#DB5689]"
                : "text-[#525252] border-transparent"
            }`}
          >
            {activeTab === "tab2" ? <TextFilled /> : <Text />}
            Texts
          </button>
        </div>
      </div>
      <div className="flex items-start">
        {activeTab === "tab1" && (
          <div className="max-w-full w-full">
            <UploadDropZone />
          </div>
        )}
        {activeTab === "tab2" && (
          <div className="max-w-full w-full">
            <TextPost />
          </div>
        )}
      </div>
    </div>
  );
}
