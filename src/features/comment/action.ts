'use server'

import { commentApi } from '@/services/comments/comments.service'
import { RecommentApi } from '@/services/comments/recomments.service'
import { CommentType, ReplyCommetType } from '@/types/comment'

export type CommentActionState = {
  success: boolean
  message?: string
  errors?: {
    content?: string
  }
  data?: CommentType
}

export type ReplyActionState = {
  success: boolean
  message?: string
  errors?: {
    content?: string
  }
  data?: ReplyCommetType
}

export const postCommentAction = async (
  prevState: CommentActionState,
  formData: FormData,
): Promise<CommentActionState> => {
  const content = formData.get('comment') as string
  const shortsId = Number(formData.get('shortsid') || 0)

  if (!content) {
    return {
      success: false,
      errors: { content: '댓글을 입력해주세요' },
    }
  }

  const res = await commentApi.postComment(shortsId, { content })

  return {
    success: true,
    data: res.data,
  }
}

export const postReplyAction = async (
  prevState: ReplyActionState,
  formData: FormData,
): Promise<ReplyActionState> => {
  const content = formData.get('replyComment') as string
  const commentId = Number(formData.get('commentId') || 0)

  if (!content) {
    return {
      success: false,
      errors: { content: '댓글을 입력해주세요.' },
    }
  }

  const res = await RecommentApi.postReplyComment(commentId, { content })

  return {
    success: true,
    data: res.data,
  }
}
