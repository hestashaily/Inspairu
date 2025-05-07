"use client";
import { useState } from "react";
import ImageCard from "@/app/components/homecomponent/ImageCard";
import RepostPopup from "@/app/components/homecomponent/RepostPopup";
import { useRouter } from "next/navigation";
import Header from "@/app/components/Header";
import { Backbtn } from "@/app/icon";
import Link from "next/link";
import TextCard from "../components/homecomponent/TextCard";
import Userprofile from "../components/Userprofile";

export default function UserProfile() {
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

  const textCardData = {
    postId: "2",
    userName: "Sam",
    userImage: "/auth-images/notifyOne.png",
    contentHeading: "Dynamic Content Heading",
    contentDescription: "This is the description of the dynamic content.",
    contentText:
      "Aliquam magna Lorem ipsum dolor sit amet consectetur. Aliquam magna. Lorem ipsum dolor sit . Aliquam magna Lorem ipsum dolor sit amet consectetur. Aliquam",
    tags: ["#tech", "#programming", "#webdev"],
    prompt: "A witty tweet about productivity",
  };
  

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
            <Userprofile/>
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

           <TextCard
                  key={textCardData.postId}
                  postId={textCardData.postId}
                  userName={textCardData.userName}
                  userImage={textCardData.userImage}
                  contentHeading={textCardData.contentHeading}
                  contentDescription={textCardData.contentDescription}
                  contentText={textCardData.contentText}
                  tags={textCardData.tags}
                  prompt={textCardData.prompt}
                  handleRepost={handleRepost}
          
                />
        </div>
      </div>

      {isPopupOpen && repostData && (
        <RepostPopup data={repostData} onClose={handleClosePopup} />
      )}
    </>
  );
}
