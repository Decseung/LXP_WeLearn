import { TextAlignStart } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Button } from './Button'

export default function SortIconButton() {
  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="rounded-full [&_svg]:h-auto! [&_svg]:w-auto!"
          size="icon-lg"
        >
          <TextAlignStart className="cursor-pointer text-gray-600" size={24} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="flex flex-col">
        <DropdownMenuItem className="cursor-pointer">최신순</DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer">오래된순</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
