"use client";
import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="bg-gray-900 text-white p-4">
      <ul className="flex gap-4">
        <li>
          <Link href="/economics">📘 경제학개론</Link>
        </li>
        <li>
          <Link href="/backend">💻 백엔드 스터디</Link>
        </li>
      </ul>
    </nav>
  );
}
