"use client";

import Header from "../components/Header";
import PostCard from "../components/PostCard";
import TwoTabToggle from "../components/TwoTabToggle";

const Page: React.FC = () => {
  return (
    <main className="bg-[#F9F9F9]">
      <Header />
      <div className="container">
        <TwoTabToggle />
        <PostCard />
      </div>
    </main>
  );
};

export default Page;
