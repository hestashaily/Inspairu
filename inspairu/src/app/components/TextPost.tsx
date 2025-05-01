"use client";

import { useEffect, useState } from "react";
import { MediaForm } from "../../../types/global";

// type MediaPreview = {
//   id: string;
//   type: "image" | "video" | "audio";
//   url: string;
// };

interface AITool {
  id: number;
  name: string;
}
interface MediaFormProps {
  updateFormData: (data: Partial<MediaForm>) => void;
  mediaFormData: MediaForm;
}
export default function TextPost({
  mediaFormData,
  updateFormData,
}: MediaFormProps) {
  // const [previews, setPreviews] = useState<MediaPreview[]>([]);
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const [tools, setTools] = useState<AITool[]>([]);

  const [caption, setCaption] = useState("");
  const [AITools, setAITools] = useState<AITool[]>([]);
  const [pompts, setPromts] = useState("");
  const [hastage, setHastage] = useState("");
  const [description, setDescription] = useState("");
  const [genratedText, setGenratedText] = useState("");
  console.log("tthis id text from form ", genratedText);
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

  useEffect(() => {
    updateFormData({
      Caption: caption,
      Aitool: AITools,
      Prompts: pompts,
      Hastags: hastage.split(",").map((tag) => tag.trim()),
      Description: description,
      GenratedText: genratedText,
    });
  }, [caption, AITools, pompts, hastage, description, genratedText]);

  const handleToolClick = (tool: AITool) => {
    const isSelected = AITools.some((t) => t.id === tool.id);

    if (isSelected) {
      setAITools(AITools.filter((t) => t.id !== tool.id));
    } else {
      setAITools([...AITools, tool]);
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
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
            placeholder="Write title of post"
            className="border outline-none border-[#CBD5E1] rounded-full py-[8px] px-[12px] font-[500] text-[14px] text-[#8D8D8D]"
          />
        </div>
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
              AITools.map((tool) => (
                <span
                  key={tool.id}
                  className="bg-[#EFEFEF] text-[#8D8D8D] px-2 py-1 rounded-full text-[12px]"
                >
                  {tool.name}
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
                  onClick={() => handleToolClick(tool)}
                  className={`px-4 py-2 cursor-pointer text-black hover:bg-blue-100 ${
                    AITools.some((t) => t.id === tool.id) ? "bg-blue-100" : ""
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
            value={pompts}
            onChange={(e) => setPromts(e.target.value)}
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
            value={hastage}
            onChange={(e) => setHastage(e.target.value)}
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
          value={description}
          onChange={(e) => setDescription(e.target.value)}
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
          name="genrate text"
          value={genratedText}
          onChange={(e) => setGenratedText(e.target.value)}
          className="noresize border border-[#CBD5E1] rounded-[14px] w-full min-h-[252px] h-full resize-none outline-none p-[8px] font-[500] text-[14px] text-[#8D8D8D]"
        ></textarea>
      </div>
    </div>
  );
}
