import { Recipe } from '@/types/recipe';

export const sauceASpaghettiDeMmeBouchard: Recipe = {
  id: 'sauce-a-spaghetti-de-mme-bouchard',
  title: 'Sauce à spaghetti de Mme Bouchard',
  description: '',
  categories: ['Plats principaux', 'Sauces'],
  prepTime: { min: 60, max: 60 },
  cookTime: { min: 210, max: 210 },
  servings: 0,
  difficulty: 'Facile',
  ingredients: [
    {
      title: 'Première partie',
      items: [
      '1 ½ C. Table de graisse crisco',
      '¾ Tasse huile végétale',
      '1 ½ Tasse d\'oignons hachés',
      '2 lbs de boeuf haché',
      '½ Tasse de porc haché',
      '1 gousse d\'ail'
      ]
    },
    {
      title: 'Deuxième partie',
      items: [
      '1 C. table marjolaine',
      '1 C. table Thym',
      '1 C. table ail en poudre',
      '1 C. table sauce Worcestershire',
      '1 C. table sauce Soya',
      '½ C. Thé sauce Tabasco',
      '½ C. Thé poivre rouge',
      '½ C. Thé poudre de Cari',
      '½ C. Thé persil sec',
      '1 C. Thé Piment broyé',
      '¼ C. Thé sel de céleri',
      '¼ C. Thé Paprika',
      '2 feuilles de Laurier',
      '1 boîte de crème de tomate',
      '1 boîte de grosses tomates en dés (ou 3 grosses tomates fraîches)',
      '¼ Tasse de Ketchup',
      '¼ Tasse de Sauce Chili',
      '2 petites boîtes de pâte de tomates',
      '1 grosse boîte de sauce Bravo à la viande',
      'Sel',
      'Poivre',
      'Accent'
      ]
    }
  ],
  instructions: [
    'Rôtir ensemble la première partie.',
    'Ajouter la deuxième partie.',
    'Mettre au four à 350°F pendant 3h30.'
  ],
  tags: ['sauce', 'bœuf', 'longue cuisson'],
  slug: 'sauce-a-spaghetti-de-mme-bouchard'
};
