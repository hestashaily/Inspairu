

// "use client";
// import Image from "next/image";
// import { useState, useRef, useEffect } from "react";
// import { Threedost, Repostdropdown, Report, Share, Closepopup, Copyclip, Like, Comment } from "../../icon/route";
// import CustomVideoPlayer from "../CustomVideoPlayer";
// import CommentBox from "../CommentBox";

// type VideoCardProps = {
//   postId: string;
//   userName: string;
//   userImage: string;
//   contentHeading: string;
//   contentDescription: string;
//   videoSrc: string;
//   tags: string[];
//   handleRepost: (data: any) => void; 
// };

// export default function VideoCard({
//   postId,
//   userName,
//   userImage,
//   contentHeading,
//   contentDescription,
//   videoSrc,
//   tags,
//   handleRepost,
// }: VideoCardProps) {
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const [isCommentBoxOpen, setIsCommentBoxOpen] = useState(false);
//   const [isSharePopupOpen, setIsSharePopupOpen] = useState(false);
//   const dropdownRef = useRef<HTMLDivElement>(null);
//   const inputRef = useRef<HTMLInputElement>(null);
//   const [copied, setCopied] = useState(false);

//   const toggleDropdown = () => {
//     setIsDropdownOpen((prev) => !prev);
//   };

//   const toggleCommentBox = () => {
//     setIsCommentBoxOpen((prev) => !prev);
//   };

//   const toggleSharePopup = () => {
//     setIsSharePopupOpen((prev) => !prev);
//   };

//   const handleCopy = () => {
//     if (inputRef.current) {
//       navigator.clipboard
//         .writeText(inputRef.current.value)
//         .then(() => {
//           setCopied(true);
//           setTimeout(() => setCopied(false), 2000);
//         })
//         .catch((err) => console.error("Copy failed", err));
//     }
//   };


//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       if (
//         dropdownRef.current &&
//         !dropdownRef.current.contains(event.target as Node)
//       ) {
//         setIsDropdownOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);


//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       if (
//         dropdownRef.current &&
//         !dropdownRef.current.contains(event.target as Node)
//       ) {
//         setIsSharePopupOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   const handleRepostClick = () => {
//     handleRepost({
//       postId,
//       userName,
//       userImage,
//       contentHeading,
//       contentDescription,
//       videoSrc,
//       tags,
//     });
//   };

//   return (
//     <div className="bg-white mt-[27px] rounded-[10px] md:px-[30px] px-[10px] py-[20px]">
//       <div className="flex items-center justify-between border-b border-b-[#C8CBD9] pb-[14px]">
//         <div className="flex items-center gap-[12px]">
//           <Image src={userImage} width={38} height={38} alt="user-image" />
//           <div>
//             <p className="font-[700] text-[16px] text-[#1E293B]">{userName}</p>
//             <p className="font-[400] text-[12px] text-[#475569]">Wade Warren</p>
//           </div>
//         </div>

//         <div ref={dropdownRef} className="relative">
//           <div onClick={toggleDropdown} className="cursor-pointer">
//             <Threedost />
//           </div>

//           {isDropdownOpen && (
//             <div className="absolute right-0 mt-2 w-[150px] bg-white shadow-lg rounded-md p-2 z-50">
//               <p
//                 onClick={handleRepostClick} 
//                 className="text-[18px] font-[400] text-[#525252] flex items-center gap-[16px] hover:bg-gray-100 px-3 py-2 rounded cursor-pointer"
//               >
//                 <Repostdropdown />
//                 Repost
//               </p>

//               <p className="text-[18px] font-[400] text-[#525252] flex items-center gap-[16px] hover:bg-gray-100 px-3 py-2 rounded cursor-pointer">
//                 <Report />
//                 Report
//               </p>
//             </div>
//           )}
//         </div>
//       </div>

//       <div className="pt-[10px]">
//         <p className="font-[600] text-[18px] text-[#525252] pb-[6px]">{contentHeading}</p>
//         <p className="font-[400] text-[16px] text-[#525252] mb-[18px]">{contentDescription}</p>

//         <div className="mt-[14px] flex items-center md:gap-[23px] gap-[10px] flex-wrap mb-[19px]">
//           <span className="bg-[#F2F2F2] rounded-[33px] py-[8px] px-[18px] font-[500] md:text-[16px] text-[12px] text-[#525252]">
//             ChatGPT
//           </span>
//           <span className="bg-[#F2F2F2] rounded-[33px] py-[8px] px-[18px] font-[500] md:text-[16px] text-[12px] text-[#525252]">
//             DeepL
//           </span>
//           <span className="bg-[#F2F2F2] rounded-[33px] py-[8px] px-[18px] font-[500] md:text-[16px] text-[12px] text-[#CD508C]">
//             #lorem #quote #learn #lorem #quote #learn #lorem #quote #learn
//             #lorem #quote #learn...
//           </span>
//           <span className="bg-[#F2F2F2] rounded-[33px] py-[8px] px-[18px] font-[500] md:text-[16px] text-[12px] text-[#525252]">
//             Promt - A witty tweet about productivity, A witty tweet about
//             productivity
//           </span>
//         </div>
//       </div>

//       <CustomVideoPlayer videoSrc={videoSrc} />

//       <div className="mt-[22px] flex items-center gap-[9px]">
//         <div className="flex gap-[6px] items-center p-[10px] bg-[#F9DFE9] max-w-[80px] w-full rounded-full cursor-pointer">
//           <Like />
//           <p className="font-[400] text-[14px] text-[#525252]">563</p>
//         </div>
//         <div
//           onClick={toggleCommentBox}
//           className="flex gap-[6px] items-center p-[10px] bg-[#F9DFE9] max-w-[80px] w-full rounded-full cursor-pointer"
//         >
//           <Comment />
//           <p className="font-[400] text-[14px] text-[#525252]">563</p>
//         </div>

//         <div
//           onClick={toggleSharePopup}
//           className="flex items-center justify-center p-[10px] bg-[#F9DFE9] max-w-[45px] w-full rounded-full cursor-pointer"
//         >
//           <Share />
//         </div>

//         {/* Share popup */}
//         {isSharePopupOpen && (
//           <div className="fixed inset-0 bg-[#202020B5] flex items-center justify-center z-50">
//             <div
//               ref={dropdownRef}
//               className="bg-white rounded-lg p-6 shadow-xl max-w-[437px] w-full text-center relative"
//             >
//               <button
//                 onClick={toggleSharePopup}
//                 className="absolute top-2 cursor-pointer right-2 text-gray-500 hover:text-gray-700 text-xl"
//               >
//                 <Closepopup />
//               </button>
//               <h2 className="text-[25px] font-[600] text-[#525252] mb-4">
//                 Share
//               </h2>
//               <div className="flex items-center justify-center gap-[23px]">
//                 <Image src="/home-images/insta.png" alt="instagram" width={68} height={68} />
//                 <Image src="/home-images/youtube.png" alt="youtube" width={68} height={68} />
//                 <Image src="/home-images/fb.png" alt="facebook" width={68} height={68} />
//               </div>

//               <div className="flex w-full items-start justify-start flex-col mt-[35px]">
//                 <label
//                   htmlFor="pageLink"
//                   className="font-[500] text-[20px] text-[#525252]"
//                 >
//                   Page Link
//                 </label>
//                 <div className="bg-[#F1F1F1] py-[10px] px-[12px] rounded-[9px] mt-[20px] w-full flex items-center justify-between">
//                   <input
//                     id="pageLink"
//                     type="text"
//                     readOnly
//                     ref={inputRef}
//                     className="w-full bg-transparent outline-none text-[#525252]"
//                     defaultValue="http://www.statholdings.com"
//                   />
//                   <div onClick={handleCopy} className="cursor-pointer ml-2">
//                     <Copyclip />
//                   </div>
//                 </div>
//                 {copied && (
//                   <span className="text-green-600 text-sm mt-2">Link copied!</span>
//                 )}
//               </div>
//             </div>
//           </div>
//         )}
//       </div>

//       {/* Comment Box */}
//            {isCommentBoxOpen && (
//              <div className="mt-4">
//                <CommentBox />
//              </div>
//            )}
//     </div>
//   );
// }

"use client";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { Threedost, Repostdropdown, Report, Share, Closepopup, Copyclip, Like, Comment } from "../../icon/route";
import CustomVideoPlayer from "../CustomVideoPlayer";
import CommentBox from "../CommentBox";

// Define an interface for the repost data
interface RepostData {
  postId: string;
  userName: string;
  userImage: string;
  contentHeading: string;
  contentDescription: string;
  videoSrc: string;
  tags: string[];
}

type VideoCardProps = {
  postId: string;
  userName: string;
  userImage: string;
  contentHeading: string;
  contentDescription: string;
  videoSrc: string;
  tags: string[];
  handleRepost: (data: RepostData) => void; // Use the interface here
};

export default function VideoCard({
  postId,
  userName,
  userImage,
  contentHeading,
  contentDescription,
  videoSrc,
  tags,
  handleRepost,
}: VideoCardProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isCommentBoxOpen, setIsCommentBoxOpen] = useState(false);
  const [isSharePopupOpen, setIsSharePopupOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [copied, setCopied] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const toggleCommentBox = () => {
    setIsCommentBoxOpen((prev) => !prev);
  };

  const toggleSharePopup = () => {
    setIsSharePopupOpen((prev) => !prev);
  };

  const handleCopy = () => {
    if (inputRef.current) {
      navigator.clipboard
        .writeText(inputRef.current.value)
        .then(() => {
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
        })
        .catch((err) => console.error("Copy failed", err));
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsSharePopupOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleRepostClick = () => {
    handleRepost({
      postId,
      userName,
      userImage,
      contentHeading,
      contentDescription,
      videoSrc,
      tags,
    });
  };

  return (
    <div className="bg-white mt-[27px] rounded-[10px] md:px-[30px] px-[10px] py-[20px]">
      <div className="flex items-center justify-between border-b border-b-[#C8CBD9] pb-[14px]">
        <div className="flex items-center gap-[12px]">
          <Image src={userImage} width={38} height={38} alt="user-image" />
          <div>
            <p className="font-[700] text-[16px] text-[#1E293B]">{userName}</p>
            <p className="font-[400] text-[12px] text-[#475569]">Wade Warren</p>
          </div>
        </div>

        <div ref={dropdownRef} className="relative">
          <div onClick={toggleDropdown} className="cursor-pointer">
            <Threedost />
          </div>

          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-[150px] bg-white shadow-lg rounded-md p-2 z-50">
              <p
                onClick={handleRepostClick}
                className="text-[18px] font-[400] text-[#525252] flex items-center gap-[16px] hover:bg-gray-100 px-3 py-2 rounded cursor-pointer"
              >
                <Repostdropdown />
                Repost
              </p>

              <p className="text-[18px] font-[400] text-[#525252] flex items-center gap-[16px] hover:bg-gray-100 px-3 py-2 rounded cursor-pointer">
                <Report />
                Report
              </p>
            </div>
          )}
        </div>
      </div>

      <div className="pt-[10px]">
        <p className="font-[600] text-[18px] text-[#525252] pb-[6px]">{contentHeading}</p>
        <p className="font-[400] text-[16px] text-[#525252] mb-[18px]">{contentDescription}</p>

        <div className="mt-[14px] flex items-center md:gap-[23px] gap-[10px] flex-wrap mb-[19px]">
          <span className="bg-[#F2F2F2] rounded-[33px] py-[8px] px-[18px] font-[500] md:text-[16px] text-[12px] text-[#525252]">
            ChatGPT
          </span>
          <span className="bg-[#F2F2F2] rounded-[33px] py-[8px] px-[18px] font-[500] md:text-[16px] text-[12px] text-[#525252]">
            DeepL
          </span>
          <span className="bg-[#F2F2F2] rounded-[33px] py-[8px] px-[18px] font-[500] md:text-[16px] text-[12px] text-[#CD508C]">
            #lorem #quote #learn #lorem #quote #learn #lorem #quote #learn
            #lorem #quote #learn...
          </span>
          <span className="bg-[#F2F2F2] rounded-[33px] py-[8px] px-[18px] font-[500] md:text-[16px] text-[12px] text-[#525252]">
            Promt - A witty tweet about productivity, A witty tweet about
            productivity
          </span>
        </div>
      </div>

      <CustomVideoPlayer videoSrc={videoSrc} />

      <div className="mt-[22px] flex items-center gap-[9px]">
        <div className="flex gap-[6px] items-center p-[10px] bg-[#F9DFE9] max-w-[80px] w-full rounded-full cursor-pointer">
          <Like />
          <p className="font-[400] text-[14px] text-[#525252]">563</p>
        </div>
        <div
          onClick={toggleCommentBox}
          className="flex gap-[6px] items-center p-[10px] bg-[#F9DFE9] max-w-[80px] w-full rounded-full cursor-pointer"
        >
          <Comment />
          <p className="font-[400] text-[14px] text-[#525252]">563</p>
        </div>

        <div
          onClick={toggleSharePopup}
          className="flex items-center justify-center p-[10px] bg-[#F9DFE9] max-w-[45px] w-full rounded-full cursor-pointer"
        >
          <Share />
        </div>

        {/* Share popup */}
        {isSharePopupOpen && (
          <div className="fixed inset-0 bg-[#202020B5] flex items-center justify-center z-50">
            <div
              ref={dropdownRef}
              className="bg-white rounded-lg p-6 shadow-xl max-w-[437px] w-full text-center relative"
            >
              <button
                onClick={toggleSharePopup}
                className="absolute top-2 cursor-pointer right-2 text-gray-500 hover:text-gray-700 text-xl"
              >
                <Closepopup />
              </button>
              <h2 className="text-[25px] font-[600] text-[#525252] mb-4">
                Share
              </h2>
              <div className="flex items-center justify-center gap-[23px]">
                <Image src="/home-images/insta.png" alt="instagram" width={68} height={68} />
                <Image src="/home-images/youtube.png" alt="youtube" width={68} height={68} />
                <Image src="/home-images/fb.png" alt="facebook" width={68} height={68} />
              </div>

              <div className="flex w-full items-start justify-start flex-col mt-[35px]">
                <label
                  htmlFor="pageLink"
                  className="font-[500] text-[20px] text-[#525252]"
                >
                  Page Link
                </label>
                <div className="bg-[#F1F1F1] py-[10px] px-[12px] rounded-[9px] mt-[20px] w-full flex items-center justify-between">
                  <input
                    id="pageLink"
                    type="text"
                    readOnly
                    ref={inputRef}
                    className="w-full bg-transparent outline-none text-[#525252]"
                    defaultValue="http://www.statholdings.com"
                  />
                  <div onClick={handleCopy} className="cursor-pointer ml-2">
                    <Copyclip />
                  </div>
                </div>
                {copied && (
                  <span className="text-green-600 text-sm mt-2">Link copied!</span>
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Comment Box */}
      {isCommentBoxOpen && (
        <div className="mt-4">
          <CommentBox />
        </div>
      )}
    </div>
  );
}

