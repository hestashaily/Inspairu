"use client";

import { useEffect, useState } from "react";

type MediaPreview = {
  id: string;
  type: "image" | "video" | "audio";
  url: string;
};

interface AITool {
  id: number;
  name: string;
}

export default function TextPost() {
  const [previews, setPreviews] = useState<MediaPreview[]>([]);
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const [tools, setTools] = useState<AITool[]>([]);

  const [caption, setCaption] = useState("");
  const [AITools, setAITools] = useState("");
  const [pompts, setPromts] = useState("");
  const [hastage, setHastage] = useState("");
  const [description, setDescription] = useState("");
  const [genratedText, setGenratedText] = useState("");
  useEffect(() => {
    // Fetch AI tools from the backend
    const fetchAITools = async () => {
      try {
        const response = await fetch("/api/fromfielddata"); // Update with your API route
        const data = await response.json();
        console.log("data is", data);
        setTools(data); // Assuming the API returns an array of AI tools
      } catch (error) {
        console.error("Error fetching AI tools:", error);
      }
    };

    fetchAITools();
  }, []);

  const handleToolClick = (toolName: string) => {
    if (AITools.includes(toolName)) {
      // If already selected, unselect
      setAITools(AITools.filter((name) => name !== toolName));
    } else {
      // Add to selection
      setAITools([...AITools, toolName]);
    }
  };
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
        {/* <div className="flex flex-col gap-[10px] w-[50%]">
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
        </div> */}

        <div className="flex flex-col gap-[10px] w-full mt-[15px] max-w-full relative">
          <label
            htmlFor="ai-tool-used"
            className="font-semibold block text-[16px] text-[#525252]"
          >
            AI Tool Used*
          </label>

          {/* Custom Input Field */}
          <div
            onClick={() => setShowDropdown(!showDropdown)}
            className="border border-[#CBD5E1] rounded-full py-[8px] px-[12px] font-medium text-[14px] text-[#8D8D8D] outline-none cursor-pointer flex flex-wrap gap-2 min-h-[40px]"
          >
            {AITools.length > 0 ? (
              AITools.map((tool, index) => (
                <span
                  key={index}
                  className="bg-[#EFEFEF] text-[#8D8D8D] px-2 py-1 rounded-full text-[12px]"
                >
                  {tool}
                </span>
              ))
            ) : (
              <span className="text-[#8D8D8D]">Select AI tools</span>
            )}
          </div>

          {/* Dropdown List */}
          {showDropdown && (
            <div className="absolute top-[100%] left-0 w-full border border-[#CBD5E1] rounded-lg bg-white shadow-md mt-1 max-h-[200px] overflow-y-auto z-10">
              {tools.map((tool) => (
                <div
                  key={tool.id}
                  onClick={() => handleToolClick(tool.name)}
                  className={`px-4 py-2 cursor-pointer text-black hover:bg-blue-100 ${
                    AITools.includes(tool.name) ? "" : ""
                  }`}
                >
                  {tool.name}
                </div>
              ))}
            </div>
          )}
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
