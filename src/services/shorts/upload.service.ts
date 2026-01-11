const baseUrl = process.env.NEXT_PUBLIC_API_URL

// Presigned URL 응답 타입 (백엔드 명세서 확정 후 수정 필요)
export interface PresignedUrlResponse {
  presignedUrl: string // S3 업로드용 Presigned URL
  videoFileUrl: string // S3에 업로드 완료 후 접근 가능한 최종 비디오 URL
  key?: string // S3 객체 키 (옵션)
}

// Presigned URL 요청 파라미터 (백엔드 명세서 확정 후 수정 필요)
export interface PresignedUrlRequest {
  filename: string
  contentType: string
}

/**
 * 숏츠 업로드 서비스
 * 엔드포인트: /api/v1/shorts/upload
 */
export const shortsUploadApi = {
  /**
   * Presigned URL 발급 요청 (비디오 전용)
   * TODO: 백엔드 명세서 확정 후 요청/응답 구조 업데이트 해야함!!
   */
  getPresignedUrl: async (params: PresignedUrlRequest): Promise<PresignedUrlResponse> => {
    const { filename, contentType } = params

    //TODO 쿼리 파라미터 구성 (백엔드 요구사항에 맞게 조정하기!!)
    const queryParams = new URLSearchParams({
      filename: filename,
      contentType: contentType,
    })

    const res = await fetch(`${baseUrl}/api/v1/shorts/upload?${queryParams.toString()}`, {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
    })

    if (!res.ok) {
      const errorData = await res.json().catch(() => null)
      throw new Error(errorData?.message || 'Presigned URL 발급 실패')
    }

    const data = await res.json()

    //TODO 백엔드 응답 구조에 맞게 파싱 수정하기!!
    // Case 1: 백엔드가 단순 문자열로 URL을 반환하는 경우
    if (typeof data === 'string') {
      const videoFileUrl = data.split('?')[0] // 쿼리 파라미터 제거
      return {
        presignedUrl: data,
        videoFileUrl,
      }
    }

    // Case 2: 백엔드가 객체로 반환하는 경우
    return {
      presignedUrl: data.presignedUrl || data.url || data,
      videoFileUrl:
        data.videoFileUrl ||
        data.fileUrl ||
        data.presignedUrl?.split('?')[0] ||
        data.url?.split('?')[0],
      key: data.key,
    }
  },
}
