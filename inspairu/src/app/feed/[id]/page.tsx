"use client";
import { useState } from "react";
import ImageCard from "@/app/components/homecomponent/ImageCard";
import RepostPopup from "@/app/components/homecomponent/RepostPopup";
import { useRouter } from "next/navigation";
import Header from "@/app/components/Header";
import { Backbtn } from "@/app/icon";
import Link from "next/link";

export default function ID() {
  const [repostData, setRepostData] = useState<any>(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleRepost = (data: any) => {
    setRepostData(data);
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };
  const imageCardsData = [
    {
      postId: "1",
      userName: "John Doe",
      userImage: "/auth-images/notifyOne.png",
      title: "Sample Image 1",
      description: "This is a sample description for the first image post.",
      imageSrc: "/home-images/postfeed.png",
    },
  ];

  const router = useRouter();

  const handleCardClick = (id: string) => {
    router.push(`/feed/${id}`);
    console.log("clickd");
  };
  return (
    <>
      <div className="bg-[#F9F9F9] pb-[70px]">
        <Header />
        <div className="px-[39px] pt-[16px]">
          <Link href="/home">
            <Backbtn />
          </Link>
        </div>

        <div className="container">
          {imageCardsData.length > 0 ? (
            imageCardsData.map((data) => (
              <ImageCard
                key={data.postId}
                data={data}
                handleRepost={handleRepost}
                handleCardClick={handleCardClick}
              />
            ))
          ) : (
            <p>No image posts available.</p>
          )}
        </div>
      </div>

      {isPopupOpen && repostData && (
        <RepostPopup data={repostData} onClose={handleClosePopup} />
      )}
    </>
  );
}
