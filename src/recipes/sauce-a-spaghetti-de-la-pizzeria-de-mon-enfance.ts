import { Recipe } from '@/types/recipe';

export const sauceASpaghettiDeLaPizzeriaDeMonEnfance: Recipe = {
  id: '1764522091766',
  title: 'Sauce à spaghetti de la pizzeria de mon enfance',
  description: 'Grosse sauce à spaghetti façon pizzeria, riche en tomates, bœuf haché et aromates, mijotée longuement.',
  categories: ['Sauces'],
  prepTime: 60,
  cookTime: 180,
  servings: 0,
  difficulty: 'Facile',
  ingredients: [
    {
      title: 'Partie A',
      items: [
        '9 lb de bœuf haché',
        '2/3 de tasse d\'huile'
      ]
    },
    {
      title: 'Partie B',
      items: [
        '7 tasses d\'oignons hachés',
        '3 tasses de céleri haché',
        '3 tasses de piments verts',
        '3 tasses de carottes râpées'
      ]
    },
    {
      title: 'Partie C',
      items: [
        '1 boîte de tomates (100 oz)',
        '3 jus de tomate (19 oz chacun)',
        '3 boîtes de sauce tomate (14 oz chacune)',
        '3 boîtes de pâte de tomates (10 oz chacune)',
        '1 bouteille de sauce chili (16 oz)'
      ]
    },
    {
      title: 'Partie D',
      items: [
        '9 c. à soupe de sauce HP',
        '6 c. à soupe de sauce Worcestershire',
        '6 c. à soupe de sauce 57 Heinz',
        '21 gousses d\'ail',
        '3/4 c. à thé d\'origan',
        '1 1/2 c. à thé de poivre de Cayenne',
        '3/4 c. à thé de paprika',
        '3/4 c. à thé d\'herbes fines',
        '3/4 c. à thé de piments broyés',
        '15 gouttes de sauce Tabasco',
        '2 c. à soupe de sel',
        '2 c. à soupe de sucre'
      ]
    }
  ],
  instructions: [
    'Faire cuire les ingrédients de la partie A.',
    'Ajouter les parties B et C, puis cuire 1 heure à 1 h 30.',
    'Ajouter la partie D et cuire 1 h 30.'
  ],
  tags: ['longue cuisson', 'tomate', 'bœuf haché'],
  source: 'David Cloutier',
  slug: 'sauce-a-spaghetti-de-la-pizzeria-de-mon-enfance'
};
