import { AlertTriangle, Check, CheckCircle, Copy, FileText } from 'lucide-react'
import { useState } from 'react'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Textarea } from '@/components/ui/textarea'
import type {
  IngredientSection,
  InstructionSection,
  TimeRange,
} from '@/types/recipe'
import { formatTime } from '@/utils/timeFormat'
import { validateTimeRange } from '@/utils/timeUtils'
import { showError, showSuccess } from '@/utils/toast'

interface JSONRecipe {
  title: string
  description?: string
  categories?: string[]
  prepTime?: TimeRange
  cookTime?: TimeRange
  marinatingTime?: TimeRange
  servings?: number
  difficulty?: 'Facile' | 'Moyen' | 'Difficile'
  ingredients: string[] | IngredientSection[]
  instructions: string[] | InstructionSection[]
  tags?: string[]
  accompaniment?: string
  wine?: string
  source?: string
  notes?: string
}

interface JSONImporterProps {
  onImportSuccess: (recipe: JSONRecipe) => void
  onClose: () => void
}

/**
 * Parse time field from JSON - supports both old (number) and new (TimeRange) formats
 */
const parseTimeField = (
  value: unknown,
  fieldName: string,
): TimeRange | undefined => {
  if (!value) return undefined

  // Handle legacy format: number
  if (typeof value === 'number') {
    return { min: value, max: value }
  }

  // Handle new format: TimeRange object
  if (typeof value === 'object' && value !== null) {
    if (typeof value.min !== 'number' || typeof value.max !== 'number') {
      throw new Error(
        `Invalid ${fieldName} format: TimeRange must have numeric min and max properties. ` +
          `Got: ${JSON.stringify(value)}`,
      )
    }

    const timeRange: TimeRange = { min: value.min, max: value.max }

    // Validate range (min <= max, non-negative)
    try {
      validateTimeRange(timeRange)
    } catch (error) {
      throw new Error(`Invalid ${fieldName}`, { cause: error })
    }

    return timeRange
  }

  throw new Error(
    `Invalid ${fieldName} format: expected number or TimeRange object. ` +
      `Got: ${typeof value} (${JSON.stringify(value)})`,
  )
}

export const JSONImporter = ({
  onImportSuccess,
  onClose,
}: JSONImporterProps): React.ReactElement => {
  const [jsonContent, setJsonContent] = useState('')
  const [parsedRecipe, setParsedRecipe] = useState<JSONRecipe | null>(null)
  const [parseError, setParseError] = useState<string | null>(null)
  const [copied, setCopied] = useState(false)

  const handleParseJSON = (): void => {
    if (!jsonContent.trim()) {
      showError('Veuillez coller du contenu JSON')
      return
    }

    try {
      const parsed = JSON.parse(jsonContent)

      // Validate required fields
      if (!parsed.title) {
        throw new Error('Le champ "title" est requis')
      }

      if (
        !parsed.ingredients ||
        !Array.isArray(parsed.ingredients) ||
        parsed.ingredients.length === 0
      ) {
        throw new Error(
          'Le champ "ingredients" est requis et doit être un tableau non vide',
        )
      }

      if (
        !parsed.instructions ||
        !Array.isArray(parsed.instructions) ||
        parsed.instructions.length === 0
      ) {
        throw new Error(
          'Le champ "instructions" est requis et doit être un tableau non vide',
        )
      }

      // Parse time fields with support for both old and new formats
      const prepTime = parseTimeField(parsed.prepTime, 'prepTime')
      const cookTime = parseTimeField(parsed.cookTime, 'cookTime')
      const marinatingTime = parseTimeField(
        parsed.marinatingTime,
        'marinatingTime',
      )

      // Set defaults for missing fields
      const recipe: JSONRecipe = {
        title: parsed.title,
        description: parsed.description || '',
        categories: Array.isArray(parsed.categories) ? parsed.categories : [],
        prepTime: prepTime,
        cookTime: cookTime,
        marinatingTime: marinatingTime,
        servings: typeof parsed.servings === 'number' ? parsed.servings : 1,
        difficulty: ['Facile', 'Moyen', 'Difficile'].includes(parsed.difficulty)
          ? parsed.difficulty
          : 'Facile',
        ingredients: parsed.ingredients,
        instructions: parsed.instructions,
        tags: Array.isArray(parsed.tags) ? parsed.tags : [],
        accompaniment: parsed.accompaniment || '',
        wine: parsed.wine || '',
        source: parsed.source || '',
        notes: parsed.notes || '',
      }

      setParsedRecipe(recipe)
      setParseError(null)
      showSuccess('JSON analysé avec succès!')
    } catch (error) {
      setParseError(
        error instanceof Error ? error.message : 'Erreur de parsing JSON',
      )
      setParsedRecipe(null)
      showError("Erreur lors de l'analyse du JSON")
    }
  }

  const handleImport = (): void => {
    if (!parsedRecipe) {
      showError('Aucune recette à importer')
      return
    }

    onImportSuccess(parsedRecipe)
    showSuccess(`Recette "${parsedRecipe.title}" importée avec succès!`)
    onClose()
  }

  const copyExampleJSON = async (): Promise<void> => {
    const exampleJSON = `{
  "title": "Filet de porc glacé à l'érable",
  "description": "Filet de porc mariné aux épices et glacé à l'érable (four ou grill).",
  "categories": ["Porc", "Plats principaux"],
  "prepTime": { "min": 15, "max": 15 },
  "cookTime": { "min": 20, "max": 25 },
  "marinatingTime": { "min": 480, "max": 480 },
  "servings": 4,
  "difficulty": "Facile",
  "ingredients": [
    {
      "title": "Porc",
      "items": [
        "2 filets de porc"
      ]
    },
    {
      "title": "Marinade",
      "items": [
        "30 ml de sucre d'érable (ou cassonade)",
        "15 ml de moutarde sèche",
        "10 ml de gros sel",
        "5 ml de poivre noir fraîchement moulu",
        "10 ml de paprika",
        "Origan frais haché, au goût (le séché peut faire l'affaire)"
      ]
    },
    {
      "title": "Glace",
      "items": [
        "125 ml de sirop d'érable",
        "25 ml de ketchup",
        "15 ml de sauce Worcestershire",
        "8 ml de moutarde de Dijon",
        "8 ml de vinaigre de cidre"
      ]
    }
  ],
  "instructions": [
    "Mettre le sucre d'érable, la moutarde sèche, le sel, le poivre, le paprika et l'origan dans un petit bol; mélanger en défaisant les grumeaux.",
    "Déposer les filets de porc et la marinade sèche dans un sac ziploc; bien masser et laisser mariner 8 heures minimum.",
    "Verser le sirop d'érable, le ketchup, la sauce Worcestershire, la moutarde et le vinaigre dans une casserole; à feu élevé, porter à ébullition en fouettant.",
    "Réduire à feu moyen et laisser la glace mijoter doucement 6 à 10 minutes, jusqu'à consistance de sirop; fouetter au besoin. Réserver.",
    "Cuire au four à 350°F en badigeonnant aux 10 minutes avec la glace ou sur le grill en badigeonnant avec la glace à l'érable aux 5 minutes."
  ],
  "tags": ["érable", "marinade sèche", "grill"],
  "accompaniment": "Légumes grillés et pommes de terre",
  "wine": "Vin rouge léger ou rosé",
  "source": "Recette familiale",
  "notes": "La marinade peut être préparée la veille. Surveiller la cuisson pour éviter que la glace brûle."
}`

    try {
      await navigator.clipboard.writeText(exampleJSON)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
      showSuccess('Exemple JSON copié dans le presse-papiers')
    } catch {
      showError('Erreur lors de la copie')
    }
  }

  // Helper function to detect ingredient/instruction format
  const getFormatInfo = (
    items: string[] | IngredientSection[] | InstructionSection[],
  ): string => {
    if (items.length === 0) return 'Vide'

    if (
      typeof items[0] === 'object' &&
      ('items' in items[0] || 'steps' in items[0])
    ) {
      return 'Sections'
    }
    return 'Liste simple'
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            Importer une recette depuis JSON
            <Button
              variant="outline"
              size="sm"
              onClick={copyExampleJSON}
              className="flex items-center gap-2"
            >
              {copied ? (
                <Check className="w-4 h-4 text-green-600" />
              ) : (
                <Copy className="w-4 h-4" />
              )}
              {copied ? 'Copié!' : 'Exemple JSON'}
            </Button>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label
              htmlFor="json-import-textarea"
              className="block text-sm font-medium mb-2"
            >
              Coller le JSON de la recette:
            </label>
            <Textarea
              id="json-import-textarea"
              value={jsonContent}
              onChange={(e) => setJsonContent(e.target.value)}
              placeholder='Collez votre JSON ici... Cliquez sur "Exemple JSON" pour voir le format attendu.'
              rows={12}
              className="font-mono text-sm"
            />
          </div>

          <div className="flex gap-2">
            <Button onClick={handleParseJSON} disabled={!jsonContent.trim()}>
              <FileText className="w-4 h-4 mr-2" />
              Analyser le JSON
            </Button>
            {parsedRecipe && (
              <Button onClick={handleImport} variant="default">
                <CheckCircle className="w-4 h-4 mr-2" />
                Importer la recette
              </Button>
            )}
          </div>

          <Alert>
            <AlertTriangle className="h-4 w-4" />
            <AlertDescription>
              <div className="space-y-2">
                <strong>Format JSON attendu:</strong>
                <ul className="text-xs space-y-1 ml-4 list-disc">
                  <li>
                    <strong>title</strong> (requis): Titre de la recette
                  </li>
                  <li>
                    <strong>ingredients</strong> (requis): Tableau d'ingrédients
                    ou sections
                  </li>
                  <li>
                    <strong>instructions</strong> (requis): Tableau
                    d'instructions ou sections
                  </li>
                  <li>
                    <strong>categories</strong>: Tableau de catégories
                  </li>
                  <li>
                    <strong>prepTime, cookTime, marinatingTime</strong>: Objet
                    TimeRange {'{ min: X, max: Y }'} ou nombre (format ancien)
                  </li>
                  <li>
                    <strong>servings</strong>: Nombre de portions
                  </li>
                  <li>
                    <strong>difficulty</strong>: "Facile", "Moyen", ou
                    "Difficile"
                  </li>
                  <li>
                    <strong>tags</strong>: Tableau de tags
                  </li>
                  <li>
                    <strong>
                      description, accompaniment, wine, source, notes
                    </strong>
                    : Texte optionnel
                  </li>
                </ul>
              </div>
            </AlertDescription>
          </Alert>

          {parseError && (
            <Alert variant="destructive">
              <AlertTriangle className="h-4 w-4" />
              <AlertDescription>
                <strong>Erreur de parsing:</strong> {parseError}
              </AlertDescription>
            </Alert>
          )}
        </CardContent>
      </Card>

      {parsedRecipe && (
        <Card>
          <CardHeader>
            <CardTitle className="text-green-600">
              ✅ Recette analysée avec succès
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-lg">{parsedRecipe.title}</h4>
                {parsedRecipe.description && (
                  <p className="text-sm text-muted-foreground mt-1">
                    {parsedRecipe.description}
                  </p>
                )}
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h5 className="font-medium text-sm mb-2">Informations</h5>
                  <div className="space-y-1 text-sm">
                    {parsedRecipe.prepTime && (
                      <div>
                        ⏱️ Préparation: {formatTime(parsedRecipe.prepTime)}
                      </div>
                    )}
                    {parsedRecipe.cookTime && (
                      <div>🔥 Cuisson: {formatTime(parsedRecipe.cookTime)}</div>
                    )}
                    {parsedRecipe.marinatingTime &&
                      parsedRecipe.marinatingTime.max > 0 && (
                        <div>
                          ⏰ Marinage: {formatTime(parsedRecipe.marinatingTime)}
                        </div>
                      )}
                    <div>👥 Portions: {parsedRecipe.servings}</div>
                  </div>
                </div>

                <div>
                  <h5 className="font-medium text-sm mb-2">
                    Catégories & Tags
                  </h5>
                  <div className="space-y-2">
                    {parsedRecipe.categories.length > 0 && (
                      <div className="flex flex-wrap gap-1">
                        {parsedRecipe.categories.map((category, index) => (
                          <Badge
                            // biome-ignore lint/suspicious/noArrayIndexKey: string items have no stable ID
                            key={index}
                            variant="default"
                            className="text-xs"
                          >
                            {category}
                          </Badge>
                        ))}
                      </div>
                    )}
                    {parsedRecipe.tags.length > 0 && (
                      <div className="flex flex-wrap gap-1">
                        {parsedRecipe.tags.map((tag, index) => (
                          <Badge
                            // biome-ignore lint/suspicious/noArrayIndexKey: string items have no stable ID
                            key={index}
                            variant="outline"
                            className="text-xs"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h5 className="font-medium text-sm mb-2">
                    Ingrédients ({getFormatInfo(parsedRecipe.ingredients)})
                  </h5>
                  <div className="bg-muted p-2 rounded text-xs max-h-32 overflow-y-auto">
                    {typeof parsedRecipe.ingredients[0] === 'object' &&
                    'items' in parsedRecipe.ingredients[0] ? (
                      // Sectioned ingredients
                      (parsedRecipe.ingredients as IngredientSection[]).map(
                        (section, sectionIndex) => (
                          // biome-ignore lint/suspicious/noArrayIndexKey: sections have no stable ID
                          <div key={sectionIndex} className="mb-2">
                            {section.title && (
                              <div className="font-medium text-primary">
                                {section.title}:
                              </div>
                            )}
                            <ul className="ml-2 space-y-1">
                              {section.items
                                .slice(0, 3)
                                .map((item, itemIndex) => (
                                  // biome-ignore lint/suspicious/noArrayIndexKey: items have no stable ID
                                  <li key={itemIndex}>• {item}</li>
                                ))}
                              {section.items.length > 3 && (
                                <li className="text-muted-foreground">
                                  ... et {section.items.length - 3} autres
                                </li>
                              )}
                            </ul>
                          </div>
                        ),
                      )
                    ) : (
                      // Simple ingredients list
                      <ul className="space-y-1">
                        {(parsedRecipe.ingredients as string[])
                          .slice(0, 5)
                          .map((ingredient, index) => (
                            // biome-ignore lint/suspicious/noArrayIndexKey: string items have no stable ID
                            <li key={index}>• {ingredient}</li>
                          ))}
                        {parsedRecipe.ingredients.length > 5 && (
                          <li className="text-muted-foregroun">
                            ... et {parsedRecipe.ingredients.length - 5} autres
                          </li>
                        )}
                      </ul>
                    )}
                  </div>
                </div>

                <div>
                  <h5 className="font-medium text-sm mb-2">
                    Instructions ({getFormatInfo(parsedRecipe.instructions)})
                  </h5>
                  <div className="bg-muted p-2 rounded text-xs max-h-32 overflow-y-auto">
                    {typeof parsedRecipe.instructions[0] === 'object' &&
                    'steps' in parsedRecipe.instructions[0] ? (
                      // Sectioned instructions
                      (parsedRecipe.instructions as InstructionSection[]).map(
                        (section, sectionIndex) => (
                          // biome-ignore lint/suspicious/noArrayIndexKey: sections have no stable ID
                          <div key={sectionIndex} className="mb-2">
                            {section.title && (
                              <div className="font-medium text-primary">
                                {section.title}:
                              </div>
                            )}
                            <ol className="ml-2 space-y-1">
                              {section.steps
                                .slice(0, 2)
                                .map((step, stepIndex) => (
                                  // biome-ignore lint/suspicious/noArrayIndexKey: steps have no stable ID
                                  <li key={stepIndex}>
                                    {stepIndex + 1}. {step.substring(0, 50)}...
                                  </li>
                                ))}
                              {section.steps.length > 2 && (
                                <li className="text-muted-foreground">
                                  ... et {section.steps.length - 2} autres
                                  étapes
                                </li>
                              )}
                            </ol>
                          </div>
                        ),
                      )
                    ) : (
                      // Simple instructions list
                      <ol className="space-y-1">
                        {(parsedRecipe.instructions as string[])
                          .slice(0, 3)
                          .map((instruction, index) => (
                            // biome-ignore lint/suspicious/noArrayIndexKey: string items have no stable ID
                            <li key={index}>
                              {index + 1}. {instruction.substring(0, 50)}...
                            </li>
                          ))}
                        {parsedRecipe.instructions.length > 3 && (
                          <li className="text-muted-foreground">
                            ... et {parsedRecipe.instructions.length - 3} autres
                            étapes
                          </li>
                        )}
                      </ol>
                    )}
                  </div>
                </div>
              </div>

              {/* Additional fields */}
              {(parsedRecipe.accompaniment ||
                parsedRecipe.wine ||
                parsedRecipe.source ||
                parsedRecipe.notes) && (
                <div>
                  <h5 className="font-medium text-sm mb-2">
                    Informations supplémentaires
                  </h5>
                  <div className="space-y-1 text-xs">
                    {parsedRecipe.accompaniment && (
                      <div>
                        <strong>Accompagnement:</strong>{' '}
                        {parsedRecipe.accompaniment}
                      </div>
                    )}
                    {parsedRecipe.wine && (
                      <div>
                        <strong>Vin:</strong> {parsedRecipe.wine}
                      </div>
                    )}
                    {parsedRecipe.source && (
                      <div>
                        <strong>Source:</strong> {parsedRecipe.source}
                      </div>
                    )}
                    {parsedRecipe.notes && (
                      <div>
                        <strong>Notes:</strong>{' '}
                        {parsedRecipe.notes.substring(0, 100)}...
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
