import api from '@/lib/utils/apiUtils'
import type { components } from '@/types/api-schema'

type UserResponse = components['schemas']['UserResponse']

/**
 * 내 정보 조회 (클라이언트용)
 * GET /api/v1/users/me
 */
export async function getMe(): Promise<UserResponse | null> {
  try {
    const apiClient = api()
    const response = await apiClient.get('/api/v1/users/me', {
      cache: 'no-store',
    })
    return response
  } catch (error) {
    console.error('사용자 정보 조회 실패:', error)
    return null
  }
}
