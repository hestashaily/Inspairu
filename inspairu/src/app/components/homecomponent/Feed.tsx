"use client";
import { useEffect, useState } from "react";
import ImageCard from "./ImageCard";
import TextCard from "./TextCard";
import AudioCard from "./AudioCard";
import VideoCard from "./VideoCard";
import RepostPopup from "./RepostPopup";
import { useRouter } from "next/navigation";
import { FeedType } from "../../../../types/global";
import { getAllFeed } from "@/app/backend/controllers/feed.controller";
interface RepostDataProps {
  postId: string;
  type: "text" | "image" | "audio" | "video";
  userName: string;
  userImage: string;
  title?: string;
  description?: string;
  imageSrc?: string;
  contentHeading?: string;
  contentDescription?: string;
  contentText?: string;
  tags?: string[];
  prompt?: string;
}
export default function Feed() {
  const [repostData, setRepostData] = useState<RepostDataProps>();
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleRepost = (data: RepostDataProps) => {
    setRepostData(data);
    console.log("this is repost data", data);
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  const [feeds, setFeeds] = useState<FeedType[]>([]);
  const [error, setError] = useState("");
  useEffect(() => {
    async function fetchFeeds() {
      try {
        const data = await getAllFeed(10, 0);
        // console.log("Fetched Feeds:", data);
        const formattedData: FeedType[] = data.map((item: any) => ({
          feed_id: item.feed_id,
          feed_uuid: item.feed_uuid || item.feed_id.toString(),
          user_id: item.user_id || 0,
          user_uuid: item.user_uuid || item.user?.user_uuid || "",
          username: item.user?.name || item.username || "Anonymous",
          profile_pic: item.user?.image || item.profile_pic || null,
          caption: item.caption || "",
          name: item.name || "",
          description: item.description || "",
          text: item.text || "",
          ai_tools: item.ai_tools || [],
          hashtags: item.hashtags || [],
          prompt: item.prompt || "",
          created_datetime: item.created_datetime || new Date().toISOString(),
          updated_datetime: item.updated_datetime || new Date().toISOString(),
          is_deleted: item.is_deleted || false,
          is_blocked: item.is_blocked || false,
          feed_type: item.feed_type || "text",
          is_reacted: item.is_reacted || false,
          total_comments_count: item.total_comments_count || 0,
          total_likes_count: item.total_likes_count || 0,
          total_reposts_count: item.total_reposts_count || 0,
          total_views_count: item.total_views_count || 0,
          total_saves_count: item.total_saves_count || 0,
          created_at: item.created_at || new Date().toISOString(),
          updated_at: item.updated_at || new Date().toISOString(),
        }));

        setFeeds(formattedData);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unknown error occurred");
        }
      }
    }
    fetchFeeds();
  }, []);
  // console.log("this is feed", feeds);
  if (error) return <p>Error: {error}</p>;
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
  // const textCardData = {
  //   postId: "2",
  //   userName: "Sam",
  //   userImage: "/auth-images/notifyOne.png",
  //   contentHeading: "Dynamic Content Heading",
  //   contentDescription: "This is the description of the dynamic content.",
  //   contentText:
  //     "Aliquam magna Lorem ipsum dolor sit amet consectetur. Aliquam magna. Lorem ipsum dolor sit . Aliquam magna Lorem ipsum dolor sit amet consectetur. Aliquam",
  //   tags: ["#tech", "#programming", "#webdev"],
  //   prompt: "A witty tweet about productivity",
  // };
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
      <div className="feed-wrapper">
        {feeds.map((feed, index) => (
          <TextCard
            key={index}
            postId={feed.feed_id.toString()}
            userName={feed.username || "Anonymous"}
            userImage={feed.profile_pic || "/default.png"}
            contentHeading={feed.name || ""}
            contentDescription={feed.description || ""}
            contentText={feed.text || ""}
            caption={feed.caption || ""}
            tags={feed.ai_tools || []}
            hastags={feed.hashtags || []}
            prompt={feed.prompt || ""}
            total_likes_count={feed.total_likes_count}
            total_comments_count={feed.total_comments_count}
            handleRepost={handleRepost}
          />
        ))}
      </div>
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
