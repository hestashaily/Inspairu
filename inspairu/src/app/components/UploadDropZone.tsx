"use client";

import { useCallback, useEffect, useState } from "react";
import { Upload } from "../icon";
import Image from "next/image";
import { MediaForm } from "../../../types/global";

type MediaPreview = {
  id: string;
  type: "image" | "video" | "audio";
  url: string;
};

interface AITool {
  id: number;
  name: string;
}
interface MediaFormProps {
  updateFormData: (data: Partial<MediaForm>) => void;
  mediaFormData: MediaForm;
}
export default function UploadDropZone({
  mediaFormData,
  updateFormData,
}: MediaFormProps) {
  const [previews, setPreviews] = useState<MediaPreview[]>([]);

  const [caption, setCaption] = useState("");

  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const [AITools, setAITools] = useState<AITool[]>([]);
  const [tools, setTools] = useState<AITool[]>([]);
  const [pompts, setPromts] = useState("");
  const [hastage, setHastage] = useState("");
  const [description, setDescription] = useState("");
  console.log("this is selecrted AI tool", AITools);
  console.log("tihs is caption dta", caption);
  console.log("tis  is prmp data", pompts);
  console.log("tis is descriprton", description);
  console.log("this is hastages", hastage);

  useEffect(() => {
    updateFormData({
      Caption: caption,
      Aitool: AITools,
      Prompts: pompts,
      Hastags: hastage.split(",").map((tag) => tag.trim()),
      Description: description,
    });
  }, [caption, AITools, pompts, hastage, description,]);

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
  const handleFiles = (files: FileList | null) => {
    if (!files) return;

    const newPreviews: MediaPreview[] = [];

    Array.from(files).forEach((file) => {
      const url = URL.createObjectURL(file);
      const id = crypto.randomUUID();

      if (file.type.startsWith("image/")) {
        newPreviews.push({ id, type: "image", url });
      } else if (file.type.startsWith("video/")) {
        newPreviews.push({ id, type: "video", url });
      } else if (file.type.startsWith("audio/")) {
        newPreviews.push({ id, type: "audio", url });
      }
    });

    setPreviews((prev) => [...prev, ...newPreviews]);
  };

  const handleDrop = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    handleFiles(e.dataTransfer.files);
  }, []);

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleFiles(e.target.files);
  };

  const handleClick = () => {
    const input = document.getElementById("fileInput") as HTMLInputElement;
    input?.click();
  };

  const handleRemove = (id: string) => {
    setPreviews((prev) => prev.filter((media) => media.id !== id));
  };

  const handleToolClick = (tool: AITool) => {
    const isSelected = AITools.some((t) => t.id === tool.id);

    if (isSelected) {
      setAITools(AITools.filter((t) => t.id !== tool.id));
    } else {
      setAITools([...AITools, tool]);
    }
  };

  return (
    <div className="flex items-start gap-[40px] flex-wrap mt-[15px] justify-center  ">
      <div
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onClick={handleClick}
        className="xl:max-w-[500px] max-w-full w-full  bg-[#F9DFE942]  md:min-h-[550px] min-h-[400px] h-full   cursor-pointer border-2 border-dashed border-[#CD508C] p-8 rounded-lg text-center hover:border-blue-500 transition-colors"
      >
        <Image
          src="/home-images/upload.png"
          width={100}
          height={100}
          alt="uploadpost"
          className="max-w-[100px] w-full m-auto md:pt-[100px] pt-[0px]"
        />
        <p className="font-[600] mt-[25px] text-[18px] text-[#0F0F0F]">
          Drag & drop files or{" "}
          <span className="relative inline-block underline underline-offset-4 decoration-[#DB5689]">
            <span className="bg-gradient-to-b from-[#973998] to-[#DB5689] bg-clip-text text-transparent">
              Browse
            </span>
          </span>
        </p>

        <p className="font-[400] text-[14px] text-[#676767] mt-[12px]">
          Upload upto 5MB
        </p>
        <button className="btn-gradient  mt-[47px] font-[400] text-[16px] text-[#FFFFFF] cursor-pointer flex  items-center justify-center gap-[8px] py-[13px] px-[27px] rounded-full max-w-[163px] w-full m-auto">
          Select File
          <Upload />
        </button>
        <input
          id="fileInput"
          type="file"
          accept="image/*,video/*,audio/*"
          multiple
          onChange={handleFileChange}
          className="hidden"
        />
      </div>
      <div className="flex items-start flex-col xl:max-w-[530px] max-w-full w-full">
        <div className="flex flex-wrap gap-4 max-w-[600px] mb-4">
          {previews.map((media) => (
            <div
              key={media.id}
              className="relative border rounded-lg shadow-sm group w-[120px] h-[120px] overflow-hidden flex items-center justify-center bg-gray-100"
            >
              <button
                onClick={() => handleRemove(media.id)}
                className="absolute top-1 right-1 text-white bg-red-500 hover:bg-red-600 rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold z-10"
                title="Remove"
              >
                ✕
              </button>

              {media.type === "image" && (
                <Image
                  width={100}
                  height={100}
                  src={media.url}
                  alt="Preview"
                  className="w-full h-full object-cover rounded"
                />
              )}

              {media.type === "video" && (
                <video
                  controls
                  src={media.url}
                  className="w-full h-full object-cover rounded"
                />
              )}

              {media.type === "audio" && (
                <audio controls src={media.url} className="w-full px-2" />
              )}
            </div>
          ))}
        </div>
        <div className="flex flex-col w-full">
          <div className="flex flex-col gap-[10px] w-full  max-w-full">
            <label
              htmlFor="Caption"
              className="font-semibold block text-[16px] text-[#525252]"
            >
              Caption*
            </label>
            <input
              type="text"
              name="Caption"
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
              placeholder="Write title of post"
              className="border outline-none border-[#CBD5E1] rounded-full py-[8px] px-[12px] font-medium text-[14px] text-[#8D8D8D]"
            />
          </div>
          {/* AI tools section  */}
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
              {/* {AITools.length > 0 ? (
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
              )} */}
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
                {/* {tools.map((tool) => (
                  <div
                    key={tool.id}
                    onClick={() => handleToolClick(tool.name)}
                    className={`px-4 py-2 cursor-pointer text-black hover:bg-blue-100 ${
                      AITools.includes(tool.name) ? "" : ""
                    }`}
                  >
                    {tool.name}
                  </div>
                ))} */}
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

          <div className="flex flex-col gap-[10px] w-full mt-[15px]  max-w-full">
            <label
              htmlFor="AI Tool Used"
              className="font-semibold block text-[16px] text-[#525252]"
            >
              Promts
            </label>
            <input
              type="text"
              name="Promts"
              value={pompts}
              onChange={(e) => setPromts(e.target.value)}
              placeholder="Write your promts"
              className="border outline-none border-[#CBD5E1] rounded-full py-[8px] px-[12px] font-medium text-[14px] text-[#8D8D8D]"
            />
          </div>
          <div className="flex flex-col gap-[10px] w-full mt-[15px]  max-w-full">
            <label
              htmlFor="AI Tool Used"
              className="font-semibold block text-[16px] text-[#525252]"
            >
              Hashtags
            </label>
            <input
              type="text"
              name="Hashtags"
              value={hastage}
              onChange={(e) => setHastage(e.target.value)}
              placeholder="Write hashtags"
              className="border outline-none border-[#CBD5E1] rounded-full py-[8px] px-[12px] font-medium text-[14px] text-[#8D8D8D]"
            />
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
              placeholder="Write a short description"
              className="noresize border border-[#CBD5E1] rounded-[14px] w-full min-h-[128px] h-full resize-none outline-none p-[8px] font-[500] text-[14px] text-[#8D8D8D]"
            ></textarea>
          </div>
        </div>
      </div>
      <div className="flex items-end justify-end w-full">
      <button className="py-[12px] px-[27px]  rounded-full btn-gradient font-[500] text-[16px] cursor-pointer  text-white">
          Post
        </button>
        </div>
    </div>
  );
}
