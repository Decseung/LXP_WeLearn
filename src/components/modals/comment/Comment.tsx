import { ChevronDown, User } from 'lucide-react'
import { useActionState, useEffect, useState } from 'react'
import { CommentType, ReplyCommetType } from '@/types/comment'
import ReCommentInput from './ReCommentInput'
import ReComment from './ReComment'
import { timeAgo } from '@/utils/timeAgo'
import { getReplyAction, patchCommentAction } from '@/features/comment/action'
import { Button } from '@/components/ui/Button'
import { toast } from 'react-toastify'
import CommentDropDownMenu from '@/components/ui/CommentDropdownMenu'
import { DeleteTarget } from './CommentsModal'
import { AnimatePresence, motion } from 'framer-motion'
import { RecommentApi } from '@/services/comments/recomments.service'
import CommentCompone from './CommentComponents'
import CommentComponent from './CommentComponents'

interface CommentsProps {
  comments: CommentType[]
  shortsId: string
  deleteTarget: DeleteTarget
  isReplyUpdate: number
  setIsUpdate: React.Dispatch<React.SetStateAction<number>>
  setDeleteTarget: React.Dispatch<React.SetStateAction<DeleteTarget>>
  setIsReplyUpdate: React.Dispatch<React.SetStateAction<number>>
}

export type EditTarget = { mode: 'comment'; id: number } | { mode: 'reply'; id: number } | null

export default function Comment({
  comments,
  shortsId,
  deleteTarget,
  isReplyUpdate,
  setIsUpdate,
  setDeleteTarget,
  setIsReplyUpdate,
}: CommentsProps) {
  const [openReply, setOpenReply] = useState<number | null>(null)
  const [openReplyInput, setOpenReplyInput] = useState<number | null>(null)
  const [editTarget, setEditTarget] = useState<EditTarget>(null)
  const [replies, setReplies] = useState<ReplyCommetType[] | null | undefined>(null)

  // 댓글 수정 Action
  const [commentPatchState, commentPatchAction] = useActionState(patchCommentAction, {
    success: false,
    message: '',
    errors: {},
  })

  // 대댓글 조회 action

  // 댓글 수정 성공시 토스트 ui
  useEffect(() => {
    if (commentPatchState.success) {
      toast.success('댓글 수정에 성공하였습니다.🚀')
      setIsUpdate((prev: number) => prev + 1)
    } else if (commentPatchState.success === false && commentPatchState.message) {
      toast.error(commentPatchState.message)
    }
  }, [commentPatchState])

  useEffect(() => {
    setEditTarget(null)
  }, [commentPatchState])

  const handleReply = async (id: number) => {
    const res = await getReplyAction(
      {
        success: false,
        message: '',
      },
      id,
    )
    if (res.success === true) {
      setReplies(res.data)
    }
    setOpenReply(openReply === id ? null : id)
  }

  const handleReplyInput = (id: number) => {
    setOpenReplyInput(openReplyInput === id ? null : id)
    setOpenReply(id)
  }

  return (
    <>
      {comments?.map((comment) => {
        console.log(comment)
        return (
          <CommentComponent
            comment={comment}
            commentPatchAction={commentPatchAction}
            openReply={openReply}
            handleReply={handleReply}
            handleReplyInput={handleReplyInput}
            setEditTarget={setEditTarget}
            deleteTarget={deleteTarget}
            setDeleteTarget={setDeleteTarget}
            setIsUpdate={setIsUpdate}
          />
        )
      })}
    </>
  )
}
