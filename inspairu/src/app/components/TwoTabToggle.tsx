"use client";
import { useState } from "react";
import { Heart, Following, Heartfilled } from "../icon";
import CreatePost from "./CreatePost";

export default function TwoTabToggle() {
  const [activeTab, setActiveTab] = useState("tab1");

  return (
    <div className="w-full max-w-full mt-[24px]">
      <div className="flex gap-[30px] mb-4 border-b border-b-[#D1D1D1]">
        <button
          className={`w-[112px] font-[500] md:text-[20px] text-[18px] flex gap-[10px] items-center py-2 text-center rounded-t-lg transition-all duration-300 ${
            activeTab === "tab1"
              ? "bg-gradient-to-b from-[#973998] to-[#DB5689] bg-clip-text text-transparent border-b-[2px] border-b-[#DB5689]"
              : " text-black"
          }`}
          onClick={() => setActiveTab("tab1")}
        >
          {activeTab === "tab1" ? <Heart /> : <Heartfilled />}
          For you
        </button>

        <button
          className={`w-[131px] flex items-center font-[500] md:text-[20px] text-[18px] gap-[8px] py-2 text-center rounded-t-lg transition-all duration-300 ${
            activeTab === "tab2"
              ? "bg-gradient-to-b from-[#973998] to-[#DB5689] bg-clip-text text-transparent border-b-[2px] border-b-[#DB5689]"
              : "text-black"
          }`}
          onClick={() => setActiveTab("tab2")}
        >
          {activeTab === "tab2" ? <Heart /> : <Following />}
          Following
        </button>
      </div>

      <div className="">
        {activeTab === "tab1" ? (
          <div>
            <CreatePost />
          </div>
        ) : (
          <div>
            <CreatePost />
          </div>
        )}
      </div>
    </div>
  );
}
