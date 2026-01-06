import { api } from '@/lib/utils/apiUtils'
import type { components } from '@/types/api-schema'

// API 타입 (백엔드 스키마 기반)
type ShortsResponse = components['schemas']['ShortsResponse']
type PageShortsResponse = components['schemas']['PageShortsResponse']
type ShortsUpdateRequest = components['schemas']['ShortsUpdateRequest']

// 페이지네이션 파라미터
interface PaginationParams {
  page?: number
  size?: number
}

export const myShortsApi = {
  /**
   * 내 숏츠 목록 조회
   * GET /api/v1/users/me/shorts
   */
  getMyShorts: async (params: PaginationParams = {}): Promise<PageShortsResponse> => {
    return api.get<PageShortsResponse>('/api/v1/users/me/shorts', {
      params, // page, size가 포함된 객체를 그대로 전달 (buildQueryString에서 처리)
      cache: 'no-store',
    })
  },

  /**
   * 숏츠 상세 조회
   * GET /api/v1/shorts/{shortId}
   */
  getShorts: async (shortId: number): Promise<ShortsResponse> => {
    // apiUtils에서 이미 json() 변환 및 에러 처리를 하므로 res.json() 결과가 바로 T로 반환됨
    return api.get<ShortsResponse>(`/api/v1/shorts/${shortId}`, {
      cache: 'no-store',
    })
  },

  /**
   * 숏츠 수정
   * PATCH /api/v1/shorts/{shortId}
   */
  updateShorts: async (shortId: number, data: ShortsUpdateRequest): Promise<ShortsResponse> => {
    return api.patch<ShortsResponse>(`/api/v1/shorts/${shortId}`, data)
  },

  /**
   * 숏츠 삭제
   * DELETE /api/v1/shorts/{shortId}
   */
  deleteShorts: async (shortId: number): Promise<boolean> => {
    // apiUtils의 delete는 성공 시 true를 반환하도록 작성됨
    return api.delete(`/api/v1/shorts/${shortId}`)
  },

  /**
   * 숏츠 공개/비공개 전환
   * PATCH /api/v1/shorts/{shortId}
   */
  toggleShortsStatus: async (
    shortId: number,
    currentStatus: ShortsUpdateRequest['status'],
  ): Promise<ShortsResponse> => {
    const newStatus = currentStatus === 'PUBLISHED' ? 'DRAFT' : 'PUBLISHED'
    return api.patch<ShortsResponse>(`/api/v1/shorts/${shortId}`, {
      status: newStatus,
    })
  },
}
