'use client'
import { useState } from 'react'
import CreatePlaylistFormHeader from './CreatePlaylistFormHeader'
import CreatePlaylistFormInput from './CreatePlaylistFormInput'
import CreatePlaylistFormSubmitBtn from './CreatePlaylistFormSubmitBtn'

interface CratePlaylistFormProps {
  handleActiveTab: () => void
  id: string
}
export default function CratePlaylistForm({ handleActiveTab, id }: CratePlaylistFormProps) {
  const [playlistTitle, setPlaylistTitle] = useState('')

  return (
    <>
      <CreatePlaylistFormHeader id={id} />
      <div className="space-y-6 px-6 py-6">
        <CreatePlaylistFormInput
          playlistTitle={playlistTitle}
          setPlaylistTitle={setPlaylistTitle}
        />
      </div>
      <CreatePlaylistFormSubmitBtn
        playlistTitle={playlistTitle}
        handleActiveTab={handleActiveTab}
      />
    </>
  )
}
