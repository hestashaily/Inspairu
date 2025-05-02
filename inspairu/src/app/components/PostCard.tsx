"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Comment, Like, Report, Share, Threedost } from "../icon";
import Repost from "./Repost";
import AudioCard from "./AudioCard";
import VedioCard from "./VedioCard";
import { showAllFeadAction } from "../backend/controllers/feed.controller";

interface Feed {
  id: number;
  caption: string;
  description: string;
  prompt: string;
  feed_type: string;
  user_id: bigint;
  feed_uuid: string;
  created_at: Date;
}

export default function PostCard() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [feeds, setFeeds] = useState<Feed[]>([]);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchFeeds = async () => {
      try {
        const response = await showAllFeadAction();
        setFeeds(response);
      } catch (error) {
        console.error("Error fetching feeds:", error);
      }
    };

    fetchFeeds();
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
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
    <div>
      {feeds.map((feed) => (
        <div key={feed.id} className="bg-white mt-[27px] rounded-[10px] px-[30px] py-[20px]">
          <div className="flex items-center justify-between border-b border-b-[#C8CBD9] pb-[14px]">
            <div className="flex items-center gap-[12px]">
              <Image
                src="/auth-images/notifyTwo.png"
                width={38}
                height={38}
                alt="user avatar"
              />
              <div>
                <p className="font-[700] text-[16px] text-[#1E293B]">User {feed.user_id.toString()}</p>
                <p className="font-[400] text-[12px] text-[#475569]">
                  {new Date(feed.created_at).toLocaleDateString()}
                </p>
              </div>
            </div>

            <div ref={dropdownRef} className="relative">
              <div onClick={toggleDropdown} className="cursor-pointer">
                <Threedost />
              </div>

              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-[150px] bg-white shadow-lg rounded-md p-2 z-50">
                  <p className="text-[18px] font-[400] text-[#525252] flex items-center gap-[16px] hover:bg-gray-100 px-3 py-2 rounded cursor-pointer">
                    <Repost />
                    Repost
                  </p>
                  <p className="text-[18px] font-[400] text-[#525252] flex items-center gap-[20px] hover:bg-gray-100 px-3 py-2 rounded cursor-pointer">
                    <Report />
                    Report
                  </p>
                </div>
              )}
            </div>
          </div>

          <div className="pt-[10px]">
          select * from feeds;
          <p className="font-[600] text-[18px] text-[#525252] pb-[6px]">
              {feed.caption}
            </p>
            <p className="font-[400] text-[16px] text-[#525252]">
              {feed.description}
            </p>
            {feed.prompt && (
              <div className="mt-[14px] flex items-center gap-[23px] flex-wrap">
                <span className="bg-[#F2F2F2] rounded-[33px] py-[8px] px-[18px] font-[500] text-[16px] text-[#525252]">
                  {feed.prompt}
                </span>
              </div>
            )}
          </div>
          <div className="mt-[22px] flex items-center gap-[9px]">
            <div className="flex gap-[6px] items-center p-[10px] bg-[#F9DFE9] max-w-[80px] w-full rounded-full cursor-pointer">
              <Like />
              <p className="font-[400] text-[14px] text-[#525252]">0</p>
            </div>
            <div className="flex gap-[6px] items-center p-[10px] bg-[#F9DFE9] max-w-[80px] w-full rounded-full cursor-pointer">
              <Comment />
              <p className="font-[400] text-[14px] text-[#525252]">0</p>
            </div>
            <div className="flex items-center justify-center p-[10px] bg-[#F9DFE9] max-w-[45px] w-full rounded-full cursor-pointer">
              <Share />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
