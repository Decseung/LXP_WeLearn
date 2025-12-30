'use client'

import { useState } from 'react'
import { ShortsFormLeftSection } from '@/features/register/components'
import ShortsVideoPreview from '@/features/register/components/ShortsVideoPreview'
import {
  INITIAL_SHORTS_FORM_DATA,
  INITIAL_VIDEO_PREVIEW_DATA,
  ShortsFormData,
  VideoPreviewData,
} from '@/types/shortsRegister'

export default function ShortsCreatePage() {
  // 폼 데이터 상태 (객체로 그룹화)
  const [formData, setFormData] = useState<ShortsFormData>(INITIAL_SHORTS_FORM_DATA)

  // 비디오 프리뷰 상태
  const [videoData, setVideoData] = useState<VideoPreviewData>(INITIAL_VIDEO_PREVIEW_DATA)

  /**
   * 폼 데이터 변경 핸들러
   * @param field - 변경할 필드명
   * @param value - 변경할 값
   */
  const handleFormChange = <K extends keyof ShortsFormData>(field: K, value: ShortsFormData[K]) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  /**
   * 비디오 데이터 변경 핸들러
   * @param field - 변경할 필드명
   * @param value - 변경할 값
   */
  const handleVideoChange = <K extends keyof VideoPreviewData>(
    field: K,
    value: VideoPreviewData[K],
  ) => {
    setVideoData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = () => {
    // TODO: 등록 로직 구현
    console.log('Submit:', { formData, videoData })
  }

  const handleCancel = () => {
    // TODO: 취소 로직 구현
  }

  return (
    <div className="h-full w-full max-w-7xl">
      <div className="px-4 py-6 sm:px-6 sm:py-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:gap-12">
          {/* 왼쪽 - 숏츠 정보 입력 폼 */}
          <div className="w-full lg:flex-1">
            <ShortsFormLeftSection formData={formData} onChange={handleFormChange} />
          </div>

          {/* 오른쪽 - 미리보기 및 업로드 */}
          <div className="w-full lg:w-96">
            <ShortsVideoPreview
              videoData={videoData}
              onChange={handleVideoChange}
              onSubmit={handleSubmit}
              onCancel={handleCancel}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
