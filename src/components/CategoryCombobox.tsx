import { useState } from 'react'
import { Button } from '@/components/ui/button'

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command'
import { Check, ChevronsUpDown, Plus } from 'lucide-react'
import { cn } from '@/lib/utils'

interface CategoryComboboxProps {
  value: string
  onValueChange: (value: string) => void
  categories: string[]
  onAddCategory?: (category: string) => void
  placeholder?: string
  className?: string
}

export const CategoryCombobox = ({
  value,
  onValueChange,
  categories,
  onAddCategory,
  placeholder = 'Sélectionner une catégorie...',
  className,
}: CategoryComboboxProps) => {
  const [open, setOpen] = useState(false)
  const [searchValue, setSearchValue] = useState('')

  // Ensure categories is an array and filter out any undefined/null values
  const safeCategories = Array.isArray(categories)
    ? categories.filter((cat) => cat && typeof cat === 'string')
    : []

  // Safe search value - ensure it's always a string
  const safeSearchValue = searchValue || ''

  const filteredCategories = safeCategories.filter((category) => {
    if (!category || typeof category !== 'string') return false
    if (!safeSearchValue) return true
    return category.toLowerCase().includes(safeSearchValue.toLowerCase())
  })

  const exactMatch = safeCategories.find((category) => {
    if (!category || typeof category !== 'string' || !safeSearchValue)
      return false
    return category.toLowerCase() === safeSearchValue.toLowerCase()
  })

  const handleAddCategory = () => {
    const trimmedSearch = safeSearchValue.trim()
    if (trimmedSearch && !exactMatch && onAddCategory) {
      onAddCategory(trimmedSearch)
      onValueChange(trimmedSearch)
      setSearchValue('')
      setOpen(false)
    }
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className={cn('justify-between', className)}
        >
          {value || placeholder}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-0" align="start">
        <Command>
          <CommandInput
            placeholder="Rechercher ou créer une catégorie..."
            value={safeSearchValue}
            onValueChange={(searchVal) => setSearchValue(searchVal || '')}
          />
          <CommandList>
            {filteredCategories.length === 0 && !safeSearchValue && (
              <CommandEmpty>Aucune catégorie trouvée.</CommandEmpty>
            )}

            {filteredCategories.length === 0 &&
              safeSearchValue &&
              !exactMatch &&
              onAddCategory && (
                <CommandGroup>
                  <CommandItem
                    onSelect={handleAddCategory}
                    className="text-primary"
                  >
                    <Plus className="mr-2 h-4 w-4" />
                    Créer "{safeSearchValue}"
                  </CommandItem>
                </CommandGroup>
              )}

            {filteredCategories.length > 0 && (
              <CommandGroup>
                {filteredCategories.map((category) => (
                  <CommandItem
                    key={category}
                    onSelect={() => {
                      onValueChange(category === value ? '' : category)
                      setOpen(false)
                      setSearchValue('')
                    }}
                  >
                    <Check
                      className={cn(
                        'mr-2 h-4 w-4',
                        value === category ? 'opacity-100' : 'opacity-0',
                      )}
                    />
                    {category}
                  </CommandItem>
                ))}
              </CommandGroup>
            )}

            {safeSearchValue &&
              !exactMatch &&
              onAddCategory &&
              filteredCategories.length > 0 && (
                <CommandGroup>
                  <CommandItem
                    onSelect={handleAddCategory}
                    className="text-primary border-t"
                  >
                    <Plus className="mr-2 h-4 w-4" />
                    Créer "{safeSearchValue}"
                  </CommandItem>
                </CommandGroup>
              )}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
