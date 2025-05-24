import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home Page",
  keywords: ["nextjs", "react", "typescript", "blog"],
  description: "This is the home page of our Next.js blog application.",
};

export default function Home() {
  return (
    <main className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen border-2 border-red-500">
      Home
    </main>
  );
}
