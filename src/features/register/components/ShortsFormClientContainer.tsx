'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { ShortsFormLeftSection } from '@/features/register/components'
import ShortsVideoPreview from '@/features/register/components/ShortsVideoPreview'
import ShortsFormSubmitButtons from '@/features/register/components/ShortsFormSubmitButtons'
import useRegisterForm from '@/hook/register/useRegisterForm'
import { getMe } from '@/services/mypage/user.service'

export default function ShortsFormClientContainer() {
  const router = useRouter()
  const [userId, setUserId] = useState<number | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  // 사용자 정보 조회
  useEffect(() => {
    async function fetchUser() {
      const user = await getMe()

      if (!user?.id) {
        // 로그인 안 된 경우 리다이렉트
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

  return <ShortsFormContent userId={userId} />
}

// 실제 폼 컨텐츠 (userId 확정 후 렌더링)
function ShortsFormContent({ userId }: { userId: number }) {
  const {
    formData,
    videoData,
    isSubmitting,
    handleFormChange,
    handleVideoChange,
    handleRegister,
    handleCancel,
  } = useRegisterForm({ userId })

  return (
    <div className="flex flex-col gap-8 lg:flex-row lg:gap-12">
      {/* 왼쪽 - 숏츠 정보 입력 폼 */}
      <div className="w-full lg:flex-1">
        <ShortsFormLeftSection formData={formData} onChange={handleFormChange} />
      </div>

      {/* 오른쪽 - 미리보기 및 업로드 */}
      <div className="w-full space-y-6 lg:w-96">
        <ShortsVideoPreview
          videoData={videoData}
          onChange={handleVideoChange}
          thumbnail={formData.thumbnail}
          onThumbnailRemove={() => handleFormChange('thumbnail', null)}
        />

        <ShortsFormSubmitButtons
          onRegister={handleRegister}
          onCancel={handleCancel}
          isLoading={isSubmitting}
        />
      </div>
    </div>
  )
}
