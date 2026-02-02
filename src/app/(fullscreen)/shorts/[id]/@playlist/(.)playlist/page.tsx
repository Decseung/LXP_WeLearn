import PlaylistModal from '@/features/modals/playlist/PlaylistModal'
import { PlaylistApi } from '@/services/playlist/playlist.service'

export default function PlaylistModalPage() {
  const initialPlaylistData = PlaylistApi.getUserPlaylist({ page: 0, size: 10 })
  console.log(initialPlaylistData)
  return <PlaylistModal />
}
