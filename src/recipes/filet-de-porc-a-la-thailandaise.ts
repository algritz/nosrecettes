import { Recipe } from '@/types/recipe';

export const filetDePorcALaThailandaise: Recipe = {
  id: 'filet-de-porc-a-la-thailandaise',
  title: 'Filet de porc à la thaïlandaise',
  description: '',
  categories: ['Plats principaux'],
  prepTime: 45,
  cookTime: 20,
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    '2 filets de porc',
    '2 oignons, en petits dés',
    '1/2 bouteille (350 ml) de sauce thaïlandaise du commerce, de marque Le Choix du Président',
    '2 tasses (500 ml) crème 35%',
    '3 c.à soupe (45 ml) huile végétale'
  ],
  instructions: [
    'Couper les filets en tranches de 2 à 3 cm d\'épaisseur et les aplatir à l\'aide d\'un maillet ou d\'un poêlon à 1 cm d\'épaisseur en leur donnant la forme d\'un médaillon.',
    'Faire rôtir les médaillons des deux côtés dans l\'huile et réserver au chaud.',
    'Dans le poêlon, faire revenir les oignons.',
    'Ajouter la sauce thaïlandaise et attendre qu\'elle bouille.',
    'Ajouter la crème et laisser mijoter jusqu\'à la consistance désirée.',
    'Ajouter les médaillons et mettre au four, à découvert, 20 min à 350°F (180°C).',
    'Servir avec un riz aromatisé à la coriandre.'
  ],
  tags: ['thaïlandais', 'sauce', 'rôti'],
  slug: 'filet-de-porc-a-la-thailandaise'
};
