import React from "react";
import Image from "next/image";
import Link from "next/link";

type Props = {};

function Header({}: Props) {
  return (
    <header className="bg-black px-10 py-6 flex items-center justify-between text-white">
      <Link href="/">
        <Image
          aria-hidden
          src="/next.svg"
          alt="Next.js Logo"
          width={120}
          height={60}
        />
      </Link>
      <nav className="">
        <Link href="https://github.com/kahramanX">About</Link>
      </nav>
    </header>
  );
}

export default Header;
