"use client";
import { useState } from "react";
import Image from "next/image";
import { Commented } from "../icon";

export default function CommentBox() {
  const [comment, setComment] = useState("");

  const handleCommentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setComment(event.target.value);
  };

  const handleSubmitComment = () => {
    console.log("Submitted comment:", comment);
    setComment("");
  };

  return (
    <div>
    <div className="border-y border-y-[#E2E2E2] pb-[20px]">
      <div className="mt-[21px]">
        <div className="flex items-center gap-[14px]">
          <Image
            src="/auth-images/notifyOne.png"
            width={28}
            height={28}
            alt="repostperson"
          />
          <div>
            <p className="font-[500] text-[16px] text-[#000000]">Robin Jones</p>
            <p className="font-[400] text-[14px] text-[#525252]">Aliquam magna Lorem ipsum dolor sit amet consectetur. Aliquam magna. Lorem ipsum dolor sit . Aliquam magna Lorem ipsum dolor sit amet consectetur.</p>
          </div>
        </div>
        <div className="flex items-center gap-[14px] mt-[15px]">
          <Image
            src="/auth-images/notifyTwo.png"
            width={28}
            height={28}
            alt="repostperson"
          />
          <div>
            <p className="font-[500] text-[16px] text-[#000000]">Robin Jones</p>
            <p className="font-[400] text-[14px] text-[#525252]">Aliquam magna Lorem ipsum dolor sit amet consectetur. Aliquam magna. Lorem ipsum dolor sit . Aliquam magna Lorem ipsum dolor sit amet consectetur.</p>
          </div>
        </div>
        <div className="flex items-center gap-[14px] mt-[15px]">
          <Image
            src="/auth-images/notifyThree.png"
            width={28}
            height={28}
            alt="repostperson"
          />
          <div>
            <p className="font-[500] text-[16px] text-[#000000]">Robin Jones</p>
            <p className="font-[400] text-[14px] text-[#525252]">Aliquam magna Lorem ipsum dolor sit amet consectetur. Aliquam magna. Lorem ipsum dolor sit . Aliquam magna Lorem ipsum dolor sit amet consectetur.</p>
          </div>
        </div>
      </div>
    </div>
    <div className="mt-[16px] flex items-center justify-between w-full">
      <div className="flex items-center gap-[10px] w-full">
      <Image
            src="/auth-images/notifyOne.png"
            width={28}
            height={28}
            alt="repostperson"
          />
          <input type="text" placeholder="Write your comment.."  className="py-[8px] px-[12px] rounded-full border border-[#CBD5E1] max-w-[400] w-full"/>
          
      </div>
      <Commented/>
    </div>
    </div>
  );
}
