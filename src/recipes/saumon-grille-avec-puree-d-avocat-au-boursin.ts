import { Recipe } from '@/types/recipe';

export const saumonGrilleAvecPureeDAvocatAuBoursin: Recipe = {
  id: 'saumon-grille-avec-puree-d-avocat-au-boursin',
  title: 'Saumon grillé avec purée d’avocat au Boursin',
  description: 'Une recette de saumon grillé servi avec une purée d’avocat au Boursin, parfait pour une touche estivale.',
  categories: ['Poisson', 'Plats principaux'],
  prepTime: 15,
  cookTime: 10,
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    '2 avocats mûrs',
    '120 g (1/2 pot) de Boursin® Cuisine Ail et Fines Herbes',
    'Jus d\'une lime',
    'Poivre du moulin',
    '1 tranche épaisse d\'oignon rouge ciselé',
    '4 pavés de saumon avec peau de 180 g chacun'
  ],
  instructions: [
    'Préchauffez le four à 375 °F.',
    'Dans un robot culinaire ou à l\'aide d\'un pilon, réduisez la chair d\'un avocat et demi, le Boursin Cuisine et le jus de lime en purée. Réservez.',
    'Coupez le reste de l\'avocat en petits dés et ajoutez à la purée. Ajoutez les oignons rouges. Rectifiez l\'assaisonnement.',
    'Huilez légèrement une grande poêle et faites-y rôtir les pavés de saumon trois minutes de chaque côté. Salez, poivrez.',
    'Déposez la garniture d\'avocat et de Boursin uniformément sur les pavés et déposez au four trois minutes.',
    'Servez immédiatement.'
  ],
  tags: ['saumon', 'avocat', 'grill'],
  slug: 'saumon-grille-avec-puree-d-avocat-au-boursin'
};
