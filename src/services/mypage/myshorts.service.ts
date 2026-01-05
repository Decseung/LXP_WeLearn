import api from '@/lib/utils/apiUtils'
import { cookies } from 'next/headers'
import type { operations } from '@/types/api-schema'
import type {
  ShortsResponse,
  PageShortsResponse,
  ShortsUpdateRequest,
  ShortsStatus,
} from '@/types/myshorts'

const baseUrl = process.env.NEXT_PUBLIC_API_URL

type UpdateShortsApiResponse = operations['updateShorts']['responses'][200]['content']['*/*']

/**
 * 내 숏츠 목록 조회 (서버 컴포넌트용)
 */
export async function getMyShorts({
  page = 0,
  size = 20,
}: {
  page?: number
  size?: number
} = {}): Promise<PageShortsResponse | null> {
  try {
    const cookieStore = await cookies()

    const allCookies = cookieStore.getAll()

    // 쿠키를 문자열로 변환
    const cookieHeader = allCookies.map((cookie) => `${cookie.name}=${cookie.value}`).join('; ')

    const response = await fetch(`${baseUrl}/api/v1/users/me/shorts?page=${page}&size=${size}`, {
      headers: {
        Cookie: cookieHeader,
      },
      cache: 'no-store',
    })

    if (!response.ok) {
      return null
    }

    const text = await response.text()

    if (!text) {
      return { content: [], totalElements: 0 } as PageShortsResponse
    }

    return JSON.parse(text)
  } catch (error) {
    console.error('내 숏츠 목록 조회 실패:', error)
    return null
  }
}

/**
 * 숏츠 수정 (클라이언트용)
 */
export async function updateShorts(
  shortId: number,
  data: ShortsUpdateRequest,
): Promise<ShortsResponse | null> {
  try {
    const apiClient = api()
    const response: UpdateShortsApiResponse = await apiClient.patch(
      `/api/v1/shorts/${shortId}`,
      data,
    )
    return response?.data ?? null
  } catch (error) {
    console.error('숏츠 수정 실패:', error)
    return null
  }
}

/**
 * 숏츠 삭제 (클라이언트용)
 */
export async function deleteShorts(shortId: number): Promise<boolean> {
  try {
    const apiClient = api()
    await apiClient.delete(`/api/v1/shorts/${shortId}`)
    return true
  } catch (error) {
    console.error('숏츠 삭제 실패:', error)
    return false
  }
}

/**
 * 숏츠 공개/비공개 전환 (클라이언트용)
 */
export async function toggleShortsStatus(
  shortId: number,
  currentStatus: ShortsStatus,
): Promise<ShortsResponse | null> {
  const newStatus: ShortsStatus = currentStatus === 'PUBLISHED' ? 'DRAFT' : 'PUBLISHED'
  return updateShorts(shortId, { status: newStatus })
}
