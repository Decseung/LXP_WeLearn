'use client'

import { MoreHorizontal } from 'lucide-react'
import { ShortsResponse } from '@/types/mypage-shorts'
import ShortsCardThumbnail from './ShortsCardThumbnail'
import { DropdownMenu, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import MyShortsDropdownMenu from '@/features/mypage/myshorts/MyShortsDropdownMenu'

interface ShortsCardProps {
  shorts: ShortsResponse
  isSelected?: boolean
  onSelect?: () => void
  onToggleVisibility?: () => void
  onEdit?: () => void
  onDelete?: () => void
  viewCount?: number
  durationSec?: number
  createdAt?: string
}

export default function ShortsCard({
  shorts,
  isSelected = false,
  onSelect,
  onToggleVisibility,
  onEdit,
  onDelete,
  viewCount = 100,
  createdAt = '1일 전',
}: ShortsCardProps) {
  return (
    <div
      onClick={onSelect}
      className={`flex cursor-pointer gap-4 rounded-lg border bg-white p-4 transition-shadow hover:shadow-md ${
        isSelected ? 'border-green-500 ring-1 ring-green-500' : 'rounded-lg border-gray-200'
      }`}
    >
      {/* 썸네일 */}
      <ShortsCardThumbnail thumbnailUrl={shorts.thumbnailUrl} status={shorts.status} />

      {/* 콘텐츠 */}
      <div className="flex min-w-0 flex-1 flex-col p-4">
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0 flex-1">
            <h3 className="mb-1 line-clamp-2 text-lg font-bold text-gray-900">{shorts.title}</h3>
            <p className="mb-4 text-sm text-gray-500">
              {shorts.uploader?.nickname ?? '숏터'} {' · '} 조회수 {viewCount.toLocaleString()}회
              {' · '} {createdAt || '10일 전'}
            </p>
            <p className="mb-1 line-clamp-2 text-sm text-gray-700"> {shorts.description}</p>
          </div>

          {/* 더보기 드롭다운 메뉴 */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                onClick={(e) => e.stopPropagation()}
                className="flex-shrink-0 rounded-full p-1 transition-colors hover:bg-gray-100"
              >
                <MoreHorizontal size={18} className="text-black" />
              </button>
            </DropdownMenuTrigger>
            <MyShortsDropdownMenu
              status={shorts.status}
              onToggleVisibility={onToggleVisibility}
              onEdit={onEdit}
              onDelete={onDelete}
            />
          </DropdownMenu>
        </div>

        {/* 카테고리 + 키워드 */}
        <div className="mt-auto flex flex-wrap gap-2">
          {/* 카테고리 */}
          {shorts.category?.name && (
            <span className="rounded-full bg-gray-200 px-3 py-1 text-[10px] text-black">
              {shorts.category.name}
            </span>
          )}
          {/* 키워드 표시 */}
          {shorts.keywords?.map((keyword: string, index: number) => (
            <span
              key={index}
              className="rounded-full bg-gray-100 px-3 py-1 text-[10px] text-gray-700"
            >
              #{keyword}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
