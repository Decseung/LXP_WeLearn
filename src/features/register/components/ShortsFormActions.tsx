'use client'

import { Button } from '@/components/ui/Button'

interface ShortsFormActionsProps {
  onSubmit: () => void
  onCancel: () => void
  submitLabel?: string
}

export default function ShortsFormActions({
  onSubmit,
  onCancel,
  submitLabel = '등록하기',
}: ShortsFormActionsProps) {
  return (
    <div className="space-y-4">
      {/* 등록 버튼 */}
      <Button type="button" variant="accent" onClick={onSubmit} className="text-md w-full py-6">
        {submitLabel}
      </Button>

      {/* 취소 버튼 */}
      <Button type="button" variant="secondary" onClick={onCancel} className="text-md w-full py-6">
        취소
      </Button>
    </div>
  )
}
