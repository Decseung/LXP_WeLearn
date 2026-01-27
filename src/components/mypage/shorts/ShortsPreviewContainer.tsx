'use client'

import type { ShortsResponse } from '@/types/mypage-shorts'
import { useShortsAutoPlay } from '@/hook/mypage/useShortsAutoPlay'
import { ShortsPreviewCard } from './ShortsPreviewItem'

interface ShortsPreviewContainerProps {
  shorts?: ShortsResponse | null
  loop?: boolean
  autoplay?: boolean
}

export default function ShortsPreviewContainer({
  shorts,
  loop = false,
  autoplay = false,
}: ShortsPreviewContainerProps) {
  const { videoRef, handleLoadedData } = useShortsAutoPlay({
    enabled: Boolean(shorts?.videoUrl),
    loop,
    autoplay,
  })

  return (
    <ShortsPreviewCard
      shorts={shorts ?? null}
      videoRef={videoRef}
      onLoadedData={handleLoadedData}
      loop={loop}
    />
  )
}
