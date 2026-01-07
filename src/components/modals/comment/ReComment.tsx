import { CommentType } from '@/types/comment'
import { AnimatePresence, motion } from 'framer-motion'
import { Ellipsis, User } from 'lucide-react'

interface ReCommentProps {
  commentReply: CommentType[]
  openReply: number | null
  commentId: number
}

export default function ReComment({ commentReply, openReply, commentId }: ReCommentProps) {
  return (
    <>
      <AnimatePresence initial={false}>
        {commentReply.map(
          (reply) =>
            openReply === commentId && (
              <motion.div
                key={reply.id}
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25, ease: 'easeInOut' }}
                className="overflow-hidden"
              >
                <div className="mt-3">
                  <div className="border-gray-100 pt-3 pl-12">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gray-200 text-gray-600">
                        {reply.user.profileUrl ? (
                          <img
                            src={reply.user.profileUrl}
                            alt={reply.user.name}
                            className="h-10 w-10 rounded-full object-cover"
                          />
                        ) : (
                          <User strokeWidth={1.5} size={24} />
                        )}
                      </div>

                      {/* 댓글 내용 */}
                      <div className="flex-1">
                        <div className="mb-1 flex items-center gap-2">
                          <span className="text-sm font-medium text-gray-900">
                            {reply.user.name}
                          </span>
                          <span className="text-xs text-gray-400">12시간 전</span>
                        </div>
                        <p className="mb-2 text-sm leading-relaxed text-gray-700">
                          {reply.content}
                        </p>
                      </div>
                      <button className="rounded-full p-1 text-gray-400 transition-colors hover:bg-gray-100">
                        <Ellipsis size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ),
        )}
      </AnimatePresence>
    </>
  )
}
