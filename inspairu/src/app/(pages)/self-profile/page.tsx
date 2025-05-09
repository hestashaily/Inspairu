// "use client";

// import Header from "@/app/components/Header";
// import { Backbtn } from "../../icon/route";
// import Link from "next/link";
// import RepostImageCard from "../../components/selfprofilecomponent/RepostImageCard";
// import Selfprofile from "../../components/selfprofilecomponent/Selfprofile";

// export default function SelfProfile() {
 

//   const post = {
//     postId: "1",
//     userName: "John Doe",
//     userImage: "/auth-images/notifyOne.png",
//     title: "Sample Image 1",
//     description: "This is a sample description for the first image post.",
//     imageSrc: "/home-images/postfeed.png",
//   };
//   const handleRepost = (data: any) => {
//     console.log("Reposting:", data);
//   };

//   const handleCardClick = (id: string) => {
//     console.log("Card clicked, ID:", id);
//   };

//   return (
//     <>
//       <div className="bg-[#F9F9F9] pb-[70px]">
//         <Header />
//         <div className="px-[39px] pt-[16px]">
//           <Link href="/home">
//             <Backbtn />
//           </Link>
//         </div>

//         <div className="container">
//           <Selfprofile/>
//           <div className="border-b border-b-[#D1D1D1] pb-[10px] mt-[23px]">
//             <p className="font-[500] text-[20px] text-[#525252] ">All Posts</p>
//           </div>
//           <RepostImageCard
//             data={post}
//             handleRepost={handleRepost}
//             handleCardClick={handleCardClick}
//           />
//         </div>
//       </div>
//     </>
//   );
// }
"use client";

import Header from "@/app/components/Header";
import { Backbtn } from "../../icon/route";
import Link from "next/link";
import RepostImageCard from "../../components/selfprofilecomponent/RepostImageCard";
import Selfprofile from "../../components/selfprofilecomponent/Selfprofile";

// ✅ Define type for a post object
interface PostData {
  postId: string;
  userName: string;
  userImage: string;
  title: string;
  description: string;
  imageSrc: string;
}

export default function SelfProfile() {
  const post: PostData = {
    postId: "1",
    userName: "John Doe",
    userImage: "/auth-images/notifyOne.png",
    title: "Sample Image 1",
    description: "This is a sample description for the first image post.",
    imageSrc: "/home-images/postfeed.png",
  };

  // ✅ No 'any' used
  const handleRepost = (data: PostData): void => {
    console.log("Reposting:", data);
  };

  const handleCardClick = (id: string): void => {
    console.log("Card clicked, ID:", id);
  };

  return (
    <div className="bg-[#F9F9F9] pb-[70px]">
      <Header />
      <div className="px-[39px] pt-[16px]">
        <Link href="/home">
          <Backbtn />
        </Link>
      </div>

      <div className="container">
        <Selfprofile />
        <div className="border-b border-b-[#D1D1D1] pb-[10px] mt-[23px]">
          <p className="font-medium text-[20px] text-[#525252]">All Posts</p>
        </div>
        <RepostImageCard
          data={post}
          handleRepost={handleRepost}
          handleCardClick={handleCardClick}
        />
      </div>
    </div>
  );
}
