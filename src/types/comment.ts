export interface UserInfo {
  id: number | null
  name: string
  profileUrl: string | null
}

export interface CommentType {
  content: string
  createdAt: string
  isMine: boolean
  replyCount: number
  writer: UserInfo
}
