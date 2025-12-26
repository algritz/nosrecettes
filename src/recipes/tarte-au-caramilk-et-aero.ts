import { Recipe } from '@/types/recipe';

export const tarteAuCaramilkEtAero: Recipe = {
  id: 'tarte-au-caramilk-et-aero',
  title: 'Tarte au Caramilk et Aéro',
  description: '',
  categories: ['Pâtisseries et desserts'],
  prepTime: 15,
  cookTime: 20,
  servings: 10,
  difficulty: 'Facile',
  ingredients: [
    'Croûte: 2 tasses de chapelure de biscuits Oreo',
    '2/3 tasse de magarine fondue',
    '1/3 tasse de cassonade',
    'Mousse au chocolat: 4 barres de chocolat Caramilk cassées en morceaux',
    '4 barres de chocolat Aero cassées en morceaux',
    '1 tasse de crème 35% à fouetter',
    '1 tasse de mini guimauve'
  ],
  instructions: [
    'Préchauffer le four à 350F',
    'Dans un bol, mélanger tous les ingrédients "pour la croûte" puis déposer la préparation dans un moule à tarte en exerçant une pression.',
    'Cuire au four 7 à 8 minutes.',
    'Laisser tiédir.',
    'Dans une casserole à feu moyen, verser la crème et y ajouter la guimauve jusqu\'à ce que ces dernières soient complètement fondues.',
    'Ajouter les barres de chocolat en morceaux.',
    'Brasser jusqu\'à ce que le chocolat ait complètement fondu et que le mélange soit bien homogène puis verser sur la croûte.',
    'Laisser réfrigérer 4 heures et plus et déguster.'
  ],
  tags: ['chocolat', 'gourmandise', 'refrigeration'],
  notes: 'La dernière fois nous avons mis une barre Crunchy concassée sur le dessus, c\'était excellent.',
  slug: 'tarte-au-caramilk-et-aero'
};
