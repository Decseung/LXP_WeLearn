'use client'

import { Input } from '@/components/ui/Input'

interface ShortsFormInputsProps {
  title: string
  setTitle: (value: string) => void
  description: string
  setDescription: (value: string) => void
  isPublic: boolean
  setIsPublic: (value: boolean) => void
}

export default function ShortsFormInputs({
  title,
  setTitle,
  description,
  setDescription,
  isPublic,
  setIsPublic,
}: ShortsFormInputsProps) {
  return (
    <>
      {/* 숏츠 제목 */}
      <div>
        <label className="mb-2 block text-sm font-medium text-gray-700">숏츠 제목</label>
        <Input
          type="text"
          name="shorts-title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="제목을 입력하세요."
          className="border-gray-300 bg-white text-sm focus:ring-black focus:outline-none"
        />
      </div>

      {/* 숏츠 설명 */}
      <div>
        <label className="mb-2 block text-sm font-medium text-gray-700">숏츠 설명</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="내용을 입력하세요."
          rows={4}
          className="w-full resize-none rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm transition-all focus:ring-2 focus:ring-black focus:outline-none"
        />
      </div>

      {/* 공개 여부 */}
      <div>
        <label className="mb-2 block text-sm font-medium text-gray-700">공개 여부</label>
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setIsPublic(true)}
            className={`flex-1 rounded-lg py-2 font-medium transition-all ${
              isPublic
                ? 'border-2 border-green-500 bg-green-500 text-white'
                : 'border-2 border-transparent bg-gray-200 text-gray-600'
            }`}
          >
            공개
          </button>

          <button
            type="button"
            onClick={() => setIsPublic(false)}
            className={`flex-1 rounded-lg py-2 font-medium transition-all ${
              !isPublic
                ? 'border-2 border-gray-500 bg-gray-500 text-sm text-white'
                : 'border-2 border-transparent bg-gray-200 text-sm text-gray-600'
            }`}
          >
            비공개
          </button>
        </div>
      </div>
    </>
  )
}
