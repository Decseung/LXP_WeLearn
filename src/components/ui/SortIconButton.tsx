import { TextAlignStart } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

export default function SortIconButton() {
  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <TextAlignStart className="cursor-pointer text-gray-600" size={24} />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="flex flex-col">
        <DropdownMenuItem>
          <button className="w-full px-4 py-2 text-left text-sm font-medium text-black hover:bg-gray-100">
            최신순
          </button>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <button className="w-full px-4 py-2 text-left text-sm font-medium text-black hover:bg-gray-100">
            오래된순
          </button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
