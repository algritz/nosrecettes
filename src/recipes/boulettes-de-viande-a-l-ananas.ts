import { Recipe } from '@/types/recipe';

export const boulettesDeViandeALAnanas: Recipe = {
  id: 'boulettes-de-viande-a-l-ananas',
  title: 'Boulettes de viande à l\'ananas',
  description: '',
  categories: ['Plats principaux'],
  prepTime: { min: 30, max: 30 },
  cookTime: { min: 480, max: 480 },
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    '¾ tasse de chapelure fine (ou miettes de craquelins soda)',
    '2 c. à table de lait',
    '2 gros œufs, battus à la fourchette',
    '¾ tasse d\'oignon, haché fin',
    '¼ c. à thé de poudre d\'ail',
    '¼ c. à thé de gingembre moulu',
    '1 ¼ c. à thé de sel',
    '½ c. à thé de poivre',
    '1 ½ lb. de bœuf haché maigre',
    '1 ½ tasse d\'ananas broyés, en conserve, non égouttés',
    '1 tasse de cassonade tassée',
    '½ tasse de vinaigre blanc',
    '3 c. à table de sauce soya',
    '1 c. à table de fécule de maïs',
    '1 c. à table d\'eau'
  ],
  instructions: [
    'Bien mélanger les 8 premiers ingrédients dans un bol.',
    'Ajouter le bœuf haché. Bien remuer.',
    'Façonner en boulettes de 1½ po.',
    'Mettre dans une mijoteuse de 3.5 L.',
    'Mettre les 4 premiers ingrédients dans une casserole à feu moyen. Amener à ébullition en remuant.',
    'Délayer la fécule de maïs dans l\'eau, dans une petite tasse.',
    'Incorporer au mélange en ébullition et remuer jusqu\'à ce que la préparation commence à épaissir.',
    'Verser sur les boulettes.',
    'Couvrir. Cuire à LOW pendant 8-10 heures, ou à HIGH de 4 à 5 heures.'
  ],
  tags: ['mijoteuse', 'ananas', 'boulettes'],
  slug: 'boulettes-de-viande-a-l-ananas'
};
