"use client";

import Header from "../../components/Header";
import { Backbtn } from "../../icon/route";
import Link from "next/link";
import UploadContent from "../../components/UploadContent";

const Page: React.FC = () => {
  return (
    <main className="bg-[#F9F9F9] pb-[80px]">
      <Header />
      <div className="flex items-center lg:gap-[85px] gap-[30px] mt-[18px] ml-[19px]">
        <Link href="/home">
          <Backbtn />
        </Link>
        <p className="font-[600] md:text-[25px] text-[20px] text-[#525252]">
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
