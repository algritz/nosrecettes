import { LoadingSpinner } from './LoadingSpinner';

interface RecipeStatsProps {
  displayedCount: number;
  totalCount: number;
  isLoading: boolean;
  hasMore: boolean;
}

export const RecipeStats = ({ displayedCount, totalCount, isLoading, hasMore }: RecipeStatsProps) => {
  return (
    <div className="flex items-center justify-between mb-6">
      <p className="text-sm text-muted-foreground">
        {displayedCount} sur {totalCount} recette{totalCount !== 1 ? 's' : ''} affichée{displayedCount !== 1 ? 's' : ''}
      </p>
      
      {isLoading && (
        <LoadingSpinner size="sm" text="Chargement..." />
      )}
      
      {!hasMore && totalCount > 10 && (
        <p className="text-xs text-muted-foreground">
          Toutes les recettes ont été chargées
        </p>
      )}
    </div>
  );
};