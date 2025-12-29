import { Recipe } from '@/types/recipe';

export const saucePiquanteGenreTabasco: Recipe = {
  id: 'sauce-piquante-genre-tabasco',
  title: 'Sauce piquante (genre Tabasco)',
  description: 'Une sauce piquante maison à base de jalapenos, tomates séchées, ail, sirop d\'érable, et vinaigre, à conserver au frigo.',
  categories: ['Sauces'],
  prepTime: { min: 20, max: 20 },
  cookTime: { min: 30, max: 30 },
  servings: 1,
  difficulty: 'Facile',
  ingredients: [
    '25 jalapenos coupés en deux et épépinés ou pas (ça dépend jusqu\'à quel point vous voulez ça piquant)',
    '2 gousses d\'ail',
    '5 tomates séchées dans l\'huile',
    '1 c à soupe de sirop d\'érable',
    '1 c à soupe de sel',
    '½ tasse d\'huile de canola ou de votre choix',
    '1 tasse d\'eau bouillante',
    '1 tasse de vinaigre bouillant'
  ],
  instructions: [
    'Mélanger le vinaigre et l\'eau et verser dans une casserole.',
    'Ajouter les jalapenos et faire bouillir 5 minutes.',
    'Mélanger votre préparation de jalapenos avec le reste de vos ingrédients au robot culinaire ou mélangeur à jus.',
    'Verser dans un contenant propre et conserver au frigo.'
  ],
  tags: ['piquant', 'vinaigre', 'conservation'],
  notes: 'Si vous voulez que ce soit plus fort laisser les pépins de piment.',
  slug: 'sauce-piquante-genre-tabasco'
};
