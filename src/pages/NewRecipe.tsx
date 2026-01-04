import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Plus, Minus, Save, ArrowLeft, Layers, FileText, X } from 'lucide-react'
import { showSuccess, showError } from '@/utils/toast'
import { GitHubService } from '@/services/github'
import { validateTimeRange } from '@/utils/timeUtils'
import { CategorySelector } from '@/components/CategorySelector'
import { TimeRangeInput } from '@/components/TimeRangeInput'
import { ImageUpload } from '@/components/ImageUpload'
import { SectionedIngredients } from '@/components/SectionedIngredients'
import { SectionedInstructions } from '@/components/SectionedInstructions'
import { JSONImporter } from '@/components/JSONImporter'
import { ProcessedImage } from '@/utils/imageUtils'
import {
  Recipe,
  IngredientSection,
  InstructionSection,
  TimeRange,
} from '@/types/recipe'
import { recipeCategories } from '@/data/categories'
import { NotFound } from '@/components/NotFound'
import { useOnlineStatus } from '@/hooks/useOnlineStatus'
import { OfflineFallback } from '@/components/OfflineFallback'

const NewRecipe = () => {
  const isOnline = useOnlineStatus()
  const [recipe, setRecipe] = useState({
    title: '',
    description: '',
    categories: [] as string[],
    prepTime: { min: 0, max: 0 } as TimeRange,
    cookTime: { min: 0, max: 0 } as TimeRange,
    marinatingTime: { min: 0, max: 0 } as TimeRange,
    servings: '',
    difficulty: 'Facile',
    ingredients: [''],
    instructions: [''],
    tags: [''],
    accompaniment: '',
    wine: '',
    source: '',
    notes: '',
  })

  const [recipeImages, setRecipeImages] = useState<ProcessedImage[]>([])
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [githubConfig, setGithubConfig] = useState<{
    owner: string
    repo: string
    token: string
  } | null>(null)
  const [availableCategories, setAvailableCategories] = useState<string[]>([])
  const [configChecked, setConfigChecked] = useState(false)
  const [showJSONImporter, setShowJSONImporter] = useState(false)

  // New state for sectioned ingredients and instructions
  const [useSectionedIngredients, setUseSectionedIngredients] = useState(false)
  const [useSectionedInstructions, setUseSectionedInstructions] =
    useState(false)
  const [sectionedIngredients, setSectionedIngredients] = useState<
    IngredientSection[]
  >([{ title: '', items: [''] }])
  const [sectionedInstructions, setSectionedInstructions] = useState<
    InstructionSection[]
  >([{ title: '', steps: [''] }])

  useEffect(() => {
    // Check GitHub config
    const savedConfig = localStorage.getItem('github-config')
    if (savedConfig) {
      setGithubConfig(JSON.parse(savedConfig))
    }
    setConfigChecked(true)

    // Use default categories
    setAvailableCategories(recipeCategories.sort())
  }, [])

  if (!isOnline) {
    return <OfflineFallback />
  }

  // Show 404 if no GitHub config
  if (configChecked && !githubConfig) {
    return <NotFound />
  }

  // Don't render until config is checked
  if (!configChecked) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <p className="text-muted-foreground">Chargement...</p>
        </div>
      </div>
    )
  }

  const handleJSONImportSuccess = (
    jsonRecipe: Partial<Omit<Recipe, 'id' | 'slug'>>,
  ) => {
    // Apply JSON recipe to form
    setRecipe({
      title: jsonRecipe.title || '',
      description: jsonRecipe.description || '',
      categories: jsonRecipe.categories || [],
      prepTime: jsonRecipe.prepTime || { min: 0, max: 0 },
      cookTime: jsonRecipe.cookTime || { min: 0, max: 0 },
      marinatingTime: jsonRecipe.marinatingTime || { min: 0, max: 0 },
      servings: jsonRecipe.servings?.toString() || '',
      difficulty: jsonRecipe.difficulty || 'Facile',
      ingredients:
        Array.isArray(jsonRecipe.ingredients) &&
        typeof jsonRecipe.ingredients[0] === 'string'
          ? (jsonRecipe.ingredients as string[])
          : [''], // Will be handled by sectioned logic below
      instructions:
        Array.isArray(jsonRecipe.instructions) &&
        typeof jsonRecipe.instructions[0] === 'string'
          ? (jsonRecipe.instructions as string[])
          : [''], // Will be handled by sectioned logic below
      tags: jsonRecipe.tags || [''],
      accompaniment: jsonRecipe.accompaniment || '',
      wine: jsonRecipe.wine || '',
      source: jsonRecipe.source || '',
      notes: jsonRecipe.notes || '',
    })

    // Handle sectioned ingredients
    if (
      Array.isArray(jsonRecipe.ingredients) &&
      jsonRecipe.ingredients.length > 0 &&
      typeof jsonRecipe.ingredients[0] === 'object' &&
      'items' in jsonRecipe.ingredients[0]
    ) {
      setUseSectionedIngredients(true)
      setSectionedIngredients(jsonRecipe.ingredients as IngredientSection[])
    } else {
      setUseSectionedIngredients(false)
    }

    // Handle sectioned instructions
    if (
      Array.isArray(jsonRecipe.instructions) &&
      jsonRecipe.instructions.length > 0 &&
      typeof jsonRecipe.instructions[0] === 'object' &&
      'steps' in jsonRecipe.instructions[0]
    ) {
      setUseSectionedInstructions(true)
      setSectionedInstructions(jsonRecipe.instructions as InstructionSection[])
    } else {
      setUseSectionedInstructions(false)
    }

    showSuccess(`Recette "${jsonRecipe.title}" importée depuis JSON`)
  }

  const addIngredient = () => {
    setRecipe((prev) => ({
      ...prev,
      ingredients: [...prev.ingredients, ''],
    }))
  }

  const removeIngredient = (index: number) => {
    setRecipe((prev) => ({
      ...prev,
      ingredients: prev.ingredients.filter((_, i) => i !== index),
    }))
  }

  const updateIngredient = (index: number, value: string) => {
    setRecipe((prev) => ({
      ...prev,
      ingredients: prev.ingredients.map((ing, i) =>
        i === index ? value : ing,
      ),
    }))
  }

  const addInstruction = () => {
    setRecipe((prev) => ({
      ...prev,
      instructions: [...prev.instructions, ''],
    }))
  }

  const removeInstruction = (index: number) => {
    setRecipe((prev) => ({
      ...prev,
      instructions: prev.instructions.filter((_, i) => i !== index),
    }))
  }

  const updateInstruction = (index: number, value: string) => {
    setRecipe((prev) => ({
      ...prev,
      instructions: prev.instructions.map((inst, i) =>
        i === index ? value : inst,
      ),
    }))
  }

  const addTag = () => {
    setRecipe((prev) => ({
      ...prev,
      tags: [...prev.tags, ''],
    }))
  }

  const removeTag = (index: number) => {
    setRecipe((prev) => ({
      ...prev,
      tags: prev.tags.filter((_, i) => i !== index),
    }))
  }

  const updateTag = (index: number, value: string) => {
    setRecipe((prev) => ({
      ...prev,
      tags: prev.tags.map((tag, i) => (i === index ? value : tag)),
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Validate required fields
      if (!recipe.title || recipe.categories.length === 0) {
        showError(
          'Veuillez remplir tous les champs obligatoires (titre et au moins une catégorie)',
        )
        return
      }

      // Validate TimeRange objects (ensure min <= max)
      try {
        validateTimeRange(recipe.prepTime)
        validateTimeRange(recipe.cookTime)
        if (recipe.marinatingTime.min > 0 || recipe.marinatingTime.max > 0) {
          validateTimeRange(recipe.marinatingTime)
        }
      } catch (error) {
        showError(
          `Temps invalide: ${error instanceof Error ? error.message : 'Erreur de validation'}`,
        )
        return
      }

      // Prepare recipe data with sectioned ingredients/instructions if enabled
      const recipeData = {
        ...recipe,
        // Only include marinatingTime if it has non-zero values
        marinatingTime:
          recipe.marinatingTime.min > 0 || recipe.marinatingTime.max > 0
            ? recipe.marinatingTime
            : undefined,
        ingredients: useSectionedIngredients
          ? sectionedIngredients
          : recipe.ingredients,
        instructions: useSectionedInstructions
          ? sectionedInstructions
          : recipe.instructions,
      }

      const githubService = new GitHubService(githubConfig)
      const prUrl = await githubService.createRecipePR(recipeData, recipeImages)

      showSuccess('Recette soumise! Pull request créée avec succès.')

      // Show success message with PR link
      const openPR = confirm(
        'Recette soumise avec succès!\n\nVoulez-vous voir la pull request sur GitHub?',
      )
      if (openPR) {
        window.open(prUrl, '_blank')
      }

      // Reset form
      setRecipe({
        title: '',
        description: '',
        categories: [],
        prepTime: { min: 0, max: 0 },
        cookTime: { min: 0, max: 0 },
        marinatingTime: { min: 0, max: 0 },
        servings: '',
        difficulty: 'Facile',
        ingredients: [''],
        instructions: [''],
        tags: [''],
        accompaniment: '',
        wine: '',
        source: '',
        notes: '',
      })
      setRecipeImages([])
      setUseSectionedIngredients(false)
      setUseSectionedInstructions(false)
      setSectionedIngredients([{ title: '', items: [''] }])
      setSectionedInstructions([{ title: '', steps: [''] }])
    } catch (error) {
      showError('Erreur lors de la création de la recette')
      console.error(error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="mb-6">
        <Link to="/">
          <Button variant="outline" className="mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour aux recettes
          </Button>
        </Link>

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-2">
          <div>
            <h1 className="text-3xl font-bold">Ajouter une nouvelle recette</h1>
            <p className="text-muted-foreground mt-2">
              Remplissez le formulaire ci-dessous ou importez depuis un fichier
              JSON. Une pull request sera créée automatiquement sur GitHub.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
            <Button
              variant="outline"
              onClick={() => setShowJSONImporter(!showJSONImporter)}
              className="w-full sm:w-auto"
            >
              {showJSONImporter ? (
                <X className="w-4 h-4 mr-2" />
              ) : (
                <FileText className="w-4 h-4 mr-2" />
              )}
              {showJSONImporter ? 'Fermer JSON' : 'Importer JSON'}
            </Button>
          </div>
        </div>

        <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
          <p className="text-sm text-green-700">
            ✅ Connecté à{' '}
            <strong>
              {githubConfig.owner}/{githubConfig.repo}
            </strong>
          </p>
        </div>
      </div>

      {/* JSON Importer */}
      {showJSONImporter && (
        <div className="mb-6">
          <Card>
            <CardHeader>
              <CardTitle>Importer une recette depuis JSON</CardTitle>
            </CardHeader>
            <CardContent>
              <JSONImporter
                onImportSuccess={handleJSONImportSuccess}
                onClose={() => setShowJSONImporter(false)}
              />
            </CardContent>
          </Card>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Basic Information */}
        <Card>
          <CardHeader>
            <CardTitle>Informations de base</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">
                Titre de la recette *
              </label>
              <Input
                value={recipe.title}
                onChange={(e) =>
                  setRecipe((prev) => ({ ...prev, title: e.target.value }))
                }
                placeholder="Ex: Poutine Classique"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Description
              </label>
              <Textarea
                value={recipe.description}
                onChange={(e) =>
                  setRecipe((prev) => ({
                    ...prev,
                    description: e.target.value,
                  }))
                }
                placeholder="Décrivez brièvement la recette..."
                rows={3}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Catégories *
              </label>
              <CategorySelector
                selectedCategories={recipe.categories}
                onCategoriesChange={(categories) =>
                  setRecipe((prev) => ({ ...prev, categories }))
                }
                availableCategories={availableCategories}
                placeholder="Sélectionner des catégories"
                className="w-full"
              />
              <p className="text-xs text-muted-foreground mt-1">
                Sélectionnez une ou plusieurs catégories. Pour ajouter de
                nouvelles catégories, utilisez la page de gestion des
                catégories.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div>
                <TimeRangeInput
                  value={recipe.prepTime}
                  onChange={(value) =>
                    setRecipe((prev) => ({ ...prev, prepTime: value }))
                  }
                  allowDays={false}
                  label="Temps de préparation"
                  required={true}
                />
              </div>

              <div>
                <TimeRangeInput
                  value={recipe.cookTime}
                  onChange={(value) =>
                    setRecipe((prev) => ({ ...prev, cookTime: value }))
                  }
                  allowDays={true}
                  label="Temps de cuisson"
                  required={true}
                />
              </div>

              <div>
                <TimeRangeInput
                  value={recipe.marinatingTime}
                  onChange={(value) =>
                    setRecipe((prev) => ({ ...prev, marinatingTime: value }))
                  }
                  allowDays={true}
                  label="Temps de marinage"
                  required={false}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Portions
                </label>
                <Input
                  type="number"
                  value={recipe.servings}
                  onChange={(e) =>
                    setRecipe((prev) => ({ ...prev, servings: e.target.value }))
                  }
                  placeholder="4"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Images */}
        <Card>
          <CardHeader>
            <CardTitle>Image de la recette</CardTitle>
          </CardHeader>
          <CardContent>
            <ImageUpload
              images={recipeImages}
              onImagesChange={setRecipeImages}
              maxImages={1}
            />
            <p className="text-xs text-muted-foreground mt-2">
              L'image sera automatiquement redimensionnée en plusieurs tailles
              pour optimiser l'affichage.
            </p>
          </CardContent>
        </Card>

        {/* Additional Information */}
        <Card>
          <CardHeader>
            <CardTitle>Informations complémentaires</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">
                Accompagnement
              </label>
              <Input
                value={recipe.accompaniment}
                onChange={(e) =>
                  setRecipe((prev) => ({
                    ...prev,
                    accompaniment: e.target.value,
                  }))
                }
                placeholder="Ex: Salade verte, pain grillé..."
              />
              <p className="text-xs text-muted-foreground mt-1">
                Suggestions d'accompagnements pour cette recette
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Accord vin
              </label>
              <Input
                value={recipe.wine}
                onChange={(e) =>
                  setRecipe((prev) => ({ ...prev, wine: e.target.value }))
                }
                placeholder="Ex: Vin rouge corsé, Chardonnay..."
              />
              <p className="text-xs text-muted-foreground mt-1">
                Suggestions d'accords vins pour cette recette
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Source</label>
              <Input
                value={recipe.source}
                onChange={(e) =>
                  setRecipe((prev) => ({ ...prev, source: e.target.value }))
                }
                placeholder="Ex: Grand-mère Marie, Livre de cuisine..."
              />
              <p className="text-xs text-muted-foreground mt-1">
                Source de la recette (laissez vide pour utiliser votre nom
                d'utilisateur GitHub)
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Notes</label>
              <Textarea
                value={recipe.notes}
                onChange={(e) =>
                  setRecipe((prev) => ({ ...prev, notes: e.target.value }))
                }
                placeholder="Ex: Cette recette se conserve 3 jours au frigo, peut être doublée facilement..."
                rows={3}
              />
              <p className="text-xs text-muted-foreground mt-1">
                Notes personnelles, conseils de conservation, variations
                possibles, etc.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Ingredients */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              Ingrédients
              <div className="flex gap-2">
                <Button
                  type="button"
                  variant={useSectionedIngredients ? 'default' : 'outline'}
                  size="sm"
                  onClick={() =>
                    setUseSectionedIngredients(!useSectionedIngredients)
                  }
                >
                  <Layers className="w-4 h-4 mr-1" />
                  Sections
                </Button>
                {!useSectionedIngredients && (
                  <Button type="button" onClick={addIngredient} size="sm">
                    <Plus className="w-4 h-4 mr-1" />
                    Ajouter
                  </Button>
                )}
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            {useSectionedIngredients ? (
              <div>
                <p className="text-sm text-muted-fore ground mb-4">
                  Organisez vos ingrédients en sections (ex: "Pour les keftas",
                  "Pour la sauce")
                </p>
                <SectionedIngredients
                  sections={sectionedIngredients}
                  onChange={setSectionedIngredients}
                />
              </div>
            ) : (
              <div className="space-y-2">
                {recipe.ingredients.map((ingredient, index) => (
                  <div key={index} className="flex gap-2">
                    <Input
                      value={ingredient}
                      onChange={(e) => updateIngredient(index, e.target.value)}
                      placeholder="Ex: 2 tasses de farine"
                      className="flex-1"
                    />
                    {recipe.ingredients.length > 1 && (
                      <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        onClick={() => removeIngredient(index)}
                      >
                        <Minus className="w-4 h-4" />
                      </Button>
                    )}
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>

        {/* Instructions */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              Instructions
              <div className="flex gap-2">
                <Button
                  type="button"
                  variant={useSectionedInstructions ? 'default' : 'outline'}
                  size="sm"
                  onClick={() =>
                    setUseSectionedInstructions(!useSectionedInstructions)
                  }
                >
                  <Layers className="w-4 h-4 mr-1" />
                  Sections
                </Button>
                {!useSectionedInstructions && (
                  <Button type="button" onClick={addInstruction} size="sm">
                    <Plus className="w-4 h-4 mr-1" />
                    Ajouter
                  </Button>
                )}
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            {useSectionedInstructions ? (
              <div>
                <p className="text-sm text-muted-foreground mb-4">
                  Organisez vos instructions en sections (ex: "Préparation des
                  keftas", "Préparation de la sauce")
                </p>
                <SectionedInstructions
                  sections={sectionedInstructions}
                  onChange={setSectionedInstructions}
                />
              </div>
            ) : (
              <div className="space-y-2">
                {recipe.instructions.map((instruction, index) => (
                  <div key={index} className="flex gap-2">
                    <span className="flex-shrink-0 w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium mt-2">
                      {index + 1}
                    </span>
                    <Textarea
                      value={instruction}
                      onChange={(e) => updateInstruction(index, e.target.value)}
                      placeholder="Décrivez cette étape..."
                      rows={2}
                      className="flex-1"
                    />
                    {recipe.instructions.length > 1 && (
                      <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        onClick={() => removeInstruction(index)}
                        className="mt-2"
                      >
                        <Minus className="w-4 h-4" />
                      </Button>
                    )}
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>

        {/* Tags */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              Tags (pour la recherche)
              <Button type="button" onClick={addTag} size="sm">
                <Plus className="w-4 h-4 mr-1" />
                Ajouter
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {recipe.tags.map((tag, index) => (
                <div key={index} className="flex gap-2">
                  <Input
                    value={tag}
                    onChange={(e) => updateTag(index, e.target.value)}
                    placeholder="Ex: québécois, rapide, végétarien"
                    className="flex-1"
                  />
                  {recipe.tags.length > 1 && (
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={() => removeTag(index)}
                    >
                      <Minus className="w-4 h-4" />
                    </Button>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Submit */}
        <div className="flex justify-end">
          <Button type="submit" disabled={isSubmitting} size="lg">
            <Save className="w-4 h-4 mr-2" />
            {isSubmitting
              ? 'Création de la pull request...'
              : 'Soumettre la recette'}
          </Button>
        </div>
      </form>
    </div>
  )
}

export default NewRecipe
