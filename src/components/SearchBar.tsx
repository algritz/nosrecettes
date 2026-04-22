import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Search, X } from 'lucide-react'

interface SearchBarProps {
  searchTerm: string
  onSearchChange: (value: string) => void
  selectedCategories: string[]
  onCategoriesChange: (categories: string[]) => void
}

export const SearchBar = ({
  searchTerm,
  onSearchChange,
  selectedCategories,
  onCategoriesChange,
}: SearchBarProps): React.ReactElement => {
  const removeCategory = (category: string): void => {
    onCategoriesChange(selectedCategories.filter((c) => c !== category))
  }

  return (
    <div className="space-y-3">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
        <Input
          data-testid="search-input"
          placeholder="Rechercher par nom, ingrédient ou tag..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="pl-10"
        />
      </div>

      {selectedCategories.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {selectedCategories.map((category) => (
            <Badge
              key={category}
              variant="default"
              className="flex items-center gap-1"
            >
              {category}
              <X
                className="w-3 h-3 cursor-pointer hover:text-destructive"
                onClick={() => removeCategory(category)}
              />
            </Badge>
          ))}
        </div>
      )}
    </div>
  )
}
