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

// 네비게이션 정보 포함된 응답 타입
export interface ShortsDetailResponse {
  shorts: ShortsDetail
  prevId: number | null
  nextId: number | null
}

// 향후 확장용 (정렬 컨텍스트 포함)
export interface ShortsNavigation {
  prevId: number | null
  nextId: number | null
  sortBy?: 'latest' | 'popular' | 'category'
  categoryId?: number | null
}
