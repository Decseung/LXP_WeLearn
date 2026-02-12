'use client'

import { Ellipsis, Pencil, ShieldAlert, Trash2 } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './dropdown-menu'
import { DeleteTarget } from '@/features/modals/comment/CommentsModalContainer'
import { EditTarget } from '@/features/modals/comment/CommentList'
import { CommentsResponse } from '@/types/comments/comments'
import { ReplyCommentsResponse } from '@/types/replies/replies'
import { clientApi } from '@/lib/utils/clientApiUtils'
import { ActionState } from '@/types/action/action'
import { toast } from 'react-toastify'

interface CommentDropdownMenuProps {
  id: number
  mode: 'comment' | 'reply'
  parentId: number | null
  comment?: CommentsResponse
  reply?: ReplyCommentsResponse
  setEditTarget: React.Dispatch<React.SetStateAction<EditTarget>>
  setDeleteTarget: React.Dispatch<React.SetStateAction<DeleteTarget>>
  setIsUpdate: React.Dispatch<React.SetStateAction<number>>
}

/**
 * 댓글/답글의 드롭다운 메뉴 컴포넌트
 * - 작성자 본인: 수정 / 삭제
 * - 작성자 아님: 신고
 */
export default function CommentDropDownMenu({
  id,
  mode,
  parentId,
  comment,
  reply,
  setEditTarget,
  setDeleteTarget,
  setIsUpdate,
}: CommentDropdownMenuProps) {
  // 작성자 본인인지 여부
  const isMine = mode === 'reply' ? reply?.isMine : comment?.isMine
  const isReported = mode === 'reply' ? reply?.isReported : comment?.isReported
  const targetId = mode === 'reply' ? reply?.replyId : comment?.commentId
  const handleReport = async (id: number) => {
    const res = await clientApi.post<ActionState>(`/api/v1/comments/${id}/reports`)
    if (res.success === true && res.data) {
      toast.success('댓글을 신고하였습니다.')
      setIsUpdate((prev) => prev + 1)
    }
    if (res.success === false && res.message) {
      toast.error('댓글 신고 중 오류가 발생하였습니다.')
    }
  }
  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <button className="rounded-full p-1 text-gray-400 transition-colors hover:bg-gray-100">
          <Ellipsis size={18} />
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        className="flex min-w-25 flex-col items-center justify-center gap-1"
      >
        {isMine ? (
          <>
            {/* 수정 */}
            <DropdownMenuItem
              className="w-full cursor-pointer justify-center gap-4 p-1"
              onClick={() => setEditTarget({ mode, id })}
            >
              <Pencil />
              <span>수정</span>
            </DropdownMenuItem>

            <hr className="w-full" />

            {/* 삭제 */}
            <DropdownMenuItem
              className="w-full cursor-pointer justify-center gap-4 p-1 text-red-600"
              onClick={() => setDeleteTarget({ mode, id, parentId })}
            >
              <Trash2 color="#fb2c36" />
              <span className="text-red-600">삭제</span>
            </DropdownMenuItem>
          </>
        ) : (
          // 신고
          <DropdownMenuItem
            className="w-full cursor-pointer items-center"
            variant={isReported ? 'default' : 'destructive'}
            disabled={isReported}
            onClick={() => handleReport(Number(targetId))}
          >
            <ShieldAlert size={16} />
            신고
          </DropdownMenuItem>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
