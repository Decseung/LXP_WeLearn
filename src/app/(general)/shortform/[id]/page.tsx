import React from 'react'
import { notFound } from 'next/navigation'
import { getShortsDetail } from '@/services/getShortsDetailService'
import ShortsContainer from '@/features/shorts/components/ShortsContainer'

interface ShortDetailPageProps {
  params: Promise<{ id: string }>
}

const ShortformDetailPage: React.FC<ShortDetailPageProps> = async ({ params }) => {
  const { id } = await params
  const data = await getShortsDetail(id)

  if (!data) {
    notFound()
  }

  return (
    <div className="relative h-dvh w-full bg-black md:h-auto md:bg-transparent">
      <section aria-labelledby="shortform-content" className="flex h-full w-full justify-center">
        {/* 버튼이 보이도록 overflow-visible 영역 추가 */}
        <div className="relative">
          <div className="relative h-dvh w-full bg-black md:aspect-[9/16] md:h-auto md:max-w-[400px] md:rounded-xl">
            <ShortsContainer data={data} />
          </div>
        </div>
      </section>
    </div>
  )
}

export default ShortformDetailPage
