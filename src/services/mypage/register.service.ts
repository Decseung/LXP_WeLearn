import { ShortsFormData, VideoPreviewData } from '@/types/shortsRegister'

/**
 * 숏츠 등록 요청 페이로드 타입
 */
export interface ShortsUploadPayload {
  title: string
  description: string
  isPublic: boolean
  categoryId: number
  keywords: string[]
  thumbnail: string | null
  videoFileName: string
  durationSec: number | null
}

/**
 * 폼 상태 데이터를 서버 API 요청용 페이로드로 변환
 *
 * - UI에서 사용하는 formData / videoData 구조를 API 스펙에 맞는 형태로 가공
 * - API 변경 시 이 함수만 수정하면 되도록 책임 분리
 *
 * -  ⚠️ categoryId, videoFile은 이미 상위 레이어에서 유효성 검사를 통과했다고 가정함
 */
export function createUploadPayload(
  formData: ShortsFormData,
  videoData: VideoPreviewData,
): ShortsUploadPayload {
  return {
    title: formData.title,
    description: formData.description,
    isPublic: formData.isPublic,
    categoryId: formData.categoryId!,
    keywords: formData.keywords,
    thumbnail: formData.thumbnail,
    videoFileName: videoData.videoFile?.name ?? '',
    durationSec: videoData.durationSec,
  }
}

/**
 * 숏츠 등록 API 호출
 * TODO: 실제 API 연동 시 fetch
 *  @param payload - 업로드 페이로드
 */
export async function uploadShorts(payload: ShortsUploadPayload): Promise<void> {
  // 임시 로그(디버깅 용도)
  console.log('등록 요청 데이터:', payload)

  // 더미 딜레이 (API 호출 시뮬레이션)
  await new Promise((resolve) => setTimeout(resolve, 500))
}

/**
 * 숏츠 수정 API 호출
 * TODO: PUT / PATCH 방식 확정 후 API 연동 필요
 * @param id - 숏츠 ID
 * @param payload - 수정 페이로드
 */
export async function updateShorts(
  id: string,
  payload: Partial<ShortsUploadPayload>,
): Promise<void> {
  // 임시 로그(디버깅 용도)
  console.log('수정 요청 데이터:', { id, payload })

  await new Promise((resolve) => setTimeout(resolve, 500))
}
