import { toast } from 'react-toastify'
import { ShortsFormData, VideoPreviewData } from '@/types/shortsRegister'

type FieldKey = 'title' | 'categoryId' | 'videoFile'

interface ValidationResult {
  isValid: boolean
  field?: FieldKey
  message?: string
}

export function shortsFormValidation(
  formData: ShortsFormData,
  videoData: VideoPreviewData,
  showToast: boolean = true,
): ValidationResult {
  // 실패 결과 생성 헬퍼
  const fail = (field: FieldKey, message: string): ValidationResult => {
    if (showToast) toast.error(message)
    return { isValid: false, field, message }
  }

  // 필드 검증
  const title = formData.title?.trim() ?? ''
  if (!title) return fail('title', '제목을 입력해주세요.')

  // 제목 길이 제한
  if (title.length > 50) return fail('title', '제목은 50자 이내로 입력해주세요.')

  if (formData.categoryId == null) return fail('categoryId', '카테고리를 선택해주세요.')

  if (!videoData.videoFile) return fail('videoFile', '영상을 업로드해주세요.')

  return { isValid: true }
}
