import { Play } from 'lucide-react'
import Image from 'next/image'

interface ShortsCardProps {
  variant: 'like' | 'saved'
  thumbnailUrl: string
  title: string
  progress: number
  // like variant
  category?: string
  channelName?: string
  // saved variant
  visibility?: 'public' | 'private'
  shortsCount?: number
}

export default function ShortsCard({
  variant,
  thumbnailUrl,
  title,
  progress,
  category,
  channelName,
  visibility,
  shortsCount,
}: ShortsCardProps) {
  const isLike = variant === 'like'
  const isSaved = variant === 'saved'

  const badgeLabel = isSaved ? (visibility === 'public' ? '공개' : '비공개') : category

  const progressColorClass = isLike ? 'bg-red-500' : 'bg-green-500'

  return (
    <div
      className={`${isLike ? 'w-56 shrink-0' : 'group cursor-pointer'} transition-all duration-200 hover:-translate-y-1 hover:drop-shadow-lg`}
    >
      <div className="relative mb-2 aspect-9/16 overflow-hidden rounded-lg bg-gray-200">
        <span
          className={`absolute top-3 left-3 z-10 rounded bg-black/80 px-2 py-0.5 text-xs text-white`}
        >
          {badgeLabel}
        </span>

        {isSaved && shortsCount !== undefined && (
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-2 bg-transparent text-white">
            <p className="text-md max-w-[80%] truncate pb-2 font-medium">{title}</p>
            <div className="flex items-center justify-center gap-2 rounded-xl border-2 border-white/50 bg-black/50 px-4 py-3">
              <Play size={24} fill="currentColor" />
              <span className="m-0 p-0 text-lg font-bold">{shortsCount}개</span>
            </div>
          </div>
        )}

        <Image src={thumbnailUrl} alt={title} fill className="object-cover" sizes="224px" />

        <div className="absolute right-0 bottom-0 left-0 h-1 bg-gray-300">
          <div className={`h-full ${progressColorClass}`} style={{ width: `${progress}%` }}></div>
        </div>
      </div>

      <p
        className={`truncate text-sm font-medium text-gray-900 ${isSaved ? 'group-hover:text-black' : ''}`}
      >
        {title}
      </p>

      {isLike && channelName && <p className="truncate text-xs text-gray-500">{channelName}</p>}

      {isSaved && (
        <p className="text-xs text-gray-500">
          {category} · {shortsCount}개
        </p>
      )}
    </div>
  )
}
