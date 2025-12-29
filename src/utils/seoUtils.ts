import { Recipe, IngredientSection, InstructionSection } from '@/types/recipe';
import { getResponsiveImageSrc } from './imageUtils';
import { formatTime } from './timeFormat';
import { getMaxTime, getMinTime } from './timeUtils';
import { siteConfig } from '@/config/site.config';

export const generateRecipeStructuredData = (recipe: Recipe) => {
  const baseUrl = siteConfig.baseUrl;
  
  // Get ingredients as flat array
  const getIngredientsArray = (): string[] => {
    if (!recipe.ingredients || recipe.ingredients.length === 0) return [];
    
    if (typeof recipe.ingredients[0] === 'object' && 'items' in recipe.ingredients[0]) {
      const sections = recipe.ingredients as IngredientSection[];
      return sections.flatMap(section => section.items);
    } else {
      return recipe.ingredients as string[];
    }
  };

  // Get instructions as flat array with proper formatting
  const getInstructionsArray = (): object[] => {
    if (!recipe.instructions || recipe.instructions.length === 0) return [];
    
    let stepNumber = 1;
    const instructions: object[] = [];

    if (typeof recipe.instructions[0] === 'object' && 'steps' in recipe.instructions[0]) {
      const sections = recipe.instructions as InstructionSection[];
      sections.forEach(section => {
        section.steps.forEach(step => {
          instructions.push({
            "@type": "HowToStep",
            "name": `Étape ${stepNumber}`,
            "text": step,
            "position": stepNumber
          });
          stepNumber++;
        });
      });
    } else {
      const steps = recipe.instructions as string[];
      steps.forEach(step => {
        instructions.push({
          "@type": "HowToStep",
          "name": `Étape ${stepNumber}`,
          "text": step,
          "position": stepNumber
        });
        stepNumber++;
      });
    }

    return instructions;
  };

  // Get primary image
  const primaryImage = recipe.images?.[0] || recipe.image;
  const imageUrl = primaryImage ? getResponsiveImageSrc(primaryImage, 'large') : null;

  // Calculate total time using max values (conservative estimate for SEO)
  const maxPrepTime = getMaxTime(recipe.prepTime);
  const maxCookTime = getMaxTime(recipe.cookTime);
  const maxMarinatingTime = recipe.marinatingTime ? getMaxTime(recipe.marinatingTime) : 0;
  const maxTotalTime = maxPrepTime + maxCookTime + maxMarinatingTime;

  const structuredData = {
    "@context": "https://schema.org/",
    "@type": "Recipe",
    "name": recipe.title,
    "description": recipe.description || `Découvrez la recette de ${recipe.title}, une délicieuse recette québécoise.`,
    "image": imageUrl ? [imageUrl] : undefined,
    "author": {
      "@type": "Person",
      "name": recipe.source || "Nos Recettes"
    },
    "datePublished": new Date().toISOString().split('T')[0], // Use current date as fallback
    "prepTime": `PT${maxPrepTime}M`,
    "cookTime": `PT${maxCookTime}M`,
    "totalTime": `PT${maxTotalTime}M`,
    "recipeCategory": recipe.categories?.[0] || recipe.category || "Plat principal",
    "recipeCuisine": "Québécoise",
    "recipeYield": recipe.servings.toString(),
    "keywords": recipe.tags.join(', '),
    "recipeIngredient": getIngredientsArray(),
    "recipeInstructions": getInstructionsArray(),
    "nutrition": {
      "@type": "NutritionInformation",
      "servingSize": "1 portion"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.5",
      "reviewCount": "1"
    },
    "url": `${baseUrl}/recipe/${recipe.slug}`
  };

  // Remove undefined fields
  return JSON.parse(JSON.stringify(structuredData));
};

export const generateWebsiteStructuredData = () => {
  const baseUrl = siteConfig.baseUrl;

  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Nos Recettes",
    "description": "Collection de recettes québécoises traditionnelles et modernes. Découvrez des plats authentiques avec des instructions détaillées et des images appétissantes.",
    "url": baseUrl,
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${baseUrl}/?search={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Nos Recettes",
      "url": baseUrl
    }
  };
};

export const generateBreadcrumbStructuredData = (items: Array<{ name: string; url?: string }>) => {
  const baseUrl = siteConfig.baseUrl;

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url ? `${baseUrl}${item.url}` : undefined
    }))
  };
};

export const generateRecipeKeywords = (recipe: Recipe): string[] => {
  const keywords = [...recipe.tags];
  
  // Add category-based keywords
  if (recipe.categories) {
    keywords.push(...recipe.categories);
  } else if (recipe.category) {
    keywords.push(recipe.category);
  }
  
  // Add common Quebec/Canadian keywords
  keywords.push('recette québécoise', 'cuisine québécoise', 'recette canadienne');
  
  // Add difficulty and time-based keywords
  keywords.push(`recette ${recipe.difficulty.toLowerCase()}`);

  // Use minimum time for recipe classification to qualify more recipes
  const minPrepTime = getMinTime(recipe.prepTime);
  const minCookTime = getMinTime(recipe.cookTime);
  const minTotalTime = minPrepTime + minCookTime;

  if (minPrepTime <= 15) {
    keywords.push('recette rapide', 'recette express');
  }

  if (minTotalTime <= 30) {
    keywords.push('recette 30 minutes');
  }
  
  // Add serving-based keywords
  if (recipe.servings <= 2) {
    keywords.push('recette pour deux');
  } else if (recipe.servings >= 6) {
    keywords.push('recette familiale', 'recette groupe');
  }
  
  return [...new Set(keywords)]; // Remove duplicates
};

export const generateRecipeDescription = (recipe: Recipe): string => {
  if (recipe.description && recipe.description.trim()) {
    return recipe.description;
  }

  // Generate description from recipe data
  // Use max values for total time calculation (conservative estimate)
  const maxTotalTime = getMaxTime(recipe.prepTime) + getMaxTime(recipe.cookTime);
  const category = recipe.categories?.[0] || recipe.category || 'plat';

  let description = `Découvrez la recette de ${recipe.title}, un délicieux ${category.toLowerCase()} québécois. `;

  if (recipe.difficulty === 'Facile') {
    description += 'Recette facile à réaliser, ';
  } else if (recipe.difficulty === 'Moyen') {
    description += 'Recette de difficulté moyenne, ';
  }

  // formatTime() will display range intelligently if min !== max
  description += `prête en ${formatTime(maxTotalTime)} pour ${recipe.servings} personnes. `;

  if (recipe.tags.length > 0) {
    description += `Tags: ${recipe.tags.slice(0, 3).join(', ')}.`;
  }

  return description;
};