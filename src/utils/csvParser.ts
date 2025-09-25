export interface ParsedCSVRecipe {
  title: string;
  description: string;
  ingredients: string[];
  instructions: string[];
  prepTime?: number;
  cookTime?: number;
  servings?: number;
  tags: string[];
}

export interface CSVParseResult {
  recipes: ParsedCSVRecipe[];
  errors: string[];
}

const parseTimeFromText = (text: string): number => {
  // Look for patterns like "Préparation: 15 minutes", "Cuisson: 30 min", etc.
  const timeMatch = text.match(/(\d+)\s*(?:minutes?|mins?|h|heures?)/i);
  if (timeMatch) {
    const value = parseInt(timeMatch[1]);
    // If it contains "h" or "heure", convert to minutes
    if (text.match(/h|heure/i)) {
      return value * 60;
    }
    return value;
  }
  return 0;
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
    
    // For single-line ingredients, use a tokenization approach
    // Split the text into tokens and then group them into ingredients
    const tokens = ingredientsText.split(/\s+/);
    const ingredients: string[] = [];
    let currentIngredient: string[] = [];
    
    for (let i = 0; i < tokens.length; i++) {
      const token = tokens[i];
      const nextToken = tokens[i + 1];
      const nextNextToken = tokens[i + 2];
      
      // Start a new ingredient if we find a quantity pattern
      const isQuantityStart = (
        // Numbers (including fractions)
        /^\d+$/.test(token) ||
        /^\d+\/\d+$/.test(token) ||
        /^\d+\.\d+$/.test(token) ||
        // Fraction words
        /^(?:un|une|demi|quart|trois|quatre|cinq|six|sept|huit|neuf|dix)$/i.test(token) ||
        // Articles that often start ingredients
        /^(?:le|la|les|du|de|des|d')$/i.test(token)
      );
      
      // Check if this looks like the start of a new ingredient
      const isNewIngredient = isQuantityStart && currentIngredient.length > 0 && (
        // Number followed by unit
        (nextToken && /^(?:g|kg|ml|l|lb|oz|tasse|tasses|cup|cups|c\.|cuillère|cuilleres|boîte|boites|paquet|paquets|livre|livres|once|onces|pincée|pincees|steak|steaks)$/i.test(nextToken)) ||
        // Number followed by "à" (like "2 à 4")
        (nextToken && nextToken.toLowerCase() === 'à') ||
        // "le jus" pattern
        (token.toLowerCase() === 'le' && nextToken && nextToken.toLowerCase() === 'jus') ||
        // "la" followed by ingredient name
        (token.toLowerCase() === 'la' && nextToken) ||
        // Fraction followed by "de"
        (/^\d+\/\d+$/.test(token) && nextToken && nextToken.toLowerCase() === 'de')
      );
      
      // If this is the start of a new ingredient and we have a current one, save it
      if (isNewIngredient) {
        if (currentIngredient.length > 0) {
          ingredients.push(currentIngredient.join(' ').trim());
          currentIngredient = [];
        }
      }
      
      // Add token to current ingredient
      currentIngredient.push(token);
    }
    
    // Don't forget the last ingredient
    if (currentIngredient.length > 0) {
      ingredients.push(currentIngredient.join(' ').trim());
    }
    
    // Clean up and filter ingredients
    return ingredients
      .map(ing => ing.replace(/[,;]$/, '').trim())
      .filter(ing => {
        return ing.length > 2 && 
               !ing.match(/^(?:Instructions|Préparation|Cuisson|Portions)/i) &&
               !ing.match(/^[,;.\s]*$/);
      });
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
          prepTime: prepTime || undefined,
          cookTime: cookTime || undefined,
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