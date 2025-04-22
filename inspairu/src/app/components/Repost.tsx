"use client";
import Image from "next/image";


export default function Repost() {
 
  return (
    <div className="bg-[#F3F3F3] rounded-[10px] py-[8px] px-[14px] mb-[17px]">
         <div className="flex items-start gap-[12px]">
              <Image
                            src="/auth-images/notifyOne.png"
                            width={28}
                            height={28}
                            alt="repostperson"
                          />
            <div>
                <p className="font-[700] text-[14px] text-[#1E293B]">Eleanor_pena <span className="font-[400] text-[14px] text-[#525252]">reposted this</span></p>
                <p className="font-[400] text-[12px] text-[#475569]">Eleanor Pena</p>
            </div>
         </div>
    </div>
  );
}
