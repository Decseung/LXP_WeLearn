export default function ReCommentInput() {
  return (
    <div className="mt-2 rounded-lg py-3 pl-12">
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="답글을 입력하세요..."
          className="flex-1 rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-black focus:ring-1 focus:ring-black focus:outline-none"
        />
        <button className="rounded-md px-3 py-2 text-sm text-gray-600 transition-colors hover:bg-gray-200">
          취소
        </button>
        <button className="rounded-md bg-black px-4 py-2 text-sm text-white transition-colors hover:bg-gray-800">
          등록
        </button>
      </div>
    </div>
  )
}
