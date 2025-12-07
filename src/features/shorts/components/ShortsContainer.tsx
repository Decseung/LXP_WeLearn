'use client'

import { useRouter } from 'next/navigation'
import { motion, AnimatePresence, PanInfo } from 'framer-motion'
import { useState } from 'react'
import { ShortsDetailResponse } from '@/types/shortform'
import ShortsPlayer from './ShortsPlayer'
import ShortsCreateInfo from './ShortsCreateInfo'
import ShortsActionBar from './ShortsActionBar'
import ShortsNavigationButtons from './ShortsNavigationButtons'

interface ShortsContainerProps {
  data: ShortsDetailResponse
}

type SlideDirection = 'up' | 'down' | null

function ShortsContainer({ data }: ShortsContainerProps) {
  const router = useRouter()
  const [isNavigating, setIsNavigating] = useState(false)
  const [slideDirection, setSlideDirection] = useState<SlideDirection>(null)

  const { shorts, prevId, nextId } = data

  const navigateTo = (id: number | null, direction: SlideDirection) => {
    if (!id || isNavigating) return

    setIsNavigating(true)
    setSlideDirection(direction)

    // 애니메이션 후 페이지 이동
    setTimeout(() => {
      router.push(`/shortform/${id}`)
    }, 200)
  }

  const handleDragEnd = (_: any, info: PanInfo) => {
    const threshold = 50
    const velocity = info.velocity.y
    const offset = info.offset.y

    // 위로 스와이프 → 다음 영상
    if (offset < -threshold || velocity < -500) {
      navigateTo(nextId, 'up')
    }
    // 아래로 스와이프 → 이전 영상
    else if (offset > threshold || velocity > 500) {
      navigateTo(prevId, 'down')
    }
  }

  const slideVariants = {
    initial: (direction: SlideDirection) => ({
      y: direction === 'up' ? '100%' : direction === 'down' ? '-100%' : 0,
      opacity: 0,
    }),
    animate: {
      y: 0,
      opacity: 1,
      transition: { type: 'tween', duration: 0.3 },
    },
    exit: (direction: SlideDirection) => ({
      y: direction === 'up' ? '-100%' : direction === 'down' ? '100%' : 0,
      opacity: 0,
      transition: { type: 'tween', duration: 0.2 },
    }),
  }

  return (
    <div className="relative h-full w-full">
      {/* PC 네비게이션 버튼 */}
      <ShortsNavigationButtons
        onPrev={() => navigateTo(prevId, 'up')}
        onNext={() => navigateTo(nextId, 'down')}
        hasPrev={!!prevId}
        hasNext={!!nextId}
      />

      {/* 메인 콘텐츠 */}
      <AnimatePresence mode="wait" custom={slideDirection}>
        <motion.div
          key={shorts.shortsId}
          custom={slideDirection}
          variants={slideVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          drag="y"
          dragConstraints={{ top: 0, bottom: 0 }}
          dragElastic={0.2}
          onDragEnd={handleDragEnd}
          className="relative h-full w-full cursor-grab active:cursor-grabbing"
        >
          <ShortsPlayer videoUrl={shorts.videoUrl} thumbnailUrl={shorts.thumbnailUrl} />

          <ShortsCreateInfo
            uploader={shorts.uploader}
            title={shorts.title}
            description={shorts.description}
          />

          <ShortsActionBar />
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export default ShortsContainer
