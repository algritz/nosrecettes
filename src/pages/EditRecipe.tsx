import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Plus, Minus, Save, ArrowLeft, Layers } from 'lucide-react';
import { showSuccess, showError } from '@/utils/toast';
import { GitHubService } from '@/services/github';
import { CategorySelector } from '@/components/CategorySelector';
import { TimeInput } from '@/components/TimeInput';
import { ImageUpload } from '@/components/ImageUpload';
import { SectionedIngredients } from '@/components/SectionedIngredients';
import { SectionedInstructions } from '@/components/SectionedInstructions';
import { ProcessedImage } from '@/utils/imageUtils';
import { IngredientSection, InstructionSection } from '@/types/recipe';
import { recipes } from '@/data/recipes';
import { recipeCategories } from '@/data/categories';
import { getRecipeCategories, getAllCategoriesFromRecipes } from '@/utils/recipeUtils';
import { NotFound } from '@/components/NotFound';

const EditRecipe = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const existingRecipe = recipes.find(r => r.slug === slug);

  const [recipe, setRecipe] = useState({
    title: '',
    description: '',
    categories: [] as string[], // Changed from category to categories
    prepTime: '',
    cookTime: '',
    marinatingTime: '',
    servings: '',
    difficulty: 'Facile',
    ingredients: [''],
    instructions: [''],
    tags: [''],
    accompaniment: '',
    wine: '',
    source: '',
    notes: ''
  });

  const [recipeImages, setRecipeImages] = useState<ProcessedImage[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [githubConfig, setGithubConfig] = useState<{ owner: string; repo: string; token: string } | null>(null);
  const [availableCategories, setAvailableCategories] = useState<string[]>([]);
  const [configChecked, setConfigChecked] = useState(false);
  
  // New state for sectioned ingredients and instructions
  const [useSectionedIngredients, setUseSectionedIngredients] = useState(false);
  const [useSectionedInstructions, setUseSectionedInstructions] = useState(false);
  const [sectionedIngredients, setSectionedIngredients] = useState<IngredientSection[]>([
    { title: '', items: [''] }
  ]);
  const [sectionedInstructions, setSectionedInstructions] = useState<InstructionSection[]>([
    { title: '', steps: [''] }
  ]);

  useEffect(() => {
    // Check GitHub config
    const savedConfig = localStorage.getItem('github-config');
    if (savedConfig) {
      setGithubConfig(JSON.parse(savedConfig));
    }
    setConfigChecked(true);

    // Get categories from existing recipes and merge with defaults
    const existingCategories = getAllCategoriesFromRecipes(recipes);
    const allCategories = Array.from(new Set([...recipeCategories, ...existingCategories])).sort();
    setAvailableCategories(allCategories);

    // Pre-fill form with existing recipe data
    if (existingRecipe) {
      // Check if existing recipe uses sectioned format
      const hasSectionedIngredients = Array.isArray(existingRecipe.ingredients) && 
        existingRecipe.ingredients.length > 0 && 
        typeof existingRecipe.ingredients[0] === 'object';
      
      const hasSectionedInstructions = Array.isArray(existingRecipe.instructions) && 
        existingRecipe.instructions.length > 0 && 
        typeof existingRecipe.instructions[0] === 'object';

      setUseSectionedIngredients(hasSectionedIngredients);
      setUseSectionedInstructions(hasSectionedInstructions);

      if (hasSectionedIngredients) {
        setSectionedIngredients(existingRecipe.ingredients as IngredientSection[]);
      }

      if (hasSectionedInstructions) {
        setSectionedInstructions(existingRecipe.instructions as InstructionSection[]);
      }

      // Get categories using the utility function for backward compatibility
      const recipeCategories = getRecipeCategories(existingRecipe);

      setRecipe({
        title: existingRecipe.title,
        description: existingRecipe.description,
        categories: recipeCategories, // Use the categories array
        prepTime: existingRecipe.prepTime.toString(),
        cookTime: existingRecipe.cookTime.toString(),
        marinatingTime: existingRecipe.marinatingTime?.toString() || '',
        servings: existingRecipe.servings.toString(),
        difficulty: existingRecipe.difficulty,
        ingredients: hasSectionedIngredients ? [''] : (existingRecipe.ingredients as string[]).length > 0 ? (existingRecipe.ingredients as string[]) : [''],
        instructions: hasSectionedInstructions ? [''] : (existingRecipe.instructions as string[]).length > 0 ? (existingRecipe.instructions as string[]) : [''],
        tags: existingRecipe.tags.length > 0 ? existingRecipe.tags : [''],
        accompaniment: existingRecipe.accompaniment || '',
        wine: existingRecipe.wine || '',
        source: existingRecipe.source || '',
        notes: existingRecipe.notes || ''
      });
    }
  }, [existingRecipe, slug, navigate]);

  if (!existingRecipe) {
    return <NotFound />;
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

  const addTag = () =>  {
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
      if (!recipe.title || recipe.categories.length === 0) {
        showError('Veuillez remplir tous les champs obligatoires (titre et au moins une catégorie)');
        return;
      }

      // Prepare recipe data with sectioned ingredients/instructions if enabled
      const recipeData = {
        ...recipe,
        ingredients: useSectionedIngredients ? sectionedIngredients : recipe.ingredients,
        instructions: useSectionedInstructions ? sectionedInstructions : recipe.instructions
      };

      const githubService = new GitHubService(githubConfig);
      const prUrl = await githubService.updateRecipePR(recipeData, existingRecipe, recipeImages);

      showSuccess('Modifications soumises! Pull request créée avec succès.');
      
      // Show success message with PR link
      const openPR = confirm(`Modifications soumises avec succès!\n\nVoulez-vous voir la pull request sur GitHub?`);
      if (openPR) {
        window.open(prUrl, '_blank');
      }

    } catch (error) {
      showError('Erreur lors de la modification de la recette');
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="mb-6">
        <Link to={`/recipe/${slug}`}>
          <Button variant="outline" className="mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour à la recette
          </Button>
        </Link>
        
        <h1 className="text-3xl font-bold">Modifier la recette</h1>
        <p className="text-muted-foreground mt-2">
          Modifiez les informations ci-dessous. Une pull request sera créée automatiquement sur GitHub.
        </p>
        
        <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-lg">
          <p className="text-sm text-green-700">
            ✅ Connecté à <strong>{githubConfig.owner}/{githubConfig.repo}</strong>
          </p>
        </div>
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
              <label className="block text-sm font-medium mb-2">Description</label>
              <Textarea
                value={recipe.description}
                onChange={(e) => setRecipe(prev => ({ ...prev, description: e.target.value }))}
                placeholder="Décrivez brièvement la recette..."
                rows={3}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Catégories *</label>
              <CategorySelector
                selectedCategories={recipe.categories}
                onCategoriesChange={(categories) => setRecipe(prev => ({ ...prev, categories }))}
                availableCategories={availableCategories}
                placeholder="Sélectionner des catégories"
                className="w-full"
              />
              <p className="text-xs text-muted-foreground mt-1">
                Sélectionnez une ou plusieurs catégories. Pour ajouter de nouvelles catégories, utilisez la page de gestion des catégories.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Temps de préparation</label>
                <TimeInput
                  value={recipe.prepTime}
                  onChange={(value) => setRecipe(prev => ({ ...prev, prepTime: value }))}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Temps de cuisson</label>
                <TimeInput
                  value={recipe.cookTime}
                  onChange={(value) => setRecipe(prev => ({ ...prev, cookTime: value }))}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Temps de marinage</label>
                <TimeInput
                  value={recipe.marinatingTime}
                  onChange={(value) => setRecipe(prev => ({ ...prev, marinatingTime: value }))}
                />
                <p className="text-xs text-muted-foreground mt-1">Optionnel</p>
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
          </CardContent>
        </Card>

        {/* Images */}
        <Card>
          <CardHeader>
            <CardTitle>Image de la recette</CardTitle>
          </CardHeader>
          <CardContent>
            <ImageUpload
              images={recipeImages}
              onImagesChange={setRecipeImages}
              maxImages={1}
            />
            <p className="text-xs text-muted-foreground mt-2">
              Ajoutez une nouvelle image pour remplacer l'image actuelle. L'image sera automatiquement redimensionnée.
            </p>
            
            {/* Show current image if no new image uploaded */}
            {recipeImages.length === 0 && (existingRecipe.images?.[0] || existingRecipe.image) && (
              <div className="mt-4 p-4 bg-muted/50 rounded-lg">
                <p className="text-sm font-medium mb-2">Image actuelle:</p>
                <div className="w-32 h-24 rounded-md overflow-hidden">
                  <img
                    src={typeof (existingRecipe.images?.[0] || existingRecipe.image) === 'string' 
                      ? (existingRecipe.images?.[0] || existingRecipe.image) 
                      : (existingRecipe.images?.[0] as any)?.small || (existingRecipe.images?.[0] as any)?.medium}
                    alt={existingRecipe.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  Cette image sera conservée si vous n'en ajoutez pas de nouvelle.
                </p>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Additional Information */}
        <Card>
          <CardHeader>
            <CardTitle>Informations complémentaires</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Accompagnement</label>
              <Input
                value={recipe.accompaniment}
                onChange={(e) => setRecipe(prev => ({ ...prev, accompaniment: e.target.value }))}
                placeholder="Ex: Salade verte, pain grillé..."
              />
              <p className="text-xs text-muted-foreground mt-1">
                Suggestions d'accompagnements pour cette recette
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Accord vin</label>
              <Input
                value={recipe.wine}
                onChange={(e) => setRecipe(prev => ({ ...prev, wine: e.target.value }))}
                placeholder="Ex: Vin rouge corsé, Chardonnay..."
              />
              <p className="text-xs text-muted-foreground mt-1">
                Suggestions d'accords vins pour cette recette
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Source</label>
              <Input
                value={recipe.source}
                onChange={(e) => setRecipe(prev => ({ ...prev, source: e.target.value }))}
                placeholder="Ex: Grand-mère Marie, Livre de cuisine..."
              />
              <p className="text-xs text-muted-foreground mt-1">
                Source de la recette (laissez vide pour utiliser votre nom d'utilisateur GitHub)
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Notes</label>
              <Textarea
                value={recipe.notes}
                onChange={(e) => setRecipe(prev => ({ ...prev, notes: e.target.value }))}
                placeholder="Ex: Cette recette se conserve 3 jours au frigo, peut être doublée facilement..."
                rows={3}
              />
              <p className="text-xs text-muted-foreground mt-1">
                Notes personnelles, conseils de conservation, variations possibles, etc.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Ingredients */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              Ingrédients
              <div className="flex gap-2">
                <Button
                  type="button"
                  variant={useSectionedIngredients ? "default" : "outline"}
                  size="sm"
                  onClick={() => setUseSectionedIngredients(!useSectionedIngredients)}
                >
                  <Layers className="w-4 h-4 mr-1" />
                  Sections
                </Button>
                {!useSectionedIngredients && (
                  <Button type="button" onClick={addIngredient} size="sm">
                    <Plus className="w-4 h-4 mr-1" />
                    Ajouter
                  </Button>
                )}
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            {useSectionedIngredients ? (
              <div>
                <p className="text-sm text-muted-foreground mb-4">
                  Organisez vos ingrédients en sections (ex: "Pour les keftas", "Pour la sauce")
                </p>
                <SectionedIngredients
                  sections={sectionedIngredients}
                  onChange={setSectionedIngredients}
                />
              </div>
            ) : (
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
            )}
          </CardContent>
        </Card>

        {/* Instructions */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              Instructions
              <div className="flex gap-2">
                <Button
                  type="button"
                  variant={useSectionedInstructions ? "default" : "outline"}
                  size="sm"
                  onClick={() => setUseSectionedInstructions(!useSectionedInstructions)}
                >
                  <Layers className="w-4 h-4 mr-1" />
                  Sections
                </Button>
                {!useSectionedInstructions && (
                  <Button type="button" onClick={addInstruction} size="sm">
                    <Plus className="w-4 h-4 mr-1" />
                    Ajouter
                  </Button>
                )}
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            {useSectionedInstructions ? (
              <div>
                <p className="text-sm text-muted-foreground mb-4">
                  Organisez vos instructions en sections (ex: "Préparation des keftas", "Préparation de la sauce")
                </p>
                <SectionedInstructions
                  sections={sectionedInstructions}
                  onChange={setSectionedInstructions}
                />
              </div>
            ) : (
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
            )}
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
            {isSubmitting ? 'Création de la pull request...' : 'Sauvegarder les modifications'}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default EditRecipe;