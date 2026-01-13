const baseUrl = process.env.NEXT_PUBLIC_API_URL

// Presigned URL 요청 파라미터
export interface PresignedUrlRequest {
  title: string
  description: string
  categoryId: number
  keywords: string[]
  fileName: string
  fileSize: number
  contentType: string
  durationSec: number
}

// Presigned URL 응답 타입 (1단계: URL 발급)
export interface PresignedUrlResponse {
  shortsId: string
  videoPresignedUrl: string
  thumbnailPresignedUrl: string
  uploadId: string
  expiresIn: number
  maxFileSize: number
}

// 업로드 완료 확정 요청 파라미터
export interface ConfirmUploadRequest {
  shortsId: string
  uploadId: string
  videoUrl: string
  thumbnailUrl: string
}

// 업로드 완료 확정 응답 타입
export interface ConfirmUploadResponse {
  shortsId: string
  uploadId: string
}

/**
 * 숏츠 업로드 서비스
 * 엔드포인트: /api/v1/shorts/upload
 *
 * 업로드 플로우:
 * 1. POST /api/v1/shorts/upload - Presigned URL + 메타데이터 발급
 * 2. PUT S3 - 비디오/썸네일 파일 업로드
 * 3. POST /api/v1/shorts/upload/confirm - 업로드 완료 확정
 */
export const shortsUploadApi = {
  /**
   * 1단계: Presigned URL 발급 요청 (비디오, 썸네일)
   */
  getPresignedUrl: async (params: PresignedUrlRequest): Promise<PresignedUrlResponse> => {
    const {
      title,
      description,
      categoryId,
      keywords,
      fileName,
      fileSize,
      contentType,
      durationSec,
    } = params

    const res = await fetch(`${baseUrl}/api/v1/shorts/upload`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title,
        description,
        categoryId,
        keywords,
        fileName,
        fileSize,
        contentType,
        durationSec,
      }),
    })

    if (!res.ok) {
      const errorData = await res.json().catch(() => null)
      throw new Error(errorData?.message || 'Presigned URL 발급 실패')
    }

    const response = await res.json()
    const data = response.data

    return {
      shortsId: data.shortsId,
      videoPresignedUrl: data.videoPresignedUrl,
      thumbnailPresignedUrl: data.thumbnailPresignedUrl,
      uploadId: data.uploadId,
      expiresIn: data.expiresIn,
      maxFileSize: data.maxFileSize,
    }
  },

  /**
   * 2단계: S3에 파일 업로드 (Presigned URL 사용)
   * 비디오 , 썸네일 모두 동일한 방식으로 업로드
   */
  uploadToS3: async (presignedUrl: string, file: File | Blob): Promise<void> => {
    const res = await fetch(presignedUrl, {
      method: 'PUT',
      body: file,
      headers: {
        'Content-Type': file.type,
      },
    })

    if (!res.ok) {
      throw new Error('S3 업로드 실패')
    }
  },

  /**
   * 3단계: 업로드 완료 확정 요청
   */
  confirmUpload: async (params: ConfirmUploadRequest): Promise<ConfirmUploadResponse> => {
    const { shortsId, uploadId } = params

    const res = await fetch(`${baseUrl}/api/v1/shorts/${shortsId}/upload-complete`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        shortsId,
        uploadId,
      }),
    })

    if (!res.ok) {
      const errorData = await res.json().catch(() => null)
      throw new Error(errorData?.message || '업로드 확정 실패')
    }

    const response = await res.json()
    return response.data
  },

  /**
   * 전체 업로드 플로우 실행
   * 1. Presigned URL 발급
   * 2. S3에 비디오/썸네일 업로드
   * 3. 업로드 완료 확정
   */
  uploadShorts: async (
    params: PresignedUrlRequest,
    videoFile: File,
    thumbnailFile: File | Blob,
  ): Promise<ConfirmUploadResponse> => {
    // 1단계: Presigned URL 발급
    const presignedData = await shortsUploadApi.getPresignedUrl(params)

    // 2단계: S3에 비디오와 썸네일 동시 업로드
    await Promise.all([
      shortsUploadApi.uploadToS3(presignedData.videoPresignedUrl, videoFile),
      shortsUploadApi.uploadToS3(presignedData.thumbnailPresignedUrl, thumbnailFile),
    ])

    // 3단계: 업로드 완료 확정
    const result = await shortsUploadApi.confirmUpload({
      shortsId: presignedData.shortsId,
      uploadId: presignedData.uploadId,
      videoUrl: presignedData.videoPresignedUrl.split('?')[0],
      thumbnailUrl: presignedData.thumbnailPresignedUrl.split('?')[0],
    })

    return result
  },
}
