'use client'

import { EXTERNAL_IMAGES } from '@/constants/shortsImages'
import Image from 'next/image'
import type { ShortsResponse } from '@/types/mypage-shorts'
interface ShortsCardThumbnailProps {
  shorts: ShortsResponse
  thumbnailUrl?: string | null
  title?: string
}

export default function ShortsCardThumbnail({
  thumbnailUrl,
  title = '썸네일',
  shorts,
}: ShortsCardThumbnailProps) {
  const imageUrl = thumbnailUrl || EXTERNAL_IMAGES.THUMBNAIL

  return (
    <div className="relative h-48 w-28 flex-shrink-0 overflow-hidden rounded-lg border-transparent bg-gray-200 sm:h-48 sm:w-36">
      <Image
        src={imageUrl}
        alt={title}
        fill
        sizes="(min-width: 640px) 144px, 112px"
        className="object-cover"
        priority={!thumbnailUrl}
      />
      {/* 카테고리 */}
      {shorts.category?.name && (
        <span className="absolute top-2 left-2 rounded-full border border-gray-400/20 bg-black/25 px-3 py-1 text-[10px] text-white">
          {shorts.category.name}
        </span>
      )}
    </div>
  )
}
