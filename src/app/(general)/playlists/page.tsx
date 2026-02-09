import PlaylistPageCollection from '@/features/playlists/PlaylistPageCollection'

export default async function PlaylistsPage() {
  const [initialPlaylists] = await Promise.all([
    fetch('http://localhost:4000/api/v1/playlists/public').then((res) => res.json()), // Mock server
  ])
  return (
    <div className="w-full">
      <PlaylistPageCollection initialPlaylists={initialPlaylists.data.content} />
    </div>
  )
}
