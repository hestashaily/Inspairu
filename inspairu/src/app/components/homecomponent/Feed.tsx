"use client";
import { useState } from "react";
import ImageCard from "./ImageCard";
import TextCard from "./TextCard";
import AudioCard from "./AudioCard";
import VideoCard from "./VideoCard";
import RepostPopup from "./RepostPopup";
import { useRouter } from "next/navigation";
import { usePost } from "@/app/context/PostContext";

export default function Feed() {
  const [repostData, setRepostData] = useState<any>(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleRepost = (data: any) => {
    setRepostData(data);
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };
  const { setSelectedPost } = usePost();
  const router = useRouter();

  const handleCardClick = (data: any) => {
    // setSelectedPost(data);
    router.push(`/details/${data.postId}`);
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

  const audioCardData = {
    postId: "3",
    userName: "sam",
    userImage: "/auth-images/notifyTwo.png",
    contentHeading: "Audio Post Heading",
    contentDescription: "Lorem ipsum dolor sit amet consectetur. Aliquam...",
    audioSrc: "/horse.mp3",
    tags: ["ChatGPT", "DeepL", "#lorem #quote #learn"],
  };

  const videoCardData = {
    postId: "4",
    userName: "Alice",
    userImage: "/auth-images/notifyThree.png",
    contentHeading: "Amazing Video Post",
    contentDescription:
      "This is a great video demonstrating productivity hacks.",
    videoSrc: "/demovedio.mp4",
    tags: ["#productivity", "#video", "#learn"],
  };

  
  return (
    <>
      {imageCardsData.length > 0 ? (
        imageCardsData.map((data) => (
          <ImageCard
            key={data.postId}
            data={data}
            handleRepost={handleRepost}
            onClick={() => handleCardClick(data)}
          />
        ))
      ) : (
        <p>No image posts available.</p>
      )}
   <TextCard
        key={textCardData.postId}
        data={textCardData}
        handleRepost={handleRepost}
      />



      <AudioCard
        postId={audioCardData.postId}
        userName={audioCardData.userName}
        userImage={audioCardData.userImage}
        contentHeading={audioCardData.contentHeading}
        contentDescription={audioCardData.contentDescription}
        audioSrc={audioCardData.audioSrc}
        tags={audioCardData.tags}
        handleRepost={handleRepost}
      />
      <VideoCard
        postId={videoCardData.postId}
        userName={videoCardData.userName}
        userImage={videoCardData.userImage}
        contentHeading={videoCardData.contentHeading}
        contentDescription={videoCardData.contentDescription}
        videoSrc={videoCardData.videoSrc}
        tags={videoCardData.tags}
        handleRepost={handleRepost}
      />

      {isPopupOpen && repostData && (
        <RepostPopup data={repostData} onClose={handleClosePopup} />
      )}
    </>
  );
}
