import { Geist } from "next/font/google";
import "./globals.css";
import Header from "@/containers/Header";
import Footer from "@/containers/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className={`${geistSans.variable} antialiased`}>
        <Header />
        <main className="min-h-screen px-20 py-6">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
