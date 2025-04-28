"use client";

import { useState } from "react";

export default function TextPost() {
  const [caption, setCaption] = useState("");
  const [AITools, setAITools] = useState("");
  const [pompts, setPromts] = useState("");
  const [hastage, setHastage] = useState("");
  const [description, setDescription] = useState("");
  const [genratedText, setGenratedText] = useState("");
  return (
    <div className="w-full max-w-full mt-[24px]">
      <div className="flex items-center w-full gap-[22px]">
        <div className="flex flex-col gap-[10px] w-[50%]">
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
        <div className="flex flex-col gap-[10px] w-[50%]">
          <label
            htmlFor="aitool"
            className="font-[600] text-[18px] text-[#525252]"
          >
            AI Tool Used*
          </label>
          <input
            type="text"
            name="aitool"
            placeholder="Write AI tool used"
            className="border outline-none border-[#CBD5E1] rounded-full py-[8px] px-[12px] font-[500] text-[14px] text-[#8D8D8D]"
          />
        </div>
      </div>
      <div className="flex items-center w-full gap-[22px] mt-[15px]">
        <div className="flex flex-col gap-[10px] w-[50%]">
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
        <div className="flex flex-col gap-[10px] w-[50%]">
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
    </div>
  );
}
