'use client'

import { useRef, useEffect } from 'react'

interface ShortsPlayerProps {
  videoUrl: string
  thumbnailUrl?: string
}

function ShortsPlayer({ videoUrl, thumbnailUrl }: ShortsPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    // 자동 재생 시도
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // 자동재생 차단된 경우 무시 (사용자 인터랙션 필요)
      })
    }
  }, [videoUrl])

  return (
    <video
      ref={videoRef}
      aria-label="shorts video player"
      className="h-full w-full object-cover"
      controls
      loop
      muted
      playsInline
      poster={thumbnailUrl}
      src={videoUrl}
    />
  )
}

export default ShortsPlayer
