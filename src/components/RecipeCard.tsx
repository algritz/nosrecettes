import { Recipe } from '@/types/recipe'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Clock, Users } from 'lucide-react'
import { Link } from 'react-router-dom'
import { formatTimeShort } from '@/utils/timeFormat'
import { getMaxTime } from '@/utils/timeUtils'
import { ResponsiveImage } from './ResponsiveImage'
import { getRecipeCategories, getPrimaryCategory } from '@/utils/recipeUtils'

interface RecipeCardProps {
  recipe: Recipe
}

export const RecipeCard = ({ recipe }: RecipeCardProps): React.ReactElement => {
  // Use max values for total time calculation (conservative estimate)
  const totalTime =
    getMaxTime(recipe.prepTime) +
    getMaxTime(recipe.cookTime) +
    (recipe.marinatingTime ? getMaxTime(recipe.marinatingTime) : 0)
  const categories = getRecipeCategories(recipe)
  const primaryCategory = getPrimaryCategory(recipe)

  // Get the primary image (first image from new format or fallback to old image field)
  const primaryImage = recipe.images?.[0] || recipe.image

  return (
    <Link to={`/recipe/${recipe.slug}`} data-testid="recipe-card">
      <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer overflow-hidden">
        <ResponsiveImage
          src={primaryImage}
          alt={recipe.title}
          size="small"
          aspectRatio="video"
          className="w-full"
          showPlaceholder={true}
        />

        <CardHeader>
          <div className="flex flex-wrap gap-1 mb-2">
            {categories.length > 0 ? (
              categories.map((category, index) => (
                <Badge
                  key={category}
                  variant={index === 0 ? 'default' : 'secondary'}
                  className="text-xs"
                >
                  {category}
                </Badge>
              ))
            ) : (
              <Badge variant="secondary" className="text-xs">
                {primaryCategory}
              </Badge>
            )}
          </div>
          <CardTitle className="text-lg">{recipe.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
            {recipe.description}
          </p>

          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {formatTimeShort(totalTime)}
            </div>
            <div className="flex items-center gap-1">
              <Users className="w-4 h-4" />
              {recipe.servings}
            </div>
          </div>

          <div className="flex flex-wrap gap-1">
            {recipe.tags.slice(0, 3).map((tag) => (
              <Badge key={tag} variant="outline" className="text-xs">
                {tag}
              </Badge>
            ))}
            {recipe.tags.length > 3 && (
              <Badge variant="outline" className="text-xs">
                +{recipe.tags.length - 3}
              </Badge>
            )}
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
