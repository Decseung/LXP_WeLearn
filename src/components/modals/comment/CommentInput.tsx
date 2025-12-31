export default function CommentInput() {
  return (
    <div className="border-t border-gray-200 bg-white p-4">
      <div className="flex items-center gap-3">
        {/* 프로필 아이콘 */}
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gray-200">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-gray-400"
          >
            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
        </div>
        {/* 입력 필드 */}
        <input
          type="text"
          placeholder="댓글을 입력하세요..."
          className="flex-1 rounded-full border border-gray-300 px-4 py-3 text-sm focus:border-black focus:ring-1 focus:ring-black focus:outline-none"
        />
      </div>
      {/* 버튼 영역 */}
      <div className="mt-3 flex justify-end gap-2">
        <button className="rounded-md border border-gray-300 px-4 py-2 text-sm text-gray-600 transition-colors hover:bg-gray-50">
          취소
        </button>
        <button className="rounded-md bg-black px-6 py-2 text-sm text-white transition-colors hover:bg-gray-800 disabled:cursor-not-allowed disabled:bg-gray-300">
          등록
        </button>
      </div>
    </div>
  )
}
