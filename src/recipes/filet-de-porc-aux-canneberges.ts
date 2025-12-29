import { Recipe } from '@/types/recipe';

export const filetDePorcAuxCanneberges: Recipe = {
  id: 'filet-de-porc-aux-canneberges',
  title: 'Filet de porc aux canneberges',
  description: 'Un plat savoureux de filet de porc accompagné d\'une sauce aux canneberges, parfait pour une occasion spéciale ou un dîner convivial.',
  categories: ['Plats principaux'],
  prepTime: { min: 10, max: 10 },
  cookTime: { min: 35, max: 35 },
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    '2 filet de porc 340 g',
    'canneberge fraîches 1 tasse',
    'sucre blanc granulé 1/2 tasse',
    'jus d\'orange 1/2 tasse',
    'eau 1/2 tasse',
    'cassonade 1 1/2 tasse',
    'beurre (pour brunir le porc)'
  ],
  instructions: [
    'Préchauffer le four à 375°F (190°C).',
    'Laver les canneberges à l\'eau froide.',
    'Dans une marmite, placer les canneberges, l\'eau, le sucre et le jus d\'orange. Porter à ébullition puis réduire le feu. Laisser mijoter entre 6 et 8 minutes. Réserver.',
    'Dans une casserole, brunir les filets de porc avec un peu de beurre pendant 5 minutes.',
    'Retirer du feu. Ajouter la cassonade dans la casserole, sur le porc. Rouler le porc dans la cassonade pour l\'enrober.',
    'Déposer les filets de porc dans un plat avec couvercle allant au four.',
    'Ajouter 1 tasse de sauce aux canneberges.',
    'Cuire couvert au four à 375°F (190°C) pendant 20 minutes.',
    'Après la cuisson, laisser reposer la viande 5 minutes avant de servir. Aromatiser de sauce aux canneberges.'
  ],
  tags: ['canneberges', 'sauce', 'porc'],
  slug: 'filet-de-porc-aux-canneberges'
};
