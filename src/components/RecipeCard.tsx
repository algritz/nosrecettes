import { Recipe } from '@/types/recipe';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, Users, ChefHat, ImageIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { formatTimeShort } from '@/utils/timeFormat';

interface RecipeCardProps {
  recipe: Recipe;
}

export const RecipeCard = ({ recipe }: RecipeCardProps) => {
  const totalTime = recipe.prepTime + recipe.cookTime;
  
  return (
    <Link to={`/recipe/${recipe.slug}`}>
      <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer overflow-hidden">
        {recipe.image ? (
          <div className="aspect-video w-full overflow-hidden">
            <img 
              src={recipe.image} 
              alt={recipe.title}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                const placeholder = target.nextElementSibling as HTMLElement;
                if (placeholder) placeholder.style.display = 'flex';
              }}
            />
            <div className="hidden w-full h-full bg-muted items-center justify-center">
              <ImageIcon className="w-12 h-12 text-muted-foreground" />
            </div>
          </div>
        ) : (
          <div className="aspect-video w-full bg-muted flex items-center justify-center">
            <ImageIcon className="w-12 h-12 text-muted-foreground" />
          </div>
        )}
        
        <CardHeader>
          <div className="flex justify-between items-start mb-2">
            <Badge variant="secondary">{recipe.category}</Badge>
            <Badge 
              variant={recipe.difficulty === 'Facile' ? 'default' : recipe.difficulty === 'Moyen' ? 'secondary' : 'destructive'}
            >
              {recipe.difficulty}
            </Badge>
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
  );
};