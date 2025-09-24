import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/command';
import { Check, X, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CategorySelectorProps {
  selectedCategories: string[];
  onCategoriesChange: (categories: string[]) => void;
  availableCategories: string[];
  placeholder?: string;
  className?: string;
}

export const CategorySelector = ({
  selectedCategories,
  onCategoriesChange,
  availableCategories,
  placeholder = "Sélectionner des catégories...",
  className
}: CategorySelectorProps) => {
  const [open, setOpen] = useState(false);

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
    <div className={className}>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-full justify-between"
          >
            {selectedCategories.length === 0 ? (
              placeholder
            ) : (
              `${selectedCategories.length} catégorie${selectedCategories.length > 1 ? 's' : ''} sélectionnée${selectedCategories.length > 1 ? 's' : ''}`
            )}
            <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-full p-0" align="start">
          <Command>
            <CommandInput placeholder="Rechercher une catégorie..." />
            <CommandList>
              <CommandEmpty>Aucune catégorie trouvée.</CommandEmpty>
              <CommandGroup>
                {availableCategories.map((category) => (
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

      {/* Selected categories display */}
      {selectedCategories.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-2">
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