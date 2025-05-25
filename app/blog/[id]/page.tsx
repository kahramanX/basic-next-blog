import { PostsResponse, SinglePost } from "@/app/types";
import React from "react";
import Image from "next/image";
import { notFound } from "next/navigation";

type Props = {
  params: { id: string };
};

export const metadata = {
  title: "Blog Post",
  description: "Detailed view of a blog post",
};

export default async function Page({ params }: Props) {
  async function getPost(id: string): Promise<SinglePost> {
    try {
      const response = await fetch(`https://dummyjson.com/post/${id}?limit=10`);
      return response.json();
    } catch (error) {
      throw new Error(error as string);
    }
  }

  const post = await getPost(params.id);

  if (!post.id || !post.title || !post.body) {
    return notFound();
  }

  return (
    <div>
      <div className="relative w-full h-96 mx-auto">
        <Image
          src={`https://picsum.photos/700/380?random=${post.id}`}
          alt={`${post.title}`}
          className="rounded-lg object-cover"
          fill
        />
      </div>

      <h1 className="text-3xl font-bold my-10 text-center">{post.title}</h1>

      <div className="text-sm text-gray-500 line-clamp-2 mb-20">
        {post.body}
      </div>

      <div className="flex items-center justify-center gap-6 text-xs text-center text-gray-400 mt-1">
        <div
          className="flex items-center justify-center gap-4 mt-2"
          title="Likes"
        >
          {post.reactions?.likes || 0} Likes 👍
        </div>

        <div className="flex justify-center gap-4 mt-2" title="Dislikes">
          {post.reactions?.dislikes || 0} Dislikes 👎
        </div>
      </div>

      <div className="text-xs text-center text-gray-400 my-8" title="Views">
        {post.views || 0} Views👁️
      </div>

      <div className="text-xs text-center text-gray-400 my-4" title="Tags">
        {post.tags.join(", ")} Tags 🏷️
      </div>
    </div>
  );
}
