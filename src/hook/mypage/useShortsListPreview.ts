'use client'

import { useCallback, useEffect, useRef } from 'react'

const DEFAULT_DURATION = 2500

export function useShortsListPreview({
  enabled,
  duration = DEFAULT_DURATION,
}: {
  enabled: boolean
  duration?: number
}) {
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const timeoutRef = useRef<ReturnType<typeof window.setTimeout> | null>(null)

  const clearTimer = useCallback(() => {
    if (timeoutRef.current) {
      window.clearTimeout(timeoutRef.current)
      timeoutRef.current = null
    }
  }, [])

  const start = useCallback(() => {
    if (!enabled) return
    const video = videoRef.current
    if (!video) return

    clearTimer()

    video.currentTime = 0
    video.muted = true

    const p = video.play()
    if (p !== undefined) p.catch(() => {})

    timeoutRef.current = window.setTimeout(() => {
      video.pause()
    }, duration)
  }, [enabled, duration, clearTimer])

  const stop = useCallback(() => {
    const video = videoRef.current
    if (!video) return

    clearTimer()
    video.pause()
    video.currentTime = 0
  }, [clearTimer])

  useEffect(() => {
    return () => clearTimer()
  }, [clearTimer])

  return {
    videoRef,

    previewBind: {
      onMouseEnter: start,
      onMouseLeave: stop,
      onFocus: start, // 키보드 접근성 고려 포커스 시 재생
      onBlur: stop,
      tabIndex: 0,
    },
  }
}
