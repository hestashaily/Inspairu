"use client";
import { usePost } from "@/app/context/PostContext";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import ImageCard from "@/app/components/homecomponent/ImageCard";
import RepostPopup from "@/app/components/homecomponent/RepostPopup";
import Header from "@/app/components/Header";
import { Backbtn } from "@/app/icon";
import VideoCard from "@/app/components/homecomponent/VideoCard";
import TextCard from "@/app/components/homecomponent/TextCard";

export default function DetailsPage({
  params,
}: {
  params: { postId: string };
}) {
  const { selectedPost } = usePost();
  const router = useRouter();
  
  const [isRepostOpen, setIsRepostOpen] = useState(false);
  const [repostData, setRepostData] = useState<any>(null);
  console.log(selectedPost);
  

  // useEffect(() => {
  //   if (!selectedPost) {
  //     router.push("/");
  //   }
  // }, [selectedPost, router]);

  // if (!selectedPost) return <p>Loading...</p>;

  const handleRepost = (data: any) => {
    setRepostData(data);
    setIsRepostOpen(true);
  };

  const closeRepost = () => {
    setIsRepostOpen(false);
  };

  return (
    <>
      <div className="bg-[#F9F9F9]">
        <Header />
        <div className="mt-[16px] px-[39px]">
          <Backbtn />
        </div>
        <div className="p-4 max-w-4xl mx-auto relative ">
          <ImageCard data={selectedPost} handleRepost={handleRepost} />
          <TextCard
            data={selectedPost}
            handleRepost={handleRepost}
            onClick={() => {}}
          />

          {isRepostOpen && repostData && (
            <RepostPopup data={repostData} onClose={closeRepost} />
          )}
        </div>
      </div>
    </>
  );
}
