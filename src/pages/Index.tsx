import { recipes } from '@/data/recipes';
import { RecipeCard } from '@/components/RecipeCard';
import { SearchBar } from '@/components/SearchBar';
import { useRecipeSearch } from '@/hooks/useRecipeSearch';
import { MadeWithDyad } from '@/components/made-with-dyad';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  const {
    searchTerm,
    setSearchTerm,
    selectedCategory,
    setSelectedCategory,
    selectedDifficulty,
    setSelectedDifficulty,
    categories,
    filteredRecipes,
    clearFilters
  } = useRecipeSearch(recipes);

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <header className="mb-12">
          <div className="flex justify-end mb-6">
            <Link to="/admin">
              <Button variant="outline">
                <Plus className="w-4 h-4 mr-2" />
                Ajouter une recette
              </Button>
            </Link>
          </div>
          
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Nos Recettes</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Découvrez notre collection de recettes québécoises traditionnelles et modernes. 
              Recherchez par nom, ingrédient ou catégorie pour trouver votre prochaine création culinaire.
            </p>
          </div>
        </header>

        <div className="mb-8">
          <SearchBar
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
            selectedDifficulty={selectedDifficulty}
            onDifficultyChange={setSelectedDifficulty}
            categories={categories}
            onClearFilters={clearFilters}
          />
        </div>

        <div className="mb-6">
          <p className="text-sm text-muted-foreground">
            {filteredRecipes.length} recette{filteredRecipes.length !== 1 ? 's' : ''} trouvée{filteredRecipes.length !== 1 ? 's' : ''}
          </p>
        </div>

        {filteredRecipes.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground mb-4">
              Aucune recette ne correspond à vos critères de recherche.
            </p>
            <p className="text-sm text-muted-foreground">
              Essayez de modifier vos filtres ou votre terme de recherche.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {filteredRecipes.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
        )}
      </div>
      
      <MadeWithDyad />
    </div>
  );
};

export default Index;