import { Pageable } from '../shorts/shorts'
import { UserInfo } from '../user/user'

export type Visibility = 'PUBLIC' | 'PRIVATE'

/* 플레이 리스트 생성 / 수정 요청시 Request
 * /api/v1/playlists // /api/v1/playlists/{playlistId}
 */
export interface PlaylistRequest {
  title: string
  description: string
  thumbnailUrl: string
  visibility: Visibility
}

// 임시 플레이 리스트 카드에 대한 정보
export interface PlayListCard {
  id: string
  thumbnailUrl: string
  title: string
  shortsCount: number
  category: string
  progress?: number
  viewCount: number
  likeCount: number
}

/**
 * 내 플레이 리스트 요청시
 * /api/v1/playlist/me
 */
export interface Playlist {
  playlistId: number
  title: string
  description: string
  thumbnailUrl: string
  visibility: Visibility
  shortsCount: number
  owner: Omit<UserInfo, 'email'>
  createdAt: string
  updatedAt: string
}

// 플레이리스트 기본 틀
export interface PlaylistBase<T = unknown> {
  content: T
  pageable: Pageable
  totalPages: number
  totalElements: number
}
