'use client'

import {
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu'
import { ShortsStatus } from '@/types/mypage-shorts'
import { Globe, Lock, Pencil, Trash2 } from 'lucide-react'
import { toast } from 'react-toastify'

interface MyShortsDropdownMenuProps {
  status: ShortsStatus
  onToggleVisibility?: () => void
  onEdit?: () => void
  onDelete?: () => void
}

export default function MyShortsDropdownMenu({
  status,
  onToggleVisibility,
  onEdit,
  onDelete,
}: MyShortsDropdownMenuProps) {
  // 공개 상태 여부 확인
  const isPublished = status === 'PUBLISHED'

  return (
    <DropdownMenuContent className="min-w-[140px]" align="end">
      <DropdownMenuGroup>
        {/* 공개/비공개 전환 */}
        <DropdownMenuItem
          className="cursor-pointer"
          onSelect={() => {
            if (isPublished) {
              toast.info('현재 서비스 준비중입니다')
            } else {
              onToggleVisibility?.()
            }
          }}
        >
          {isPublished ? (
            <>
              <Lock size={10} />
              비공개하기
            </>
          ) : (
            <>
              <Globe size={10} />
              공개하기
            </>
          )}
        </DropdownMenuItem>

        {/* 수정 */}
        <DropdownMenuItem className="cursor-pointer" onSelect={onEdit}>
          <Pencil size={10} />
          수정
        </DropdownMenuItem>
      </DropdownMenuGroup>

      <DropdownMenuSeparator />

      {/* 삭제 */}
      <DropdownMenuItem className="cursor-pointer" variant="destructive" onSelect={onDelete}>
        <Trash2 size={10} />
        삭제
      </DropdownMenuItem>
    </DropdownMenuContent>
  )
}
