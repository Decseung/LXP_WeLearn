import { api } from '@/lib/utils/apiUtils'
import type { components } from '@/types/api-schema'

type ShortsResponse = components['schemas']['ShortsResponse']
type PageShortsResponse = components['schemas']['PageShortsResponse']
type ShortsUpdateRequest = components['schemas']['ShortsUpdateRequest']

interface PaginationParams {
  page?: number
  size?: number
}

export const myShortsApi = {
  /** 내 숏츠 목록 조회 */
  getMyShorts: (params: PaginationParams = {}): Promise<PageShortsResponse> => {
    return api.get<PageShortsResponse>('/api/v1/users/me/shorts', { params })
  },

  /** 숏츠 상세 조회 */
  getShorts: (shortId: number): Promise<ShortsResponse> => {
    return api.get<ShortsResponse>(`/api/v1/shorts/${shortId}`)
  },

  /** 숏츠 수정 */
  updateShorts: (shortId: number, data: ShortsUpdateRequest): Promise<ShortsResponse> => {
    return api.patch<ShortsResponse>(`/api/v1/shorts/${shortId}`, data)
  },

  /** 숏츠 삭제 */
  deleteShorts: (shortId: number): Promise<boolean> => {
    return api.delete(`/api/v1/shorts/${shortId}`)
  },

  /** 숏츠 공개/비공개 전환 */
  toggleShortsStatus: (
    shortId: number,
    currentStatus: ShortsUpdateRequest['status'],
  ): Promise<ShortsResponse> => {
    const newStatus = currentStatus === 'PUBLISHED' ? 'DRAFT' : 'PUBLISHED'
    return api.patch<ShortsResponse>(`/api/v1/shorts/${shortId}`, { status: newStatus })
  },
}
