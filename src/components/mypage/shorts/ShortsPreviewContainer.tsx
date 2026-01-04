'use client'

import type { ShortsResponse } from '@/types/myshorts'
import { ShortsPreviewCard } from './ShortsPreviewCard'
import { useShortsListPreview } from '@/hook/mypage/useShortsListPreview'

interface ShortsPreviewContainerProps {
  shorts?: ShortsResponse | null
}

export default function ShortsPreviewContainer({ shorts }: ShortsPreviewContainerProps) {
  const { videoRef, previewBind } = useShortsListPreview({
    enabled: Boolean(shorts?.videoUrl),
    duration: 2500,
  })

  return <ShortsPreviewCard shorts={shorts ?? null} videoRef={videoRef} previewBind={previewBind} />
}
