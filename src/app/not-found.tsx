import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center px-6">
      <div className="max-w-xs text-center">
        <p className="mb-2 text-6xl font-bold">404</p>
        <h1 className="mb-3 text-xl font-semibold">페이지를 찾을 수 없어요</h1>

        <Link
          href="/"
          className="inline-block cursor-pointer rounded-full border border-gray-300 px-5 py-2 text-sm font-medium transition hover:bg-gray-100"
        >
          홈으로 돌아가기
        </Link>
      </div>
    </div>
  )
}
