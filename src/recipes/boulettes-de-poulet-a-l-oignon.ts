import { Recipe } from '@/types/recipe';

export const boulettesDePouletALOignon: Recipe = {
  id: 'boulettes-de-poulet-a-l-oignon',
  title: 'Boulettes de poulet à l\'oignon',
  description: 'Une recette de boulettes de poulet savoureuses, cuites au four et servies avec une sauce aux oignons et au thym, garnies de Gruyère fondu.',
  categories: ['Plats principaux'],
  prepTime: { min: 20, max: 20 },
  cookTime: { min: 70, max: 70 },
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    '2 cuillères à soupe d\'huile d\'olive extra vierge',
    '1 lb poulet haché',
    '1/2 tasse Gruyère râpé',
    '1/4 tasse chapelure',
    '2 cuillères à soupe de persil fraîchement haché',
    '1 gros œuf, battu',
    '2 gousses d\'ail émincées',
    '1 cuillère à café de sel casher',
    'Poivre noir fraîchement moulu',
    '4 cuillères à soupe beurre',
    '2 gros oignons émincés',
    '2 gousses d\'ail émincées',
    '2 tasses bouillon de bœuf faible en sodium',
    '2 cuillères à café thym fraîchement haché, et plus pour la garniture',
    'Sel casher',
    'Poivre noir fraîchement moulu',
    '1 1/2 tasse Gruyère râpé'
  ],
  instructions: [
    'Préchauffer le four à 425 °F. Tapisser une grande plaque à pâtisserie de papier d\'aluminium et la frotter avec de l\'huile.',
    'Préparer des boulettes de viande: dans un grand bol, mélanger le poulet haché, le Gruyère, la chapelure, le persil, l\'œuf et l\'ail. Assaisonner avec du sel et du poivre.',
    'Former 16 boulettes de viande, puis déposer sur la plaque préparée et cuire au four jusqu\'à ce qu\'elles soient dorées et bien cuites, environ 25 minutes.',
    'Pendant ce temps, préparer la sauce: dans une grande poêle à feu moyen, faire fondre le beurre.',
    'Ajouter les oignons et cuire jusqu\'à ce qu\'ils soient très tendres et dorés, environ 25 minutes, en remuant souvent.',
    'Ajouter l\'ail et cuire jusqu\'à ce qu\'il soit parfumé, 1 minute de plus.',
    'Ajouter le bouillon et le thym, assaisonner de sel et de poivre, porter à ébullition, puis réduire le feu et laisser mijoter jusqu\'à ce que le mélange épaississe légèrement, environ 10 minutes.',
    'Ajouter les boulettes dans la poêle, saupoudrer de Gruyère, couvrir et cuire jusqu\'à ce que les boulettes soient bien chauffées et que le fromage fonde, environ 5 minutes.',
    'Servir chaud, garni de thym.'
  ],
  tags: ['poulet', 'fromage', 'sauce aux oignons'],
  slug: 'boulettes-de-poulet-a-l-oignon'
};
