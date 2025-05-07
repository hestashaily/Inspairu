// context/PostContext.tsx
"use client";
import { createContext, useState, useContext } from "react";

const PostContext = createContext<any>(null);

export const PostProvider = ({ children }: { children: React.ReactNode }) => {
  const [selectedPost, setSelectedPost] = useState<any>(null);

  return (
    <PostContext.Provider value={{ selectedPost, setSelectedPost }}>
      {children}
    </PostContext.Provider>
  );
};

export const usePost = () => useContext(PostContext);
