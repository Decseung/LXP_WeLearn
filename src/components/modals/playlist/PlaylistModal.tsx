'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { X, Plus } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import PlaylistModalHeader from './PlaylistModalHeader'
import Playlist from './Playlist'
import CreatePlaylistBtn from './CreatePlaylistBtn'
import CreatePlaylistForm from './CreatePlaylistForm'

export default function PlaylistModal() {
  const [activeTab, setActiveTab] = useState('save') // 'save' or 'create'

  const pathname = usePathname()

  const isOpen = pathname.endsWith('/playlist')

  // 샘플 플레이리스트 데이터
  const existingPlaylists = [
    { id: 1, title: 'welcome JavaScript', count: 5 },
    { id: 2, title: 'python으로 주식 투자 자동화 모음', count: 5 },
  ]

  const handleActiveTab = () => {
    if (activeTab === 'save') {
      setActiveTab('create')
    } else {
      setActiveTab('save')
    }
  }

  console.log(activeTab)
  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <motion.aside
          className="fixed top-32 right-32 z-50 flex min-w-lg items-center justify-center"
          initial={{ x: '130%' }}
          animate={{ x: '0%' }}
          exit={{ x: '130%' }}
          transition={{ type: 'spring', bounce: 0, duration: 0.4 }}
        >
          {/* 모달 컨테이너 */}
          <div
            className="relative flex h-[84vh] w-full max-w-lg flex-col overflow-hidden rounded-xl border bg-white shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            {/* 저장 리스트 모달 */}
            {activeTab === 'save' && (
              <>
                <PlaylistModalHeader />
                {/* 플레이리스트 목록 */}
                <Playlist list={existingPlaylists} />

                {/* 새 플레이리스트 만들기 버튼 */}
                <CreatePlaylistBtn handleActiveTab={handleActiveTab} />
              </>
            )}

            {/* 플레이리스트 생성 모달 */}
            {activeTab === 'create' && <CreatePlaylistForm handleActiveTab={handleActiveTab} />}
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  )
}
