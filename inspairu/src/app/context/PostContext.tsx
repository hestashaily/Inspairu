// // context/PostContext.tsx
// "use client";
// import { createContext, useState, useContext } from "react";

// const PostContext = createContext<any>(null);

// export const PostProvider = ({ children }: { children: React.ReactNode }) => {
//   const [selectedPost, setSelectedPost] = useState<any>(null);

//   return (
//     <PostContext.Provider value={{ selectedPost, setSelectedPost }}>
//       {children}
//     </PostContext.Provider>
//   );
// };

// export const usePost = () => useContext(PostContext);
"use client";
import { createContext, useState, useContext, ReactNode } from "react";

interface Post {
  id: string;
  title: string;
  content: string;
}

interface PostContextType {
  selectedPost: Post | null;
  setSelectedPost: React.Dispatch<React.SetStateAction<Post | null>>;
}

const PostContext = createContext<PostContextType | undefined>(undefined);

export const PostProvider = ({ children }: { children: ReactNode }) => {
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);

  return (
    <PostContext.Provider value={{ selectedPost, setSelectedPost }}>
      {children}
    </PostContext.Provider>
  );
};

export const usePost = () => {
  const context = useContext(PostContext);
  if (!context) {
    throw new Error("usePost must be used within a PostProvider");
  }
  return context;
};
