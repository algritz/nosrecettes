import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Plus, Minus, GripVertical, FolderPlus } from 'lucide-react'
import { InstructionSection } from '@/types/recipe'

interface SectionedInstructionsProps {
  sections: InstructionSection[]
  onChange: (sections: InstructionSection[]) => void
}

export const SectionedInstructions = ({
  sections,
  onChange,
}: SectionedInstructionsProps): React.ReactElement => {
  const addSection = (): void => {
    onChange([...sections, { title: '', steps: [''] }])
  }

  const removeSection = (sectionIndex: number): void => {
    onChange(sections.filter((_, i) => i !== sectionIndex))
  }

  const updateSectionTitle = (sectionIndex: number, title: string): void => {
    const newSections = [...sections]
    newSections[sectionIndex].title = title
    onChange(newSections)
  }

  const addInstruction = (sectionIndex: number): void => {
    const newSections = [...sections]
    newSections[sectionIndex].steps.push('')
    onChange(newSections)
  }

  const removeInstruction = (
    sectionIndex: number,
    stepIndex: number,
  ): void => {
    const newSections = [...sections]
    newSections[sectionIndex].steps = newSections[sectionIndex].steps.filter(
      (_, i) => i !== stepIndex,
    )
    onChange(newSections)
  }

  const updateInstruction = (
    sectionIndex: number,
    stepIndex: number,
    value: string,
  ): void => {
    const newSections = [...sections]
    newSections[sectionIndex].steps[stepIndex] = value
    onChange(newSections)
  }

  // Calculate step numbers across all sections
  const getStepNumber = (sectionIndex: number, stepIndex: number): number => {
    let stepNumber = 1
    for (let i = 0; i < sectionIndex; i++) {
      stepNumber += sections[i].steps.length
    }
    return stepNumber + stepIndex
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
                placeholder={`Section ${sectionIndex + 1} (ex: Préparation des keftas)`}
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
              {section.steps.map((step, stepIndex) => (
                <div key={stepIndex} className="flex gap-2">
                  <span className="flex-shrink-0 w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium mt-2">
                    {getStepNumber(sectionIndex, stepIndex)}
                  </span>
                  <Textarea
                    value={step}
                    onChange={(e) =>
                      updateInstruction(sectionIndex, stepIndex, e.target.value)
                    }
                    placeholder="Décrivez cette étape..."
                    rows={2}
                    className="flex-1"
                  />
                  {section.steps.length > 1 && (
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={() => removeInstruction(sectionIndex, stepIndex)}
                      className="mt-2"
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
                onClick={() => addInstruction(sectionIndex)}
                className="w-full"
              >
                <Plus className="w-4 h-4 mr-1" />
                Ajouter une étape
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
