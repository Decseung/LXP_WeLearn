import api from '@/lib/utils/apiUtils'
import type { components } from '@/types/api-schema'
import { ShortsFormData, VideoPreviewData } from '@/types/shortsRegister'

// API 타입
type ShortsUploadRequest = components['schemas']['ShortsUploadRequest']
type ShortsResponse = components['schemas']['ShortsResponse']

const apiClient = api()

/**
 * 비디오 파일 업로드
 * POST /api/v1/files/videos
 */
export async function uploadVideoFile(file: File): Promise<string> {
  const formData = new FormData()
  formData.append('file', file)

  const data = await apiClient.postFormData<{ videoUrl?: string; url?: string }>(
    '/api/v1/files/videos',
    formData,
  )

  const videoUrl = data.videoUrl ?? data.url ?? Object.values(data)[0]

  if (!videoUrl) {
    throw new Error('비디오 URL을 받지 못했습니다.')
  }
  return videoUrl
}

/**
 * 썸네일 파일 업로드
 * POST /api/v1/files/thumbnails
 */
export async function uploadThumbnailFile(base64Data: string): Promise<string | null> {
  try {
    const fetchResponse = await fetch(base64Data)
    const blob = await fetchResponse.blob()

    const formData = new FormData()
    formData.append('file', blob, 'thumbnail.jpg')

    const data = await apiClient.postFormData<{ thumbnailUrl?: string; url?: string }>(
      '/api/v1/files/thumbnails',
      formData,
    )

    return data.thumbnailUrl ?? data.url ?? Object.values(data)[0] ?? null
  } catch (error) {
    console.error('썸네일 업로드 실패:', error)
    return null
  }
}

/**
 * 숏츠 등록
 * POST /api/v1/shorts
 */
export async function uploadShorts(request: ShortsUploadRequest): Promise<ShortsResponse> {
  const response = await apiClient.post('/api/v1/shorts', request)
  const data = await response.json()

  return data?.data ?? data
}

/**
 * 숏츠 등록 전체 프로세스
 */
export async function registerShorts(
  formData: ShortsFormData,
  videoData: VideoPreviewData,
  userId: number,
): Promise<ShortsResponse> {
  // 1. 비디오 파일 업로드
  if (!videoData.videoFile) {
    throw new Error('비디오 파일이 없습니다.')
  }

  const videoUrl = await uploadVideoFile(videoData.videoFile)

  // 2. 썸네일 업로드 (선택)
  let thumbnailUrl: string | undefined
  if (formData.thumbnail) {
    const url = await uploadThumbnailFile(formData.thumbnail)
    if (url) {
      thumbnailUrl = url
    }
  }

  // 3. 숏츠 등록 요청

  const request: ShortsUploadRequest = {
    userId,
    categoryId: formData.categoryId!,
    title: formData.title,
    description: formData.description || undefined,
    videoUrl,
    thumbnailUrl,
    durationSec: videoData.durationSec ?? undefined,
    tagNames: formData.keywords.length > 0 ? formData.keywords : undefined,
  }

  return uploadShorts(request)
}
