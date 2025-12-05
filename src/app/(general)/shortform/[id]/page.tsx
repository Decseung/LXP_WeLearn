import React from 'react'
import { notFound } from 'next/navigation'
import ShortsActionBar from '@/features/shorts/components/ShortsActionBar'
import ShortsCreateInfo from '@/features/shorts/components/ShortsCreateInfo'
import ShortsPlayer from '@/features/shorts/components/ShortsPlayer'
import { ShortsDetail } from '@/features/shorts/types'

interface ShortDetailPageProps {
  params: Promise<{ id: string }>
}

async function getShortsDetail(id: string): Promise<ShortsDetail | null> {
  try {
    const response = await fetch(`http://localhost:4000/shorts/${id}`, {
      cache: 'no-store',
    })

    if (!response.ok) {
      return null
    }

    return response.json()
  } catch (error) {
    console.error('데이터 불러오기 실패:', error)
    return null
  }
}

const ShortformDetailPage: React.FC<ShortDetailPageProps> = async ({ params }) => {
  const { id } = await params
  const shorts = await getShortsDetail(id)

  if (!shorts) {
    notFound()
  }

  return (
    <div className="relative h-dvh w-full bg-black md:h-auto md:bg-transparent">
      <section aria-labelledby="shortform-content" className="flex h-full w-full justify-center">
        {/* 메인 콘텐츠: 비디오 */}
        <div className="relative h-full w-full overflow-hidden bg-black md:aspect-[9/16] md:max-w-[400px] md:rounded-xl">
          <ShortsPlayer videoUrl={shorts.videoUrl} thumbnailUrl={shorts.thumbnailUrl} />

          {/* Creator Info: 영상 위 오버레이 */}
          <ShortsCreateInfo
            uploader={shorts.uploader}
            title={shorts.title}
            description={shorts.description}
          />

          {/* 우측 액션 버튼 그룹 */}
          <ShortsActionBar />
        </div>
      </section>
    </div>
  )
}

export default ShortformDetailPage
