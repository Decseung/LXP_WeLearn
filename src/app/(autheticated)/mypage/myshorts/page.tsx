import MyShortsContainer from '@/features/mypage/myshorts/MyShortsContainer'
import { getMyShorts } from '@/services/mypage/myshorts.service'

export default async function MyShortsPage() {
  const response = await getMyShorts({ page: 0, size: 20 })

  const shorts = response?.content ?? []
  const totalCount = response?.totalElements ?? 0

  return <MyShortsContainer initialShorts={shorts} totalCount={totalCount} />
}
