import { Recipe } from '@/types/recipe';

export const bouleAuOreo: Recipe = {
  id: 'boule-au-oreo',
  title: 'Boule au Oréo',
  description: 'Une recette de boules à base de biscuits Oreo, fromage à la crème et chocolat, enrobées de chocolat fondu et de miettes de biscuits.',
  categories: ['Desserts'],
  prepTime: 20,
  cookTime: 2,
  servings: 24,
  difficulty: 'Facile',
  ingredients: [
    '1 paquet de Oreo',
    '1 paquet de fromage à la crème, ramolli',
    'Pincée de sel casher',
    '2 cuillères à soupe de miettes de biscuits Oreo réservées',
    'Chocolat fondu'
  ],
  instructions: [
    'Utilisez un robot culinaire pour écraser les biscuits en miettes fines.',
    'Ajouter tous les biscuits écrasés sauf 2 cuillères à soupe dans un bol moyen.',
    'Ajouter le fromage à la crème et le sel et remuer jusqu\'à homogénéité.',
    'Tapisser une plaque à pâtisserie de papier sulfurisé.',
    'À l\'aide d\'une petite cuillère à biscuits, former le mélange en petites boules et transférer sur une plaque à pâtisserie préparée.',
    'Congeler jusqu\'à légèrement durci, environ 30 minutes.',
    'Tremper les boules congelées dans du chocolat fondu jusqu\'à ce qu\'elles soient enrobées et remettre sur une plaque à pâtisserie.',
    'Saupoudrer du reste des miettes de biscuits.',
    'Congeler jusqu\'à ce que le chocolat durcisse, environ 15 minutes.'
  ],
  tags: ['chocolat', 'biscuits', 'enrobage'],
  marinatingTime: 45,
  slug: 'boule-au-oreo'
};
