import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Plus, Minus, Save, ArrowLeft, Layers, FileSpreadsheet, FileText, X } from 'lucide-react';
import { showSuccess, showError } from '@/utils/toast';
import { GitHubService } from '@/services/github';
import { CategorySelector } from '@/components/CategorySelector';
import { TimeInput } from '@/components/TimeInput';
import { ImageUpload } from '@/components/ImageUpload';
import { SectionedIngredients } from '@/components/SectionedIngredients';
import { SectionedInstructions } from '@/components/SectionedInstructions';
import { CSVImporter } from '@/components/CSVImporter';
import { JSONImporter } from '@/components/JSONImporter';
import { ProcessedImage } from '@/utils/imageUtils';
import { IngredientSection, InstructionSection } from '@/types/recipe';
import { ParsedCSVRecipe } from '@/utils/csvParser';
import { recipes } from '@/data/recipes';
import { recipeCategories } from '@/data/categories';
import { getAllCategoriesFromRecipes } from '@/utils/recipeUtils';
import { NotFound } from '@/components/NotFound';

const NewRecipe = () => {
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState({
    title: '',
    description: '',
    categories: [] as string[],
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
  const [showCSVImporter, setShowCSVImporter] = useState(false);
  const [showJSONImporter, setShowJSONImporter] = useState(false);
  
  // New state for sectioned ingredients and instructions
  const [useSectionedIngredients, setUseSectionedIngredients] = useState(false);
  const [useSectionedInstructions, setUseSectionedInstructions] = useState(false);
  const [sectionedIngredients, setSectionedIngredients] = useState<IngredientSection[]>([
    { title: '', items: [''] }
  ]);
  const [sectionedInstructions, setSectionedInstructions] = useState<InstructionSection[]>([
    { title: '', steps: [''] }
  ]);

  // CSV import state
  const [csvRecipes, setCsvRecipes] = useState<ParsedCSVRecipe[]>([]);
  const [selectedCsvRecipe, setSelectedCsvRecipe] = useState<number | null>(null);

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
  }, []);

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

  const handleCSVImportSuccess = (importedRecipes: ParsedCSVRecipe[]) => {
    setCsvRecipes(importedRecipes);
    setSelectedCsvRecipe(0); // Select first recipe by default
    showSuccess(`${importedRecipes.length} recette(s) importée(s) depuis le CSV`);
  };

  const handleJSONImportSuccess = (jsonRecipe: any) => {
    // Apply JSON recipe to form
    setRecipe({
      title: jsonRecipe.title || '',
      description: jsonRecipe.description || '',
      categories: jsonRecipe.categories || [],
      prepTime: jsonRecipe.prepTime?.toString() || '',
      cookTime: jsonRecipe.cookTime?.toString() || '',
      marinatingTime: jsonRecipe.marinatingTime?.toString() || '',
      servings: jsonRecipe.servings?.toString() || '',
      difficulty: jsonRecipe.difficulty || 'Facile',
      ingredients: Array.isArray(jsonRecipe.ingredients) && typeof jsonRecipe.ingredients[0] === 'string' 
        ? jsonRecipe.ingredients 
        : [''], // Will be handled by sectioned logic below
      instructions: Array.isArray(jsonRecipe.instructions) && typeof jsonRecipe.instructions[0] === 'string' 
        ? jsonRecipe.instructions 
        : [''], // Will be handled by sectioned logic below
      tags: jsonRecipe.tags || [''],
      accompaniment: jsonRecipe.accompaniment || '',
      wine: jsonRecipe.wine || '',
      source: jsonRecipe.source || '',
      notes: jsonRecipe.notes || ''
    });

    // Handle sectioned ingredients
    if (Array.isArray(jsonRecipe.ingredients) && 
        jsonRecipe.ingredients.length > 0 && 
        typeof jsonRecipe.ingredients[0] === 'object' && 
        'items' in jsonRecipe.ingredients[0]) {
      setUseSectionedIngredients(true);
      setSectionedIngredients(jsonRecipe.ingredients as IngredientSection[]);
    } else {
      setUseSectionedIngredients(false);
    }

    // Handle sectioned instructions
    if (Array.isArray(jsonRecipe.instructions) && 
        jsonRecipe.instructions.length > 0 && 
        typeof jsonRecipe.instructions[0] === 'object' && 
        'steps' in jsonRecipe.instructions[0]) {
      setUseSectionedInstructions(true);
      setSectionedInstructions(jsonRecipe.instructions as InstructionSection[]);
    } else {
      setUseSectionedInstructions(false);
    }

    showSuccess(`Recette "${jsonRecipe.title}" importée depuis JSON`);
  };

  const applyCsvRecipe = (csvRecipe: ParsedCSVRecipe) => {
    // Determine category based on recipe content
    const category = determineRecipeCategory(csvRecipe);
    
    setRecipe({
      title: csvRecipe.title,
      description: csvRecipe.description,
      categories: [category],
      prepTime: csvRecipe.prepTime?.toString() || '',
      cookTime: csvRecipe.cookTime?.toString() || '',
      marinatingTime: '',
      servings: csvRecipe.servings?.toString() || '',
      difficulty: 'Facile',
      ingredients: csvRecipe.ingredients.length > 0 ? csvRecipe.ingredients : [''],
      instructions: csvRecipe.instructions.length > 0 ? csvRecipe.instructions : [''],
      tags: csvRecipe.tags.length > 0 ? csvRecipe.tags : [''],
      accompaniment: '',
      wine: '',
      source: '',
      notes: ''
    });
    
    showSuccess(`Recette "${csvRecipe.title}" appliquée au formulaire`);
  };

  const determineRecipeCategory = (csvRecipe: ParsedCSVRecipe): string => {
    const titleLower = csvRecipe.title.toLowerCase();
    const ingredientsText = csvRecipe.ingredients.join(' ').toLowerCase();
    
    // Entrées/Appetizers
    if (titleLower.includes('tartare') || titleLower.includes('amuse') || 
        titleLower.includes('entrée')) {
      return 'Entrées';
    }
    
    // Desserts
    if (titleLower.includes('tarte') || titleLower.includes('gâteau') || 
        titleLower.includes('mousse') || titleLower.includes('crème') ||
        titleLower.includes('dessert')) {
      return 'Desserts';
    }
    
    // Salads
    if (titleLower.includes('salade')) {
      return 'Salades';
    }
    
    // Soups
    if (titleLower.includes('soupe') || titleLower.includes('potage') || 
        titleLower.includes('velouté')) {
      return 'Soupes';
    }
    
    // Main dishes with meat/fish
    if (ingredientsText.includes('poulet') || ingredientsText.includes('bœuf') || 
        ingredientsText.includes('porc') || ingredientsText.includes('thon') ||
        ingredientsText.includes('saumon') || ingredientsText.includes('viande')) {
      return 'Plats principaux';
    }
    
    // Default to main dishes
    return 'Plats principaux';
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
      const prUrl = await githubService.createRecipePR(recipeData,  recipeImages);

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
        categories: [],
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
      setRecipeImages([]);
      setUseSectionedIngredients(false);
      setUseSectionedInstructions(false);
      setSectionedIngredients([{ title: '', items: [''] }]);
      setSectionedInstructions([{ title: '', steps: [''] }]);
      setCsvRecipes([]);
      setSelectedCsvRecipe(null);

    } catch (error) {
      showError('Erreur lors de la création de la recette');
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="mb-6">
        <Link to="/">
          <Button variant="outline" className="mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour aux recettes
          </Button>
        </Link>
        
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-2">
          <div>
            <h1 className="text-3xl font-bold">Ajouter une nouvelle recette</h1>
            <p className="text-muted-foreground mt-2">
              Remplissez le formulaire ci-dessous ou importez depuis un fichier CSV/JSON. Une pull request sera créée automatiquement sur GitHub.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
            <Button 
              variant="outline" 
              onClick={() => setShowJSONImporter(!showJSONImporter)}
              className="w-full sm:w-auto"
            >
              {showJSONImporter ? (
                <X className="w-4 h-4 mr-2" />
              ) : (
                <FileText className="w-4 h-4 mr-2" />
              )}
              {showJSONImporter ? 'Fermer JSON' : 'Importer JSON'}
            </Button>
            
            <Button 
              variant="outline" 
              onClick={() => setShowCSVImporter(!showCSVImporter)}
              className="w-full sm:w-auto"
            >
              {showCSVImporter ? (
                <X className="w-4 h-4 mr-2" />
              ) : (
                <FileSpreadsheet className="w-4 h-4 mr-2" />
              )}
              {showCSVImporter ? 'Fermer CSV' : 'Importer CSV'}
            </Button>
          </div>
        </div>
        
        <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
          <p className="text-sm text-green-700">
            ✅ Connecté à <strong>{githubConfig.owner}/{githubConfig.repo}</strong>
          </p>
        </div>
      </div>

      {/* JSON Importer */}
      {showJSONImporter && (
        <div className="mb-6">
          <Card>
            <CardHeader>
              <CardTitle>Importer une recette depuis JSON</CardTitle>
            </CardHeader>
            <CardContent>
              <JSONImporter
                onImportSuccess={handleJSONImportSuccess}
                onClose={() => setShowJSONImporter(false)}
              />
            </CardContent>
          </Card>
        </div>
      )}

      {/* CSV Importer */}
      {showCSVImporter && (
        <div className="mb-6">
          <Card>
            <CardHeader>
              <CardTitle>Importer des recettes depuis CSV</CardTitle>
            </CardHeader>
            <CardContent>
              <CSVImporter
                onImportSuccess={handleCSVImportSuccess}
                onClose={() => setShowCSVImporter(false)}
              />
            </CardContent>
          </Card>
        </div>
      )}

      {/* CSV Recipe Selection */}
      {csvRecipes.length > 0 && (
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Recettes importées du CSV ({csvRecipes.length})</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid gap-2">
                {csvRecipes.map((csvRecipe, index) => (
                  <div 
                    key={index} 
                    className={`p-3 border rounded-lg cursor-pointer transition-colors ${
                      selectedCsvRecipe === index ? 'border-primary bg-primary/5' : 'hover:bg-muted/50'
                    }`}
                    onClick={() => setSelectedCsvRecipe(index)}
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-medium">{csvRecipe.title}</h4>
                        <p className="text-sm text-muted-foreground">{csvRecipe.description}</p>
                        <div className="flex gap-4 mt-2 text-xs text-muted-foreground">
                          <span>📝 {csvRecipe.ingredients.length} ingrédients</span>
                          <span>📋 {csvRecipe.instructions.length} étapes</span>
                          {csvRecipe.prepTime && <span>⏱️ {csvRecipe.prepTime}min</span>}
                        </div>
                      </div>
                      <Button
                        size="sm"
                        onClick={(e) => {
                          e.stopPropagation();
                          applyCsvRecipe(csvRecipe);
                        }}
                      >
                        Utiliser
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      )}

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

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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
                  allowDays={true}
                />
                <p className="text-xs text-muted-foreground mt-1">Optionnel - Peut inclure des jours</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
              L'image sera automatiquement redimensionnée en plusieurs tailles pour optimiser l'affichage.
            </p>
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
                <p className="text-sm text-muted-fore ground mb-4">
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
            {isSubmitting ? 'Création de la pull request...' : 'Soumettre la recette'}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default NewRecipe;