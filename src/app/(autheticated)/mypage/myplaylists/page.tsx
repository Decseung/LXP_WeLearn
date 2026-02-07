import PlaylistPageWrapper from '@/features/playlists/PlaylistPageWrapper'
import { clientApi } from '@/lib/utils/clientApiUtils'
import { ApiResponse } from '@/types/api/api'
import { PlaylistBase, PlayListCard } from '@/types/playlist/playlist'

export default async function MyPlaylistsPage() {
  const [initialPlaylists] = await Promise.all([
    fetch('http://localhost:4000/shortsPlaylists').then((res) => res.json()), // Mock server
  ])
  return <PlaylistPageWrapper initialPlaylists={initialPlaylists} />
}
