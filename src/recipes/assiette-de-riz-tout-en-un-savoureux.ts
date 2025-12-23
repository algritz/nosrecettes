import { Recipe } from '@/types/recipe';

export const assietteDeRizToutEnUnSavoureux: Recipe = {
  id: 'assiette-de-riz-tout-en-un-savoureux',
  title: 'Assiette de riz tout en un savoureux',
  description: 'Un plat complet et savoureux de riz avec poulet et légumes, facile à préparer pour un repas de semaine.',
  categories: ['Plats principaux'],
  prepTime: 20,
  cookTime: 20,
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    '10 ml d\'huile',
    '1 petit oignon rouge haché finement',
    '2 carottes coupées en cubes',
    '1 grosse pomme de terre coupée en cubes',
    '2 poitrines de poulet coupées en cubes',
    '2 poivrons vert coupés en cubes',
    '50 gr petits pois vert surgelé',
    '5 ml sel',
    '5 ml poivre noir',
    '200 gr de riz',
    '300 ml de bouillon de poulet',
    '3 feuilles de laurier',
    '3 gousses d\'ail',
    '5 ml de Sambal Oelek',
    '5 ml de carvi en poudre',
    '5 ml de coriandre en poudre',
    '5 ml de curcuma'
  ],
  instructions: [
    'Faire revenir dans l\'huile, le poulet. Réserver.',
    'Remettre un peu d\'huile et faire sauter les oignons, les carottes, la pomme de terre, les poivrons et les pois.',
    'Ajouter le poulet.',
    'Saler et poivrer et bien mélanger.',
    'Ajouter le riz en bien brasser.',
    'Ajouter 300 ml de bouillon de poulet chaud et bien remuer.',
    'Ajouter les feuilles de laurier, l\'ail, le Sambal Oelek, le carvi, le curcuma et la coriandre et bien brasser.',
    'Couvrir et laisser cuire à médium jusqu\'à ce que le riz soit cuit en remuant de temps en temps.',
    'Bien brasser et servir.'
  ],
  tags: ['riz', 'poulet', 'légumes'],
  notes: 'Repas facile de semaine',
  slug: 'assiette-de-riz-tout-en-un-savoureux'
};
