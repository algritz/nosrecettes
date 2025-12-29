import { Recipe } from '@/types/recipe';

export const tartareMexicainDeThon: Recipe = {
  id: 'tartare-mexicain-de-thon',
  title: 'Tartare mexicain de thon',
  description: 'Un tartare frais et épicé à base de thon, avocat, pomme verte et jalapeños, servi avec des croustilles émiettées.',
  categories: ['Entrées'],
  prepTime: { min: 20, max: 20 },
  cookTime: { min: 0, max: 0 },
  servings: 3,
  difficulty: 'Facile',
  ingredients: [
    'Sauce',
    '1/3 tasse de mayonnaise',
    'Jus de 1 lime',
    '1 c. à thé de sauce piquante sriracha',
    '1 c. à thé de sambal oelek',
    '2 c. à soupe d’échalote française émincée très finement',
    '1/2 c. à thé de sel',
    '1/2 c. à thé de sucre',
    'Tartare',
    '450 g de thon très frais, en dés',
    '1 avocat, en dés',
    '1 pomme verte, en dés',
    '1 piment jalapenos sans les pépins, haché très finement + quelques rondelles minces pour garnir',
    '1/2 tasse de coriandre hachée',
    'Quelques Tostitos, émiettées'
  ],
  instructions: [
    'Dans un grand bol, à l’aide d’un fouet, mélanger tous les ingrédients de la sauce.',
    'Ajouter les ingrédients du tartare, sauf les croustilles, et mélanger délicatement.',
    'Servir à l\'aide d\'un emporte pièces, garnir de tostitos émiettés et de rondelles de jalapenos.'
  ],
  tags: ['épicé', 'frais', 'thon'],
  slug: 'tartare-mexicain-de-thon'
};
