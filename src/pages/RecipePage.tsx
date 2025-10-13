import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { recipes } from '@/data/recipes';
import { RecipeDetail } from '@/components/RecipeDetail';
import { NotFound } from '@/components/NotFound';
import { SEOHead } from '@/components/SEOHead';
import { 
  generateRecipeStructuredData, 
  generateBreadcrumbStructuredData,
  generateRecipeKeywords,
  generateRecipeDescription
} from '@/utils/seoUtils';
import { getResponsiveImageSrc } from '@/utils/imageUtils';
import { getRecipeCategories } from '@/utils/recipeUtils';
import { formatTime } from '@/utils/timeFormat';

const RecipePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const recipe = recipes.find(r => r.slug === slug);

  useEffect(() => {
    // Always scroll to top when recipe page loads
    window.scrollTo(0, 0);
    
    if (recipe) {
      // Set page title for browser tab
      document.title = `${recipe.title} - Nos Recettes`;
    } else {
      document.title = 'Recette non trouvée - Nos Recettes';
    }

    // Cleanup: reset title when component unmounts
    return () => {
      document.title = 'Nos Recettes';
    };
  }, [recipe, slug]); // Include slug in dependencies to ensure scroll on route change

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
    );
  }

  // Generate SEO data
  const categories = getRecipeCategories(recipe);
  const primaryCategory = categories[0] || 'Recette';
  const totalTime = recipe.prepTime + recipe.cookTime + (recipe.marinatingTime || 0);
  
  const seoTitle = `${recipe.title} - Recette ${primaryCategory} Québécoise | Nos Recettes`;
  const seoDescription = generateRecipeDescription(recipe);
  const seoKeywords = generateRecipeKeywords(recipe);
  
  // Get primary image for social sharing
  const primaryImage = recipe.images?.[0] || recipe.image;
  const ogImage = primaryImage ? getResponsiveImageSrc(primaryImage, 'large') : undefined;
  
  // Generate structured data
  const recipeStructuredData = generateRecipeStructuredData(recipe);
  const breadcrumbStructuredData = generateBreadcrumbStructuredData([
    { name: 'Accueil', url: '/' },
    { name: primaryCategory, url: `/?category=${encodeURIComponent(primaryCategory)}` },
    { name: recipe.title }
  ]);

  // Combine structured data
  const combinedStructuredData = [recipeStructuredData, breadcrumbStructuredData];

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
  );
};

export default RecipePage;