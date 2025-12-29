import { Recipe } from '@/types/recipe'

export const saladeDeBrocoliFraisEtFeta: Recipe = {
  id: 'salade-de-brocoli-frais-et-feta',
  title: 'Salade de brocoli frais et feta',
  description: "Salade fraiche d'été",
  categories: ['Salades'],
  prepTime: { min: 15, max: 15 },
  cookTime: { min: 0, max: 0 },
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    '3 tasses de bouquets de brocoli non cuits',
    '1 petit échalotte française',
    '1/2 tasse de raisins secs',
    '1/2 tasse de fromage feta en petits cubes',
    '2 c. à table de graines de tournesol',
    '1/3 tasse de yogourt nature',
    '2 c. à table de mayonnaise',
    '1 c. à table de jus de citron',
    '2 c. à thé de sucre',
    'Sel et beaucoup de poivre au goût',
  ],
  instructions: [
    'Mélanger tous les ingrédients de la salade',
    'Mélanger tous les ingrédients de la sauce',
    'Ajouter à la salade et bien mélanger',
  ],
  tags: ['été', 'feta', 'sauce'],
  images: [
    {
      small:
        'https://res.cloudinary.com/nosrecettes/image/upload/w_400,h_300,c_fill,q_auto,f_auto/recipes/salade-de-brocoli-frais-et-feta',
      medium:
        'https://res.cloudinary.com/nosrecettes/image/upload/w_800,h_600,c_fill,q_auto,f_auto/recipes/salade-de-brocoli-frais-et-feta',
      large:
        'https://res.cloudinary.com/nosrecettes/image/upload/w_1200,h_900,c_fill,q_auto,f_auto/recipes/salade-de-brocoli-frais-et-feta',
    },
  ],
  source: 'David Cloutier',
  slug: 'salade-de-brocoli-frais-et-feta',
}
