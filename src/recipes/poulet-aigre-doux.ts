import { Recipe } from '@/types/recipe';

export const pouletAigreDoux: Recipe = {
  id: 'poulet-aigre-doux',
  title: 'Poulet aigre-doux',
  description: '',
  categories: ['Plats principaux'],
  prepTime: 30,
  cookTime: 75,
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    'Sauce 1 tasse (250 ml)',
    'ketchup',
    '2 c.à soupe (30 ml) vinaigre balsamique',
    '1/4 tasse (65 ml) cassonade',
    '1 tasse (250 ml) eau',
    '1 c.à soupe (15 ml) sauce Worcestershire',
    '1 c.à soupe (15 ml) moutarde, préparée',
    'Sel, au goût',
    'Poivre, au goût',
    'Poulet 1/4 tasse (65 ml) beurre',
    '1 tasse (250 ml) céleri, émincé',
    '2 oignons, moyens, coupés en tranches',
    '4 poitrines de poulet, désossées, sans la peau'
  ],
  instructions: [
    'Préchauffer le four à 350°F (180°C).',
    'Dans un bol, mélanger les ingrédients de la sauce jusqu\'à l\'obtention d\'un mélange lisse. Réserver.',
    'Dans un poêlon, faire fondre le beurre et y dorer les poitrines de chaque côté. Déposer dans un plat allant au four. Réserver.',
    'Dans le gras de la cuisson, cuire le céleri et les oignons de 2 à 3 minutes.',
    'Ajouter la sauce, mélanger et faire mijoter 10 minutes.',
    'Verser sur les poitrines de poulet.',
    'Cuire au four à découvert pendant environ 1 heure, en remuant de temps en temps.'
  ],
  tags: ['sauce aigre-douce', 'cuisine au four', 'poulet'],
  slug: 'poulet-aigre-doux'
};
