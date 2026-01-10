import { useEffect, useState, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import { toast } from 'react-toastify'
import {
  ShortsFormData,
  VideoPreviewData,
  INITIAL_SHORTS_FORM_DATA,
  INITIAL_VIDEO_PREVIEW_DATA,
} from '@/features/register/types/shortsRegister'
import { validateShortsForm } from '@/features/register/register.validation'
import { registerShortsAction } from '@/features/register/register.action'
import { shortsUploadApi } from '@/services/shorts/upload.service'
import { uploadVideoToS3 } from '@/lib/utils/s3Upload'

interface UseRegisterFormParams {
  initialFormData?: Partial<ShortsFormData>
  initialVideoData?: Partial<VideoPreviewData>
}

/**
 * 숏츠 등록 폼 상태 및 로직을 관리하는 커스텀 훅
 */
export default function useRegisterForm(params: UseRegisterFormParams = {}) {
  const router = useRouter()
  const { initialFormData, initialVideoData } = params

  // 초기 폼 데이터 생성 함수
  const buildInitialForm = useCallback(
    () => ({
      ...INITIAL_SHORTS_FORM_DATA,
      ...initialFormData,
    }),
    [initialFormData],
  )

  // 초기 비디오 데이터 생성 함수
  const buildInitialVideo = useCallback(
    () => ({
      ...INITIAL_VIDEO_PREVIEW_DATA,
      ...initialVideoData,
    }),
    [initialVideoData],
  )

  // 상태 정의
  const [formData, setFormData] = useState<ShortsFormData>(buildInitialForm)
  const [videoData, setVideoData] = useState<VideoPreviewData>(buildInitialVideo)
  const [isSubmitting, setIsSubmitting] = useState(false)

  // 초기 데이터 변경 시 폼 초기화
  useEffect(() => {
    setFormData(buildInitialForm())
    setVideoData(buildInitialVideo())
  }, [buildInitialForm, buildInitialVideo])

  // 폼 필드 변경 핸들러
  const handleFormChange = <K extends keyof ShortsFormData>(field: K, value: ShortsFormData[K]) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  // 비디오 데이터 변경 핸들러
  const handleVideoChange = <K extends keyof VideoPreviewData>(
    field: K,
    value: VideoPreviewData[K],
  ) => {
    setVideoData((prev) => ({ ...prev, [field]: value }))
  }

  // 숏츠 등록 핸들러 (S3 직접 업로드 방식)
  const handleRegister = async () => {
    if (isSubmitting) return

    const validation = validateShortsForm(formData, videoData)
    if (!validation.isValid) {
      // 첫 번째 에러 메시지만 표시
      const firstError = validation.errors[0]
      if (firstError) {
        toast.error(firstError.message)
      }
      return
    }

    setIsSubmitting(true)

    try {
      const videoFile = videoData.videoFile!

      // 1. Presigned URL 발급 요청 (비디오)
      toast.info('비디오 업로드 준비 중...')
      const videoPresigned = await shortsUploadApi.getPresignedUrl({
        filename: videoFile.name,
        contentType: videoFile.type,
      })

      // 2. S3에 비디오 직접 업로드
      toast.info('비디오 업로드 중...')
      const videoUploadResult = await uploadVideoToS3(
        videoPresigned.presignedUrl,
        videoFile,
        (progress) => {
          console.log(`비디오 업로드 진행률: ${progress}%`)
        },
      )

      if (!videoUploadResult.success) {
        throw new Error(videoUploadResult.error || '비디오 업로드 실패')
      }

      const videoUrl = videoUploadResult.videoFileUrl || videoPresigned.videoFileUrl

      // 3. 숏츠 메타데이터 등록 (S3 업로드된 비디오 URL + 썸네일 Base64)
      toast.info('숏츠 등록 중...')
      const result = await registerShortsAction({
        categoryId: formData.categoryId!,
        title: formData.title,
        description: formData.description || undefined,
        keywords: formData.keywords.length > 0 ? formData.keywords : undefined,
        videoUrl,
        thumbnail: formData.thumbnail,
        durationSec: videoData.durationSec ?? undefined,
      })

      // ActionState 기반 응답 처리
      if (result.success) {
        toast.success(result.message || '등록이 완료되었습니다.')
        router.push('/mypage/myshorts')
      } else {
        toast.error(result.message || '등록에 실패했습니다.')
      }
    } catch (error) {
      toast.error(error instanceof Error ? error.message : '등록에 실패했습니다.')
    } finally {
      setIsSubmitting(false)
    }
  }

  // 취소 핸들러
  const handleCancel = () => router.back()

  // 폼 초기화 함수
  const resetForm = useCallback(() => {
    setFormData(buildInitialForm())
    setVideoData(buildInitialVideo())
  }, [buildInitialForm, buildInitialVideo])

  return {
    formData,
    videoData,
    isSubmitting,
    handleFormChange,
    handleVideoChange,
    handleRegister,
    handleCancel,
    resetForm,
  }
}
