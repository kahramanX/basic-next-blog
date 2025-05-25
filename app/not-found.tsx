import React from "react";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen  text-white px-4">
      <h1 className="text-7xl font-bold tracking-tight">404</h1>
      <p className="text-2xl mt-4">Page not found.</p>
      <p className="text-gray-400 mt-2 text-center max-w-md">
        The page you’re looking for doesn’t exist. It might have been removed,
        renamed, or never existed in the first place.
      </p>
      <Link
        href="/"
        className="mt-6 inline-block px-6 py-2 border border-white text-white hover:bg-white hover:text-black transition-all duration-200 rounded-md"
      >
        Go back home
      </Link>
    </main>
  );
}
