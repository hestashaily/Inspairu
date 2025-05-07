"use client";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import {
  Closepopup,
  Comment,
  Copyclip,
  Like,
  Report,
  Repostdropdown,
  Share,
  Threedost,
} from "../../icon";
import CommentBox from "../CommentBox";
import Link from "next/link";

export default function TextCard({
  postId,
  userName,
  userImage,
  contentHeading,
  contentDescription,
  contentText,
  caption,
  tags = [],
  hastags = [],
  prompt,
  total_likes_count,
  total_comments_count,
  handleRepost,
}: {
  postId?: string;
  userName: string;
  userImage: string;
  contentHeading: string;
  contentDescription: string;
  caption: string;
  contentText: string;
  tags: string[];
  hastags: string[];
  prompt: string;
  total_likes_count: number;
  total_comments_count: number;
  handleRepost: (data: any) => void;
}) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isCommentBoxOpen, setIsCommentBoxOpen] = useState(false);
  const [isSharePopupOpen, setIsSharePopupOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  // console.log("thid id dta from datbase ", contentText);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const sharePopupRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const toggleDropdown = () => setIsDropdownOpen((prev) => !prev);
  const toggleCommentBox = () => setIsCommentBoxOpen((prev) => !prev);
  const toggleSharePopup = () => setIsSharePopupOpen((prev) => !prev);

  const handleCopy = () => {
    if (inputRef.current) {
      navigator.clipboard.writeText(inputRef.current.value).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      });
    }
  };

  const handleRepostClick = () => {
    handleRepost({
      type: "text",
      postId,
      userName,
      userImage,
      contentHeading,
      contentDescription,
      contentText,
      tags,
      prompt,
    });
    setIsDropdownOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
      if (
        sharePopupRef.current &&
        !sharePopupRef.current.contains(event.target as Node)
      ) {
        setIsSharePopupOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="bg-white mt-[27px] rounded-[10px] md:px-[30px] px-[10px] py-[20px]">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-b-[#C8CBD9] pb-[14px]">
        <div className="flex items-center gap-[12px]">
          <Image
            src={userImage}
            width={38}
            height={38}
            className="rounded-full"
            alt="user profile"
          />
          <div>
            <p className="font-[700] text-[16px] text-[#1E293B]">{userName}</p>
            <p className="font-[400] text-[12px] text-[#475569]">
              Brooklyn Simmons
            </p>
          </div>
        </div>

        {/* Dropdown */}
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

      {/* Content */}
      <div className="pt-[10px]">
        <p className="font-[600] text-[18px] text-[#525252] pb-[6px]">
          {caption}
        </p>
        <p className="font-[400] text-[16px] text-[#525252]">
          {contentDescription}
        </p>
        <div className="mt-[14px] flex items-center gap-[23px] flex-wrap border border-[#E3E3E3] rounded-[15px] p-[16px]">
          <p className="font-[400] text-[16px] text-[#525252]">
            {contentText ||
              "This is dummy Generated  text it is static if not data if comming from databsae"}
          </p>
        </div>
      </div>

      <div className="mt-[14px] flex items-center gap-[23px] flex-wrap mb-[19px]">
        {tags.map((tag) => (
          <span
            key={tag.aiToolId}
            className="bg-[#F2F2F2] rounded-[33px] py-[8px] px-[18px] font-[500] text-[16px] text-[#525252]"
          >
            {tag.aiToolName}
          </span>
        ))}
        {hastags?.length > 0 && (
          <span className="bg-[#F2F2F2] rounded-[33px] py-[8px] px-[18px] font-[500] text-[16px] text-[#CD508C]">
            {hastags}
          </span>
        )}
        <span className="bg-[#F2F2F2] rounded-[33px] py-[8px] px-[18px] font-[500] text-[16px] text-[#525252]">
          Prompt -{prompt || " A witty tweet about productivity"}
        </span>
      </div>
      {/* Buttons */}
      <div className="mt-[22px] flex items-center gap-[9px]">
        <div className="flex gap-[6px] items-center p-[10px] bg-[#F9DFE9] max-w-[80px] w-full rounded-full cursor-pointer">
          <Like />
          <p className="font-[400] text-[14px] text-[#525252]">
            {total_likes_count}
          </p>
        </div>
        <div
          onClick={toggleCommentBox}
          className="flex gap-[6px] items-center p-[10px] bg-[#F9DFE9] max-w-[80px] w-full rounded-full cursor-pointer"
        >
          <Comment />
          <p className="font-[400] text-[14px] text-[#525252]">
            {total_comments_count}
          </p>
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
          <div
            ref={sharePopupRef}
            className="bg-white rounded-lg p-6 shadow-xl max-w-[437px] w-full text-center relative"
          >
            <button
              onClick={toggleSharePopup}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-xl cursor-pointer"
            >
              <Closepopup />
            </button>
            <h2 className="text-[25px] font-[600] text-[#525252] mb-4">
              Share
            </h2>
            <div className="flex items-center justify-center gap-[23px]">
              <Link href="#">
                <Image
                  src="/home-images/insta.png"
                  alt="instagram"
                  width={68}
                  height={68}
                />
              </Link>
              <Link href="#">
                <Image
                  src="/home-images/youtube.png"
                  alt="youtube"
                  width={68}
                  height={68}
                />
              </Link>
              <Link href="#">
                <Image
                  src="/home-images/fb.png"
                  alt="facebook"
                  width={68}
                  height={68}
                />
              </Link>
            </div>
            <div className="flex flex-col mt-[35px] text-left">
              <label
                htmlFor="pageLink"
                className="font-[500] text-[20px] text-[#525252]"
              >
                Page Link
              </label>
              <div className="bg-[#F1F1F1] py-[10px] px-[12px] rounded-[9px] mt-[20px] flex items-center">
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
      {/* Comment Box */}
      {isCommentBoxOpen && (
        <div className="mt-4">
          <CommentBox />
        </div>
      )}
    </div>
  );
}
