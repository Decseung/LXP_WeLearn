'use client'

import Image from 'next/image'
import type { ShortsCardThumbnailProps } from '@/types/myshorts'
import { Globe, Lock, Archive } from 'lucide-react'

export default function ShortsCardThumbnail({ thumbnailUrl, status }: ShortsCardThumbnailProps) {
  const isPublished = status === 'PUBLISHED'
  const isArchived = status === 'ARCHIVED'

  return (
    <div className="relative h-40 w-28 flex-shrink-0 overflow-hidden rounded-lg bg-gray-200 sm:h-48 sm:w-36">
      {/* 썸네일 이미지 */}
      {thumbnailUrl ? (
        <Image
          src={thumbnailUrl}
          alt="썸네일"
          fill
          sizes="(min-width: 640px) 144px, 112px"
          className="object-cover"
          priority={false}
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center text-xs text-gray-400">
          썸네일 없음
        </div>
      )}

      {/* 공개 상태 뱃지 */}
      {status && (
        <span
          className={`absolute top-2 left-2 flex items-center gap-1 rounded px-1.5 py-0.5 text-[10px] text-white ${
            isArchived ? 'bg-gray-700' : isPublished ? 'bg-green-500' : 'bg-gray-600'
          }`}
        >
          {isArchived ? (
            <>
              <Archive size={10} />
              보관됨
            </>
          ) : isPublished ? (
            <>
              <Globe size={10} />
              공개
            </>
          ) : (
            <>
              <Lock size={10} />
              비공개
            </>
          )}
        </span>
      )}
    </div>
  )
}
