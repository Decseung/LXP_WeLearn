'use client'

import {
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu'
import { useAuth } from '@/shared/store/auth/auth.store'
import { PlaylistOwner } from '@/types/playlist/playlist'
import { FolderMinus, FolderPlus, Share2, Siren } from 'lucide-react'
import { toast } from 'react-toastify'

interface PlaylistDropdownMenu {
  playlistOwner: PlaylistOwner
}
export default function PlaylistDropdownMenu({ playlistOwner }: PlaylistDropdownMenu) {
  const userData = useAuth((state) => state.auth)
  const handleShare = () => {
    toast.info('현재 서비스 준비중입니다')
  }

  const handleRemoveFromPlaylist = () => {
    toast.info('현재 서비스 준비중입니다')
  }

  return (
    <DropdownMenuContent className="min-w-40" align="end">
      <DropdownMenuGroup>
        {playlistOwner.id !== userData?.userId ? (
          <DropdownMenuItem className="cursor-pointer" onSelect={handleShare}>
            <FolderPlus size={16} />
            재생목록에 추가
          </DropdownMenuItem>
        ) : (
          <DropdownMenuItem className="cursor-pointer" onSelect={handleShare}>
            <FolderMinus size={16} />
            재생목록에서 삭제
          </DropdownMenuItem>
        )}

        {/* 공유 */}
        <DropdownMenuItem className="cursor-pointer" onSelect={handleShare}>
          <Share2 size={16} />
          공유
        </DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer" onSelect={handleShare} variant="destructive">
          <Siren size={16} />
          신고
        </DropdownMenuItem>
      </DropdownMenuGroup>
    </DropdownMenuContent>
  )
}
