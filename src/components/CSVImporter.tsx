import { useState, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { Textarea } from '@/components/ui/textarea';
import { Upload, FileText, AlertTriangle, CheckCircle, Copy, Check } from 'lucide-react';
import { parseCSVRecipes, ParsedCSVRecipe, CSVParseResult } from '@/utils/csvParser';
import { showSuccess, showError } from '@/utils/toast';

interface CSVImporterProps {
  onImportSuccess: (recipes: ParsedCSVRecipe[]) => void;
  onClose: () => void;
}

export const CSVImporter = ({ onImportSuccess, onClose }: CSVImporterProps) => {
  const [csvContent, setCsvContent] = useState('');
  const [parseResult, setParseResult] = useState<CSVParseResult | null>(null);
  const [selectedRecipes, setSelectedRecipes] = useState<Set<number>>(new Set());
  const [copiedRecipes, setCopiedRecipes] = useState<Set<number>>(new Set());
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      const content = e.target?.result as string;
      setCsvContent(content);
      handleParseCSV(content);
    };
    reader.readAsText(file, 'utf-8');
  };

  const handleParseCSV = (content?: string) => {
    const textToParse = content || csvContent;
    if (!textToParse.trim()) {
      showError('Veuillez fournir du contenu CSV');
      return;
    }

    try {
      const result = parseCSVRecipes(textToParse);
      setParseResult(result);
      
      // Select all recipes by default
      setSelectedRecipes(new Set(result.recipes.map((_, index) => index)));
      
      if (result.recipes.length > 0) {
        showSuccess(`${result.recipes.length} recette(s) analysée(s) avec succès!`);
      }
      
      if (result.errors.length > 0) {
        console.warn('Erreurs de parsing:', result.errors);
      }
    } catch (error) {
      showError('Erreur lors de l\'analyse du CSV');
      console.error(error);
    }
  };

  const toggleRecipeSelection = (index: number) => {
    const newSelection = new Set(selectedRecipes);
    if (newSelection.has(index)) {
      newSelection.delete(index);
    } else {
      newSelection.add(index);
    }
    setSelectedRecipes(newSelection);
  };

  const selectAllRecipes = () => {
    if (!parseResult) return;
    setSelectedRecipes(new Set(parseResult.recipes.map((_, index) => index)));
  };

  const deselectAllRecipes = () => {
    setSelectedRecipes(new Set());
  };

  const copyRecipeData = async (recipe: ParsedCSVRecipe, index: number) => {
    const recipeText = `Titre: ${recipe.title}
Description: ${recipe.description}
Temps de préparation: ${recipe.prepTime || 0} minutes
Temps de cuisson: ${recipe.cookTime || 0} minutes
Portions: ${recipe.servings || 1}

Ingrédients:
${recipe.ingredients.map(ing => `- ${ing}`).join('\n')}

Instructions:
${recipe.instructions.map((inst, i) => `${i + 1}. ${inst}`).join('\n')}

Tags: ${recipe.tags.join(', ')}`;

    try {
      await navigator.clipboard.writeText(recipeText);
      setCopiedRecipes(prev => new Set([...prev, index]));
      setTimeout(() => {
        setCopiedRecipes(prev => {
          const newSet = new Set(prev);
          newSet.delete(index);
          return newSet;
        });
      }, 2000);
      showSuccess('Recette copiée dans le presse-papiers');
    } catch (error) {
      showError('Erreur lors de la copie');
    }
  };

  const handleImportSelected = () => {
    if (!parseResult || selectedRecipes.size === 0) {
      showError('Aucune recette sélectionnée');
      return;
    }

    const selectedRecipeData = Array.from(selectedRecipes).map(index => parseResult.recipes[index]);
    onImportSuccess(selectedRecipeData);
    onClose();
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Importer des recettes depuis un fichier CSV</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-2">
            <input
              ref={fileInputRef}
              type="file"
              accept=".csv,.txt"
              onChange={handleFileUpload}
              className="hidden"
            />
            <Button 
              onClick={() => fileInputRef.current?.click()}
              variant="outline"
              className="flex-1"
            >
              <Upload className="w-4 h-4 mr-2" />
              Choisir un fichier CSV
            </Button>
            <Button onClick={() => handleParseCSV()} disabled={!csvContent.trim()}>
              <FileText className="w-4 h-4 mr-2" />
              Analyser
            </Button>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Ou coller le contenu CSV directement:
            </label>
            <Textarea
              value={csvContent}
              onChange={(e) => setCsvContent(e.target.value)}
              placeholder="Plain Content	Title
Tartare de thon, radis et pêches Ingrédients: 500 g de thon...	Tartare de thon, radis et pêches"
              rows={6}
              className="font-mono text-sm"
            />
          </div>

          <Alert>
            <AlertTriangle className="h-4 w-4" />
            <AlertDescription>
              Format attendu: CSV avec colonnes "Plain Content" et "Title". 
              Le contenu doit inclure les sections Ingrédients:, Instructions:, Préparation:, etc.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {parseResult && (
        <>
          {/* Summary */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                Résultats de l'analyse
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" onClick={selectAllRecipes}>
                    Tout sélectionner
                  </Button>
                  <Button variant="outline" size="sm" onClick={deselectAllRecipes}>
                    Tout désélectionner
                  </Button>
                  <Button 
                    onClick={handleImportSelected}
                    disabled={selectedRecipes.size === 0}
                  >
                    Importer {selectedRecipes.size} recette(s)
                  </Button>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">{parseResult.recipes.length}</div>
                  <div className="text-sm text-muted-foreground">Recettes trouvées</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">{selectedRecipes.size}</div>
                  <div className="text-sm text-muted-foreground">Sélectionnées</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-600">{parseResult.errors.length}</div>
                  <div className="text-sm text-muted-foreground">Erreurs</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">
                    {parseResult.recipes.reduce((sum, recipe) => sum + recipe.ingredients.length, 0)}
                  </div>
                  <div className="text-sm text-muted-foreground">Ingrédients total</div>
                </div>
              </div>

              {parseResult.errors.length > 0 && (
                <Alert>
                  <AlertTriangle className="h-4 w-4" />
                  <AlertDescription>
                    <div className="space-y-1">
                      <strong>Erreurs rencontrées:</strong>
                      {parseResult.errors.slice(0, 5).map((error, index) => (
                        <div key={index} className="text-xs">{error}</div>
                      ))}
                      {parseResult.errors.length > 5 && (
                        <div className="text-xs">... et {parseResult.errors.length - 5} autres erreurs</div>
                      )}
                    </div>
                  </AlertDescription>
                </Alert>
              )}
            </CardContent>
          </Card>

          {/* Recipe List */}
          <div className="space-y-4">
            {parseResult.recipes.map((recipe, index) => (
              <Card key={index} className={`${selectedRecipes.has(index) ? 'ring-2 ring-primary' : ''}`}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        checked={selectedRecipes.has(index)}
                        onChange={() => toggleRecipeSelection(index)}
                        className="mt-1"
                      />
                      <div>
                        <CardTitle className="text-lg">{recipe.title}</CardTitle>
                        <p className="text-sm text-muted-foreground mt-1">{recipe.description}</p>
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => copyRecipeData(recipe, index)}
                      title="Copier les données de la recette"
                    >
                      {copiedRecipes.has(index) ? (
                        <Check className="w-4 h-4 text-green-600" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <h4 className="font-medium text-sm mb-2">Informations</h4>
                      <div className="space-y-1 text-sm">
                        {recipe.prepTime && <div>⏱️ Préparation: {recipe.prepTime} min</div>}
                        {recipe.cookTime && <div>🔥 Cuisson: {recipe.cookTime} min</div>}
                        {recipe.servings && <div>👥 Portions: {recipe.servings}</div>}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium text-sm mb-2">Tags</h4>
                      <div className="flex flex-wrap gap-1">
                        {recipe.tags.map((tag, tagIndex) => (
                          <Badge key={tagIndex} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium text-sm mb-2">
                        Ingrédients ({recipe.ingredients.length})
                      </h4>
                      <div className="bg-muted p-2 rounded text-xs max-h-32 overflow-y-auto">
                        <ul className="space-y-1">
                          {recipe.ingredients.slice(0, 5).map((ingredient, ingIndex) => (
                            <li key={ingIndex}>• {ingredient}</li>
                          ))}
                          {recipe.ingredients.length > 5 && (
                            <li className="text-muted-foreground">
                              ... et {recipe.ingredients.length - 5} autres
                            </li>
                          )}
                        </ul>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium text-sm mb-2">
                        Instructions ({recipe.instructions.length})
                      </h4>
                      <div className="bg-muted p-2 rounded text-xs max-h-32 overflow-y-auto">
                        <ol className="space-y-1">
                          {recipe.instructions.slice(0, 3).map((instruction, instIndex) => (
                            <li key={instIndex}>{instIndex + 1}. {instruction}</li>
                          ))}
                          {recipe.instructions.length > 3 && (
                            <li className="text-muted-foreground">
                              ... et {recipe.instructions.length - 3} autres étapes
                            </li>
                          )}
                        </ol>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </>
      )}
    </div>
  );
};