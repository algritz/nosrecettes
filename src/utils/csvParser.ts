import type { TimeRange } from '@/types/recipe';

export interface ParsedCSVRecipe {
  title: string;
  description: string;
  ingredients: string[];
  instructions: string[];
  prepTime?: TimeRange;
  cookTime?: TimeRange;
  servings?: number;
  tags: string[];
}

export interface CSVParseResult {
  recipes: ParsedCSVRecipe[];
  errors: string[];
}

/**
 * Parse time field from CSV text
 * Supports:
 * - Single values: "20 minutes" → { min: 20, max: 20 }
 * - Range notation: "20-25 minutes" → { min: 20, max: 25 }
 */
const parseTimeFromText = (text: string): TimeRange => {
  // Look for range notation first: "20-25 minutes" or "1-2 heures"
  const rangeMatch = text.match(/(\d+)\s*-\s*(\d+)\s*(?:minutes?|mins?|h|heures?)/i);
  if (rangeMatch) {
    let min = parseInt(rangeMatch[1]);
    let max = parseInt(rangeMatch[2]);

    // If it contains "h" or "heure", convert to minutes
    if (text.match(/h|heure/i)) {
      min *= 60;
      max *= 60;
    }

    // Ensure min <= max
    if (max < min) {
      console.warn(`Invalid time range in CSV: ${text}. Swapping values.`);
      return { min: max, max: min };
    }

    return { min, max };
  }

  // Look for single value: "15 minutes", "30 min", etc.
  const timeMatch = text.match(/(\d+)\s*(?:minutes?|mins?|h|heures?)/i);
  if (timeMatch) {
    let value = parseInt(timeMatch[1]);
    // If it contains "h" or "heure", convert to minutes
    if (text.match(/h|heure/i)) {
      value *= 60;
    }
    return { min: value, max: value };
  }

  return { min: 0, max: 0 };
};

const parseServingsFromText = (text: string): number => {
  // Look for patterns like "Portions: 2 personnes", "4 portions", etc.
  const servingsMatch = text.match(/(?:portions?|personnes?):\s*(\d+)|(\d+)\s*(?:portions?|personnes?)/i);
  if (servingsMatch) {
    return parseInt(servingsMatch[1] || servingsMatch[2]);
  }
  return 0;
};

const extractIngredients = (text: string): string[] => {
  // Look for "Ingrédients:" followed by the ingredients list
  const ingredientsMatch = text.match(/Ingrédients:\s*(.*?)(?=Instructions:|Préparation:|Cuisson:|Portions:|$)/is);
  
  if (ingredientsMatch) {
    const ingredientsText = ingredientsMatch[1].trim();
    
    // First, try to split by line breaks if they exist
    if (ingredientsText.includes('\n')) {
      return ingredientsText
        .split('\n')
        .map(ing => ing.trim())
        .filter(ing => ing.length > 2);
    }
    
    // For single-line ingredients, use a more inclusive approach
    // Split on patterns that clearly indicate a new ingredient starting
    
    // Look for: number (including fractions and ranges) followed by optional space and unit/word
    // This captures: "2 à 4 steak", "1/4 tasse", "1 boîte", "400g", "400 g", "2tasses", "2 tasses", "le jus", etc.
    const ingredients = ingredientsText.split(/(?=(?:\d+(?:\s*\/\s*\d+)?(?:\s*à\s*\d+)?\s*(?:g|kg|ml|l|lb|oz|tasse|tasses|cup|cups|c\.\s*à\s*(?:soupe|thé)|cuillère|cuilleres?|boîte|boites?|paquet|paquets|livre|livres|once|onces|pincée|pincees?|\w+)|le\s+jus|la\s+\w+))/i);
    
    // Clean up and filter
    const cleanedIngredients = ingredients
      .map(ing => ing.trim())
      .filter(ing => ing.length > 2)
      .map(ing => ing.replace(/[,;]$/, '').trim())
      .filter(ing => !ing.match(/^(?:Instructions|Préparation|Cuisson|Portions)/i));
    
    if (cleanedIngredients.length > 1) {
      return cleanedIngredients;
    }
    
    // If that didn't work well, try a different approach
    // Look for common ingredient starters more broadly
    const alternativeIngredients = ingredientsText.split(/(?=\d+(?:\s*\/\s*\d+)?(?:\s*à\s*\d+)?(?:\s*(?:g|kg|ml|l|tasse|tasses|boîte|boîtes|c\.\s*à|cuillère|livre|livres)|\s+\w+)|\ble\s|\bla\s|\bdu\s|\bde\s|\bdes\s|\bd')/i);
    
    const altCleaned = alternativeIngredients
      .map(ing => ing.trim())
      .filter(ing => ing.length > 2)
      .map(ing => ing.replace(/[,;]$/, '').trim());
    
    if (altCleaned.length > 1) {
      return altCleaned;
    }
    
    // Last resort: return as single ingredient
    return [ingredientsText.trim()];
  }
  
  return [];
};

const extractInstructions = (text: string): string[] => {
  // Look for "Instructions:" followed by the instructions
  const instructionsMatch = text.match(/Instructions:\s*(.*?)(?=Préparation:|Cuisson:|Portions:|$)/is);
  
  if (instructionsMatch) {
    const instructionsText = instructionsMatch[1].trim();
    
    // Split by sentence endings or numbered steps
    const instructions = instructionsText
      .split(/(?<=\.)\s+(?=[A-Z])|(?=\d+\.)/g)
      .map(inst => inst.trim())
      .filter(inst => inst.length > 0)
      .filter(inst => !inst.match(/^(?:Préparation|Cuisson|Portions)/i));
    
    // Clean up instructions
    return instructions.map(inst => {
      return inst
        .replace(/^\d+\.\s*/, '') // Remove leading numbers
        .replace(/\s+/g, ' ') // Normalize whitespace
        .trim();
    }).filter(inst => inst.length > 5); // Filter out very short strings
  }
  
  return [];
};

const extractDescription = (text: string, title: string): string => {
  // Only look for explicit description sections, don't try to extract from content
  const descriptionMatch = text.match(/(?:Description|Résumé):\s*(.*?)(?=Ingrédients:|Instructions:|Préparation:|$)/is);
  if (descriptionMatch && descriptionMatch[1].trim().length > 10) {
    const desc = descriptionMatch[1].trim();
    // Make sure it's not just ingredients or instructions that got mismatched
    if (!desc.match(/^\d+\s*(?:g|kg|ml|l|c\.\s*à\s*(?:soupe|thé)|tasse|cuillère)/i) &&
        !desc.match(/^(?:Ingrédients|Instructions|Préparation|Cuisson)/i)) {
      return desc;
    }
  }
  
  // If no explicit description found, return empty string
  return '';
};

const generateTags = (title: string, ingredients: string[]): string[] => {
  const tags: string[] = [];
  
  // Extract tags from title
  const titleLower = title.toLowerCase();
  
  // Common food types
  if (titleLower.includes('tartare')) tags.push('tartare');
  if (titleLower.includes('salade')) tags.push('salade');
  if (titleLower.includes('soupe')) tags.push('soupe');
  if (titleLower.includes('tarte')) tags.push('tarte');
  if (titleLower.includes('gâteau')) tags.push('gâteau');
  if (titleLower.includes('poulet')) tags.push('poulet');
  if (titleLower.includes('bœuf') || titleLower.includes('boeuf')) tags.push('bœuf');
  if (titleLower.includes('porc')) tags.push('porc');
  if (titleLower.includes('poisson')) tags.push('poisson');
  if (titleLower.includes('thon')) tags.push('thon', 'poisson');
  if (titleLower.includes('saumon')) tags.push('saumon', 'poisson');
  
  // Cooking methods
  if (titleLower.includes('grillé')) tags.push('grillé');
  if (titleLower.includes('rôti')) tags.push('rôti');
  if (titleLower.includes('mijoté')) tags.push('mijoté');
  
  // Dietary preferences
  const ingredientsText = ingredients.join(' ').toLowerCase();
  if (!ingredientsText.includes('viande') && !ingredientsText.includes('poulet') && 
      !ingredientsText.includes('bœuf') && !ingredientsText.includes('porc') &&
      !ingredientsText.includes('thon') && !ingredientsText.includes('saumon')) {
    tags.push('végétarien');
  }
  
  // Seasonal ingredients
  if (ingredientsText.includes('pêche')) tags.push('été', 'fruits');
  if (ingredientsText.includes('radis')) tags.push('légumes', 'printemps');
  
  return [...new Set(tags)]; // Remove duplicates
};

const determineCategory = (title: string, ingredients: string[]): string => {
  const titleLower = title.toLowerCase();
  const ingredientsText = ingredients.join(' ').toLowerCase();
  
  // Appetizers/Entrées
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

export const parseCSVRecipes = (csvContent: string): CSVParseResult => {
  const results: ParsedCSVRecipe[] = [];
  const errors: string[] = [];
  
  try {
    // Split CSV into lines
    const lines = csvContent.split('\n');
    
    // Skip header row
    for (let i = 1; i < lines.length; i++) {
      const line = lines[i].trim();
      if (!line) continue;
      
      try {
        // Parse CSV line (assuming tab-separated or comma-separated)
        const columns = line.split('\t').length > 1 ? line.split('\t') : line.split(',');
        
        if (columns.length < 2) {
          errors.push(`Ligne ${i + 1}: Format invalide`);
          continue;
        }
        
        const plainContent = columns[0].trim();
        const title = columns[1].trim();
        
        if (!title || !plainContent) {
          errors.push(`Ligne ${i + 1}: Titre ou contenu manquant`);
          continue;
        }
        
        // Extract recipe components
        const ingredients = extractIngredients(plainContent);
        const instructions = extractInstructions(plainContent);
        
        // Extract timing and serving information
        const prepTime = parseTimeFromText(plainContent.match(/Préparation:\s*[^A-Z]*/i)?.[0] || '');
        const cookTime = parseTimeFromText(plainContent.match(/Cuisson:\s*[^A-Z]*/i)?.[0] || '');
        const servings = parseServingsFromText(plainContent);
        
        // Generate tags and category
        const tags = generateTags(title, ingredients);
        
        // Extract description (only if explicitly marked, otherwise empty)
        const description = extractDescription(plainContent, title);
        
        const recipe: ParsedCSVRecipe = {
          title,
          description,
          ingredients,
          instructions,
          prepTime: (prepTime.min > 0 || prepTime.max > 0) ? prepTime : undefined,
          cookTime: (cookTime.min > 0 || cookTime.max > 0) ? cookTime : undefined,
          servings: servings || undefined,
          tags
        };
        
        results.push(recipe);
        
      } catch (error) {
        errors.push(`Ligne ${i + 1}: Erreur de parsing - ${error instanceof Error ? error.message : 'Erreur inconnue'}`);
      }
    }
    
  } catch (error) {
    errors.push(`Erreur générale: ${error instanceof Error ? error.message : 'Erreur inconnue'}`);
  }
  
  return { recipes: results, errors };
};