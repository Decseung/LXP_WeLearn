import ShortsPlaylist from '@/features/mypage/playlists/ShortsPlaylist'

export default async function PlaylistsPage() {
  const [shortsPlaylists] = await Promise.all([
    fetch('http://localhost:4000/shortsPlaylists').then((res) => res.json()), // Mock server
  ])

  return (
    <div>
      <ShortsPlaylist playlists={shortsPlaylists} />
    </div>
  )
}
