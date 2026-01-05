'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { getMe } from '@/services/mypage/user.service'
import ShortsFormContainer from './ShortsFormContainer'

export default function ShortsFormClientContainer() {
  const router = useRouter()
  const [userId, setUserId] = useState<number | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  // 사용자 정보 조회
  useEffect(() => {
    async function fetchUser() {
      const user = await getMe()

      if (!user?.id) {
        router.push('/signin')
        return
      }

      setUserId(user.id)
      setIsLoading(false)
    }

    fetchUser()
  }, [router])

  // 로딩 중
  if (isLoading || !userId) {
    return (
      <div className="flex h-64 items-center justify-center">
        <p className="text-gray-500">로딩 중...</p>
      </div>
    )
  }

  return <ShortsFormContainer userId={userId} />
}
