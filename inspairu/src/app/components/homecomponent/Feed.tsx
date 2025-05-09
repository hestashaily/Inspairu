"use client";
import { useState } from "react";
import ImageCard from "./ImageCard";
import TextCard from "./TextCard";
import AudioCard from "./AudioCard";
import VideoCard from "./VideoCard";
import RepostPopup from "./RepostPopup";
import { useRouter } from "next/navigation"; 


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
  const router = useRouter(); 



  const handleCardClick = (id: string) => {
    router.push(`/feed/${id}`); 
    console.log("clickd");
    
  };
  return (
    <>
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
// "use client";
// import { useState } from "react";
// import ImageCard from "./ImageCard";
// import TextCard from "./TextCard";
// import AudioCard from "./AudioCard";
// import VideoCard from "./VideoCard";
// import RepostPopup from "./RepostPopup";
// import { useRouter } from "next/navigation";

// // Define a Post type with common properties for all card types
// interface Post {
//   postId: string;
//   userName: string;
//   userImage: string;
//   contentHeading: string;
//   contentDescription: string;
//   tags: string[];
//   handleRepost: (data: Post) => void;
//   // These properties will be unique to each post type
//   imageSrc?: string;
//   contentText?: string;
//   audioSrc?: string;
//   videoSrc?: string;
// }

// export default function Feed() {
//   const [repostData, setRepostData] = useState<Post | null>(null);  // Use Post type here
//   const [isPopupOpen, setIsPopupOpen] = useState(false);

//   // Update the handleRepost function to use Post type
//   const handleRepost = (data: Post) => {
//     setRepostData(data);
//     setIsPopupOpen(true);
//   };

//   const handleClosePopup = () => {
//     setIsPopupOpen(false);
//   };

//   const imageCardsData: Post[] = [
//     {
//       postId: "1",
//       userName: "John Doe",
//       userImage: "/auth-images/notifyOne.png",
//       contentHeading: "Sample Image 1",
//       contentDescription: "This is a sample description for the first image post.",
//       tags: ["#tech", "#design", "#photography"],
//       imageSrc: "/home-images/postfeed.png",
//       handleRepost: handleRepost,
//     },
//   ];

//   const textCardData: Post = {
//     postId: "2",
//     userName: "Sam",
//     userImage: "/auth-images/notifyOne.png",
//     contentHeading: "Dynamic Content Heading",
//     contentDescription: "This is the description of the dynamic content.",
//     contentText: "Aliquam magna Lorem ipsum dolor sit amet consectetur. Aliquam magna.",
//     tags: ["#tech", "#programming", "#webdev"],
//     handleRepost: handleRepost,
//   };

//   const audioCardData: Post = {
//     postId: "3",
//     userName: "sam",
//     userImage: "/auth-images/notifyTwo.png",
//     contentHeading: "Audio Post Heading",
//     contentDescription: "Lorem ipsum dolor sit amet consectetur. Aliquam...",
//     audioSrc: "/horse.mp3",
//     tags: ["ChatGPT", "DeepL", "#lorem #quote #learn"],
//     handleRepost: handleRepost,
//   };

//   const videoCardData: Post = {
//     postId: "4",
//     userName: "Alice",
//     userImage: "/auth-images/notifyThree.png",
//     contentHeading: "Amazing Video Post",
//     contentDescription: "This is a great video demonstrating productivity hacks.",
//     videoSrc: "/demovedio.mp4",
//     tags: ["#productivity", "#video", "#learn"],
//     handleRepost: handleRepost,
//   };

//   const router = useRouter();

//   const handleCardClick = (id: string) => {
//     router.push(`/feed/${id}`);
//     console.log("clicked");
//   };

//   return (
//     <>
//       {imageCardsData.length > 0 ? (
//         imageCardsData.map((data) => (
//           <ImageCard
//             key={data.postId}
//             data={data}
//             handleRepost={handleRepost}
//             handleCardClick={handleCardClick}
//           />
//         ))
//       ) : (
//         <p>No image posts available.</p>
//       )}

//       <TextCard
//         key={textCardData.postId}
//         postId={textCardData.postId}
//         userName={textCardData.userName}
//         userImage={textCardData.userImage}
//         contentHeading={textCardData.contentHeading}
//         contentDescription={textCardData.contentDescription}
//         contentText={textCardData.contentText}
//         tags={textCardData.tags}
//         handleRepost={handleRepost}
//       />

//       <AudioCard
//         key={audioCardData.postId}
//         postId={audioCardData.postId}
//         userName={audioCardData.userName}
//         userImage={audioCardData.userImage}
//         contentHeading={audioCardData.contentHeading}
//         contentDescription={audioCardData.contentDescription}
//         audioSrc={audioCardData.audioSrc}
//         tags={audioCardData.tags}
//         handleRepost={handleRepost}
//       />

//       <VideoCard
//         key={videoCardData.postId}
//         postId={videoCardData.postId}
//         userName={videoCardData.userName}
//         userImage={videoCardData.userImage}
//         contentHeading={videoCardData.contentHeading}
//         contentDescription={videoCardData.contentDescription}
//         videoSrc={videoCardData.videoSrc}
//         tags={videoCardData.tags}
//         handleRepost={handleRepost}
//       />

//       {isPopupOpen && repostData && (
//         <RepostPopup data={repostData} onClose={handleClosePopup} />
//       )}
//     </>
//   );
// }
