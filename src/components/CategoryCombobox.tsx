import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/command';
import { Check, ChevronsUpDown, Plus } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CategoryComboboxProps {
  value: string;
  onValueChange: (value: string) => void;
  categories: string[];
  onAddCategory?: (category: string) => void;
  placeholder?: string;
  className?: string;
}

export const CategoryCombobox = ({
  value,
  onValueChange,
  categories,
  onAddCategory,
  placeholder = "Sélectionner une catégorie...",
  className
}: CategoryComboboxProps) => {
  const [open, setOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  const filteredCategories = categories.filter(category =>
    category && searchValue ? category.toLowerCase().includes(searchValue.toLowerCase()) : true
  );

  const exactMatch = categories.find(category => 
    category && searchValue ? category.toLowerCase() === searchValue.toLowerCase() : false
  );

  const handleAddCategory = () => {
    if (searchValue && searchValue.trim() && !exactMatch && onAddCategory) {
      const newCategory = searchValue.trim();
      onAddCategory(newCategory);
      onValueChange(newCategory);
      setSearchValue('');
      setOpen(false);
    }
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className={cn("justify-between", className)}
        >
          {value || placeholder}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-0" align="start">
        <Command>
          <CommandInput 
            placeholder="Rechercher ou créer une catégorie..." 
            value={searchValue || ''}
            onValueChange={(value) => setSearchValue(value || '')}
          />
          <CommandList>
            {filteredCategories.length === 0 && !searchValue && (
              <CommandEmpty>Aucune catégorie trouvée.</CommandEmpty>
            )}
            
            {filteredCategories.length === 0 && searchValue && !exactMatch && onAddCategory && (
              <CommandGroup>
                <CommandItem onSelect={handleAddCategory} className="text-primary">
                  <Plus className="mr-2 h-4 w-4" />
                  Créer "{searchValue}"
                </CommandItem>
              </CommandGroup>
            )}
            
            {filteredCategories.length > 0 && (
              <CommandGroup>
                {filteredCategories.map((category) => (
                  <CommandItem
                    key={category}
                    onSelect={() => {
                      onValueChange(category === value ? '' : category);
                      setOpen(false);
                      setSearchValue('');
                    }}
                  >
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        value === category ? "opacity-100" : "opacity-0"
                      )}
                    />
                    {category}
                  </CommandItem>
                ))}
              </CommandGroup>
            )}
            
            {searchValue && !exactMatch && onAddCategory && filteredCategories.length > 0 && (
              <CommandGroup>
                <CommandItem onSelect={handleAddCategory} className="text-primary border-t">
                  <Plus className="mr-2 h-4 w-4" />
                  Créer "{searchValue}"
                </CommandItem>
              </CommandGroup>
            )}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};