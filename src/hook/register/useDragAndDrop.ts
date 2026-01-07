import { useCallback } from 'react'

interface UseDragAndDropOptions {
  onDragStateChange?: (isDragging: boolean) => void
  onFileDrop: (file: File) => void
}

export default function useDragAndDrop({
  onDragStateChange,
  onFileDrop,
}: UseDragAndDropOptions) {
  const handleDragEnter = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault()
      e.stopPropagation()
      onDragStateChange?.(true)
    },
    [onDragStateChange]
  )

  const handleDragLeave = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault()
      e.stopPropagation()
      onDragStateChange?.(false)
    },
    [onDragStateChange]
  )

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
  }, [])

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault()
      e.stopPropagation()
      onDragStateChange?.(false)

      const file = e.dataTransfer.files?.[0]
      if (file) {
        onFileDrop(file)
      }
    },
    [onDragStateChange, onFileDrop]
  )

  return {
    handleDragEnter,
    handleDragLeave,
    handleDragOver,
    handleDrop,
  }
}
