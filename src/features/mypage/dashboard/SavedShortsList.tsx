import ShortsCard from './ShortsCard'

interface SavedPlaylist {
  id: string
  visibility: 'public' | 'private'
  shortsCount: number
  thumbnailUrl: string
  title: string
  category: string
  progress: number
}

interface SavedShortsListProps {
  playlists: SavedPlaylist[]
}

export default function SavedShortsList({ playlists }: SavedShortsListProps) {
  return (
    <section>
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-lg font-bold text-gray-900 uppercase">Saved Shorts</h2>
      </div>

      <div className="mb-8 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
        {playlists.map((playlist) => (
          <ShortsCard
            key={playlist.id}
            variant="saved"
            visibility={playlist.visibility}
            shortsCount={playlist.shortsCount}
            thumbnailUrl={playlist.thumbnailUrl}
            title={playlist.title}
            category={playlist.category}
            progress={playlist.progress}
          />
        ))}
      </div>
    </section>
  )
}
