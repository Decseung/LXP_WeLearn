import { ShortsDetail, ShortsDetailResponse } from '@/types/shortform'

export async function getShortsDetail(id: string): Promise<ShortsDetailResponse | null> {
  try {
    // 현재 shorts 가져오기
    const response = await fetch(`http://localhost:4000/shorts/${id}`, {
      cache: 'no-store',
    })

    if (!response.ok) {
      return null
    }

    const shorts: ShortsDetail = await response.json()

    // 전체 목록으로 prev/next 계산 (임시 - 백엔드 API 완성 시 제거)
    const listResponse = await fetch(`http://localhost:4000/shorts`, {
      cache: 'no-store',
    })
    const allShorts: ShortsDetail[] = await listResponse.json()

    // 최신순 정렬 (id 역순)
    const sortedShorts = [...allShorts].sort((a, b) => a.id - b.id)
    const currentIndex = sortedShorts.findIndex((s) => s.id === Number(id))

    const prevId = currentIndex > 0 ? sortedShorts[currentIndex - 1].id : null
    const nextId = currentIndex < sortedShorts.length - 1 ? sortedShorts[currentIndex + 1].id : null

    return {
      shorts,
      prevId,
      nextId,
    }
  } catch (error) {
    console.error('데이터 불러오기 실패:', error)
    return null
  }
}
