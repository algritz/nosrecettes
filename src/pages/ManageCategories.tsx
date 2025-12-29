import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Plus, Trash2, ArrowLeft, Save, AlertTriangle } from 'lucide-react';
import { showSuccess, showError } from '@/utils/toast';
import { GitHubService } from '@/services/github';
import { useCategoryManager } from '@/hooks/useCategoryManager';
import { recipes } from '@/data/recipes';
import { recipeCategories } from '@/data/categories';
import { getRecipeCategories } from '@/utils/recipeUtils';
import { NotFound } from '@/components/NotFound';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { useOnlineStatus } from '@/hooks/useOnlineStatus';
import { OfflineFallback } from '@/components/OfflineFallback';

const ManageCategories = () => {
  const isOnline = useOnlineStatus();
  const navigate = useNavigate();
  const [githubConfig, setGithubConfig] = useState<{ owner: string; repo: string; token: string } | null>(null);
  const [newCategoryName, setNewCategoryName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [configChecked, setConfigChecked] = useState(false);

  // Get all categories from existing recipes and merge with defaults (same as recipe forms)
  const existingRecipeCategories = recipes.flatMap(recipe => getRecipeCategories(recipe));
  const allCategories = Array.from(new Set([...recipeCategories, ...existingRecipeCategories])).sort();

  const { categories, addCategory, removeCategory, getChangesForPR, hasChanges, clearChanges } = useCategoryManager(allCategories);

  // Get category usage counts using the utility function
  const getCategoryUsage = (category: string): number => {
    return recipes.filter(recipe => {
      const recipeCategories = getRecipeCategories(recipe);
      return recipeCategories.includes(category);
    }).length;
  };

  // Check if category can be deleted (not used by any recipe)
  const canDeleteCategory = (category: string): boolean => {
    return getCategoryUsage(category) === 0;
  };

  useEffect(() => {
    // Check GitHub config
    const savedConfig = localStorage.getItem('github-config');
    if (savedConfig) {
      setGithubConfig(JSON.parse(savedConfig));
    }
    setConfigChecked(true);
  }, []);

  if (!isOnline) {
    return <OfflineFallback />;
  }

  // Show 404 if no GitHub config
  if (configChecked && !githubConfig) {
    return <NotFound />;
  }

  // Don't render until config is checked
  if (!configChecked) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <p className="text-muted-foreground">Chargement...</p>
        </div>
      </div>
    );
  }

  const handleAddCategory = () => {
    const trimmedName = newCategoryName.trim();
    
    if (!trimmedName) {
      showError('Veuillez entrer un nom de catégorie');
      return;
    }

    if (categories.includes(trimmedName)) {
      showError('Cette catégorie existe déjà');
      return;
    }

    addCategory(trimmedName);
    setNewCategoryName('');
    showSuccess(`Catégorie "${trimmedName}" ajoutée`);
  };

  const handleDeleteCategory = (category: string) => {
    if (!canDeleteCategory(category)) {
      showError('Impossible de supprimer une catégorie utilisée par des recettes');
      return;
    }

    removeCategory(category);
    showSuccess(`Catégorie "${category}" supprimée`);
  };

  const handleSubmitChanges = async () => {
    const changes = getChangesForPR();
    
    if (changes.length === 0) {
      showError('Aucune modification à soumettre');
      return;
    }

    setIsSubmitting(true);

    try {
      const githubService = new GitHubService(githubConfig);
      const prUrl = await githubService.createCategoryPR(changes);

      showSuccess('Modifications soumises! Pull request créée avec succès.');
      
      // Show success message with PR link
      const openPR = confirm(`Catégories soumises avec succès!\n\nVoulez-vous voir la pull request sur GitHub?`);
      if (openPR) {
        window.open(prUrl, '_blank');
      }
      
      // Clear changes after successful submission
      clearChanges();

    } catch (error) {
      showError('Erreur lors de la soumission des modifications');
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const changes = getChangesForPR();
  const addedCategories = changes.filter(c => c.type === 'add');
  const removedCategories = changes.filter(c => c.type === 'remove');

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="mb-6">
        <Link to="/">
          <Button variant="outline" className="mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour aux recettes
          </Button>
        </Link>
        
        <h1 className="text-3xl font-bold">Gestion des catégories</h1>
        <p className="text-muted-foreground mt-2">
          Ajoutez ou supprimez des catégories de recettes. Les modifications seront soumises via une pull request.
        </p>
        
        <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-lg">
          <p className="text-sm text-green-700">
            ✅ Connecté à <strong>{githubConfig.owner}/{githubConfig.repo}</strong>
          </p>
        </div>
      </div>

      {/* Add New Category */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Ajouter une nouvelle catégorie</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-2">
            <Input
              value={newCategoryName}
              onChange={(e) => setNewCategoryName(e.target.value)}
              placeholder="Nom de la nouvelle catégorie"
              onKeyPress={(e) => e.key === 'Enter' && handleAddCategory()}
              className="flex-1"
            />
            <Button onClick={handleAddCategory} disabled={!newCategoryName.trim()}>
              <Plus className="w-4 h-4 mr-2" />
              Ajouter
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Pending Changes */}
      {hasChanges() && (
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              Modifications en attente
              <Button onClick={handleSubmitChanges} disabled={isSubmitting}>
                <Save className="w-4 h-4 mr-2" />
                {isSubmitting ? 'Création de la pull request...' : 'Soumettre les modifications'}
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Alert>
              <AlertTriangle className="h-4 w-4" />
              <AlertDescription>
                <div className="space-y-2">
                  {addedCategories.length > 0 && (
                    <div>
                      <strong>Ajouts ({addedCategories.length}):</strong> {addedCategories.map(c => c.category).join(', ')}
                    </div>
                  )}
                  {removedCategories.length > 0 && (
                    <div>
                      <strong>Suppressions ({removedCategories.length}):</strong> {removedCategories.map(c => c.category).join(', ')}
                    </div>
                  )}
                </div>
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>
      )}

      {/* Categories List */}
      <Card>
        <CardHeader>
          <CardTitle>Catégories existantes ({categories.length})</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3">
            {categories.map((category) => {
              const usageCount = getCategoryUsage(category);
              const canDelete = canDeleteCategory(category);
              const isAdded = addedCategories.some(c => c.category === category);
              const isRemoved = removedCategories.some(c => c.category === category);

              return (
                <div key={category} className={`flex items-center justify-between p-3 border rounded-lg ${isRemoved ? 'opacity-50 bg-red-50' : isAdded ? 'bg-green-50' : ''}`}>
                  <div className="flex items-center gap-3">
                    <span className="font-medium">{category}</span>
                    {isAdded && (
                      <Badge variant="secondary" className="bg-green-100 text-green-800">Nouveau</Badge>
                    )}
                    {isRemoved && (
                      <Badge variant="secondary" className="bg-red-100 text-red-800">À supprimer</Badge>
                    )}
                    <Badge variant="outline">
                      {usageCount} recette{usageCount !== 1 ? 's' : ''}
                    </Badge>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    {canDelete && !isRemoved ? (
                      <AlertDialog>
                        <AlertDialogTrigger asChild>
                          <Button variant="outline" size="sm">
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                          <AlertDialogHeader>
                            <AlertDialogTitle>Supprimer la catégorie</AlertDialogTitle>
                            <AlertDialogDescription>
                              Êtes-vous sûr de vouloir supprimer la catégorie "{category}" ?
                              Cette action ne peut pas être annulée.
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel>Annuler</AlertDialogCancel>
                            <AlertDialogAction onClick={() => handleDeleteCategory(category)}>
                              Supprimer
                            </AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                    ) : (
                      <Button variant="outline" size="sm" disabled title={isRemoved ? "Déjà marquée pour suppression" : "Impossible de supprimer une catégorie utilisée"}>
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {categories.length === 0 && (
            <div className="text-center py-8 text-muted-foreground">
              Aucune catégorie trouvée
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default ManageCategories;