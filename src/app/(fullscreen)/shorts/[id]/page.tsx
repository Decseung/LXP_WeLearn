import { notFound } from 'next/navigation'
import ShortsContainer from '@/features/shorts/components/ShortsContainer'
import { playlistApi } from '@/services/playlist/playlist.service'
import { getShortsDetailList } from '@/services/shorts/getShortsDetailList'

interface ShortDetailPageProps {
  params: Promise<{ id: string }>
  searchParams?: { [key: string]: string | string[] | undefined }
}

interface ShortsData {
  shortsList: any[] // 실제 데이터 타입으로 바꾸세요
  initialIndex: number
}

export default async function ShortformDetailPage({ params, searchParams }: ShortDetailPageProps) {
  const { id } = await params
  const sp = await searchParams
  const { request, playlistId } = sp || {}
  const isPlaylist = request === 'playlists' && playlistId ? true : false

  let data: ShortsData | null = null

  if (isPlaylist) {
    // axios-style response는 data 안에 실제 데이터가 있음
    const res = await playlistApi.getPlaylistItem(Number(playlistId))
    data = {
      shortsList: res.data.items ?? [], // API 실제 필드명에 맞게 수정
      initialIndex: 0,
    }
  } else {
    const res = await getShortsDetailList(id)
    data = {
      shortsList: res?.shortsList ?? [], // API 실제 필드명에 맞게 수정
      initialIndex: 0,
    }
  }

  if (!data || data.shortsList.length === 0) {
    notFound()
  }

  return (
    <div className="relative h-dvh w-full md:h-full">
      <section
        aria-labelledby="shortform-content"
        className="flex h-dvh w-full items-stretch md:h-full"
      >
        <ShortsContainer
          shortsList={data.shortsList}
          initialIndex={data.initialIndex}
          isPlaylist={isPlaylist}
        />
      </section>
    </div>
  )
}
