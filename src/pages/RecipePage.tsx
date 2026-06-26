import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { NotFound } from '@/components/NotFound'
import { RecipeDetail } from '@/components/RecipeDetail'
import { RecipeDetailSkeleton } from '@/components/RecipeDetailSkeleton'
import { SEOHead } from '@/components/SEOHead'
import { useIndexedDBReady } from '@/hooks/useIndexedDBReady'
import type { Recipe } from '@/types/recipe'
import { getResponsiveImageSrc } from '@/utils/imageUtils'
import { fetchRecipes } from '@/utils/recipeCoordinator'
import { getRecipeBySlug, openRecipeDB } from '@/utils/recipeDb'
import { getRecipeCategories } from '@/utils/recipeUtils'
import {
  generateBreadcrumbStructuredData,
  generateRecipeDescription,
  generateRecipeKeywords,
  generateRecipeStructuredData,
} from '@/utils/seoUtils'

const RecipePage = (): React.JSX.Element => {
  const { slug } = useParams<{ slug: string }>()
  const [recipe, setRecipe] = useState<Recipe | null>(null)
  const [loading, setLoading] = useState(true)
  const [timeoutElapsed, setTimeoutElapsed] = useState(false)
  const { isReady: dbReady, isChecking: dbChecking } = useIndexedDBReady()

  // biome-ignore lint/correctness/useExhaustiveDependencies: loadRecipe is defined in component scope
  useEffect(() => {
    // Always scroll to top when recipe page loads
    window.scrollTo(0, 0)

    // Reset timeout state when slug changes
    setTimeoutElapsed(false)

    // Only load recipe once IndexedDB is ready
    if (dbReady) {
      // biome-ignore lint/suspicious/noConsole: intentional error logging
      loadRecipe().catch(console.error)
    }
  }, [dbReady])

  // Timeout mechanism: wait 5 seconds before showing 404
  useEffect(() => {
    // Start timeout once DB is ready and we're loading
    if (dbReady && !recipe) {
      const timer = setTimeout(() => {
        setTimeoutElapsed(true)
      }, 5000) // 5 seconds

      return (): void => clearTimeout(timer)
    }
  }, [dbReady, recipe])

  useEffect(() => {
    if (recipe) {
      // Set page title for browser tab
      document.title = `${recipe.title} - Nos Recettes`
    } else if (!loading) {
      document.title = 'Recette non trouvée - Nos Recettes'
    }

    // Cleanup: reset title when component unmounts
    return (): void => {
      document.title = 'Nos Recettes'
    }
  }, [recipe, loading])

  async function fetchRecipeFromNetwork(
    recipeSlug: string,
  ): Promise<Recipe | null> {
    try {
      const data = await fetchRecipes({
        reason: 'network-fallback',
      })

      const foundRecipe = data.recipes.find(
        (r: Recipe) => r.slug === recipeSlug,
      )

      if (foundRecipe) {
        const db = await openRecipeDB()
        await db.put('recipes', foundRecipe)
      } else {
      }

      return foundRecipe || null
    } catch (error) {
      // Preserve existing error handling: log and return null
      if (error instanceof Error && error.message === 'OFFLINE') {
      } else {
      }
      return null
    }
  }

  async function loadRecipe(): Promise<void> {
    if (!slug) return

    try {
      setLoading(true)

      // IndexedDB is guaranteed to be ready at this point (via useEffect dependency)
      // Try to get recipe directly from IndexedDB
      let fetchedRecipe = await getRecipeBySlug(slug)

      // If not found in IndexedDB, try network fallback
      if (!fetchedRecipe) {
        fetchedRecipe = await fetchRecipeFromNetwork(slug)
      }

      setRecipe(fetchedRecipe || null)
    } catch (_error) {
      setRecipe(null)
    } finally {
      setLoading(false)
    }
  }

  // Show loading skeleton while DB is initializing or recipe is loading
  if (dbChecking || loading) {
    return <RecipeDetailSkeleton />
  }

  // Show skeleton if recipe not found but timeout hasn't elapsed yet
  // This prevents the 404 flash when sharing links
  if (!recipe && !timeoutElapsed) {
    return <RecipeDetailSkeleton />
  }

  // Show 404 only after timeout has elapsed and recipe is still not found
  if (!recipe && timeoutElapsed) {
    return (
      <>
        <SEOHead
          title="Recette non trouvée - Nos Recettes"
          description="La recette que vous recherchez n'existe pas ou a été déplacée. Découvrez notre collection de recettes."
          url={`/recipe/${slug}`}
        />
        <NotFound />
      </>
    )
  }

  // Generate SEO data
  const categories = getRecipeCategories(recipe)
  const primaryCategory = categories[0] || 'Recette'

  const seoTitle = `${recipe.title} - Recette ${primaryCategory} | Nos Recettes`
  const seoDescription = generateRecipeDescription(recipe)
  const seoKeywords = generateRecipeKeywords(recipe)

  // Get primary image for social sharing
  const primaryImage = recipe.images?.[0] || recipe.image
  const ogImage = primaryImage
    ? getResponsiveImageSrc(primaryImage, 'large')
    : undefined

  // Generate structured data
  const recipeStructuredData = generateRecipeStructuredData(recipe)
  const breadcrumbStructuredData = generateBreadcrumbStructuredData([
    { name: 'Accueil', url: '/' },
    {
      name: primaryCategory,
      url: `/?category=${encodeURIComponent(primaryCategory)}`,
    },
    { name: recipe.title },
  ])

  // Combine structured data
  const combinedStructuredData = [
    recipeStructuredData,
    breadcrumbStructuredData,
  ]

  return (
    <>
      <SEOHead
        title={seoTitle}
        description={seoDescription}
        keywords={seoKeywords}
        image={ogImage}
        url={`/recipe/${recipe.slug}`}
        type="article"
        structuredData={combinedStructuredData}
      />

      <div className="container mx-auto px-4 py-8">
        <RecipeDetail recipe={recipe} />
      </div>
    </>
  )
}

export default RecipePage
