
"use client";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import {
  Threedost,
  Share,
  Like,
  Comment,
  Copyclip,
  Closepopup,
  Delete,
  Edit,
  DeleteFill,
} from "../../icon";
import Link from "next/link";
import CommentBox from "../CommentBox";

interface RepostImageCardProps {
  data: any;
  handleRepost: (data: any) => void;
  handleCardClick: (id: string) => void;
}

export default function RepostImageCard({
  data,
  handleRepost,
  handleCardClick,
}: RepostImageCardProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isCommentBoxOpen, setIsCommentBoxOpen] = useState(false);
  const [isSharePopupOpen, setIsSharePopupOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [copied, setCopied] = useState(false);

  const toggleDropdown = () => setIsDropdownOpen((prev) => !prev);
  const toggleCommentBox = () => setIsCommentBoxOpen((prev) => !prev);
  const toggleSharePopup = () => setIsSharePopupOpen((prev) => !prev);

  const openDeleteModal = () => setIsDeleteModalOpen(true);
  const closeDeleteModal = () => setIsDeleteModalOpen(false);
  const confirmDelete = () => {
    console.log("Item deleted"); // Replace this with actual delete logic or callback
    setIsDeleteModalOpen(false);
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

  return (
    <div className="bg-white mt-[27px] rounded-[10px] md:px-[30px] px-[10px] py-[20px]">
      <div className="py-[17px] px-[21px] rounded-[10px] md:mb-[18px] mb-[10px] bg-[#F3F3F3]">
        <p className="font-[500] md:text-[16px] text-[14px] text-[#525252]">
          You reposted this
        </p>
      </div>

      <div className="flex items-center justify-between border-b border-b-[#C8CBD9] pb-[14px]">
        <div className="flex items-center gap-[12px]">
          <Image src={data.userImage} width={38} height={38} alt="User" />
          <div>
            <p className="font-[700] md:text-[16px] text-[14px] text-[#1E293B]">
              {data.userName}
            </p>
            <p className="font-[400] md:text-[12px] text-[10px] text-[#475569]">Wade Warren</p>
          </div>
        </div>

        <div ref={dropdownRef} className="relative">
          <div onClick={toggleDropdown} className="cursor-pointer">
            <Threedost />
          </div>

          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-[150px] bg-white shadow-lg rounded-md p-2 z-50">
              <p
                onClick={() => handleRepost(data)}
                className="text-[18px] font-[400] text-[#525252] flex items-center gap-[16px] hover:bg-gray-100 px-3 py-2 rounded cursor-pointer"
              >
                <Edit />
                Edit
              </p>
              <p
                onClick={openDeleteModal}
                className="text-[18px] font-[400] text-[#525252] flex items-center gap-[16px] hover:bg-gray-100 px-3 py-2 rounded cursor-pointer"
              >
                <Delete />
                Delete
              </p>
            </div>
          )}
        </div>
      </div>

      <div onClick={() => handleCardClick(data.postId)}>
        <div className="pt-[10px]">
          <p className="font-[600] md:text-[18px] text-[16px] text-[#525252] pb-[6px]">
            {data.title}
          </p>
          <p className="font-[400] md:text-[16px] text-[14px] text-[#525252]">
            {data.description}
          </p>
        </div>
        <div className="mt-[14px] flex items-center md:gap-[23px] gap-[10px] flex-wrap mb-[19px]">
          <span className="bg-[#F2F2F2] rounded-[33px] py-[8px] px-[18px] font-[500] md:text-[16px] text-[10px] text-[#525252]">
            ChatGPT
          </span>
          <span className="bg-[#F2F2F2] rounded-[33px] py-[8px] px-[18px] font-[500] md:text-[16px] text-[10px] text-[#525252]">
            DeepL
          </span>
          <span className="bg-[#F2F2F2] rounded-[33px] py-[8px] px-[18px] font-[500] md:text-[16px] text-[10px] text-[#CD508C]">
            #lorem #quote #learn
          </span>
          <span className="bg-[#F2F2F2] rounded-[33px] py-[8px] px-[18px] font-[500] md:text-[16px] text-[10px] text-[#525252]">
            Promt - A witty tweet about productivity
          </span>
        </div>
        <div className="cursor-pointer">
          <Image
            src={data.imageSrc}
            alt="Preview"
            width={100}
            height={100}
            className="w-full md:min-h-[382px] min-h-[200px] h-full rounded-[8px] mt-[19px]"
          />
        </div>
      </div>

      <div className="md:mt-[22px] mt-[10px] flex items-center gap-[9px]">
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
      </div>

      {/* Share Popup */}
      {isSharePopupOpen && (
        <div className="fixed inset-0 bg-[#202020B5] flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 shadow-xl max-w-[437px] w-full text-center relative m-[20px]">
            <button
              onClick={toggleSharePopup}
              className="absolute top-2 cursor-pointer right-2 text-gray-500 hover:text-gray-700 text-xl"
            >
              <Closepopup />
            </button>
            <h2 className="md:text-[25px]  text-[20px] font-[600] text-[#525252] mb-4">
              Share
            </h2>
            <div className="flex items-center justify-center gap-[23px]">
              <Link href="!#">
                <Image
                  src="/home-images/insta.png"
                  alt="instagram"
                  width={68}
                  height={68}
                />
              </Link>
              <Link href="#!">
                <Image
                  src="/home-images/youtube.png"
                  alt="youtube"
                  width={68}
                  height={68}
                />
              </Link>
              <Link href="!#">
                <Image
                  src="/home-images/fb.png"
                  alt="facebook"
                  width={68}
                  height={68}
                />
              </Link>
            </div>

            <div className="flex w-full items-start justify-start flex-col md:mt-[35px] mt-[10px]">
              <label
                htmlFor="pageLink"
                className="font-[500] md:text-[20px] text-[16px] text-[#525252]"
              >
                Page Link
              </label>
              <div className="bg-[#F1F1F1] py-[10px] px-[12px] rounded-[9px] md:mt-[20px] mt-[10px] w-full flex items-center justify-between">
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
                <span className="text-green-600 text-sm mt-2">
                  Link copied!
                </span>
              )}
            </div>
          </div>
        </div>
      )}

  
      {isCommentBoxOpen && (
        <div className="mt-4">
          <CommentBox />
        </div>
      )}

   
      {isDeleteModalOpen && (
        <div className="fixed inset-0 z-50 bg-[#202020D6] flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-[655px] w-full text-center relative">
            <button
              onClick={closeDeleteModal}
              className="absolute cursor-pointer top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              <Closepopup />
            </button>
            <div className="flex flex-col items-center justify-center">
              <DeleteFill />

              <p className="font-[600] text-[25px] text-[#525252]">
                Are you sure you want to delete post?
              </p>
            </div>

            <div className="flex justify-center gap-4 mt-[30px]">
           
              <button
                onClick={confirmDelete}
                className="btn-gradient cursor-pointer rounded-full text-white py-[9px] px-[82px]"
              >
                Delete
              </button>
              <div className="gradient-border-wrapper">
              <button
                onClick={closeDeleteModal}
                className=" gradient-border-content rounded-full text-[#CD508C] font-[600] text-[16px] cursor-pointer py-[9px] px-[82px]"
              >
                Cancel
              </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
