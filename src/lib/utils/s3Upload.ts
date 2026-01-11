/**
 * S3 직접 업로드 유틸리티
 * Presigned URL을 사용하여 비디오 파일을 S3에 직접 업로드
 */

export interface S3UploadOptions {
  presignedUrl: string
  videoFile: File
  onProgress?: (progress: number) => void
}

export interface S3UploadResult {
  success: boolean
  videoFileUrl?: string
  error?: string
}

/**
 * Presigned URL을 사용하여 비디오 파일을 S3에 직접 업로드
 * @param options - 업로드 옵션
 * @returns 업로드 결과
 */
export async function uploadToS3(options: S3UploadOptions): Promise<S3UploadResult> {
  const { presignedUrl, videoFile, onProgress } = options

  try {
    // XMLHttpRequest를 사용하여 업로드 진행률 추적
    if (onProgress) {
      return await uploadWithProgress(presignedUrl, videoFile, onProgress)
    }

    // 기본 fetch를 사용한 업로드
    const response = await fetch(presignedUrl, {
      method: 'PUT',
      headers: {
        'Content-Type': videoFile.type,
      },
      body: videoFile,
    })

    if (!response.ok) {
      throw new Error(`S3 업로드 실패: ${response.status} ${response.statusText}`)
    }

    // Presigned URL에서 실제 비디오 파일 URL 추출 (쿼리 파라미터 제거)
    const videoFileUrl = presignedUrl.split('?')[0]

    return {
      success: true,
      videoFileUrl,
    }
  } catch (error) {
    console.error('S3 업로드 오류:', error)
    return {
      success: false,
      error: error instanceof Error ? error.message : 'S3 업로드 실패',
    }
  }
}

/**
 * XMLHttpRequest를 사용하여 진행률 추적과 함께 S3 업로드
 */
function uploadWithProgress(
  presignedUrl: string,
  videoFile: File,
  onProgress: (progress: number) => void,
): Promise<S3UploadResult> {
  return new Promise((resolve) => {
    const xhr = new XMLHttpRequest()

    // 업로드 진행률 이벤트
    xhr.upload.addEventListener('progress', (event) => {
      if (event.lengthComputable) {
        const progress = Math.round((event.loaded / event.total) * 100)
        onProgress(progress)
      }
    })

    // 업로드 완료 이벤트
    xhr.addEventListener('load', () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        const videoFileUrl = presignedUrl.split('?')[0]
        resolve({
          success: true,
          videoFileUrl,
        })
      } else {
        resolve({
          success: false,
          error: `S3 업로드 실패: ${xhr.status} ${xhr.statusText}`,
        })
      }
    })

    // 업로드 에러 이벤트
    xhr.addEventListener('error', () => {
      resolve({
        success: false,
        error: 'S3 업로드 중 네트워크 오류 발생',
      })
    })

    // 업로드 취소 이벤트
    xhr.addEventListener('abort', () => {
      resolve({
        success: false,
        error: 'S3 업로드가 취소되었습니다',
      })
    })

    // PUT 요청으로 S3에 직접 업로드
    xhr.open('PUT', presignedUrl)
    xhr.setRequestHeader('Content-Type', videoFile.type)
    xhr.send(videoFile)
  })
}

/**
 * 비디오 파일을 S3에 업로드
 */
export async function uploadVideoToS3(
  presignedUrl: string,
  videoFile: File,
  onProgress?: (progress: number) => void,
): Promise<S3UploadResult> {
  return uploadToS3({ presignedUrl, videoFile, onProgress })
}
