import { ChevronDown, ChevronUp } from 'lucide-react'

interface ShortsNavigationButtonsProps {
  onPrev: () => void
  onNext: () => void
  hasPrev: boolean
  hasNext: boolean
}

function ShortsNavigationButtons({
  onPrev,
  onNext,
  hasPrev,
  hasNext,
}: ShortsNavigationButtonsProps) {
  return (
    <div className="absolute top-1/2 left-full z-10 ml-4 hidden -translate-y-1/2 flex-col gap-4 md:flex">
      {/* 이전 영상 (위로) */}
      <button
        type="button"
        onClick={onPrev}
        disabled={!hasPrev}
        aria-label="이전 영상"
        className="flex flex-col items-center gap-1 text-gray-600 transition-colors hover:text-gray-900 disabled:cursor-not-allowed disabled:opacity-40"
      >
        <span className="text-sm">이전 영상</span>
        <div className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300">
          <ChevronUp size={20} />
        </div>
      </button>

      {/* 다음 영상 (아래로) */}
      <button
        type="button"
        onClick={onNext}
        disabled={!hasNext}
        aria-label="다음 영상"
        className="flex flex-col items-center gap-1 text-gray-600 transition-colors hover:text-gray-900 disabled:cursor-not-allowed disabled:opacity-40"
      >
        <div className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300">
          <ChevronDown size={20} />
        </div>
        <span className="text-sm">다음 영상</span>
      </button>
    </div>
  )
}

export default ShortsNavigationButtons
