import BlogCard from "@/components/BlogCard";
import { Metadata } from "next";
import { Post, PostsResponse } from "./types";

export const metadata: Metadata = {
  title: "Home Page",
  keywords: ["nextjs", "react", "typescript", "blog"],
  description: "This is the home page of our Next.js blog application.",
};

async function getPosts(): Promise<PostsResponse> {
  const response = await fetch("https://dummyjson.com/posts?limit=10");
  return response.json();
}

export default async function Home() {
  const posts = await getPosts();

  return (
    <>
      {posts.posts.map((post: Post) => (
        <BlogCard key={post.id} {...post} />
      ))}
    </>
  );
}
