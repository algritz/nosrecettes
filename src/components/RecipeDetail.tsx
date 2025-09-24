import { Recipe } from '@/types/recipe';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, Users, ChefHat, ArrowLeft, Timer, Utensils, Wine, BookOpen, Edit, ChevronLeft, ChevronRight, StickyNote, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { formatTime } from '@/utils/timeFormat';
import { useState, useEffect } from 'react';
import { ResponsiveImage } from './ResponsiveImage';

interface RecipeDetailProps {
  recipe: Recipe;
}

export const RecipeDetail = ({ recipe }: RecipeDetailProps) => {
  const [hasGitHubConfig, setHasGitHubConfig] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    // Check if GitHub configuration exists
    const savedConfig = localStorage.getItem('github-config');
    setHasGitHubConfig(!!savedConfig);

    // Handle scroll to show/hide scroll-to-top button
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setShowScrollTop(scrollTop > 300); // Show after scrolling 300px
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Get all available images (new format + backward compatibility)
  const allImages = recipe.images || (recipe.image ? [recipe.image] : []);
  const hasMultipleImages = allImages.length > 1;
  const hasAnyImage = allImages.length > 0;

  // Debug logging
  console.log('Recipe images:', recipe.images);
  console.log('Recipe image (old format):', recipe.image);
  console.log('All images:', allImages);
  console.log('Has any image:', hasAnyImage);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % allImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + allImages.length) % allImages.length);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-2">
          <Link to="/">
            <Button variant="outline" className="w-full sm:w-auto">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Retour aux recettes
            </Button>
          </Link>
          
          {hasGitHubConfig && (
            <Link to={`/edit-recipe/${recipe.slug}`}>
              <Button variant="outline" className="w-full sm:w-auto">
                <Edit className="w-4 h-4 mr-2" />
                Modifier cette recette
              </Button>
            </Link>
          )}
        </div>
        
        {/* Image Gallery */}
        {hasAnyImage && (
          <div className="mb-6">
            <div className="relative">
              <ResponsiveImage
                src={allImages[currentImageIndex]}
                alt={`${recipe.title} - Image ${currentImageIndex + 1}`}
                size="large"
                aspectRatio="video"
                className="w-full rounded-lg"
                showPlaceholder={true}
              />
              
              {/* Navigation arrows for multiple images */}
              {hasMultipleImages && (
                <>
                  <Button
                    variant="secondary"
                    size="sm"
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 opacity-80 hover:opacity-100"
                    onClick={prevImage}
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="secondary"
                    size="sm"
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 opacity-80 hover:opacity-100"
                    onClick={nextImage}
                  >
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </>
              )}
              
              {/* Image counter */}
              {hasMultipleImages && (
                <div className="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                  {currentImageIndex + 1} / {allImages.length}
                </div>
              )}
            </div>
            
            {/* Thumbnail navigation */}
            {hasMultipleImages && (
              <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
                {allImages.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`flex-shrink-0 w-20 h-16 rounded-md overflow-hidden border-2 transition-colors ${
                      index === currentImageIndex ? 'border-primary' : 'border-transparent'
                    }`}
                  >
                    <ResponsiveImage
                      src={image}
                      alt={`${recipe.title} - Miniature ${index + 1}`}
                      size="small"
                      aspectRatio="auto"
                      className="w-full h-full"
                      showPlaceholder={true}
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
        )}
        
        {/* Debug info - remove this after fixing */}
        {!hasAnyImage && (
          <div className="mb-6 p-4 bg-yellow-100 border border-yellow-300 rounded-lg">
            <p className="text-sm">Debug: No images found</p>
            <p className="text-xs">Recipe images: {JSON.stringify(recipe.images)}</p>
            <p className="text-xs">Recipe image: {JSON.stringify(recipe.image)}</p>
          </div>
        )}
        
        <div className="flex flex-wrap gap-2 mb-4">
          <Badge variant="secondary">{recipe.category}</Badge>
        </div>
        
        <h1 className="text-4xl font-bold mb-4">{recipe.title}</h1>
        <p className="text-lg text-muted-foreground mb-6">{recipe.description}</p>
        
        <div className="flex flex-wrap items-center gap-6 text-sm mb-6">
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5" />
            <span>Préparation: {formatTime(recipe.prepTime)}</span>
          </div>
          <div className="flex items-center gap-2">
            <ChefHat className="w-5 h-5" />
            <span>Cuisson: {formatTime(recipe.cookTime)}</span>
          </div>
          {recipe.marinatingTime && recipe.marinatingTime > 0 && (
            <div className="flex items-center gap-2">
              <Timer className="w-5 h-5" />
              <span>Marinage: {formatTime(recipe.marinatingTime)}</span>
            </div>
          )}
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5" />
            <span>{recipe.servings} portions</span>
          </div>
        </div>

        {/* Additional Information - Only accompaniment and wine */}
        {(recipe.accompaniment || recipe.wine) && (
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            {recipe.accompaniment && (
              <div className="flex items-start gap-2 p-3 bg-muted/50 rounded-lg">
                <Utensils className="w-5 h-5 mt-0.5 text-muted-foreground" />
                <div>
                  <p className="font-medium text-sm">Accompagnement</p>
                  <p className="text-sm text-muted-foreground">{recipe.accompaniment}</p>
                </div>
              </div>
            )}
            
            {recipe.wine && (
              <div className="flex items-start gap-2 p-3 bg-muted/50 rounded-lg">
                <Wine className="w-5 h-5 mt-0.5 text-muted-foreground" />
                <div>
                  <p className="font-medium text-sm">Accord vin</p>
                  <p className="text-sm text-muted-foreground">{recipe.wine}</p>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Ingrédients</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  {ingredient}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Instructions</CardTitle>
          </CardHeader>
          <CardContent>
            <ol className="space-y-4">
              {recipe.instructions.map((instruction, index) => (
                <li key={index} className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium">
                    {index + 1}
                  </span>
                  <span>{instruction}</span>
                </li>
              ))}
            </ol>
          </CardContent>
        </Card>
      </div>

      {/* Notes and Source - After instructions in discrete format, Notes first */}
      {(recipe.notes || recipe.source) && (
        <div className="grid md:grid-cols-2 gap-4 mt-8">
          {recipe.notes && (
            <div className={`flex items-start gap-2 p-3 bg-muted/50 rounded-lg ${recipe.source ? '' : 'md:col-span-2'}`}>
              <StickyNote className="w-5 h-5 mt-0.5 text-muted-foreground" />
              <div>
                <p className="font-medium text-sm">Notes</p>
                <p className="text-sm text-muted-foreground whitespace-pre-wrap">{recipe.notes}</p>
              </div>
            </div>
          )}

          {recipe.source && (
            <div className="flex items-start gap-2 p-3 bg-muted/50 rounded-lg">
              <BookOpen className="w-5 h-5 mt-0.5 text-muted-foreground" />
              <div>
                <p className="font-medium text-sm">Source</p>
                <p className="text-sm text-muted-foreground">{recipe.source}</p>
              </div>
            </div>
          )}
        </div>
      )}

      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Tags</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {recipe.tags.map((tag) => (
              <Badge key={tag} variant="outline">
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <div className="mt-8 flex justify-center">
          <Button
            onClick={scrollToTop}
            variant="outline"
            size="sm"
            className="flex items-center gap-2"
          >
            <ArrowUp className="w-4 h-4" />
            Retour en haut
          </Button>
        </div>
      )}
    </div>
  );
};