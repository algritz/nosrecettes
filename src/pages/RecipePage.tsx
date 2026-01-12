import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Recipe } from '@/types/recipe'
import { getRecipeBySlug, openRecipeDB } from '@/utils/recipeDb'
import { RecipeDetail } from '@/components/RecipeDetail'
import { NotFound } from '@/components/NotFound'
import { SEOHead } from '@/components/SEOHead'
import {
  generateRecipeStructuredData,
  generateBreadcrumbStructuredData,
  generateRecipeKeywords,
  generateRecipeDescription,
} from '@/utils/seoUtils'
import { getResponsiveImageSrc } from '@/utils/imageUtils'
import { getRecipeCategories } from '@/utils/recipeUtils'
import { RecipeDetailSkeleton } from '@/components/RecipeDetailSkeleton'
import { fetchRecipes } from '@/utils/recipeCoordinator'

const RecipePage = () => {
  const { slug } = useParams<{ slug: string }>()
  const [recipe, setRecipe] = useState<Recipe | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Always scroll to top when recipe page loads
    window.scrollTo(0, 0)

    // Load recipe from IndexedDB
    loadRecipe().catch(console.error)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slug])

  useEffect(() => {
    if (recipe) {
      // Set page title for browser tab
      document.title = `${recipe.title} - Nos Recettes`
    } else if (!loading) {
      document.title = 'Recette non trouvée - Nos Recettes'
    }

    // Cleanup: reset title when component unmounts
    return () => {
      document.title = 'Nos Recettes'
    }
  }, [recipe, loading])

  async function fetchRecipeFromNetwork(recipeSlug: string): Promise<Recipe | null> {
    try {
      const data = await fetchRecipes({
        reason: 'network-fallback',
      })

      const foundRecipe = data.recipes.find((r: Recipe) => r.slug === recipeSlug)

      if (foundRecipe) {
        console.log(`Found recipe "${recipeSlug}" in network response, caching to IndexedDB...`)
        const db = await openRecipeDB()
        await db.put('recipes', foundRecipe)
        console.log(`Recipe "${recipeSlug}" cached successfully`)
      } else {
        console.log(`Recipe "${recipeSlug}" not found in recipes.json`)
      }

      return foundRecipe || null
    } catch (error) {
      // Preserve existing error handling: log and return null
      if (error instanceof Error && error.message === 'OFFLINE') {
        console.log('Offline - cannot fetch recipe from network')
      } else {
        console.error('Network fallback failed:', error)
      }
      return null
    }
  }

  async function loadRecipe() {
    if (!slug) return

    try {
      setLoading(true)

      // Try IndexedDB first
      let fetchedRecipe = await getRecipeBySlug(slug)

      // If not found in IndexedDB, try network fallback
      if (!fetchedRecipe) {
        console.log(`Recipe "${slug}" not found in IndexedDB, attempting network fallback...`)
        fetchedRecipe = await fetchRecipeFromNetwork(slug)
      }

      setRecipe(fetchedRecipe || null)
    } catch (error) {
      console.error('Failed to load recipe:', error)
      setRecipe(null)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return <RecipeDetailSkeleton />
  }

  if (!recipe) {
    return (
      <>
        <SEOHead
          title="Recette non trouvée - Nos Recettes"
          description="La recette que vous recherchez n'existe pas ou a été déplacée. Découvrez notre collection de recettes québécoises."
          url={`/recipe/${slug}`}
        />
        <NotFound />
      </>
    )
  }

  // Generate SEO data
  const categories = getRecipeCategories(recipe)
  const primaryCategory = categories[0] || 'Recette'

  const seoTitle = `${recipe.title} - Recette ${primaryCategory} Québécoise | Nos Recettes`
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
