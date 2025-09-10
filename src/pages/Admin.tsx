import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Plus, Minus, Save, ArrowLeft, Settings, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { showSuccess, showError } from '@/utils/toast';
import { GitHubService } from '@/services/github';
import { GitHubSetup } from '@/components/GitHubSetup';
import { CategoryCombobox } from '@/components/CategoryCombobox';
import { recipes } from '@/data/recipes';

const Admin = () => {
  const [recipe, setRecipe] = useState({
    title: '',
    description: '',
    category: '',
    prepTime: '',
    cookTime: '',
    servings: '',
    difficulty: '',
    ingredients: [''],
    instructions: [''],
    tags: [''],
    image: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [githubConfig, setGithubConfig] = useState<{ owner: string; repo: string; token: string } | null>(null);
  const [showSetup, setShowSetup] = useState(false);
  const [availableCategories, setAvailableCategories] = useState<string[]>([]);

  const defaultCategories = [
    'Plats principaux',
    'Desserts',
    'Entrées',
    'Accompagnements',
    'Soupes',
    'Salades',
    'Boissons',
    'Collations'
  ];

  useEffect(() => {
    // Load GitHub config from localStorage
    const savedConfig = localStorage.getItem('github-config');
    if (savedConfig) {
      setGithubConfig(JSON.parse(savedConfig));
    }

    // Get categories from existing recipes and merge with defaults
    const existingCategories = Array.from(new Set(recipes.map(recipe => recipe.category)));
    const allCategories = Array.from(new Set([...defaultCategories, ...existingCategories]));
    setAvailableCategories(allCategories);
  }, []);

  const addCategory = (newCategory: string) => {
    if (!availableCategories.includes(newCategory)) {
      setAvailableCategories(prev => [...prev, newCategory].sort());
    }
  };

  const addIngredient = () => {
    setRecipe(prev => ({
      ...prev,
      ingredients: [...prev.ingredients, '']
    }));
  };

  const removeIngredient = (index: number) => {
    setRecipe(prev => ({
      ...prev,
      ingredients: prev.ingredients.filter((_, i) => i !== index)
    }));
  };

  const updateIngredient = (index: number, value: string) => {
    setRecipe(prev => ({
      ...prev,
      ingredients: prev.ingredients.map((ing, i) => i === index ? value : ing)
    }));
  };

  const addInstruction = () => {
    setRecipe(prev => ({
      ...prev,
      instructions: [...prev.instructions, '']
    }));
  };

  const removeInstruction = (index: number) => {
    setRecipe(prev => ({
      ...prev,
      instructions: prev.instructions.filter((_, i) => i !== index)
    }));
  };

  const updateInstruction = (index: number, value: string) => {
    setRecipe(prev => ({
      ...prev,
      instructions: prev.instructions.map((inst, i) => i === index ? value : inst)
    }));
  };

  const addTag = () => {
    setRecipe(prev => ({
      ...prev,
      tags: [...prev.tags, '']
    }));
  };

  const removeTag = (index: number) => {
    setRecipe(prev => ({
      ...prev,
      tags: prev.tags.filter((_, i) => i !== index)
    }));
  };

  const updateTag = (index: number, value: string) => {
    setRecipe(prev => ({
      ...prev,
      tags: prev.tags.map((tag, i) => i === index ? value : tag)
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Validate required fields
      if (!recipe.title || !recipe.description || !recipe.category) {
        showError('Veuillez remplir tous les champs obligatoires');
        return;
      }

      if (!githubConfig) {
        showError('Configuration GitHub manquante');
        setShowSetup(true);
        return;
      }

      const githubService = new GitHubService(githubConfig);
      const prUrl = await githubService.createRecipePR(recipe);

      showSuccess('Recette soumise! Pull request créée avec succès.');
      
      // Show success message with PR link
      const openPR = confirm(`Recette soumise avec succès!\n\nVoulez-vous voir la pull request sur GitHub?`);
      if (openPR) {
        window.open(prUrl, '_blank');
      }
      
      // Reset form
      setRecipe({
        title: '',
        description: '',
        category: '',
        prepTime: '',
        cookTime: '',
        servings: '',
        difficulty: '',
        ingredients: [''],
        instructions: [''],
        tags: [''],
        image: ''
      });

    } catch (error) {
      showError('Erreur lors de la création de la recette');
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleConfigSaved = (config: { owner: string; repo: string; token: string }) => {
    setGithubConfig(config);
    setShowSetup(false);
  };

  if (showSetup || !githubConfig) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Link to="/">
            <Button variant="outline" className="mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Retour aux recettes
            </Button>
          </Link>
        </div>
        <GitHubSetup onConfigSaved={handleConfigSaved} />
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <Link to="/">
            <Button variant="outline">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Retour aux recettes
            </Button>
          </Link>
          <Button variant="outline" onClick={() => setShowSetup(true)}>
            <Settings className="w-4 h-4 mr-2" />
            Configuration GitHub
          </Button>
        </div>
        
        <h1 className="text-3xl font-bold">Ajouter une nouvelle recette</h1>
        <p className="text-muted-foreground mt-2">
          Remplissez le formulaire ci-dessous. Une pull request sera créée automatiquement sur GitHub.
        </p>
        
        {githubConfig && (
          <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-lg">
            <p className="text-sm text-green-700">
              ✅ Connecté à <strong>{githubConfig.owner}/{githubConfig.repo}</strong>
            </p>
          </div>
        )}
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Basic Information */}
        <Card>
          <CardHeader>
            <CardTitle>Informations de base</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Titre de la recette *</label>
              <Input
                value={recipe.title}
                onChange={(e) => setRecipe(prev => ({ ...prev, title: e.target.value }))}
                placeholder="Ex: Poutine Classique"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Description *</label>
              <Textarea
                value={recipe.description}
                onChange={(e) => setRecipe(prev => ({ ...prev, description: e.target.value }))}
                placeholder="Décrivez brièvement la recette..."
                rows={3}
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Catégorie *</label>
                <CategoryCombobox
                  value={recipe.category}
                  onValueChange={(value) => setRecipe(prev => ({ ...prev, category: value }))}
                  categories={availableCategories}
                  onAddCategory={addCategory}
                  placeholder="Choisir ou créer une catégorie"
                  className="w-full"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Difficulté</label>
                <Select value={recipe.difficulty} onValueChange={(value) => setRecipe(prev => ({ ...prev, difficulty: value }))}>
                  <SelectTrigger>
                    <SelectValue placeholder="Choisir la difficulté" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Facile">Facile</SelectItem>
                    <SelectItem value="Moyen">Moyen</SelectItem>
                    <SelectItem value="Difficile">Difficile</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Temps de préparation (min)</label>
                <Input
                  type="number"
                  value={recipe.prepTime}
                  onChange={(e) => setRecipe(prev => ({ ...prev, prepTime: e.target.value }))}
                  placeholder="15"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Temps de cuisson (min)</label>
                <Input
                  type="number"
                  value={recipe.cookTime}
                  onChange={(e) => setRecipe(prev => ({ ...prev, cookTime: e.target.value }))}
                  placeholder="30"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Portions</label>
                <Input
                  type="number"
                  value={recipe.servings}
                  onChange={(e) => setRecipe(prev => ({ ...prev, servings: e.target.value }))}
                  placeholder="4"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Image (optionnel)</label>
              <Input
                value={recipe.image}
                onChange={(e) => setRecipe(prev => ({ ...prev, image: e.target.value }))}
                placeholder="Ex: /images/ma-recette.jpg"
              />
              <p className="text-xs text-muted-foreground mt-1">
                Laissez vide pour utiliser le nom automatique basé sur le titre
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Ingredients */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              Ingrédients
              <Button type="button" onClick={addIngredient} size="sm">
                <Plus className="w-4 h-4 mr-1" />
                Ajouter
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {recipe.ingredients.map((ingredient, index) => (
                <div key={index} className="flex gap-2">
                  <Input
                    value={ingredient}
                    onChange={(e) => updateIngredient(index, e.target.value)}
                    placeholder="Ex: 2 tasses de farine"
                    className="flex-1"
                  />
                  {recipe.ingredients.length > 1 && (
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={() => removeIngredient(index)}
                    >
                      <Minus className="w-4 h-4" />
                    </Button>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Instructions */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              Instructions
              <Button type="button" onClick={addInstruction} size="sm">
                <Plus className="w-4 h-4 mr-1" />
                Ajouter
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {recipe.instructions.map((instruction, index) => (
                <div key={index} className="flex gap-2">
                  <span className="flex-shrink-0 w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium mt-2">
                    {index + 1}
                  </span>
                  <Textarea
                    value={instruction}
                    onChange={(e) => updateInstruction(index, e.target.value)}
                    placeholder="Décrivez cette étape..."
                    rows={2}
                    className="flex-1"
                  />
                  {recipe.instructions.length > 1 && (
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={() => removeInstruction(index)}
                      className="mt-2"
                    >
                      <Minus className="w-4 h-4" />
                    </Button>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Tags */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              Tags (pour la recherche)
              <Button type="button" onClick={addTag} size="sm">
                <Plus className="w-4 h-4 mr-1" />
                Ajouter
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {recipe.tags.map((tag, index) => (
                <div key={index} className="flex gap-2">
                  <Input
                    value={tag}
                    onChange={(e) => updateTag(index, e.target.value)}
                    placeholder="Ex: québécois, rapide, végétarien"
                    className="flex-1"
                  />
                  {recipe.tags.length > 1 && (
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={() => removeTag(index)}
                    >
                      <Minus className="w-4 h-4" />
                    </Button>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Submit */}
        <div className="flex justify-end">
          <Button type="submit" disabled={isSubmitting} size="lg">
            <Save className="w-4 h-4 mr-2" />
            {isSubmitting ? 'Création de la pull request...' : 'Soumettre la recette'}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Admin;