import { api } from '@/lib/utils/apiUtils'
import { ApiResponse } from '@/types/api/api'
import { Playlist, PlaylistBase } from '@/types/playlist/playlist'
import { PageRequest } from '@/types/shorts/shorts'

export const PlaylistApi = {
  // 유저 개인 플레이 리스트 조회
  getUserPlaylist: async ({
    page,
    size,
  }: PageRequest): Promise<ApiResponse<PlaylistBase<Playlist>>> => {
    const response: ApiResponse<PlaylistBase<Playlist>> = await api.get(`/api/v1/playlist/me`, {
      cache: 'no-store',
      params: {
        page,
        size,
      },
    })
    return response
  },
}
