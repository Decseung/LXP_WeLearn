'use client'

import Image from 'next/image'
import type { ShortsResponse } from '@/types/myshorts'

export function ShortsPreviewCard({
  shorts,
  videoRef,
  previewBind,
}: {
  shorts: ShortsResponse | null
  videoRef?: React.RefObject<HTMLVideoElement | null>
  previewBind?: React.HTMLAttributes<HTMLDivElement>
}) {
  // 빈 상태
  if (!shorts) {
    return (
      <div className="relative mx-auto aspect-[9/16] max-w-[280px] overflow-hidden rounded-xl bg-gray-900 lg:mx-0">
        <div className="absolute inset-0 flex items-center justify-center bg-gray-800">
          <span className="text-sm text-gray-500">미리보기</span>
        </div>
      </div>
    )
  }

  return (
    <div
      className="relative mx-auto aspect-[9/16] max-w-[280px] overflow-hidden rounded-xl bg-gray-900 lg:mx-0"
      {...previewBind}
    >
      {/* 카테고리 뱃지 */}
      {shorts.category?.name && (
        <span className="absolute top-3 left-3 z-10 rounded bg-green-500 px-2 py-1 text-xs text-white">
          {shorts.category.name}
        </span>
      )}

      {/* 비디오/썸네일 영역 */}
      <div className="absolute inset-0 bg-gray-800">
        {shorts.videoUrl ? (
          <video
            ref={videoRef}
            src={shorts.videoUrl}
            className="h-full w-full object-cover"
            playsInline
            muted
            preload="metadata"
            poster={shorts.thumbnailUrl ?? undefined}
          />
        ) : shorts.thumbnailUrl ? (
          <Image
            src={shorts.thumbnailUrl}
            alt={shorts.title ?? '썸네일'}
            fill
            sizes="280px"
            className="object-cover"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <span className="text-sm text-gray-500">미리보기</span>
          </div>
        )}
      </div>

      {/* 하단 정보 영역 */}
      <div className="absolute right-0 bottom-0 left-0 bg-gradient-to-t from-black/80 to-transparent p-4">
        <h3 className="mb-1 line-clamp-2 font-medium text-white">{shorts.title}</h3>
        {shorts.description && (
          <p className="mb-3 line-clamp-2 text-sm text-gray-300">{shorts.description}</p>
        )}
        <div className="flex items-center justify-between">
          <span className="text-sm text-white">{shorts.uploader?.nickname ?? '익명'}</span>
          {shorts.category?.name && (
            <span className="rounded bg-white/20 px-2 py-0.5 text-xs text-white">
              #{shorts.category.name}
            </span>
          )}
        </div>
      </div>
    </div>
  )
}
