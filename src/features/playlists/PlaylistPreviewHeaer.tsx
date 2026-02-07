'use client'
import { Button } from '@/components/ui/Button'
import { useAuth } from '@/shared/store/auth/auth.store'
import { Playlist } from '@/types/playlist/playlist'
import { SquarePen, X } from 'lucide-react'
import { useState } from 'react'

interface PlaylistPreviewHeaderProps {
  playlistItem: Playlist
}

export default function PlaylistPreviewHeader({ playlistItem }: PlaylistPreviewHeaderProps) {
  const userData = useAuth((state) => state.auth)
  const test = userData?.userId === playlistItem.owner.id
  const isOwner = true

  const [editMode, setEditMode] = useState(false)
  const [title, setTitle] = useState(playlistItem.title)
  const [description, setDescription] = useState(playlistItem.description ?? '')

  function handleCancel() {
    setTitle(playlistItem.title)
    setDescription(playlistItem.description ?? '')
    setEditMode(false)
  }

  return (
    <form className="w-full max-w-xl">
      <input type="hidden" name="playlistId" value={playlistItem.id} />

      {editMode ? (
        <div className="flex flex-col gap-4 rounded-xl border border-gray-50 bg-gray-50 p-5">
          <div className="flex flex-col gap-3">
            <div className="relative">
              <input
                name="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full rounded-lg bg-white px-3 py-2.5 pr-9 text-sm font-normal text-gray-900 transition-colors outline-none placeholder:text-gray-400 focus:bg-white focus:ring-2 focus:ring-black"
                placeholder="제목을 입력하세요"
                autoFocus
              />
              {title && (
                <button
                  type="button"
                  onClick={() => setTitle('')}
                  className="absolute top-1/2 right-2 -translate-y-1/2 rounded-full p-0.5 text-gray-400 transition-colors hover:bg-gray-200 hover:text-gray-600"
                >
                  <X className="size-4" />
                </button>
              )}
            </div>

            <textarea
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={3}
              className="w-full resize-none rounded-lg bg-white px-3 py-2.5 text-sm text-gray-700 transition-colors outline-none placeholder:text-gray-400 focus:bg-white focus:ring-2 focus:ring-black"
              placeholder="설명을 입력하세요"
            />
          </div>
          <div className="flex items-center justify-end gap-2">
            <Button type="button" variant="outline" size="sm" onClick={handleCancel}>
              {/* <X className="size-4" /> */}
              닫기
            </Button>
            <Button type="submit" variant="accent" size="sm">
              {/* <Check className="size-4" /> */}
              수정
            </Button>
          </div>
        </div>
      ) : (
        <div className="group flex items-start justify-between gap-4">
          <div className="flex flex-col gap-1">
            <h1 className="text-2xl font-black text-gray-900 uppercase">{title}</h1>
            {playlistItem.description && (
              <p className="text-sm leading-relaxed text-gray-500">{description}</p>
            )}
          </div>
          {isOwner && (
            <Button
              type="button"
              variant="ghost"
              size="icon-sm"
              className="rounded-full"
              onClick={() => setEditMode(true)}
            >
              <SquarePen className="size-4" />
            </Button>
          )}
        </div>
      )}
    </form>
  )
}
