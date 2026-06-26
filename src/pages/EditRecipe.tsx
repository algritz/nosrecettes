import { ArrowLeft, Layers, Minus, Plus, Save, Trash2 } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { CategorySelector } from '@/components/CategorySelector'
import { ImageUpload } from '@/components/ImageUpload'
import { NotFound } from '@/components/NotFound'
import { OfflineFallback } from '@/components/OfflineFallback'
import { SectionedIngredients } from '@/components/SectionedIngredients'
import { SectionedInstructions } from '@/components/SectionedInstructions'
import { TimeRangeInput } from '@/components/TimeRangeInput'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { recipeCategories } from '@/data/categories'
import { useOnlineStatus } from '@/hooks/useOnlineStatus'
import { GitHubService } from '@/services/github'
import type {
  ImageSizes,
  IngredientSection,
  InstructionSection,
  TimeRange,
} from '@/types/recipe'
import {
  type ProcessedImage,
  scheduleOldImageCleanup,
} from '@/utils/imageUtils'
import { getRecipeBySlug } from '@/utils/recipeDb'
import { getRecipeCategories } from '@/utils/recipeUtils'
import { validateTimeRange } from '@/utils/timeUtils'
import { showError, showSuccess } from '@/utils/toast'

const EditRecipe = (): React.ReactElement => {
  const isOnline = useOnlineStatus()
  const { slug } = useParams<{ slug: string }>()
  const navigate = useNavigate()
  const [existingRecipe, setExistingRecipe] = useState<Recipe | undefined>(
    undefined,
  )
  const [loadingRecipe, setLoadingRecipe] = useState(true)

  const [recipe, setRecipe] = useState({
    title: '',
    description: '',
    categories: [] as string[], // Changed from category to categories
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
  const [existingImages, setExistingImages] = useState<ImageSizes[]>([])
  const [originalExistingImages, setOriginalExistingImages] = useState<
    ImageSizes[]
  >([]) // Track original images
  const [deletedExistingImages, setDeletedExistingImages] = useState<
    ImageSizes[]
  >([])
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isDeleting, setIsDeleting] = useState(false)
  const [githubConfig, setGithubConfig] = useState<{
    owner: string
    repo: string
    token: string
  } | null>(null)
  const [availableCategories, setAvailableCategories] = useState<string[]>([])
  const [configChecked, setConfigChecked] = useState(false)

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

  // Load recipe from IndexedDB
  useEffect(() => {
    async function loadRecipeFromDB(): Promise<void> {
      if (!slug) {
        setLoadingRecipe(false)
        return
      }

      try {
        const loadedRecipe = await getRecipeBySlug(slug)
        setExistingRecipe(loadedRecipe)
      } catch (_error) {
      } finally {
        setLoadingRecipe(false)
      }
    }

    // biome-ignore lint/suspicious/noConsole: intentional error logging
    loadRecipeFromDB().catch(console.error)
  }, [slug])

  useEffect(() => {
    // Check GitHub config
    const savedConfig = localStorage.getItem('github-config')
    if (savedConfig) {
      setGithubConfig(JSON.parse(savedConfig))
    }
    setConfigChecked(true)

    // Use default categories (categories from IndexedDB not needed for editing)
    setAvailableCategories(recipeCategories.sort())

    // Pre-fill form with existing recipe data
    if (existingRecipe) {
      // Check if existing recipe uses sectioned format
      const hasSectionedIngredients =
        Array.isArray(existingRecipe.ingredients) &&
        existingRecipe.ingredients.length > 0 &&
        typeof existingRecipe.ingredients[0] === 'object'

      const hasSectionedInstructions =
        Array.isArray(existingRecipe.instructions) &&
        existingRecipe.instructions.length > 0 &&
        typeof existingRecipe.instructions[0] === 'object'

      setUseSectionedIngredients(hasSectionedIngredients)
      setUseSectionedInstructions(hasSectionedInstructions)

      if (hasSectionedIngredients) {
        setSectionedIngredients(
          existingRecipe.ingredients as IngredientSection[],
        )
      }

      if (hasSectionedInstructions) {
        setSectionedInstructions(
          existingRecipe.instructions as InstructionSection[],
        )
      }

      // Get categories using the utility function for backward compatibility
      const currentCategories = getRecipeCategories(existingRecipe)

      // Set existing images
      const currentImages =
        existingRecipe.images ||
        (existingRecipe.image ? [existingRecipe.image] : [])
      const imagesSizes = currentImages.map((img) => {
        if (typeof img === 'string') {
          return { small: img, medium: img, large: img }
        }
        return img
      }) as ImageSizes[]

      setExistingImages(imagesSizes)
      setOriginalExistingImages([...imagesSizes]) // Keep track of original images

      setRecipe({
        title: existingRecipe.title,
        description: existingRecipe.description,
        categories: currentCategories, // Use the categories array
        prepTime: existingRecipe.prepTime,
        cookTime: existingRecipe.cookTime,
        marinatingTime: existingRecipe.marinatingTime || { min: 0, max: 0 },
        servings: existingRecipe.servings.toString(),
        difficulty: existingRecipe.difficulty,
        ingredients: hasSectionedIngredients
          ? ['']
          : (existingRecipe.ingredients as string[]).length > 0
            ? (existingRecipe.ingredients as string[])
            : [''],
        instructions: hasSectionedInstructions
          ? ['']
          : (existingRecipe.instructions as string[]).length > 0
            ? (existingRecipe.instructions as string[])
            : [''],
        tags: existingRecipe.tags.length > 0 ? existingRecipe.tags : [''],
        accompaniment: existingRecipe.accompaniment || '',
        wine: existingRecipe.wine || '',
        source: existingRecipe.source || '',
        notes: existingRecipe.notes || '',
      })
    }
  }, [existingRecipe])

  if (!isOnline) {
    return <OfflineFallback />
  }

  if (!existingRecipe) {
    return <NotFound />
  }

  // Show 404 if no GitHub config
  if (configChecked && !githubConfig) {
    return <NotFound />
  }

  // Don't render until config and recipe are loaded
  if (!configChecked || loadingRecipe) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <p className="text-muted-foreground">Chargement...</p>
        </div>
      </div>
    )
  }

  const handleDeleteExistingImage = (index: number): void => {
    const imageToDelete = existingImages[index]

    // Move to deleted list for cleanup scheduling
    setDeletedExistingImages((prev) => [...prev, imageToDelete])

    // Remove from existing images
    setExistingImages((prev) => prev.filter((_, i) => i !== index))

    showSuccess('Image marquée pour suppression')
  }

  const handleDeleteRecipe = async (): void => {
    if (!existingRecipe || !githubConfig) return

    setIsDeleting(true)

    try {
      // Schedule cleanup for all existing images
      if (originalExistingImages.length > 0) {
        scheduleOldImageCleanup(
          originalExistingImages,
          existingRecipe.slug,
          'removed',
        )
      }

      const githubService = new GitHubService(githubConfig)
      const prUrl = await githubService.deleteRecipePR(existingRecipe)

      showSuccess(
        'Demande de suppression soumise! Pull request créée avec succès.',
      )

      // Show success message with PR link
      const openPR = confirm(
        'Demande de suppression soumise avec succès!\n\nVoulez-vous voir la pull request sur GitHub?',
      )
      if (openPR) {
        window.open(prUrl, '_blank')
      }

      // Navigate back to home after successful deletion request
      navigate('/')
    } catch (_error) {
      showError('Erreur lors de la suppression de la recette')
    } finally {
      setIsDeleting(false)
    }
  }

  const addIngredient = (): void => {
    setRecipe((prev) => ({
      ...prev,
      ingredients: [...prev.ingredients, ''],
    }))
  }

  const removeIngredient = (index: number): void => {
    setRecipe((prev) => ({
      ...prev,
      ingredients: prev.ingredients.filter((_, i) => i !== index),
    }))
  }

  const updateIngredient = (index: number, value: string): void => {
    setRecipe((prev) => ({
      ...prev,
      ingredients: prev.ingredients.map((ing, i) =>
        i === index ? value : ing,
      ),
    }))
  }

  const addInstruction = (): void => {
    setRecipe((prev) => ({
      ...prev,
      instructions: [...prev.instructions, ''],
    }))
  }

  const removeInstruction = (index: number): void => {
    setRecipe((prev) => ({
      ...prev,
      instructions: prev.instructions.filter((_, i) => i !== index),
    }))
  }

  const updateInstruction = (index: number, value: string): void => {
    setRecipe((prev) => ({
      ...prev,
      instructions: prev.instructions.map((inst, i) =>
        i === index ? value : inst,
      ),
    }))
  }

  const addTag = (): void => {
    setRecipe((prev) => ({
      ...prev,
      tags: [...prev.tags, ''],
    }))
  }

  const removeTag = (index: number): void => {
    setRecipe((prev) => ({
      ...prev,
      tags: prev.tags.filter((_, i) => i !== index),
    }))
  }

  const updateTag = (index: number, value: string): void => {
    setRecipe((prev) => ({
      ...prev,
      tags: prev.tags.map((tag, i) => (i === index ? value : tag)),
    }))
  }

  const handleSubmit = async (e: React.FormEvent): void => {
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

      // Schedule cleanup for deleted existing images
      if (deletedExistingImages.length > 0) {
        scheduleOldImageCleanup(
          deletedExistingImages,
          existingRecipe.slug,
          'removed',
        )
      }

      // Determine final images based on user actions
      let finalImages: ProcessedImage[] = []
      let imagesToKeep: ImageSizes[] = []

      if (recipeImages.length > 0) {
        // New images were added - use new images and schedule cleanup of ALL original existing images
        finalImages = recipeImages
        if (originalExistingImages.length > 0) {
          scheduleOldImageCleanup(
            originalExistingImages,
            existingRecipe.slug,
            'replaced',
          )
        }
      } else {
        // No new images - keep remaining existing images (those not deleted)
        imagesToKeep = existingImages
        finalImages = [] // No new ProcessedImages to pass to GitHub service
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

      // Pass the final images and existing images to keep
      const prUrl = await githubService.updateRecipePR(
        recipeData,
        existingRecipe,
        { images: finalImages, existingImages: imagesToKeep },
      )

      showSuccess('Modifications soumises! Pull request créée avec succès.')

      // Show success message with PR link
      const openPR = confirm(
        'Modifications soumises avec succès!\n\nVoulez-vous voir la pull request sur GitHub?',
      )
      if (openPR) {
        window.open(prUrl, '_blank')
      }
    } catch (_error) {
      showError('Erreur lors de la modification de la recette')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="mb-6">
        <Link to={`/recipe/${slug}`}>
          <Button variant="outline" className="mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour à la recette
          </Button>
        </Link>

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-2">
          <div>
            <h1 className="text-3xl font-bold">Modifier la recette</h1>
            <p className="text-muted-foreground mt-2">
              Modifiez les informations ci-dessous. Une pull request sera créée
              automatiquement sur GitHub.
            </p>
          </div>

          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="destructive" className="w-full sm:w-auto">
                <Trash2 className="w-4 h-4 mr-2" />
                Supprimer la recette
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Supprimer la recette</AlertDialogTitle>
                <AlertDialogDescription>
                  Êtes-vous sûr de vouloir supprimer la recette "
                  {existingRecipe.title}" ?
                  <br />
                  <br />
                  Cette action créera une pull request pour supprimer
                  définitivement la recette et toutes ses images associées.
                  <br />
                  <br />
                  <strong>
                    Cette action ne peut pas être annulée une fois la pull
                    request mergée.
                  </strong>
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Annuler</AlertDialogCancel>
                <AlertDialogAction
                  onClick={handleDeleteRecipe}
                  disabled={isDeleting}
                  className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                >
                  {isDeleting
                    ? 'Suppression en cours...'
                    : 'Supprimer définitivement'}
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
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

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Basic Information */}
        <Card>
          <CardHeader>
            <CardTitle>Informations de base</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label
                htmlFor="edit-recipe-title"
                className="block text-sm font-medium mb-2"
              >
                Titre de la recette *
              </label>
              <Input
                id="edit-recipe-title"
                value={recipe.title}
                onChange={(e) =>
                  setRecipe((prev) => ({ ...prev, title: e.target.value }))
                }
                placeholder="Ex: Poutine Classique"
                required
              />
            </div>

            <div>
              <label
                htmlFor="edit-recipe-description"
                className="block text-sm font-medium mb-2"
              >
                Description
              </label>
              <Textarea
                id="edit-recipe-description"
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
              <p className="block text-sm font-medium mb-2">Catégories *</p>
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
                <label
                  htmlFor="edit-recipe-servings"
                  className="block text-sm font-medium mb-2"
                >
                  Portions
                </label>
                <Input
                  id="edit-recipe-servings"
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
            <CardTitle>Images de la recette</CardTitle>
          </CardHeader>
          <CardContent>
            <ImageUpload
              images={recipeImages}
              onImagesChange={setRecipeImages}
              maxImages={1}
              recipeSlug={existingRecipe.slug}
              existingImages={existingImages}
              onExistingImageDelete={handleDeleteExistingImage}
              showExistingImages={true}
            />

            {/* Status Messages */}
            {recipeImages.length > 0 && originalExistingImages.length > 0 && (
              <div className="mt-4 p-3 bg-orange-50 border border-orange-200 rounded-lg">
                <p className="text-sm text-orange-700">
                  ⚠️ Les nouvelles images remplaceront toutes les images
                  existantes
                </p>
              </div>
            )}

            {recipeImages.length === 0 && existingImages.length > 0 && (
              <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                <p className="text-sm text-blue-700">
                  ✅ Les images existantes seront conservées
                </p>
              </div>
            )}

            {deletedExistingImages.length > 0 && (
              <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-sm text-red-700">
                  🗑️ {deletedExistingImages.length} image(s) marquée(s) pour
                  suppression
                </p>
              </div>
            )}

            {recipeImages.length === 0 && existingImages.length === 0 && (
              <div className="mt-4 p-3 bg-gray-50 border border-gray-200 rounded-lg">
                <p className="text-sm text-gray-700">
                  ℹ️ Cette recette n'aura pas d'image
                </p>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Additional Information */}
        <Card>
          <CardHeader>
            <CardTitle>Informations complémentaires</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label
                htmlFor="edit-recipe-accompaniment"
                className="block text-sm font-medium mb-2"
              >
                Accompagnement
              </label>
              <Input
                id="edit-recipe-accompaniment"
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
              <label
                htmlFor="edit-recipe-wine"
                className="block text-sm font-medium mb-2"
              >
                Accord vin
              </label>
              <Input
                id="edit-recipe-wine"
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
              <label
                htmlFor="edit-recipe-source"
                className="block text-sm font-medium mb-2"
              >
                Source
              </label>
              <Input
                id="edit-recipe-source"
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
              <label
                htmlFor="edit-recipe-notes"
                className="block text-sm font-medium mb-2"
              >
                Notes
              </label>
              <Textarea
                id="edit-recipe-notes"
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
                <p className="text-sm text-muted-foreground mb-4">
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
                  // biome-ignore lint/suspicious/noArrayIndexKey: mutable list items have no stable ID
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
                  // biome-ignore lint/suspicious/noArrayIndexKey: mutable list items have no stable ID
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
                // biome-ignore lint/suspicious/noArrayIndexKey: mutable list items have no stable ID
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
              : 'Sauvegarder les modifications'}
          </Button>
        </div>
      </form>
    </div>
  )
}

export default EditRecipe
