import { api } from '@/lib/utils/apiUtils'
import { ApiResponse } from '@/types/api/api'
import { PageResponse, ShortsBase } from '@/types/shorts/shorts'

export const shortsApi = {
  shortsDetailList: async ({ page = 0, size = 20 }) => {
    const response = await api.get('/api/v1/shorts', {
      cache: 'no-store',
      params: {
        page,
        size,
      },
    })
    return response
  },

  shortsDetail: async (shortsId: number) => {
    const response = await api.get(`/api/v1/shorts/${shortsId}`, {
      cache: 'no-store',
      auth: false,
    })
    return response
  },

  getShortPopular: async ({ page = 0, size = 10 }) => {
    const response = await api.get<ApiResponse<PageResponse<ShortsBase[]>>>(
      '/api/v1/shorts/popular',
      {
        cache: 'no-store',
        params: {
          page,
          size,
        },
      },
    )
    // console.log('인기 숏츠 목록 조회 결과:', response.data)
    return response
  },
}
