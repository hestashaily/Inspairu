"use client";

import Header from "../components/Header";
import Feed from "../components/homecomponent/Feed";


import TwoTabToggle from "../components/TwoTabToggle";


const Page: React.FC = () => {

  

  return (
    <main className="bg-[#F9F9F9]">
      <Header />
      <div className="container">
        <TwoTabToggle />
        <Feed/>
      </div>
    </main>
  );
};

export default Page;
