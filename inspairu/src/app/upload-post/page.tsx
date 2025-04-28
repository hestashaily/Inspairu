"use client";
// import { useState, useRef, useEffect } from "react";
import Header from "../components/Header";
import { Backbtn } from "../icon";
import Link from "next/link";
import UploadContent from "../components/UploadContent";

const Page: React.FC = () => {
  return (
    <main className="bg-[#F9F9F9] pb-[80px]">
      <Header />
      <div className="flex items-center gap-[85px] mt-[18px] ml-[19px]">
        <Link href="/home">
          <Backbtn />
        </Link>
        <p className="font-[600] text-[25px] text-[#525252]">
          Upload Your Content
        </p>
      </div>
      <div className="container">
          <UploadContent/>
      </div>
    </main>
  );
};

export default Page;
