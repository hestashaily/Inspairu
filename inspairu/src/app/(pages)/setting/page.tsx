"use client";

import Header from "@/app/components/Header";
import { Backbtn } from "../../icon/route";
import Link from "next/link";
import Settingprofile from "../../components/settingcomponent/Settingprofile";


export default function Setting() {
  return (
    <>
      <div className="bg-[#F9F9F9] min-h-[100vh] h-full">
        <Header />
        <div className="px-[39px] pt-[16px] flex items-center gap-[26px]">
          <Link href="/user-profile">
            <Backbtn />
          </Link>
          <p className="font-[600] md:text-[25px] text-[20px] text-[#525252]">Settings</p>
        </div>
        <div>
            <Settingprofile/>
        </div>
      
      </div>
    </>
  );
}
