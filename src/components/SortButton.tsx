import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { ArrowUpDown, Check } from 'lucide-react'

export type SortOption =
  | 'alphabetical'
  | 'date-newest'
  | 'date-oldest'
  | 'has-images'
  | 'no-images'
  | 'category'

interface SortButtonProps {
  currentSort: SortOption
  onSortChange: (sort: SortOption) => void
}

const sortOptions: { value: SortOption; label: string }[] = [
  { value: 'alphabetical', label: 'Alphabétique (A-Z)' },
  { value: 'date-newest', label: 'Plus récentes' },
  { value: 'date-oldest', label: 'Plus anciennes' },
  { value: 'has-images', label: 'Avec images' },
  { value: 'no-images', label: 'Sans images' },
  { value: 'category', label: 'Par catégorie' },
]

export const SortButton = ({
  currentSort,
  onSortChange,
}: SortButtonProps): React.ReactElement => {
  const currentLabel =
    sortOptions.find((opt) => opt.value === currentSort)?.label ||
    'Alphabétique (A-Z)'

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="w-full sm:w-auto">
          <ArrowUpDown className="w-4 h-4 mr-2" />
          Tri: {currentLabel}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        {sortOptions.map((option) => (
          <DropdownMenuItem
            key={option.value}
            onClick={() => onSortChange(option.value)}
            className="cursor-pointer"
          >
            <span className="flex-1">{option.label}</span>
            {currentSort === option.value && (
              <Check className="w-4 h-4 ml-2" />
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
