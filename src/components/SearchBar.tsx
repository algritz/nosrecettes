import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Search, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/command';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SearchBarProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  selectedCategories: string[];
  onCategoriesChange: (categories: string[]) => void;
  categories: string[];
  onClearFilters: () => void;
}

export const SearchBar = ({
  searchTerm,
  onSearchChange,
  selectedCategories,
  onCategoriesChange,
  categories,
  onClearFilters
}: SearchBarProps) => {
  const hasFilters = selectedCategories.length > 0 || searchTerm !== '';

  const toggleCategory = (category: string) => {
    if (selectedCategories.includes(category)) {
      onCategoriesChange(selectedCategories.filter(c => c !== category));
    } else {
      onCategoriesChange([...selectedCategories, category]);
    }
  };

  const removeCategory = (category: string) => {
    onCategoriesChange(selectedCategories.filter(c => c !== category));
  };

  return (
    <div className="space-y-4">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
        <Input
          placeholder="Rechercher par nom, ingrédient ou tag..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="pl-10"
        />
      </div>
      
      <div className="flex flex-wrap gap-3 items-center">
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" className="justify-start">
              Catégories
              {selectedCategories.length > 0 && (
                <Badge variant="secondary" className="ml-2">
                  {selectedCategories.length}
                </Badge>
              )}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-64 p-0" align="start">
            <Command>
              <CommandInput placeholder="Rechercher une catégorie..." />
              <CommandList>
                <CommandEmpty>Aucune catégorie trouvée.</CommandEmpty>
                <CommandGroup>
                  {categories.map((category) => (
                    <CommandItem
                      key={category}
                      onSelect={() => toggleCategory(category)}
                    >
                      <Check
                        className={cn(
                          "mr-2 h-4 w-4",
                          selectedCategories.includes(category) ? "opacity-100" : "opacity-0"
                        )}
                      />
                      {category}
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>

        {hasFilters && (
          <Button variant="outline" onClick={onClearFilters} className="flex items-center gap-2">
            <X className="w-4 h-4" />
            Effacer les filtres
          </Button>
        )}
      </div>

      {/* Selected categories display */}
      {selectedCategories.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {selectedCategories.map((category) => (
            <Badge key={category} variant="default" className="flex items-center gap-1">
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
  );
};