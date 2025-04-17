import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "emoph1l", // ← 원하는 이름으로 바꿔줘
  description: "동연이의 머릿속속",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
<header className="bg-black text-white px-6 py-4 flex justify-between items-center">
  <h1 className="text-lg font-bold">emoph1l.store</h1>
  <nav className="space-x-4">
    <Link href="/economics">경제학개론</Link>
    <Link href="/backend">백엔드스터디</Link>
  </nav>
</header>
