import api from '@/lib/utils/apiUtils'
import type { components } from '@/types/api-schema'

// API 타입
type ShortsUploadRequest = components['schemas']['ShortsUploadRequest']
type ShortsResponse = components['schemas']['ShortsResponse']

const apiClient = api()

export const registerApi = {
  /**
   * 숏츠 등록
   * POST /api/v1/shorts
   */
  uploadShorts: async (request: ShortsUploadRequest): Promise<ShortsResponse> => {
    const response = await apiClient.post('/api/v1/shorts', request)
    const data = await response.json()

    return data?.data ?? data
  },
}
