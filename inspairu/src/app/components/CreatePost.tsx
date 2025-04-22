"use client";
import Image from "next/image";
import Link from "next/link";
export default function CreatePost() {
  return (
    <div>
      <Link href="/upload-post">
      <label htmlFor="fileUpload" className="relative block cursor-pointer">
        <div
          className="bg-[#F9DFE942] rounded-[4px] py-[30px] border-2 border-dashed"
          style={{ borderColor: "#CD508C" }}
        >
          <div className="flex items-center justify-center flex-col">
            <Image src="/posts.png" width={69} height={69} alt="addpost" />
            <div>
              <p className="font-[600] text-center text-[16px] mt-[10px] text-[#454545] mb-[18px]">
                Create a Post
              </p>
              <p className="font-[400] text-center text-[14px] text-[#676767]">
                Share your ideas with the world! Upload images, videos, text, or
                music and engage with the community.
              </p>
            </div>
          </div>
        </div>
      </label>
      </Link>
    </div>
  );
}
