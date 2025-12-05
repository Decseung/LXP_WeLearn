'use client'
// ============================================
// Page: 숏폼 상세 페이지
// Route: /shorts/:shortId
// Access: 공개 (Public)
// Description: 숏폼 콘텐츠 상세 보기 페이지 (PC/Mobile 반응형)
// Features: 영상 재생, 좋아요, 저장, 공유, 댓글 모달
// ============================================

import React, { useState } from 'react'

// ============================================
// Type Definitions
// ============================================

interface Comment {
  id: string
  userName: string
  content: string
  createdAt: string
  replies?: Comment[]
}

interface ShortFormContent {
  id: string
  videoUrl: string
  thumbnail: string
  userName: string
  lessonTitle: string
  lessonDescription: string
  likeCount: number
  commentCount: number
  saveCount: number
  shareCount: number
  isLiked: boolean
  isSaved: boolean
}

// ============================================
// Sample Data
// ============================================

const sampleShortForm: ShortFormContent = {
  id: '1',
  videoUrl: '',
  thumbnail: '',
  userName: 'UserName',
  lessonTitle: 'lessonTitle',
  lessonDescription: 'lessonDescription',
  likeCount: 892,
  commentCount: 57,
  saveCount: 0,
  shareCount: 0,
  isLiked: false,
  isSaved: false,
}

const sampleComments: Comment[] = [
  {
    id: '1',
    userName: 'Section 1',
    content: 'commentContent',
    createdAt: 'uploadAt',
    replies: [],
  },
  {
    id: '2',
    userName: 'Section 2',
    content: 'commentContent',
    createdAt: 'uploadAt',
    replies: [],
  },
  {
    id: '3',
    userName: 'Section 3',
    content: 'commentContent',
    createdAt: 'uploadAt',
    replies: [],
  },
]

// ============================================
// ActionButton Component
// Description: 우측 액션 버튼 (좋아요, 댓글, 저장, 공유)
// ============================================
const ActionButton: React.FC<{
  icon: React.ReactNode
  label: string
  count?: number
  isActive?: boolean
  onClick?: () => void
}> = ({ icon, label, count, isActive = false, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="flex flex-col items-center gap-1 text-gray-700 transition-colors hover:text-gray-900"
      aria-label={label}
    >
      <div className={`${isActive ? 'text-red-500' : ''}`}>{icon}</div>
      {count !== undefined && <span className="text-xs text-gray-600">{count}</span>}
      <span className="text-xs text-gray-500">{label}</span>
    </button>
  )
}

// ============================================
// CommentItem Component
// Description: 개별 댓글 아이템
// ============================================
const CommentItem: React.FC<{ comment: Comment }> = ({ comment }) => {
  return (
    <div className="mb-3 rounded-lg border border-gray-200 p-4">
      <div className="mb-2 flex items-center justify-between">
        <span className="font-medium text-gray-900">{comment.userName}</span>
        <span className="text-xs text-gray-400">{comment.createdAt}</span>
      </div>
      <p className="mb-3 text-sm text-gray-600">{comment.content}</p>
      <button className="rounded bg-gray-800 px-3 py-1.5 text-xs font-medium text-white transition-colors hover:bg-gray-700">
        답글
      </button>
    </div>
  )
}

// ============================================
// CommentModal Component
// Description: 댓글 모달 (Mobile)
// ============================================
const CommentModal: React.FC<{
  isOpen: boolean
  onClose: () => void
  comments: Comment[]
}> = ({ isOpen, onClose, comments }) => {
  const [newComment, setNewComment] = useState('')

  if (!isOpen) return null

  const handleSubmit = () => {
    if (newComment.trim()) {
      console.log('Submit comment:', newComment)
      setNewComment('')
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/50">
      <div className="flex max-h-[80vh] w-full max-w-lg flex-col rounded-t-2xl bg-white">
        {/* Modal Header */}
        <div className="flex items-center justify-between border-b border-gray-200 px-4 py-3">
          <span className="rounded bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600">
            ModalHeader
          </span>
          <button
            onClick={onClose}
            className="p-1 text-gray-400 transition-colors hover:text-gray-600"
            aria-label="닫기"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Comments List */}
        <div className="flex-1 overflow-y-auto p-4">
          {comments.map((comment) => (
            <CommentItem key={comment.id} comment={comment} />
          ))}
        </div>

        {/* Comment Input (Section 4) */}
        <div className="border-t border-gray-200 p-4">
          <div className="rounded-lg border border-gray-200 p-3">
            <div className="mb-2 flex items-center gap-2">
              <span className="font-medium text-gray-900">Section 4</span>
              <svg
                className="h-4 w-4 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                />
              </svg>
            </div>
            <input
              type="text"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="코멘트 작성"
              className="mb-3 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            <div className="flex justify-end gap-2">
              <button
                onClick={onClose}
                className="rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
              >
                취소
              </button>
              <button
                onClick={handleSubmit}
                className="rounded-lg bg-blue-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-600"
              >
                등록
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// ============================================
// ShortFormDetailPage Component
// Description: 숏폼 상세 페이지 메인 컴포넌트
// ============================================
const ShortFormDetailPage: React.FC = () => {
  const [shortForm, setShortForm] = useState<ShortFormContent>(sampleShortForm)
  const [isCommentModalOpen, setIsCommentModalOpen] = useState(false)

  // 좋아요 토글
  const handleLike = () => {
    setShortForm((prev) => ({
      ...prev,
      isLiked: !prev.isLiked,
      likeCount: prev.isLiked ? prev.likeCount - 1 : prev.likeCount + 1,
    }))
  }

  // 저장 토글
  const handleSave = () => {
    setShortForm((prev) => ({
      ...prev,
      isSaved: !prev.isSaved,
    }))
  }

  return (
    <div className="min-h-screen bg-gray-900">
      {/* ============================================ */}
      {/* Header - PC Only */}
      {/* ============================================ */}
      <header className="hidden border-b border-gray-800 bg-gray-900 lg:block">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex h-14 items-center justify-between">
            {/* Left - Label */}
            <span className="rounded bg-gray-800 px-2 py-1 text-xs font-medium text-gray-400">
              ShortFormPage
            </span>

            {/* Center - Search & Buttons */}
            <div className="flex items-center gap-3">
              <button
                className="p-2 text-gray-400 transition-colors hover:text-white"
                aria-label="검색"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
              <button className="rounded-full bg-blue-500 px-3 py-1.5 text-xs font-medium text-white transition-colors hover:bg-blue-600">
                숏폼
              </button>
              <button className="rounded-full bg-gray-700 px-3 py-1.5 text-xs font-medium text-gray-400 transition-colors hover:bg-gray-600">
                해시태그
              </button>
            </div>

            {/* Right - Icons */}
            <div className="flex items-center gap-2">
              <button
                className="p-2 text-gray-400 transition-colors hover:text-white"
                aria-label="장바구니"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </button>
              <button
                className="p-2 text-gray-400 transition-colors hover:text-white"
                aria-label="설정"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ============================================ */}
      {/* Header - Mobile Only */}
      {/* ============================================ */}
      <header className="fixed top-0 right-0 left-0 z-40 bg-transparent lg:hidden">
        <div className="flex items-center justify-between px-4 py-3">
          {/* Back Button */}
          <button
            onClick={() => window.history.back()}
            className="p-2 text-white"
            aria-label="뒤로가기"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          {/* Label */}
          <span className="rounded bg-gray-800/50 px-2 py-1 text-xs font-medium text-gray-300">
            content
          </span>

          {/* Right Icons */}
          <div className="flex items-center gap-2">
            <button className="p-2 text-white" aria-label="검색">
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
            <button className="p-2 text-white" aria-label="더보기">
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                />
              </svg>
            </button>
            <button className="p-2 text-white" aria-label="설정">
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Tab Buttons */}
        <div className="flex justify-center gap-2 pb-2">
          <button className="rounded-full bg-blue-500 px-3 py-1.5 text-xs font-medium text-white">
            숏폼
          </button>
          <button className="rounded-full bg-gray-700/50 px-3 py-1.5 text-xs font-medium text-gray-300">
            해시태그
          </button>
        </div>
      </header>

      {/* ============================================ */}
      {/* Main Content */}
      {/* ============================================ */}
      <main className="lg:flex lg:items-start lg:justify-center lg:gap-8 lg:px-4 lg:py-8">
        {/* Video Container */}
        <div className="relative lg:flex lg:gap-4">
          {/* Video Player Area */}
          <div className="relative h-screen w-full overflow-hidden bg-gray-800 lg:h-[600px] lg:w-80 lg:rounded-2xl">
            {/* Content Label */}
            <div className="absolute top-20 left-4 z-10 lg:top-4">
              <span className="rounded bg-gray-800/70 px-2 py-1 text-xs font-medium text-gray-300">
                content
              </span>
            </div>

            {/* Video Placeholder */}
            <div className="flex h-full w-full items-center justify-center">
              <span className="text-gray-500">Video Player</span>
            </div>

            {/* Navigation Arrows - PC Only */}
            <div className="absolute top-1/2 right-4 hidden -translate-y-1/2 flex-col gap-4 lg:flex">
              <button
                className="flex flex-col items-center gap-1 text-white/80 transition-colors hover:text-white"
                aria-label="이전 영상"
              >
                <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 15l7-7 7 7"
                  />
                </svg>
                <span className="text-xs">이전 영상</span>
              </button>
              <button
                className="flex flex-col items-center gap-1 text-white/80 transition-colors hover:text-white"
                aria-label="다음 영상"
              >
                <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
                <span className="text-xs">다음 영상</span>
              </button>
            </div>

            {/* Bottom Info - User & Title */}
            <div className="absolute right-0 bottom-0 left-0 bg-gradient-to-t from-black/80 to-transparent p-4">
              {/* User Info */}
              <div className="mb-2 flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-600">
                  <svg
                    className="h-4 w-4 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
                <span className="text-sm font-medium text-white">{shortForm.userName}</span>
              </div>
              {/* Title & Description */}
              <h1 className="mb-1 font-semibold text-white">{shortForm.lessonTitle}</h1>
              <p className="text-sm text-gray-300">{shortForm.lessonDescription}</p>
            </div>
          </div>

          {/* Action Buttons - Right Side (PC) / Bottom Right (Mobile) */}
          <div className="absolute right-4 bottom-32 flex flex-col items-center gap-5 lg:relative lg:right-auto lg:bottom-auto lg:gap-4 lg:pt-8">
            {/* Like */}
            <ActionButton
              icon={
                <svg
                  className="h-7 w-7"
                  fill={shortForm.isLiked ? 'currentColor' : 'none'}
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              }
              label="좋아요"
              count={shortForm.likeCount}
              isActive={shortForm.isLiked}
              onClick={handleLike}
            />

            {/* Comment */}
            <ActionButton
              icon={
                <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
              }
              label="댓글"
              count={shortForm.commentCount}
              onClick={() => setIsCommentModalOpen(true)}
            />

            {/* Save */}
            <ActionButton
              icon={
                <svg
                  className="h-7 w-7"
                  fill={shortForm.isSaved ? 'currentColor' : 'none'}
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                  />
                </svg>
              }
              label="저장"
              isActive={shortForm.isSaved}
              onClick={handleSave}
            />

            {/* Share */}
            <ActionButton
              icon={
                <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                  />
                </svg>
              }
              label="공유"
            />
          </div>
        </div>

        {/* PC Only - Right Side Info Panel */}
        <div className="hidden w-80 rounded-xl bg-yellow-100 p-4 lg:block">
          <div className="mb-4 text-sm text-gray-700">
            <p className="mb-2 font-medium">• shortFormPage</p>
            <ul className="space-y-1 text-xs text-gray-600">
              <li>- 세로형 영상을 전체 화면으로 시청</li>
              <li>- 스크롤 또는 화살표로 다음/이전 영상으로 이동</li>
              <li>- 좋아요, 댓글, 저장, 공유 기능</li>
            </ul>
          </div>
          <div className="border-t border-yellow-200 pt-3">
            <span className="text-xs font-medium text-yellow-700">참고사항</span>
          </div>
        </div>
      </main>

      {/* Right Side Actions - PC Only (Fixed Position) */}
      <div className="fixed top-1/2 right-8 hidden -translate-y-1/2 flex-col items-center gap-4 rounded-xl bg-white p-3 shadow-lg lg:flex">
        <button
          className="p-2 text-gray-600 transition-colors hover:text-gray-900"
          aria-label="좋아요"
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        </button>
        <button
          className="p-2 text-gray-600 transition-colors hover:text-gray-900"
          aria-label="추가"
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
          </svg>
        </button>
        <button
          className="p-2 text-gray-600 transition-colors hover:text-gray-900"
          aria-label="공유"
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </button>
        <button
          className="p-2 text-gray-600 transition-colors hover:text-gray-900"
          aria-label="저장"
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
            />
          </svg>
        </button>
      </div>

      {/* Comment Modal */}
      <CommentModal
        isOpen={isCommentModalOpen}
        onClose={() => setIsCommentModalOpen(false)}
        comments={sampleComments}
      />
    </div>
  )
}

export default ShortFormDetailPage
