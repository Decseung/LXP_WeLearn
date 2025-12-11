export interface ShortsUploader {
  userId: number
  nickname: string
  profileUrl: string
}

export interface ShortsCategory {
  categoryId: number
  name: string
}

export interface ShortsDetail {
  shortsId: number
  title: string
  description: string
  videoUrl: string
  thumbnailUrl: string
  uploader: ShortsUploader
  category: ShortsCategory
}

export interface ShortsApiResponse {
  shortsId: number
  uploaderId: number
  uploaderNickname: string
  categoryId: number
  categoryName: string
  title: string
  description: string
  videoUrl: string
  thumbnailUrl: string
  durationSec: number
  status: string
  createdAt: string
  tagNames: string[]
}
