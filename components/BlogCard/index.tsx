import Link from "next/link";
import React from "react";
import Image from "next/image";
import { Post } from "@/app/types";

export default function BlogCard(props: Post) {
  return (
    <Link className="flex items-start gap-4 mb-4 " href={`/blog/${props.id}`}>
      <div className="relative max-w-24 w-full h-24 overflow-hidden">
        <Image
          src={`https://picsum.photos/100/100?random=${props.id}`}
          alt="Blog Card Image"
          className="rounded-lg object-cover"
          fill
        />
      </div>
      <div>
        <div className="text-md font-semibold">{props.title}</div>
        <div className="text-sm text-gray-500 line-clamp-2">{props.body}</div>
      </div>
    </Link>
  );
}
