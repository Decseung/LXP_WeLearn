'use client'

import { useCallback, useEffect, useRef } from 'react'

interface UseShortsAutoPlayOptions {
  enabled: boolean
  loop?: boolean
  autoplay?: boolean
}

export function useShortsAutoPlay({
  enabled,
  loop = true,
  autoplay = true,
}: UseShortsAutoPlayOptions) {
  const videoRef = useRef<HTMLVideoElement | null>(null)

  const start = useCallback(() => {
    const video = videoRef.current
    if (!video || !enabled) return

    video.currentTime = 0
    video.muted = true

    video.play().catch(() => {
      // 자동 재생 차단 시 무시
    })
  }, [enabled])

  const stop = useCallback(() => {
    const video = videoRef.current
    if (!video) return

    video.pause()
    video.currentTime = 0
  }, [])

  // 비디오 로드 완료 시 자동 재생
  const handleLoadedData = useCallback(() => {
    const video = videoRef.current
    if (!video) return

    // 첫 프레임 표시
    if (video.currentTime === 0) {
      try {
        video.currentTime = 0.01
        video.pause()
      } catch {
        // 시킹 실패 시 무시
      }
    }

    if (enabled) {
      start()
    }
  }, [enabled, start])

  // enabled 변경 시 재생/정지
  useEffect(() => {
    const video = videoRef.current
    if (enabled && video && video.readyState >= 2) {
      start()
    } else if (!enabled) {
      stop()
    }
  }, [enabled, start, stop])

  return {
    videoRef,
    handleLoadedData,
    loop,
  }
}
