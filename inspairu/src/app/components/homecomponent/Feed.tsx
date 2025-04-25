// "use client";
// import { useState } from "react";
// import ImageCard from "./ImageCard"; 
// import TextCard from "./TextCard";
// import AudioCard from "./AudioCard";
// import VideoCard from "./VideoCard";
// import RepostPopup from "./RepostPopup";

// export default function Feed() {
//   const [repostData, setRepostData] = useState<any>(null); // State to hold repost data
//   const [isPopupOpen, setIsPopupOpen] = useState(false); // State to manage popup visibility

//   const handleRepost = (data: any) => {
//     setRepostData(data); // Set the repost data when the Repost button is clicked
//     setIsPopupOpen(true); // Open the popup
//   };

//   const handleClosePopup = () => {
//     setIsPopupOpen(false); // Close the popup by setting state to false
//   };

//   // Example data for ImageCard
//   const imageCardsData = [
//     {
//       postId: "1",
//       userName: "John Doe",
//       userImage: "/auth-images/notifyOne.png",
//       title: "Sample Image 1",
//       description: "This is a sample description for the first image post.",
//       imageSrc: "/home-images/postfeed.png",
//     },
//   ];

//   // Example data for TextCard
//   const textCardData = {
//     userName: "Sam",
//     userImage: "/auth-images/notifyOne.png",
//     contentHeading: "Dynamic Content Heading",
//     contentDescription: "This is the description of the dynamic content.",
//     contentText: "Aliquam magna Lorem ipsum dolor sit amet consectetur. Aliquam magna. Lorem ipsum dolor sit . Aliquam magna Lorem ipsum dolor sit amet consectetur. Aliquam  ",


//     tags: ["#tech", "#programming", "#webdev"],
//     prompt: "A witty tweet about productivity",
//   };



//   return (
//     <>
//       {imageCardsData && imageCardsData.length > 0 ? (
//         imageCardsData?.map((data) => (
//           <ImageCard
//           key={data.postId}
//           data={{
//             postId: data.postId,
//             userName: data.userName,
//             userImage: data.userImage,
//             title: data.title,
//             description: data.description,
//             imageSrc: data.imageSrc,
//           }}
//           handleRepost={handleRepost}
//           />
//         ))
//       ) : (
//         <p>No image posts available.</p>
//       )}

// <TextCard
//   userName={textCardData.userName}
//   userImage={textCardData.userImage}
//   contentHeading={textCardData.contentHeading}
//   contentDescription={textCardData.contentDescription}
//   contentText={textCardData.contentText}
//   tags={textCardData.tags}
//   prompt={textCardData.prompt}
//   handleRepost={handleRepost} 
// />


    
//         <AudioCard
       
//         />
   

    
//         {/* <VideoCard
         
//         /> */}
    

//       {isPopupOpen && repostData && (
//         <RepostPopup data={repostData} onClose={handleClosePopup} />
//       )}
//     </>
//   );
// }

// audio repost 

// "use client";
// import { useState } from "react";
// import ImageCard from "./ImageCard"; 
// import TextCard from "./TextCard";
// import AudioCard from "./AudioCard";
// import VideoCard from "./VideoCard";
// import RepostPopup from "./RepostPopup";

// export default function Feed() {
//   const [repostData, setRepostData] = useState<any>(null);
//   const [isPopupOpen, setIsPopupOpen] = useState(false);

//   const handleRepost = (data: any) => {
//     setRepostData(data);
//     setIsPopupOpen(true);
//   };

//   const handleClosePopup = () => {
//     setIsPopupOpen(false);
//   };

//   const imageCardsData = [
//     {
//       postId: "1",
//       userName: "John Doe",
//       userImage: "/auth-images/notifyOne.png",
//       title: "Sample Image 1",
//       description: "This is a sample description for the first image post.",
//       imageSrc: "/home-images/postfeed.png",
//     },
//   ];

//   const textCardData = {
//     userName: "Sam",
//     userImage: "/auth-images/notifyOne.png",
//     contentHeading: "Dynamic Content Heading",
//     contentDescription: "This is the description of the dynamic content.",
//     contentText: "Aliquam magna Lorem ipsum dolor sit amet consectetur. Aliquam magna. Lorem ipsum dolor sit . Aliquam magna Lorem ipsum dolor sit amet consectetur. Aliquam",
//     tags: ["#tech", "#programming", "#webdev"],
//     prompt: "A witty tweet about productivity",
//   };

//   const audioCardData = {
//     postId: "2",
//     userName: "sam",
//     userImage: "/auth-images/notifyTwo.png",
//     contentHeading: "Audio Post Heading",
//     contentDescription: "Lorem ipsum dolor sit amet consectetur. Aliquam...",
//     audioSrc: "/audio/sample-audio.mp3", // update with your actual file
//     tags: ["ChatGPT", "DeepL", "#lorem #quote #learn"],
//   };

//   return (
//     <>
//       {imageCardsData.length > 0 ? (
//         imageCardsData.map((data) => (
//           <ImageCard
//             key={data.postId}
//             data={data}
//             handleRepost={handleRepost}
//           />
//         ))
//       ) : (
//         <p>No image posts available.</p>
//       )}

//       <TextCard
//         userName={textCardData.userName}
//         userImage={textCardData.userImage}
//         contentHeading={textCardData.contentHeading}
//         contentDescription={textCardData.contentDescription}
//         contentText={textCardData.contentText}
//         tags={textCardData.tags}
//         prompt={textCardData.prompt}
//         handleRepost={handleRepost}
//       />

//       <AudioCard
//         postId={audioCardData.postId}
//         userName={audioCardData.userName}
//         userImage={audioCardData.userImage}
//         contentHeading={audioCardData.contentHeading}
//         contentDescription={audioCardData.contentDescription}
//         audioSrc={audioCardData.audioSrc}
//         tags={audioCardData.tags}
//         handleRepost={handleRepost}
//       />

//       {/* <VideoCard /> */}

//       {isPopupOpen && repostData && (
//         <RepostPopup data={repostData} onClose={handleClosePopup} />
//       )}
//     </>
//   );
// }


"use client";
import { useState } from "react";
import ImageCard from "./ImageCard"; 
import TextCard from "./TextCard";
import AudioCard from "./AudioCard";
import VideoCard from "./VideoCard";
import RepostPopup from "./RepostPopup";

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
    userName: "Sam",
    userImage: "/auth-images/notifyOne.png",
    contentHeading: "Dynamic Content Heading",
    contentDescription: "This is the description of the dynamic content.",
    contentText: "Aliquam magna Lorem ipsum dolor sit amet consectetur. Aliquam magna. Lorem ipsum dolor sit . Aliquam magna Lorem ipsum dolor sit amet consectetur. Aliquam",
    tags: ["#tech", "#programming", "#webdev"],
    prompt: "A witty tweet about productivity",
  };

  const audioCardData = {
    postId: "2",
    userName: "sam",
    userImage: "/auth-images/notifyTwo.png",
    contentHeading: "Audio Post Heading",
    contentDescription: "Lorem ipsum dolor sit amet consectetur. Aliquam...",
    audioSrc: "/horse.mp3",
    tags: ["ChatGPT", "DeepL", "#lorem #quote #learn"],
  };

  
  const videoCardData = {
    postId: "3",
    userName: "Alice",
    userImage: "/auth-images/notifyThree.png",
    contentHeading: "Amazing Video Post",
    contentDescription: "This is a great video demonstrating productivity hacks.",
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
          />
        ))
      ) : (
        <p>No image posts available.</p>
      )}

      <TextCard
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

      {/* Video Card */}
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
