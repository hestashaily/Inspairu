"use client";

import { useCallback, useState } from "react";
import { Upload } from "../icon";
import Image from "next/image";
import CustomMultiSelect from "./CustomMultiSelect";

type MediaPreview = {
  id: string;
  type: "image" | "video" | "audio";
  url: string;
};

export default function UploadDropZone() {

  const [aiTools, setAiTools] = useState<string[]>([]);

  const aiOptions = [
    'ChatGPT', 'Bard', 'GitHub Copilot', 'Midjourney', 'DALL·E', 'Claude', 'Gemini',
  ];
  
  const [previews, setPreviews] = useState<MediaPreview[]>([]);

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

  return (
    <div className="flex items-start gap-[20px] flex-wrap mt-[15px] w-full">
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
                <img
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
              placeholder="Write title of post"
              className="border outline-none border-[#CBD5E1] rounded-full py-[8px] px-[12px] font-medium text-[14px] text-[#8D8D8D]"
            />
          </div>
          <div className="flex flex-col gap-[10px] w-full mt-[15px]  max-w-full">
            <label
              htmlFor="AI Tool Used"
              className="font-semibold block text-[16px] text-[#525252]"
            >
              AI Tool Used*
            </label>
            <input
              type="text"
              name="AI Tool Used"
              placeholder="Write AI tool used"
              className="border outline-none border-[#CBD5E1] rounded-full py-[8px] px-[12px] font-medium text-[14px] text-[#8D8D8D]"
            />
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
              placeholder="Write your promts"
              className="border outline-none border-[#CBD5E1] rounded-full py-[8px] px-[12px] font-medium text-[14px] text-[#8D8D8D]"
            />
          </div>
        <div className="mt-[15px]">
               <CustomMultiSelect
                  label="Hashtags"
                  options={aiOptions}
                  selectedOptions={aiTools}
                  setSelectedOptions={setAiTools}
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
