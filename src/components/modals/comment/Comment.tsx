import { ChevronDown, Ellipsis, User } from 'lucide-react'
import ReComment from './ReComment'

export default function Comment() {
  return (
    <div className="border-b border-gray-200 py-4">
      <div className="flex items-start justify-between">
        <div className="flex flex-1 items-start gap-3">
          {/* 프로필 이미지 */}
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gray-200 text-gray-600">
            <User strokeWidth={1.5} size={24} />
          </div>

          {/* 댓글 내용 */}
          <div className="flex-1">
            <div className="mb-1 flex items-center gap-2">
              <span className="text-sm font-medium text-gray-900">김코드</span>
              <span className="text-xs text-gray-400">12시간 전</span>
            </div>
            <p className="mb-2 text-sm leading-relaxed text-gray-700">
              코딩 초고수인것도 놀라운데 누구나 볼 수 있게 오픈소스로 푼게 더 놀라움
            </p>

            {/* 답글 토글 & 답글달기 */}
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-1 text-xs text-gray-500 transition-colors hover:text-black">
                답글 2개
                <ChevronDown size={12} />
              </button>
              <button className="text-xs text-gray-500 transition-colors hover:text-black">
                답글달기
              </button>
            </div>
          </div>
        </div>
        {/* 더보기 버튼 */}
        <button className="hover:bg-gray-00 rounded-full p-1 text-gray-400 transition-colors">
          <Ellipsis size={18} />
        </button>
      </div>

      <ReComment />
    </div>
  )
}
