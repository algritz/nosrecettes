import { useEffect, useState } from 'react'
import { useRecipes } from '@/hooks/useRecipes'
import { RecipeCard } from '@/components/RecipeCard'
import { SearchBar } from '@/components/SearchBar'
import { RecipeStats } from '@/components/RecipeStats'
import { LoadingSpinner } from '@/components/LoadingSpinner'
import { SEOHead } from '@/components/SEOHead'
import { useInfiniteRecipes } from '@/hooks/useInfiniteRecipes'
import { useInfiniteScroll } from '@/hooks/useInfiniteScroll'
import { MadeWithDyad } from '@/components/made-with-dyad'
import { Button } from '@/components/ui/button'
import { Plus, Settings, ArrowUp } from 'lucide-react'
import { Link } from 'react-router-dom'
import { generateWebsiteStructuredData } from '@/utils/seoUtils'
import { getAllCategoriesFromRecipes } from '@/utils/recipeUtils'
import { RecipeLoadError } from '@/components/RecipeLoadError'
import { RecipeListSkeleton } from '@/components/RecipeListSkeleton'

const Index = (): React.ReactElement => {
  const [hasGitHubConfig, setHasGitHubConfig] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)

  // Load recipes from IndexedDB
  const { recipes, loading: recipesLoading, error: recipesError } = useRecipes()

  const {
    searchTerm,
    setSearchTerm,
    selectedCategories,
    setSelectedCategories,
    categories,
    displayedRecipes,
    hasMore,
    isLoading,
    loadMore,
    clearFilters,
    displayedCount,
    totalCount,
  } = useInfiniteRecipes({ recipes, batchSize: 10 })

  // Set up infinite scroll
  useInfiniteScroll({
    hasMore,
    isLoading,
    onLoadMore: loadMore,
    threshold: 200,
  })

  useEffect(() => {
    // Check if GitHub configuration exists
    const savedConfig = localStorage.getItem('github-config')
    setHasGitHubConfig(!!savedConfig)

    // Handle scroll to show/hide scroll-to-top button
    const handleScroll = (): void => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      setShowScrollTop(scrollTop > 300)
    }

    window.addEventListener('scroll', handleScroll)
    return (): void => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = (): void => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  // Generate SEO data
  const allCategories = getAllCategoriesFromRecipes(recipes)
  const seoTitle =
    searchTerm || selectedCategories.length > 0
      ? `Recettes ${selectedCategories.join(', ')} ${searchTerm} - Nos Recettes`
      : 'Nos Recettes - Collection de recettes'

  const seoDescription =
    searchTerm || selectedCategories.length > 0
      ? `Découvrez ${recipes.length} recette${recipes.length !== 1 ? 's' : ''} ${selectedCategories.join(', ')} ${searchTerm}. Recettes avec instructions détaillées et images.`
      : `Découvrez notre collection de ${recipes.length} recettes traditionnelles et modernes. Instructions détaillées, temps de préparation, et images pour chaque recette.`

  const seoKeywords = [
    'recettes québécoises',
    'cuisine québécoise',
    'recettes canadiennes',
    'recettes traditionnelles',
    'cuisine du Québec',
    ...allCategories.slice(0, 10), // Add top categories
    'recettes faciles',
    'recettes familiales',
    'recettes rapides',
  ]

  const websiteStructuredData = generateWebsiteStructuredData()

  // Show loading skeleton while recipes are loading
  if (recipesLoading) {
    return <RecipeListSkeleton />
  }

  // Show error if recipes failed to load
  if (recipesError) {
    return (
      <RecipeLoadError
        error={recipesError}
        onRetry={() => window.location.reload()}
      />
    )
  }

  return (
    <>
      <SEOHead
        title={seoTitle}
        description={seoDescription}
        keywords={seoKeywords}
        type="website"
        url="/"
        structuredData={websiteStructuredData}
      />

      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8">
          <header className="mb-12">
            {hasGitHubConfig && (
              <div className="flex flex-col sm:flex-row justify-end mb-6 gap-2">
                <Link to="/manage-categories">
                  <Button variant="outline" className="w-full sm:w-auto">
                    <Settings className="w-4 h-4 mr-2" />
                    Gérer les catégories
                  </Button>
                </Link>
                <Link to="/new-recipe">
                  <Button variant="outline" className="w-full sm:w-auto">
                    <Plus className="w-4 h-4 mr-2" />
                    Ajouter une recette
                  </Button>
                </Link>
              </div>
            )}

            <div className="text-center">
              <h1 className="text-4xl font-bold mb-4">Nos Recettes</h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Découvrez notre collection de recettes traditionnelles et
                modernes. Recherchez par nom, ingrédient ou catégorie pour
                trouver votre prochaine création culinaire.
              </p>
            </div>
          </header>

          <div className="mb-8">
            <SearchBar
              searchTerm={searchTerm}
              onSearchChange={setSearchTerm}
              selectedCategories={selectedCategories}
              onCategoriesChange={setSelectedCategories}
              categories={categories}
              onClearFilters={clearFilters}
            />
          </div>

          <RecipeStats
            displayedCount={displayedCount}
            totalCount={totalCount}
            isLoading={isLoading}
            hasMore={hasMore}
          />

          {recipes.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground mb-4">
                Aucune recette ne correspond à vos critères de recherche.
              </p>
              <p className="text-sm text-muted-foreground">
                Essayez de modifier vos filtres ou votre terme de recherche.
              </p>
            </div>
          ) : (
            <>
              <div
                data-testid="recipe-list"
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8"
              >
                {displayedRecipes.map((recipe) => (
                  <RecipeCard key={recipe.id} recipe={recipe} />
                ))}
              </div>

              {/* Loading indicator at bottom */}
              {isLoading && (
                <div className="py-8">
                  <LoadingSpinner text="Chargement de plus de recettes..." />
                </div>
              )}

              {/* Load more button as fallback for users who prefer clicking */}
              {hasMore && !isLoading && (
                <div className="text-center py-8">
                  <Button onClick={loadMore} variant="outline">
                    Charger plus de recettes
                  </Button>
                </div>
              )}

              {/* End of results message */}
              {!hasMore && displayedCount > 10 && (
                <div className="text-center py-8">
                  <p className="text-muted-foreground mb-4">
                    🎉 Vous avez vu toutes les recettes !
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {recipes.length} recette{recipes.length !== 1 ? 's' : ''} au
                    total
                  </p>
                </div>
              )}
            </>
          )}
        </div>

        {/* Scroll to Top Button */}
        {showScrollTop && (
          <div className="fixed bottom-6 right-6 z-50">
            <Button
              onClick={scrollToTop}
              size="sm"
              className="rounded-full shadow-lg"
              title="Retour en haut"
            >
              <ArrowUp className="w-4 h-4" />
            </Button>
          </div>
        )}

        <MadeWithDyad />
      </div>
    </>
  )
}

export default Index
