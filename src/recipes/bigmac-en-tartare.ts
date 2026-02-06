import { Recipe } from '@/types/recipe';

export const bigmacEnTartare: Recipe = {
  id: 'bigmac-en-tartare',
  title: 'BigMac en tartare',
  description: 'Ça goûte vraiment le BigMac BigMac en tartare',
  categories: ['Entrées'],
  prepTime: { min: 20, max: 20 },
  cookTime: { min: 0, max: 0 },
  servings: 2,
  difficulty: 'Facile',
  ingredients: [
    '200g de tartare de bœuf',
    '2 c. à soupe d\'oignons hachés très très finement',
    '3 c. à soupe de cornichons en brunoise',
    '2 c. à soupe de cheddar orange en cube',
    'Graines de sésame',
    '1/4 tasse de mayonnaise',
    '1 c. à soupe de vinaigrette française',
    '1 c. à soupe de relish sucrée',
    '1/2 c. à thé de sucre',
    '1/2 c. à thé de vinaigre blanc',
    '1 c. à thé d\'oignon haché très finement',
    'Sel'
  ],
  instructions: [
    'Dans un petit bol, mélanger les ingrédients pour la sauce. Réserver.',
    'Mélanger les ingrédients du tartare et ajouter 2 à 3 cuillères à soupe de sauce.',
    'Mouler à l\'aide d\'un emporte-pièce et servir.',
    'Garnir le tartare de quelques graines de sésame.'
  ],
  tags: ['sésame', 'sauce mayonnaise', 'tartare'],
  images: [
    {
      small: 'https://res.cloudinary.com/nosrecettes/image/upload/w_400,h_300,c_fill,q_auto,f_auto/recipes/bigmac_en_tartare',
      medium: 'https://res.cloudinary.com/nosrecettes/image/upload/w_800,h_600,c_fill,q_auto,f_auto/recipes/bigmac_en_tartare',
      large: 'https://res.cloudinary.com/nosrecettes/image/upload/w_1200,h_900,c_fill,q_auto,f_auto/recipes/bigmac_en_tartare'
    }
  ],
  source: 'David Cloutier',
  slug: 'bigmac-en-tartare'
};
