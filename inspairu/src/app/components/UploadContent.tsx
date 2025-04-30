// "use client";
// import { useState } from "react";
// import { ImageVedio, ImageVedioFilled, Text, TextFilled } from "../icon";
// import TextPost from "./TextPost";
// import UploadDropZone from "./UploadDropZone";
// import toast from "react-hot-toast";
// import { createFeed } from "../services/controllers/feedcontroller";
// // import { createFeed } from "../services/controllers/feedcontroller";

// export default function UploadContent() {
//   const [mediaFormData, setMediaFormData] = useState({
//     media: "",
//     Caption: "",
//     Aitool: [],
//     Prompts: "",
//     Hastags: [],
//     Description: "",
//   });
//   const updateFormData = (newData: Partial<typeof mediaFormData>) => {
//     setMediaFormData((prev) => ({ ...prev, ...newData }));
//   };
//   console.log("this is finaldat before save", mediaFormData);
//   const HandleFinalSubmit = async (finalFormData: typeof mediaFormData) => {
//     if (
//       !finalFormData.Caption ||
//       !finalFormData.Aitool ||
//       !finalFormData.Description ||
//       !finalFormData.Hastags ||
//       !finalFormData.Prompts
//     ) {
//       toast.error("Fill all the details ");
//     }
//     // logic for  save databse
//     try {
//       const transformedData = {
//         media: [
//           {
//             thumbnailUrl: mediaFormData.media, // Replace with actual thumbnail URL logic
//             mediaUrl: mediaFormData.media, // Replace with actual media URL logic
//             mediaType: "image", // Replace with actual media type logic
//           },
//         ],
//         hashtags: mediaFormData.Hastags,
//         aiTools: mediaFormData.Aitool,
//         caption: mediaFormData.Caption,
//         description: mediaFormData.Description,
//         prompt: mediaFormData.Prompts,
//       };
//       const response = await createFeed(transformedData);
//       if (!response) {
//       }
//     } catch (error) {
//       toast.error("Failed to upload post. Please try again.");
//       console.error("Upload error:", error);
//     }
//   };
//   const [activeTab, setActiveTab] = useState("tab1");

//   return (
//     <div className="w-full max-w-full mt-[24px] bg-white py-[18px] px-[32px] rounded-[12px] border border-[#ECF0F5]">
//       {/* Tabs */}
//       <div className="flex space-x-2 justify-between  w-full border-b border-b-[#D1D1D1]">
//         <div className="flex items-center space-x-2  ">
//           <button
//             onClick={() => setActiveTab("tab1")}
//             className={`px-4 pb-[20px] cursor-pointer mb-0 font-medium flex items-center gap-[8px] border-b-[3px] ${
//               activeTab === "tab1"
//                 ? " bg-gradient-to-b from-[#973998] to-[#DB5689] bg-clip-text text-transparent border-b-[2px] border-b-[#DB5689]"
//                 : "text-[#525252] border-transparent "
//             }`}
//           >
//             {activeTab === "tab1" ? <ImageVedioFilled /> : <ImageVedio />}
//             Images/Videos/Music
//           </button>
//           <button
//             onClick={() => setActiveTab("tab2")}
//             className={`px-4 pb-[20px] cursor-pointer font-medium flex items-center gap-[8px] border-b-[3px] ${
//               activeTab === "tab2"
//                 ? " bg-gradient-to-b from-[#973998] to-[#DB5689] bg-clip-text text-transparent border-b-[2px] border-b-[#DB5689]"
//                 : "text-[#525252] border-transparent"
//             }`}
//           >
//             {activeTab === "tab2" ? <TextFilled /> : <Text />}
//             Texts
//           </button>
//         </div>

//         <button
//           onClick={HandleFinalSubmit}
//           className="py-[12px] px-[27px]  rounded-full btn-gradient font-[500] text-[16px] cursor-pointer text-white"
//         >
//           Post
//         </button>
//       </div>
//       <div className="">
//         {activeTab === "tab1" && (
//           <div>
//             <UploadDropZone
//               updateFormData={updateFormData}
//               mediaFormData={mediaFormData}
//             />
//           </div>
//         )}
//         {activeTab === "tab2" && (
//           <div>
//             <TextPost />
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

"use client";

import { useState, useTransition } from "react";
import toast from "react-hot-toast";
// import { createFeedService } from "../backend/services/feed.service";
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
  });

  const cleanedData = {
    media: mediaFormData.Media,
    caption: mediaFormData.Caption,
    aiTools: mediaFormData.Aitool,
    prompts: mediaFormData.Prompts,
    hashtags: mediaFormData.Hastags,
    description: mediaFormData.Description,
    genratedText: mediaFormData.GenratedText,
  };
  console.log("tuubuv", cleanedData.genratedText);

  const updateFormData = (newData: Partial<typeof mediaFormData>) => {
    setMediaFormData((prev) => ({ ...prev, ...newData }));
  };
  console.log("this is final dat ", mediaFormData);

  // const HandleFinalSubmit = async (finalFormData: typeof mediaFormData) => {
  //   if (
  //     !finalFormData.Caption ||
  //     !finalFormData.Aitool ||
  //     !finalFormData.Description ||
  //     !finalFormData.Hastags ||
  //     !finalFormData.Prompts
  //   ) {
  //     toast.error("Please fill all the details.");
  //     return;
  //   }

  //   try {
  //     const transformedData = {
  //       media: [
  //         {
  //           thumbnailUrl: mediaFormData.media, // Assuming media contains the thumbnail URL
  //           mediaUrl: mediaFormData.media, // Assuming media contains the media URL
  //           mediaType: "image", // Assuming image for simplicity, adjust logic accordingly
  //         },
  //       ],
  //       hashtags: mediaFormData.Hastags,
  //       aiTools: mediaFormData.Aitool,
  //       caption: mediaFormData.Caption,
  //       description: mediaFormData.Description,
  //       prompt: mediaFormData.Prompts,
  //     };

  //     const response = await createFeedService(transformedData);
  //     if (response) {
  //       toast.success("Post uploaded successfully!");
  //     } else {
  //       toast.error("Failed to upload post. Please try again.");
  //     }
  //   } catch (error) {
  //     toast.error("Failed to upload post. Please try again.");
  //     console.error("Upload error:", error);
  //   }
  // };
  const [isPending, startTransition] = useTransition();
  const HandleFinalSubmit = () => {
    // e.preventDefault();
    startTransition(async () => {
      try {
        await createFeedAction(cleanedData);
        toast.success("Feed created!");
        // reset form if you like
      } catch (err: any) {
        toast.error(err.message || "Error creating feed");
      }
    });
  };
  const [activeTab, setActiveTab] = useState("tab1");

  return (
    <div className="w-full max-w-full mt-[24px] bg-white py-[18px] px-[32px] rounded-[12px] border border-[#ECF0F5]">
      {/* Tabs */}
      <div className="flex space-x-2 justify-between w-full border-b border-b-[#D1D1D1]">
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setActiveTab("tab1")}
            className={`px-4 pb-[20px] cursor-pointer mb-0 font-medium flex items-center gap-[8px] border-b-[3px] ${
              activeTab === "tab1"
                ? " bg-gradient-to-b from-[#973998] to-[#DB5689] bg-clip-text text-transparent border-b-[2px] border-b-[#DB5689]"
                : "text-[#525252] border-transparent "
            }`}
          >
            Images/Videos/Music
          </button>
          <button
            onClick={() => setActiveTab("tab2")}
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
