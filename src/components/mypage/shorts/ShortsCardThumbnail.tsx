'use client'

import { EXTERNAL_IMAGES } from '@/constants/shortsImages'
import Image from 'next/image'

interface ShortsCardThumbnailProps {
  thumbnailUrl?: string | null
  title?: string
}

export default function ShortsCardThumbnail({
  thumbnailUrl,
  title = '썸네일',
}: ShortsCardThumbnailProps) {
  const imageUrl = thumbnailUrl || EXTERNAL_IMAGES.THUMBNAIL

  return (
    <div className="relative h-40 w-28 flex-shrink-0 overflow-hidden rounded-lg bg-gray-200 sm:h-48 sm:w-36">
      <Image
        src={imageUrl}
        alt={title}
        fill
        sizes="(min-width: 640px) 144px, 112px"
        className="object-cover"
        priority={!thumbnailUrl}
      />
    </div>
  )
}
