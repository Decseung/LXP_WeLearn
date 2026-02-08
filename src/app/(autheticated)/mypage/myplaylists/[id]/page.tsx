import PlaylistCard from '@/features/playlists/PlaylistCard'
import PlaylistContainer from '@/features/playlists/PlaylistContainer'
import PlaylistPreview from '@/features/playlists/PlaylistPreview'
import PlaylistRightHeader from '@/features/playlists/PlaylistRightHeader'
import { clientApi } from '@/lib/utils/clientApiUtils'
import { ApiResponse } from '@/types/api/api'
import { PlaylistInfo } from '@/types/playlist/playlist'

interface MyPlaylistsPageProps {
  params: Promise<{ id: string }>
}

export default async function MyPlaylistsPage({ params }: MyPlaylistsPageProps) {
  const { id } = await params

  const playlistItem = await clientApi.get<ApiResponse<PlaylistInfo>>(`/api/playlists/${id}`)
  return (
    <div className="h-full w-full">
      <div className="flex flex-col gap-8 lg:flex-row">
        <PlaylistContainer playlistItem={playlistItem.data} />
      </div>
    </div>
  )
}
