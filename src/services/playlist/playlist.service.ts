import { ApiResponse } from '@/types/api/api'
import {
  PlaylistBase,
  PlaylistRequest,
  PlaylistShorts,
  PlaylistInfo,
} from '@/types/playlist/playlist'
import { PageRequest } from '@/types/shorts/shorts'
import { cookies } from 'next/headers'

const baseUrl = 'http://localhost:4000'
export const PlaylistApi = {
  // 유저 개인 플레이 리스트 조회
  getUserPlaylist: async ({
    page,
    size,
  }: PageRequest): Promise<ApiResponse<PlaylistBase<PlaylistInfo[]>>> => {
    const params = new URLSearchParams({
      page: String(page),
      size: String(size),
    })
    const response = await fetch(`${baseUrl}/api/v1/playlists/me?${params}`, {
      cache: 'no-store',
    })

    const data = await response.json()
    if (!response.ok) {
      throw new Error('request failed')
    }
    return data
  },

  // 플레이리스트 상세 조회
  getPlaylistItem: async (playlistId: number): Promise<ApiResponse<PlaylistInfo>> => {
    const response = await fetch(`${baseUrl}/api/v1/playlists/${playlistId}`)
    console.log(playlistId)
    if (!response.ok) {
      throw new Error('플레이리스트 불러오기 실패')
    }

    const data = await response.json()
    return data.data
  },

  createPlaylist: async (content: PlaylistRequest) => {
    const cookieStore = await cookies()
    const accessToken = cookieStore.get('accessToken')?.value

    const response = await fetch(`${baseUrl}/api/v1/playlists`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(content),
    })

    if (!response.ok) {
      throw new Error('플레이리스트 생성 실패')
    }

    const data = await response.json()

    return data
  },

  addShortsPlaylist: async (
    shortsId: number,
    playlistId: number,
  ): Promise<ApiResponse<PlaylistShorts>> => {
    const cookieStore = await cookies()
    const accessToken = cookieStore.get('accessToken')?.value

    const response = await fetch(`${baseUrl}/api/v1/playlists/${playlistId}/items`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({ shortsId }),
    })

    if (!response.ok) {
      throw new Error('숏츠 저장 실패')
    }

    const data = await response.json()

    return data.data
  },
}
