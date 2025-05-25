import Link from "next/link";
import React from "react";
import Image from "next/image";

type Props = {};

export default function BlogCard({}: Props) {
  return (
    <Link className="flex items-start gap-4 mb-4" href={"/"}>
      <div className="relative w-24 h-24">
        <Image
          src="https://picsum.photos/50/50"
          alt="Blog Card Image"
          className="rounded-lg"
          fill
        />
      </div>
      <div>
        <div className="text-md font-semibold">Blog Title</div>
        <div className="text-sm text-gray-500 line-clamp-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
          laboriosam sunt odio corrupti nulla ut. Consequuntur iure
          exercitationem ipsum? Nihil odio officiis consequuntur iusto ex
          tempora rerum magnam aliquid eos. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Repudiandae tempore a molestiae dolore
          repellat quos voluptates excepturi eveniet eius distinctio. Nobis quo
          fugiat illo quis aperiam sit necessitatibus quam expedita!
        </div>
      </div>
    </Link>
  );
}
