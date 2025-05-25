import Link from "next/link";
import React from "react";
import Image from "next/image";

type Props = {};

export default function BlogCard({}: Props) {
  return (
    <Link className="flex items-center" href={"/"}>
      <div className="relative">
        <Image
          src="https://picsum.photos/50/50"
          alt="Blog Card Image"
          width={200}
          height={200}
          className="rounded-lg"
        />
      </div>
      <div>
        <div className="text-lg font-semibold">Blog Title</div>
        <div className="text-sm text-gray-500">Description</div>
      </div>
    </Link>
  );
}
