// app/page.tsx
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen p-6 flex flex-col gap-6 items-center justify-center text-center">
      <h1 className="text-4xl font-bold">👋 emoph1l에 오신 걸 환영합니다</h1>
      <p className="text-gray-400">학습 주제를 선택하세요.</p>

      <div className="flex gap-4 mt-4">
        <Link href="/economics" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-500">
          경제학개론
        </Link>
        <Link href="/backend" className="px-4 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-600">
          백엔드 스터디
        </Link>
      </div>
    </main>
  );
}
