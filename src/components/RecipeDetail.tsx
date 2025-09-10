import { Recipe } from '@/types/recipe';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Clock, Users, ChefHat, ArrowLeft, ImageIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { formatTime } from '@/utils/timeFormat';

interface RecipeDetailProps {
  recipe: Recipe;
}

export const RecipeDetail = ({ recipe }: RecipeDetailProps) => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-6">
        <Link to="/">
          <Button variant="outline" className="mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour aux recettes
          </Button>
        </Link>
        
        {recipe.image && (
          <div className="aspect-video w-full mb-6 rounded-lg overflow-hidden">
            <img 
              src={recipe.image} 
              alt={recipe.title}
              className="w-full h-full object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                const placeholder = target.nextElementSibling as HTMLElement;
                if (placeholder) placeholder.style.display = 'flex';
              }}
            />
            <div className="hidden w-full h-full bg-muted items-center justify-center rounded-lg">
              <ImageIcon className="w-16 h-16 text-muted-foreground" />
            </div>
          </div>
        )}
        
        <div className="flex flex-wrap gap-2 mb-4">
          <Badge variant="secondary">{recipe.category}</Badge>
          <Badge 
            variant={recipe.difficulty === 'Facile' ? 'default' : recipe.difficulty === 'Moyen' ? 'secondary' : 'destructive'}
          >
            {recipe.difficulty}
          </Badge>
        </div>
        
        <h1 className="text-4xl font-bold mb-4">{recipe.title}</h1>
        <p className="text-lg text-muted-foreground mb-6">{recipe.description}</p>
        
        <div className="flex items-center gap-6 text-sm">
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5" />
            <span>Préparation: {formatTime(recipe.prepTime)}</span>
          </div>
          <div className="flex items-center gap-2">
            <ChefHat className="w-5 h-5" />
            <span>Cuisson: {formatTime(recipe.cookTime)}</span>
          </div>
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
    </div>
  );
};