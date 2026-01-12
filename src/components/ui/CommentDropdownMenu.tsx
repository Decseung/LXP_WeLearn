import { Ellipsis, Pencil, Trash2 } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './dropdown-menu'

interface CommentDropdownMenuProps {
  setIsEditMode: React.Dispatch<React.SetStateAction<number | null>>
  commentId: number
  handleDeleteMode: () => void
  setDeleteMode: (mode: 'comment' | 'reply') => void
}

export default function CommentDropDownMenu({
  setIsEditMode,
  handleDeleteMode,
  commentId,
}: CommentDropdownMenuProps) {
  return (
    <button className="rounded-full p-1 text-gray-400 transition-colors hover:bg-gray-100">
      <DropdownMenu modal={false}>
        <DropdownMenuTrigger asChild>
          <Ellipsis size={18} />
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="end"
          className="flex min-w-25 flex-col items-center justify-center gap-1"
        >
          <DropdownMenuItem
            className="w-full cursor-pointer justify-center gap-4 p-1"
            onClick={() => {
              setIsEditMode(commentId)
            }}
          >
            <Pencil />
            <span>수정</span>
          </DropdownMenuItem>
          <hr className="w-full" />
          <DropdownMenuItem
            className="w-full cursor-pointer justify-center gap-4 p-1 text-red-600"
            onClick={() => {
              handleDeleteMode()
            }}
          >
            <Trash2 color="#fb2c36" />
            <span className="text-red-600">삭제</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </button>
  )
}
