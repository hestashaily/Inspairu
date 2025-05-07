"use client";

import Header from "@/app/components/Header";
import { Backbtn } from "@/app/icon";
import Link from "next/link";

import Messages from "../components/chatcomponent/Messages";
import Chatbox from "../components/chatcomponent/Chatbox";

export default function UserProfile() {
  return (
    <>
      <div className="bg-[#F9F9F9] min-h-[100vh] h-full">
        <Header />
        <div className="px-[39px] pt-[16px]">
          <Link href="/user-profile">
            <Backbtn />
          </Link>
        </div>
        <div className="bg-white rounded-[10px] border border-[#ECF0F5] m-[16px] flex items-start lg:flex-row flex-col">
          <Messages />
          <Chatbox/>
        </div>
      </div>
    </>
  );
}
