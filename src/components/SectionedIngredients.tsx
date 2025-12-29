import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Plus, Minus, GripVertical, FolderPlus } from 'lucide-react'
import { IngredientSection } from '@/types/recipe'

interface SectionedIngredientsProps {
  sections: IngredientSection[]
  onChange: (sections: IngredientSection[]) => void
}

export const SectionedIngredients = ({
  sections,
  onChange,
}: SectionedIngredientsProps) => {
  const addSection = () => {
    onChange([...sections, { title: '', items: [''] }])
  }

  const removeSection = (sectionIndex: number) => {
    onChange(sections.filter((_, i) => i !== sectionIndex))
  }

  const updateSectionTitle = (sectionIndex: number, title: string) => {
    const newSections = [...sections]
    newSections[sectionIndex].title = title
    onChange(newSections)
  }

  const addIngredient = (sectionIndex: number) => {
    const newSections = [...sections]
    newSections[sectionIndex].items.push('')
    onChange(newSections)
  }

  const removeIngredient = (sectionIndex: number, itemIndex: number) => {
    const newSections = [...sections]
    newSections[sectionIndex].items = newSections[sectionIndex].items.filter(
      (_, i) => i !== itemIndex,
    )
    onChange(newSections)
  }

  const updateIngredient = (
    sectionIndex: number,
    itemIndex: number,
    value: string,
  ) => {
    const newSections = [...sections]
    newSections[sectionIndex].items[itemIndex] = value
    onChange(newSections)
  }

  return (
    <div className="space-y-4">
      {sections.map((section, sectionIndex) => (
        <Card key={sectionIndex} className="border-l-4 border-l-primary">
          <CardHeader className="pb-3">
            <div className="flex items-center gap-2">
              <GripVertical className="w-4 h-4 text-muted-foreground" />
              <Input
                value={section.title}
                onChange={(e) =>
                  updateSectionTitle(sectionIndex, e.target.value)
                }
                placeholder={`Section ${sectionIndex + 1} (ex: Pour les keftas)`}
                className="font-medium"
              />
              {sections.length > 1 && (
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={() => removeSection(sectionIndex)}
                >
                  <Minus className="w-4 h-4" />
                </Button>
              )}
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {section.items.map((item, itemIndex) => (
                <div key={itemIndex} className="flex gap-2">
                  <Input
                    value={item}
                    onChange={(e) =>
                      updateIngredient(sectionIndex, itemIndex, e.target.value)
                    }
                    placeholder="Ex: 500g de bœuf haché"
                    className="flex-1"
                  />
                  {section.items.length > 1 && (
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={() => removeIngredient(sectionIndex, itemIndex)}
                    >
                      <Minus className="w-4 h-4" />
                    </Button>
                  )}
                </div>
              ))}
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() => addIngredient(sectionIndex)}
                className="w-full"
              >
                <Plus className="w-4 h-4 mr-1" />
                Ajouter un ingrédient
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}

      <Button
        type="button"
        variant="outline"
        onClick={addSection}
        className="w-full"
      >
        <FolderPlus className="w-4 h-4 mr-2" />
        Ajouter une section
      </Button>
    </div>
  )
}
