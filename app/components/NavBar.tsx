"use client";

import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="w-full px-6 py-4 bg-black/70 text-white flex justify-between items-center border-b border-white/10">
      <Link href="/">
        <span className="text-sm hover:underline">🏠 홈으로</span>
      </Link>

      <div className="flex gap-6 items-center">
        <Link href="/economics" className="text-sm hover:underline">
          📘 경제학개론
        </Link>
        <Link href="/backend" className="text-sm hover:underline">
          🖥️ 백엔드 스터디
        </Link>
      </div>
    </nav>
  );
}
