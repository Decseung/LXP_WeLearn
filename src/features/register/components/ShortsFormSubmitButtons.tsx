'use client'

import { Button } from '@/components/ui/Button'
import { Loader2 } from 'lucide-react'

interface ShortsFormSubmitButtonsProps {
  onRegister: () => void
  onCancel: () => void
  isLoading?: boolean
  submitText?: string // 버튼 텍스트 커스터마이징
  cancelText?: string
}

export default function ShortsFormSubmitButtons({
  onRegister,
  onCancel,
  isLoading = false,
  submitText = '등록하기',
  cancelText = '취소',
}: ShortsFormSubmitButtonsProps) {
  return (
    <div className="flex gap-3">
      <Button
        type="button"
        variant="outline"
        className="flex-1"
        onClick={onCancel}
        disabled={isLoading}
      >
        {cancelText}
      </Button>
      <Button
        type="button"
        className="flex-1 bg-black text-white hover:bg-gray-800"
        onClick={onRegister}
        disabled={isLoading}
      >
        {isLoading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            처리 중...
          </>
        ) : (
          submitText
        )}
      </Button>
    </div>
  )
}
