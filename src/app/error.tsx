'use client'

import { TriangleAlert } from 'lucide-react'
import Link from 'next/link'

export default function Error() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md text-center">
        {/* 에러 아이콘 */}
        <div className="mb-8">
          <div className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-red-50">
            <TriangleAlert strokeWidth={1.5} color="red" size={32} />
          </div>
        </div>

        {/* 에러 메시지 */}
        <h1 className="mb-3 text-2xl font-bold text-gray-900">문제가 발생했습니다.</h1>
        <p className="text-gray-600">
          잠시 후 다시 시도해 주세요.
          <br />
          <Link
            href="/"
            className="mt-4 inline-block cursor-pointer rounded-full border border-gray-300 px-5 py-2 text-sm font-medium transition hover:bg-gray-100"
          >
            홈으로 돌아가기
          </Link>
        </p>
      </div>
    </div>
  )
}
