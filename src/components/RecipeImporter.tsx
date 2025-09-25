import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { Textarea } from '@/components/ui/textarea';
import { Loader2, Download, AlertTriangle, Copy, Check } from 'lucide-react';
import { parseRecipeFromHtml, ParseResult } from '@/utils/recipeParser';
import { showSuccess, showError } from '@/utils/toast';

interface RecipeImporterProps {
  onImportSuccess: (data: any) => void;
  onClose: () => void;
}

export const RecipeImporter = ({ onImportSuccess, onClose }: RecipeImporterProps) => {
  const [url, setUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [parseResult, setParseResult] = useState<ParseResult | null>(null);
  const [copiedItems, setCopiedItems] = useState<Set<number>>(new Set());

  const handleImport = async () => {
    if (!url.trim()) {
      showError('Veuillez entrer une URL');
      return;
    }

    // Basic URL validation
    try {
      new URL(url);
    } catch {
      showError('URL invalide');
      return;
    }

    setIsLoading(true);
    setParseResult(null);

    try {
      const result = await parseRecipeFromHtml(url);
      setParseResult(result);

      if (result.success) {
        showSuccess('Recette importée avec succès!');
      } else {
        showError(result.error || 'Erreur lors de l\'importation');
      }
    } catch (error) {
      showError('Erreur lors de l\'importation de la recette');
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleUseImportedData = () => {
    if (!parseResult?.mapped) return;

    const importedData = {
      title: parseResult.mapped.title || '',
      description: parseResult.mapped.description || '',
      prepTime: parseResult.mapped.prepTime?.toString() || '',
      cookTime: parseResult.mapped.cookTime?.toString() || '',
      servings: parseResult.mapped.servings?.toString() || '',
      ingredients: parseResult.mapped.ingredients?.filter(ing => ing.trim()) || [''],
      instructions: parseResult.mapped.instructions?.filter(inst => inst.trim()) || [''],
      tags: parseResult.mapped.tags || [''],
      source: parseResult.mapped.source || new URL(url).hostname,
      imageUrl: parseResult.mapped.imageUrl
    };

    onImportSuccess(importedData);
    onClose();
  };

  const copyToClipboard = async (text: string, index: number) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedItems(prev => new Set([...prev, index]));
      setTimeout(() => {
        setCopiedItems(prev => {
          const newSet = new Set(prev);
          newSet.delete(index);
          return newSet;
        });
      }, 2000);
    } catch (error) {
      showError('Erreur lors de la copie');
    }
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Importer une recette depuis une URL</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-2">
            <Input
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="https://www.nosrecettes.ca/post/marteau-de-thor"
              className="flex-1"
              onKeyPress={(e) => e.key === 'Enter' && !isLoading && handleImport()}
            />
            <Button onClick={handleImport} disabled={isLoading || !url.trim()}>
              {isLoading ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <Download className="w-4 h-4" />
              )}
              {isLoading ? 'Import...' : 'Importer'}
            </Button>
          </div>

          <Alert>
            <AlertTriangle className="h-4 w-4" />
            <AlertDescription>
              L'importation fonctionne mieux avec des sites qui utilisent des données structurées (JSON-LD, microdata).
              Certains sites peuvent bloquer l'importation automatique.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {parseResult && (
        <>
          {parseResult.success ? (
            <>
              {/* Mapped Data Preview */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    Données extraites
                    <Button onClick={handleUseImportedData}>
                      Utiliser ces données
                    </Button>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {parseResult.mapped.title && (
                    <div>
                      <label className="text-sm font-medium">Titre:</label>
                      <p className="text-sm bg-muted p-2 rounded">{parseResult.mapped.title}</p>
                    </div>
                  )}

                  {parseResult.mapped.description && (
                    <div>
                      <label className="text-sm font-medium">Description:</label>
                      <p className="text-sm bg-muted p-2 rounded">{parseResult.mapped.description}</p>
                    </div>
                  )}

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {parseResult.mapped.prepTime && parseResult.mapped.prepTime > 0 && (
                      <div>
                        <label className="text-sm font-medium">Préparation:</label>
                        <p className="text-sm bg-muted p-2 rounded">{parseResult.mapped.prepTime} min</p>
                      </div>
                    )}

                    {parseResult.mapped.cookTime && parseResult.mapped.cookTime > 0 && (
                      <div>
                        <label className="text-sm font-medium">Cuisson:</label>
                        <p className="text-sm bg-muted p-2 rounded">{parseResult.mapped.cookTime} min</p>
                      </div>
                    )}

                    {parseResult.mapped.servings && parseResult.mapped.servings > 0 && (
                      <div>
                        <label className="text-sm font-medium">Portions:</label>
                        <p className="text-sm bg-muted p-2 rounded">{parseResult.mapped.servings}</p>
                      </div>
                    )}

                    {parseResult.mapped.source && (
                      <div>
                        <label className="text-sm font-medium">Source:</label>
                        <p className="text-sm bg-muted p-2 rounded">{parseResult.mapped.source}</p>
                      </div>
                    )}
                  </div>

                  {parseResult.mapped.ingredients && parseResult.mapped.ingredients.length > 0 && (
                    <div>
                      <label className="text-sm font-medium">Ingrédients ({parseResult.mapped.ingredients.length}):</label>
                      <div className="bg-muted p-2 rounded max-h-32 overflow-y-auto">
                        <ul className="text-sm space-y-1">
                          {parseResult.mapped.ingredients.map((ingredient, index) => (
                            <li key={index}>• {ingredient}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}

                  {parseResult.mapped.instructions && parseResult.mapped.instructions.length > 0 && (
                    <div>
                      <label className="text-sm font-medium">Instructions ({parseResult.mapped.instructions.length}):</label>
                      <div className="bg-muted p-2 rounded max-h-32 overflow-y-auto">
                        <ol className="text-sm space-y-1">
                          {parseResult.mapped.instructions.map((instruction, index) => (
                            <li key={index}>{index + 1}. {instruction}</li>
                          ))}
                        </ol>
                      </div>
                    </div>
                  )}

                  {parseResult.mapped.imageUrl && (
                    <div>
                      <label className="text-sm font-medium">Image trouvée:</label>
                      <div className="flex items-center gap-2">
                        <img 
                          src={parseResult.mapped.imageUrl} 
                          alt="Recipe" 
                          className="w-16 h-16 object-cover rounded"
                          onError={(e) => {
                            (e.target as HTMLImageElement).style.display = 'none';
                          }}
                        />
                        <p className="text-xs text-muted-foreground break-all">
                          {parseResult.mapped.imageUrl}
                        </p>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Unmapped Content */}
              {parseResult.unmapped.length > 0 && (
                <Card>
                  <CardHeader>
                    <CardTitle>Contenu non mappé</CardTitle>
                    <p className="text-sm text-muted-foreground">
                      Informations trouvées qui n'ont pas pu être automatiquement classées. 
                      Vous pouvez les copier et les coller manuellement dans les champs appropriés.
                    </p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {parseResult.unmapped.map((item, index) => (
                        <div key={index} className="border rounded-lg p-3">
                          <div className="flex items-start justify-between gap-2 mb-2">
                            <Badge variant="outline" className="text-xs">
                              {item.context}
                            </Badge>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => copyToClipboard(item.text, index)}
                              className="h-6 w-6 p-0"
                            >
                              {copiedItems.has(index) ? (
                                <Check className="w-3 h-3 text-green-600" />
                              ) : (
                                <Copy className="w-3 h-3" />
                              )}
                            </Button>
                          </div>
                          <p className="text-sm text-muted-foreground">{item.text}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}
            </>
          ) : (
            <Card>
              <CardContent className="pt-6">
                <Alert>
                  <AlertTriangle className="h-4 w-4" />
                  <AlertDescription>
                    {parseResult.error || 'Impossible d\'extraire les données de cette URL'}
                  </AlertDescription>
                </Alert>
              </CardContent>
            </Card>
          )}
        </>
      )}
    </div>
  );
};