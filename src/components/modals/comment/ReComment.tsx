import { Ellipsis } from 'lucide-react'

export default function ReComment() {
  return (
    <div className="mt-3">
      {/* Reply 1 */}
      <div className="border-gray-100 py-3 pl-12">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="mb-1 flex items-center gap-2">
              <span className="text-sm font-medium text-gray-900">replyBlock</span>
              <span className="text-xs text-gray-400">8시간 전</span>
            </div>
            <p className="text-sm leading-relaxed text-gray-700">
              코딩을 하다보면 쓸데없는데 관심이 더 생깁니다.
            </p>
          </div>
          <button className="rounded-full p-1 text-gray-400 transition-colors hover:bg-gray-100">
            <Ellipsis size={18} />
          </button>
        </div>
      </div>
    </div>
  )
}
