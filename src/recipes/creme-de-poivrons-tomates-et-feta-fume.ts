import { Recipe } from '@/types/recipe';

export const cremeDePoivronsTomatesEtFetaFume: Recipe = {
  id: 'creme-de-poivrons-tomates-et-feta-fume',
  title: 'Crème de poivrons, tomates et feta fumé',
  description: 'Une soupe crémeuse aux poivrons, tomates et feta fumé, cuite au fumoir ou au four, servie en 20 minutes de préparation et 45 minutes de cuisson.',
  categories: ['Soupes'],
  prepTime: { min: 20, max: 20 },
  cookTime: { min: 45, max: 45 },
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    '1/2 brique de fromage feta',
    '2 casseaux de petites tomates',
    '2 poivrons rouges (ou autres couleurs)',
    '1 petite échalote française',
    '1 c. à soupe d’herbes salées du bas du fleuve',
    '1 c. à thé de sucre',
    'ail, sel, poivre, persil frais au goût',
    '2 c. à soupe d’huile d’olive',
    '1 1/2 tasses d’eau',
    '3 c. à soupe de bouillon de poulet concentré'
  ],
  instructions: [
    'Dans un bon mélange, mettre les tomates, les poivrons coupés en gros morceaux et l’échalote française hachée grossièrement.',
    'Ajouter 1 c. à soupe d’herbes salées du bas du fleuve aux légumes.',
    'Ajouter 1 c. à thé de sucre.',
    'Assaisonner avec ail, sel, poivre et persil frais selon le goût.',
    'Ajouter 2 c. à soupe d’huile d’olive et bien mélanger.',
    'Mettre le fromage feta au centre dans un moule en aluminium allant au BBQ.',
    'Disposer les légumes autour du fromage.',
    'Ajouter 1 1/2 tasses d’eau avec 3 c. à soupe de bouillon de poulet.',
    'Cuire au fumoir à 375°F pendant 45 minutes.',
    'Mixer le tout, ajouter de la crème au goût.'
  ],
  tags: ['fumoir', 'soupe', 'feta'],
  images: [
    {
      small: 'https://res.cloudinary.com/nosrecettes/image/upload/w_400,h_300,c_fill,q_auto,f_auto/recipes/creme-de-poivrons-tomates-et-feta-fume',
      medium: 'https://res.cloudinary.com/nosrecettes/image/upload/w_800,h_600,c_fill,q_auto,f_auto/recipes/creme-de-poivrons-tomates-et-feta-fume',
      large: 'https://res.cloudinary.com/nosrecettes/image/upload/w_1200,h_900,c_fill,q_auto,f_auto/recipes/creme-de-poivrons-tomates-et-feta-fume'
    }
  ],
  source: 'David Cloutier',
  notes: 'Ce plat peut aussi être réalisé au four.',
  slug: 'creme-de-poivrons-tomates-et-feta-fume'
};
