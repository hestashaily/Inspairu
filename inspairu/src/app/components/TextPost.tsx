"use client";
import { useState } from "react";
import CustomMultiSelect from "./CustomMultiSelect";

export default function TextPost() {
  const [aiTools, setAiTools] = useState<string[]>([]);

  const aiOptions = [
    "ChatGPT",
    "Bard",
    "GitHub Copilot",
    "Midjourney",
    "DALL·E",
    "Claude",
    "Gemini",
  ];

  return (
    <div className="w-full max-w-full mt-[24px]">
      <div className="flex md:items-center items-start w-full gap-[22px] md:flex-row flex-col">
        <div className="flex flex-col gap-[10px] md:w-[50%] w-full">
          <label
            htmlFor="caption"
            className="font-[600] text-[18px] text-[#525252]"
          >
            Caption*
          </label>
          <input
            type="text"
            name="caption"
            placeholder="Write title of post"
            className="border outline-none border-[#CBD5E1] rounded-full py-[8px] px-[12px] font-[500] text-[14px] text-[#8D8D8D]"
          />
        </div>
        <div className="md:w-[50%] w-full">
          <CustomMultiSelect
            label="AI Tools Used"
            options={aiOptions}
            selectedOptions={aiTools}
            setSelectedOptions={setAiTools}
          />
        </div>
      </div>
      <div className="flex items-center w-full gap-[22px] mt-[15px] md:flex-row flex-col">
        <div className="flex flex-col gap-[10px] md:w-[50%] w-full">
          <label
            htmlFor="Promts"
            className="font-[600] text-[18px] text-[#525252]"
          >
            Promts
          </label>
          <input
            type="text"
            name="Promts"
            placeholder="Write your promts"
            className="border outline-none border-[#CBD5E1] rounded-full py-[8px] px-[12px] font-[500] text-[14px] text-[#8D8D8D]"
          />
        </div>
        <div className="flex flex-col gap-[10px] md:w-[50%] w-full">
          <label
            htmlFor="Hashtags"
            className="font-[600] text-[18px] text-[#525252]"
          >
            Hashtags
          </label>
          <input
            type="text"
            name="Hashtags"
            placeholder="Write AI tool used"
            className="border outline-none border-[#CBD5E1] rounded-full py-[8px] px-[12px] font-[500] text-[14px] text-[#8D8D8D]"
          />
        </div>
      </div>
      <div className="flex items-start flex-col gap-[22px] mt-[15px]">
        <label
          htmlFor="description"
          className="font-[600] text-[18px] text-[#525252]"
        >
          Description
        </label>
        <textarea
          name="description"
          className="noresize border border-[#CBD5E1] rounded-[14px] w-full min-h-[128px] h-full resize-none outline-none p-[8px] font-[500] text-[14px] text-[#8D8D8D]"
          placeholder="Write a short description"
        ></textarea>
      </div>
      <div className="flex items-start flex-col gap-[22px] mt-[15px]">
        <label
          htmlFor="description"
          className="font-[600] text-[18px] text-[#525252]"
        >
          Your Generated Text
        </label>
        <textarea
          name="description"
          className="noresize border border-[#CBD5E1] rounded-[14px] w-full min-h-[252px] h-full resize-none outline-none p-[8px] font-[500] text-[14px] text-[#8D8D8D]"
        ></textarea>
      </div>
      <div className="flex items-end justify-end w-full mt-[15px]">
        <button className="py-[12px] px-[27px]  rounded-full btn-gradient font-[500] text-[16px] cursor-pointer  text-white">
          Post
        </button>
      </div>
    </div>
  );
}
