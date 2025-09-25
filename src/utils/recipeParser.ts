export interface ParsedRecipeData {
  title?: string;
  description?: string;
  prepTime?: number;
  cookTime?: number;
  servings?: number;
  ingredients?: string[];
  instructions?: string[];
  tags?: string[];
  imageUrl?: string;
  source?: string;
}

export interface UnmappedContent {
  text: string;
  context: string; // Where this text was found
}

export interface ParseResult {
  mapped: ParsedRecipeData;
  unmapped: UnmappedContent[];
  success: boolean;
  error?: string;
}

// Common recipe microdata selectors
const RECIPE_SELECTORS = {
  // JSON-LD structured data
  jsonLd: 'script[type="application/ld+json"]',
  
  // Microdata selectors
  title: [
    '[itemProp="name"]',
    'h1[class*="title"]',
    'h1[class*="recipe"]',
    '.recipe-title',
    '.entry-title',
    'h1'
  ],
  
  description: [
    '[itemProp="description"]',
    '.recipe-description',
    '.recipe-summary',
    '.entry-summary',
    'meta[name="description"]'
  ],
  
  prepTime: [
    '[itemProp="prepTime"]',
    '.prep-time',
    '.preparation-time'
  ],
  
  cookTime: [
    '[itemProp="cookTime"]',
    '.cook-time',
    '.cooking-time'
  ],
  
  totalTime: [
    '[itemProp="totalTime"]',
    '.total-time'
  ],
  
  servings: [
    '[itemProp="recipeYield"]',
    '[itemProp="yield"]',
    '.servings',
    '.yield',
    '.portions'
  ],
  
  ingredients: [
    '[itemProp="recipeIngredient"]',
    '.recipe-ingredient',
    '.ingredient',
    '.ingredients li',
    '.recipe-ingredients li'
  ],
  
  instructions: [
    '[itemProp="recipeInstructions"]',
    '.recipe-instruction',
    '.instruction',
    '.instructions li',
    '.recipe-instructions li',
    '.directions li',
    '.method li'
  ],
  
  image: [
    '[itemProp="image"]',
    '.recipe-image img',
    '.featured-image img',
    '.entry-image img'
  ]
};

// Time parsing utilities
const parseTimeString = (timeStr: string): number => {
  if (!timeStr) return 0;
  
  // Handle ISO 8601 duration format (PT15M, PT1H30M)
  const isoDuration = timeStr.match(/PT(?:(\d+)H)?(?:(\d+)M)?/i);
  if (isoDuration) {
    const hours = parseInt(isoDuration[1] || '0');
    const minutes = parseInt(isoDuration[2] || '0');
    return hours * 60 + minutes;
  }
  
  // Handle common text formats
  const timeMatch = timeStr.match(/(\d+)\s*(h|hour|heure)?\s*(\d+)?\s*(m|min|minute)?/i);
  if (timeMatch) {
    const hours = parseInt(timeMatch[1] || '0');
    const minutes = parseInt(timeMatch[3] || '0');
    
    // If only one number and it's followed by 'h' or 'hour', treat as hours
    if (timeMatch[2] && !timeMatch[3]) {
      return hours * 60;
    }
    
    // If only one number and no unit, assume minutes if < 10, hours if >= 10
    if (!timeMatch[2] && !timeMatch[4]) {
      return hours < 10 ? hours * 60 : hours;
    }
    
    return hours * 60 + minutes;
  }
  
  // Just extract first number and assume minutes
  const numberMatch = timeStr.match(/(\d+)/);
  if (numberMatch) {
    const num = parseInt(numberMatch[1]);
    return num > 300 ? Math.floor(num / 60) : num; // If > 300, probably seconds
  }
  
  return 0;
};

const parseServings = (servingsStr: string): number => {
  if (!servingsStr) return 0;
  
  const match = servingsStr.match(/(\d+)/);
  return match ? parseInt(match[1]) : 0;
};

const cleanText = (text: string): string => {
  return text
    .replace(/\s+/g, ' ')
    .replace(/\n+/g, ' ')
    .trim();
};

const extractFromSelector = (doc: Document, selectors: string[]): string => {
  for (const selector of selectors) {
    const element = doc.querySelector(selector);
    if (element) {
      if (element.tagName === 'META') {
        return (element as HTMLMetaElement).content || '';
      }
      if (element.tagName === 'IMG') {
        return (element as HTMLImageElement).src || '';
      }
      return cleanText(element.textContent || '');
    }
  }
  return '';
};

const extractMultipleFromSelector = (doc: Document, selectors: string[]): string[] => {
  for (const selector of selectors) {
    const elements = doc.querySelectorAll(selector);
    if (elements.length > 0) {
      return Array.from(elements)
        .map(el => cleanText(el.textContent || ''))
        .filter(text => text.length > 0);
    }
  }
  return [];
};

const parseJsonLd = (doc: Document): Partial<ParsedRecipeData> => {
  const scripts = doc.querySelectorAll(RECIPE_SELECTORS.jsonLd);
  
  for (const script of scripts) {
    try {
      const data = JSON.parse(script.textContent || '');
      const recipes = Array.isArray(data) ? data : [data];
      
      for (const item of recipes) {
        if (item['@type'] === 'Recipe' || item.type === 'Recipe') {
          return {
            title: item.name,
            description: item.description,
            prepTime: parseTimeString(item.prepTime),
            cookTime: parseTimeString(item.cookTime),
            servings: parseServings(item.recipeYield || item.yield),
            ingredients: Array.isArray(item.recipeIngredient) 
              ? item.recipeIngredient.map((ing: any) => typeof ing === 'string' ? ing : ing.text || ing.name)
              : [],
            instructions: Array.isArray(item.recipeInstructions)
              ? item.recipeInstructions.map((inst: any) => typeof inst === 'string' ? inst : inst.text || inst.name)
              : [],
            imageUrl: typeof item.image === 'string' ? item.image : item.image?.url
          };
        }
      }
    } catch (error) {
      console.warn('Failed to parse JSON-LD:', error);
    }
  }
  
  return {};
};

export const parseRecipeFromHtml = async (url: string): Promise<ParseResult> => {
  try {
    // Use a CORS proxy for development, or implement server-side parsing for production
    const proxyUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(url)}`;
    
    const response = await fetch(proxyUrl);
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }
    
    const data = await response.json();
    const htmlContent = data.contents;
    
    // Parse HTML
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlContent, 'text/html');
    
    // Try JSON-LD first (most reliable)
    const jsonLdData = parseJsonLd(doc);
    
    // Extract using microdata/selectors as fallback
    const microdataExtraction: ParsedRecipeData = {
      title: extractFromSelector(doc, RECIPE_SELECTORS.title),
      description: extractFromSelector(doc, RECIPE_SELECTORS.description),
      prepTime: parseTimeString(extractFromSelector(doc, RECIPE_SELECTORS.prepTime)),
      cookTime: parseTimeString(extractFromSelector(doc, RECIPE_SELECTORS.cookTime)),
      servings: parseServings(extractFromSelector(doc, RECIPE_SELECTORS.servings)),
      ingredients: extractMultipleFromSelector(doc, RECIPE_SELECTORS.ingredients),
      instructions: extractMultipleFromSelector(doc, RECIPE_SELECTORS.instructions),
      imageUrl: extractFromSelector(doc, RECIPE_SELECTORS.image),
      source: new URL(url).hostname
    };
    
    // Merge JSON-LD data with microdata (JSON-LD takes precedence)
    const mapped: ParsedRecipeData = {
      title: jsonLdData.title || microdataExtraction.title,
      description: jsonLdData.description || microdataExtraction.description,
      prepTime: jsonLdData.prepTime || microdataExtraction.prepTime,
      cookTime: jsonLdData.cookTime || microdataExtraction.cookTime,
      servings: jsonLdData.servings || microdataExtraction.servings,
      ingredients: (jsonLdData.ingredients?.length ? jsonLdData.ingredients : microdataExtraction.ingredients) || [],
      instructions: (jsonLdData.instructions?.length ? jsonLdData.instructions : microdataExtraction.instructions) || [],
      imageUrl: jsonLdData.imageUrl || microdataExtraction.imageUrl,
      source: microdataExtraction.source
    };
    
    // Collect unmapped content
    const unmapped: UnmappedContent[] = [];
    
    // Extract potential recipe content that wasn't mapped
    const contentSelectors = [
      '.recipe-notes',
      '.recipe-tips',
      '.recipe-variations',
      '.additional-info',
      '.recipe-nutrition',
      '.recipe-tags',
      '.categories',
      '.difficulty'
    ];
    
    contentSelectors.forEach(selector => {
      const elements = doc.querySelectorAll(selector);
      elements.forEach(element => {
        const text = cleanText(element.textContent || '');
        if (text && text.length > 10) {
          unmapped.push({
            text,
            context: `Found in: ${selector}`
          });
        }
      });
    });
    
    // Extract any remaining text content that might be useful
    const allText = cleanText(doc.body?.textContent || '');
    const sentences = allText.split(/[.!?]+/).filter(s => s.trim().length > 20);
    
    // Look for sentences that might contain useful info but weren't mapped
    sentences.forEach(sentence => {
      const lowerSentence = sentence.toLowerCase();
      if (
        (lowerSentence.includes('conseil') || 
         lowerSentence.includes('astuce') || 
         lowerSentence.includes('note') ||
         lowerSentence.includes('variante') ||
         lowerSentence.includes('accompagne') ||
         lowerSentence.includes('vin') ||
         lowerSentence.includes('difficulté')) &&
        !mapped.instructions?.some(inst => inst.includes(sentence.trim())) &&
        !mapped.description?.includes(sentence.trim())
      ) {
        unmapped.push({
          text: sentence.trim(),
          context: 'Contenu potentiellement utile'
        });
      }
    });
    
    return {
      mapped,
      unmapped: unmapped.slice(0, 10), // Limit to avoid overwhelming the user
      success: true
    };
    
  } catch (error) {
    return {
      mapped: {},
      unmapped: [],
      success: false,
      error: error instanceof Error ? error.message : 'Erreur inconnue lors de l\'analyse'
    };
  }
};