import { api } from '@/lib/utils/apiUtils'
import type { components } from '@/types/api-schema'

type UserResponse = components['schemas']['UserResponse']

interface UserUpdateRequest {
  nickname: string
  profileUrl?: string
  name?: string
}

export const userApi = {
  /** 내 정보 조회 */
  getMe: () => api.get<UserResponse>('/api/v1/users/me', { cache: 'no-store' }),

  /** 내 정보 수정 */
  updateMe: (data: UserUpdateRequest) => api.patch<UserResponse>('/api/v1/users/me', data),

  /** 회원 탈퇴 */
  deleteMe: () => api.delete('/api/v1/users/me'),
}
