import { Recipe } from '@/types/recipe';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, Users, ChefHat, ArrowLeft, Timer, Utensils, Wine, BookOpen, Edit, ChevronLeft, ChevronRight, StickyNote } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { formatTime } from '@/utils/timeFormat';
import { getMaxTime } from '@/utils/timeUtils';
import { useState, useEffect } from 'react';
import { ResponsiveImage } from './ResponsiveImage';
import { getRecipeCategories } from '@/utils/recipeUtils';
import { IngredientSection, InstructionSection } from '@/types/recipe';

interface RecipeDetailProps {
  recipe: Recipe;
}

export const RecipeDetail = ({ recipe }: RecipeDetailProps) => {
  const [hasGitHubConfig, setHasGitHubConfig] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const categories = getRecipeCategories(recipe);

  useEffect(() => {
    // Check if GitHub configuration exists
    const savedConfig = localStorage.getItem('github-config');
    setHasGitHubConfig(!!savedConfig);
  }, []);

  // Get all available images (new format + backward compatibility)
  const allImages = recipe.images || (recipe.image ? [recipe.image] : []);
  const hasMultipleImages = allImages.length > 1;
  const hasAnyImage = allImages.length > 0;

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % allImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + allImages.length) % allImages.length);
  };

  // Helper function to render ingredients
  const renderIngredients = () => {
    if (!recipe.ingredients || recipe.ingredients.length === 0) {
      return <p className="text-muted-foreground">Aucun ingrédient spécifié</p>;
    }

    // Check if ingredients are sectioned
    const firstIngredient = recipe.ingredients[0];
    if (typeof firstIngredient === 'object' && 'title' in firstIngredient) {
      // Sectioned ingredients
      const sections = recipe.ingredients as IngredientSection[];
      return (
        <div className="space-y-6">
          {sections.map((section, sectionIndex) => (
            <div key={sectionIndex}>
              {section.title && (
                <h4 className="font-semibold text-primary mb-3 border-b border-border pb-1">
                  {section.title}
                </h4>
              )}
              <ul className="space-y-2">
                {section.items.map((ingredient, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    {ingredient}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      );
    } else {
      // Regular ingredients array
      const ingredients = recipe.ingredients as string[];
      return (
        <ul className="space-y-2">
          {ingredients.map((ingredient, index) => (
            <li key={index} className="flex items-start gap-2">
              <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
              {ingredient}
            </li>
          ))}
        </ul>
      );
    }
  };

  // Helper function to render instructions
  const renderInstructions = () => {
    if (!recipe.instructions || recipe.instructions.length === 0) {
      return <p className="text-muted-foreground">Aucune instruction spécifiée</p>;
    }

    // Check if instructions are sectioned
    const firstInstruction = recipe.instructions[0];
    if (typeof firstInstruction === 'object' && 'title' in firstInstruction) {
      // Sectioned instructions - each section starts numbering from 1
      const sections = recipe.instructions as InstructionSection[];

      return (
        <div className="space-y-6">
          {sections.map((section, sectionIndex) => (
            <div key={sectionIndex}>
              {section.title && (
                <h4 className="font-semibold text-primary mb-3 border-b border-border pb-1">
                  {section.title}
                </h4>
              )}
              <ol className="space-y-4">
                {section.steps.map((instruction, stepIndex) => (
                  <li key={stepIndex} className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium">
                      {stepIndex + 1}
                    </span>
                    <span>{instruction}</span>
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </div>
      );
    } else {
      // Regular instructions array
      const instructions = recipe.instructions as string[];
      return (
        <ol className="space-y-4">
          {instructions.map((instruction, index) => (
            <li key={index} className="flex gap-3">
              <span className="flex-shrink-0 w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium">
                {index + 1}
              </span>
              <span>{instruction}</span>
            </li>
          ))}
        </ol>
      );
    }
  };

  // Check if recipe has any tags to display
  const hasValidTags = recipe.tags && recipe.tags.length > 0 && recipe.tags.some(tag => tag.trim() !== '');

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
        
        <div className="flex flex-wrap gap-2 mb-4">
          {categories.map((category) => (
            <Badge key={category} variant="secondary">{category}</Badge>
          ))}
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
          {recipe.marinatingTime && getMaxTime(recipe.marinatingTime) > 0 && (
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
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Ingrédients</CardTitle>
          </CardHeader>
          <CardContent>
            {renderIngredients()}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Instructions</CardTitle>
          </CardHeader>
          <CardContent>
            {renderInstructions()}
          </CardContent>
        </Card>
      </div>

      {/* Notes, Accompaniment, Wine, and Source - After instructions in logical order */}
      {(recipe.notes || recipe.accompaniment || recipe.wine || recipe.source) && (
        <div className="mt-8 space-y-4">
          {/* Notes */}
          {recipe.notes && (
            <div className="flex items-start gap-2 p-3 bg-muted/50 rounded-lg">
              <StickyNote className="w-5 h-5 mt-0.5 text-muted-foreground" />
              <div>
                <p className="font-medium text-sm">Notes</p>
                <p className="text-sm text-muted-foreground whitespace-pre-wrap">{recipe.notes}</p>
              </div>
            </div>
          )}

          {/* Accompaniment */}
          {recipe.accompaniment && (
            <div className="flex items-start gap-2 p-3 bg-muted/50 rounded-lg">
              <Utensils className="w-5 h-5 mt-0.5 text-muted-foreground" />
              <div>
                <p className="font-medium text-sm">Accompagnement</p>
                <p className="text-sm text-muted-foreground">{recipe.accompaniment}</p>
              </div>
            </div>
          )}

          {/* Wine pairing - Moved to logical position after accompaniment */}
          {recipe.wine && (
            <div className="flex items-start gap-2 p-3 bg-muted/50 rounded-lg">
              <Wine className="w-5 h-5 mt-0.5 text-muted-foreground" />
              <div>
                <p className="font-medium text-sm">Accord vin</p>
                <p className="text-sm text-muted-foreground">{recipe.wine}</p>
              </div>
            </div>
          )}

          {/* Source */}
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

      {/* Tags section - only show if recipe has valid tags */}
      {hasValidTags && (
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Tags</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {recipe.tags.filter(tag => tag.trim() !== '').map((tag) => (
                <Badge key={tag} variant="outline">
                  {tag}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};