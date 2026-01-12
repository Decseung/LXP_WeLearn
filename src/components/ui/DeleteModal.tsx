import { AnimatePresence, motion } from 'framer-motion'
import { Button } from './Button'
import { useActionState, useEffect } from 'react'
import { deleteCommentAction, deleteReplyCommentAction } from '@/features/comment/action'
import { toast } from 'react-toastify'

interface DeleteModalProps {
  isDelete: boolean
  commentId?: number
  replyId?: number
  setIsDelete: (props: boolean) => void
  setIsUpdate: React.Dispatch<React.SetStateAction<number>>
  setIsReplyUpdate?: React.Dispatch<React.SetStateAction<number>>
  mode: 'comment' | 'reply'
}

export default function DeleteModal({
  isDelete,
  setIsDelete,
  commentId,
  replyId,
  setIsUpdate,
  setIsReplyUpdate,
  mode,
}: DeleteModalProps) {
  // 댓글 삭제 Action
  const [commentDeleteState, commentDeleteAction] = useActionState(deleteCommentAction, {
    success: false,
    message: '',
    errors: {},
  })

  const [replyCommentDeleteState, replyCommentDeleteAction] = useActionState(
    deleteReplyCommentAction,
    {
      success: false,
      message: '',
      errors: {},
    },
  )

  // 댓글 삭제 성공 시 토스트 ui
  useEffect(() => {
    if (commentDeleteState.success) {
      toast.success('댓글 삭제에 성공하였습니다.🚀')
      setIsUpdate((prev) => prev + 1)
      setIsDelete(false)
    } else if (replyCommentDeleteState.success) {
      toast.success('댓글 삭제에 성공하였습니다.🚀')
      setIsUpdate((prev) => prev + 1)
      if (setIsReplyUpdate) {
        setIsReplyUpdate((prev) => prev + 1)
      }
      setIsDelete(false)
    } else if (
      (commentDeleteState.success === false && commentDeleteState.message) ||
      (replyCommentDeleteState.success === false && replyCommentDeleteState.message)
    ) {
      toast.error(commentDeleteState.message)
    }
  }, [commentDeleteState, replyCommentDeleteState])

  return (
    <AnimatePresence>
      {isDelete && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ type: 'spring', bounce: 0, duration: 0.4 }}
        >
          <div className="absolute inset-0 z-60 flex items-center justify-center rounded-xl bg-black/50">
            <div className="w-[280px] rounded-lg bg-white p-6 shadow-xl">
              <p className="mb-6 text-center text-gray-800">댓글을 완전히 삭제할까요?</p>
              <div className="flex justify-center gap-3">
                <Button variant="outline" onClick={() => setIsDelete(false)}>
                  취소
                </Button>
                <form action={commentId ? commentDeleteAction : replyCommentDeleteAction}>
                  <input
                    type="hidden"
                    name={commentId ? 'commentId' : 'replyId'}
                    value={commentId ? commentId : replyId}
                  />
                  <Button variant="default">삭제</Button>
                </form>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
