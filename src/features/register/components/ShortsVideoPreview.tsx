'use client'

import { useRef } from 'react'
import { CirclePlus, Plus, X } from 'lucide-react'
import { Button } from '@/components/ui/Button'

interface ShortsVideoPreviewProps {
  videoFile: File | null
  setVideoFile: (value: File | null) => void
  isDragging: boolean
  setIsDragging: (value: boolean) => void
  onSubmit: () => void
  onCancel: () => void
}

export default function ShortsVideoPreview({
  videoFile,
  setVideoFile,
  isDragging,
  setIsDragging,
  onSubmit,
  onCancel,
}: ShortsVideoPreviewProps) {
  // 파일 선택 input 제어용 ref
  const videoInputRef = useRef<HTMLInputElement>(null)

  /**
   *
   * @param  드래그 이벤트 핸들러
   */

  // 드래그 영역 진입 시
  const handleDragEnter = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(true)
  }

  // 드래그 영역 벗어날 때
  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(false)
  }

  // 드래그 중 기본 동작 방지
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
  }

  // 파일 드롭 시 비디오 파일만 허용
  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(false)

    const file = e.dataTransfer.files?.[0]
    if (file && file.type.startsWith('video/')) {
      setVideoFile(file)
    }
  }

  /**
   *
   * @param  비디오 파일 선택
   */

  // input을 통한 파일 업로드
  const handleVideoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file && file.type.startsWith('video/')) {
      setVideoFile(file)
    }
  }

  // 업로드된 비디오 제거
  const handleRemoveVideo = () => {
    setVideoFile(null)
  }

  return (
    <div className="space-y-6">
      {/* 상단 업로드 버튼 (추후 기능 확장용) */}
      {/* <Button type="button" variant="secondary" className="w-full">
        숏츠 업로드
      </Button> */}

      {/* 비디오 드래그 & 미리보기 영역 */}
      <div
        className={`flex aspect-[9/16] items-center justify-center rounded-2xl border-2 border-dashed bg-white transition-all ${
          isDragging ? 'border-black bg-gray-50' : 'border-gray-300'
        }`}
        onDragEnter={handleDragEnter}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        {videoFile ? (
          // 비디오가 있을 경우 미리보기 렌더
          <div className="relative h-full w-full">
            <video className="h-full w-full rounded-2xl object-cover" controls>
              <source src={URL.createObjectURL(videoFile)} type={videoFile.type} />
            </video>

            {/* 비디오 제거 버튼 */}
            <button
              type="button"
              onClick={handleRemoveVideo}
              className="absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-black/50 text-white hover:bg-black/70"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        ) : (
          // 비디오가 없을 경우 업로드 안내 UI
          <div className="text-center">
            {/* <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full border-4 border-gray-600">
              <Plus strokeWidth={1.5} className="h-12 w-12 text-gray-600" />
            </div> */}
            <div className="mb-4 flex items-center justify-center">
              <CirclePlus strokeWidth={0.5} size={102} color="#aaa" />
            </div>

            <p className="text-sm leading-6 text-gray-500">
              동영상 파일을 드래그하거나 <br /> 클릭하여 업로드 하세요.
            </p>

            {/* 숨겨진 파일 input */}
            <input
              ref={videoInputRef}
              type="file"
              accept="video/*"
              onChange={handleVideoUpload}
              className="hidden"
            />

            <Button
              type="button"
              variant="outline"
              onClick={() => videoInputRef.current?.click()}
              className="mt-4"
            >
              파일 선택
            </Button>
          </div>
        )}
      </div>

      {/* 등록 버튼 */}
      <Button type="button" variant="accent" onClick={onSubmit} className="text-md w-full py-6">
        등록하기
      </Button>

      {/* 취소 버튼 */}
      <Button type="button" variant="secondary" onClick={onCancel} className="text-md w-full py-6">
        취소
      </Button>
    </div>
  )
}
