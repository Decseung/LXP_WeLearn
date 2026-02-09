import PlaylistModal from '@/features/modals/playlist/PlaylistModal'
import { PlaylistApi } from '@/services/playlist/playlist.service'

export default async function PlaylistModalPage() {
  const initialPlaylistData = await PlaylistApi.getUserPlaylist({ page: 0, size: 10 })
  console.log(initialPlaylistData)
  return <PlaylistModal initialPlaylistData={initialPlaylistData.data ?? []} />
}
