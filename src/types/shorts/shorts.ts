import { UserInfo } from '../auth/auth'
import { Category } from '../category/category'
import { ShortsStatus } from '../mypage-shorts'

export interface ShortsWrapper<T = unknown> {
  content: T[]
  pageable: Pick<Pageable, 'pageNumber' | 'pageSize'>
  totalElements: number
  totalPages: number
  last: boolean
  first: boolean
  size: number
  number: number
  numberOfElements: number
  empty: boolean
}

// 전체 목록 조회 - response
export interface Shorts {
  shortsId: number
  title: string
  description: string
  videoUrl: string
  thumbnailUrl: string
  duration: number
  viewCount: number
  likeCount: number
  category: Category
  kewords: string[]
  uploader: Omit<UserInfo, 'email'>
  createdAt: string
}

// 카테고리 숏츠 목록 조회, 인기 목록 숏츠 조회 - response
export interface ShortsWithCategory {
  shrotsId: number
  title: string
  description: string
  videoUrl: string
  thumbnailUrl: string
  durationSec: number
  status: ShortsStatus
  uploader: Omit<UserInfo, 'email'>
  category: Category
}

export interface Sort {
  sorted: boolean
  unsorted: boolean
  empty: boolean
}

export interface Pageable {
  pageNumber: number
  pageSize: number
  sort: Sort
  offset: number
  paged: boolean
  unpaged: boolean
}
