import { Recipe } from '@/types/recipe';

export const jambonALaBiereDeLerabliere: Recipe = {
  id: 'jambon-a-la-biere-de-l-erabliere',
  title: 'Jambon à la bière de l\'érablière',
  description: '',
  categories: ['Porc'],
  prepTime: { min: 20, max: 20 },
  cookTime: { min: 120, max: 120 },
  servings: 0,
  difficulty: 'Facile',
  ingredients: [
    '1 c. à soupe de beurre',
    '1 gousse d\'ail, hachée',
    '1 oignon, haché',
    '1 bouteille de 340 ml (1 1/3 tasse) bière forte au choix',
    '250 ml (1 tasse) bouillon de poulet ou de bœuf',
    '1/3 tasse (80 ml) sirop d\'érable',
    '3 c. à soupe moutarde de Dijon (45 ml)',
    '2 clous de girofle',
    '1 bâton cannelle',
    '1 c. à thé de graines de coriandre',
    'Poivre du moulin',
    'Un jambon',
    '1/4 tasse (60 ml) sirop d\'érable'
  ],
  instructions: [
    'Dans une grande casserole, faire fondre le beurre à feu moyen et y faire revenir l\'ail et l\'oignon.',
    'Ajouter la bière, le bouillon, 80 ml (1/3 tasse) de sirop d\'érable, la moutarde, les épices et poivrer au goût. Bien mélanger pour délayer la moutarde et porter à ébullition.',
    'Déposer le jambon dans la casserole. Porter à ébullition, et laisser mijoter pendant 1 heure 30 minutes ou jusqu\'à ce que la viande soit tendre.',
    'Arroser de temps en temps du jus de cuisson le jambon.',
    'Préchauffer le four à 400 ºF et sortir le jambon de la casserole et mettre de côté.',
    'Passer le jus de cuisson au tamis et le remettre sur le feu. Faire réduire le bouillon de moitié.',
    'Ajouter 60 ml (1/4 tasse) du sirop d\'érable et refaire bouillir.',
    'Badigeonner la viande avec le bouillon réduit et mettre au four 15 à 20 minutes en badigeonnant souvent.',
    'Trancher le jambon et servir avec la sauce.'
  ],
  tags: ['bière', 'sirop d\'érable', 'jambon'],
  source: 'David Cloutier',
  slug: 'jambon-a-la-biere-de-lerabliere'
};
