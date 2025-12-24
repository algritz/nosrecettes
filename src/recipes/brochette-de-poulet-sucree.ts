import { Recipe } from '@/types/recipe';

export const brochetteDePouletSucree: Recipe = {
  id: 'brochette-de-poulet-sucree',
  title: 'Brochette de poulet sucrée',
  description: 'Une recette de brochettes de poulet marinées et grillées, accompagnées d\'une sauce sucrée à l\'ananas.',
  categories: ['Végétarien'],
  prepTime: 25,
  cookTime: 20,
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    '1 poitrine de poulet, désossée, coupée en cubes',
    '1 piment vert',
    '1 piment rouge',
    '1 oignon, en quartiers',
    'Champignons',
    'Tomates cerises',
    'Autres légumes à brochette de votre choix',
    'Sauce:',
    '1/2 tasse (125 ml) jus d\'ananas',
    '1/2 tasse (125 ml) sucre',
    '1/4 tasse (65 ml) vinaigre blanc',
    '2 c.à soupe (30 ml) sauce soya',
    '2 c.à thé (10 ml) fécule de maïs',
    'Marinade:',
    '1/2 tasse (125 ml) huile',
    '1/3 tasse (85 ml) sauce soya',
    '1 c.à thé (5 ml) moutarde sèche',
    '1/4 c.à thé (1 ml) poudre d\'ail',
    '1/4 tasse (65 ml) jus d\'ananas'
  ],
  instructions: [
    'Mariner 4 heures le poulet dans la marinade.',
    'Enfiler les cubes de poulet sur une broche en alternant avec les piments, les oignons et les champignons.',
    'Faire griller sur le barbecue ou au four à 350°F (180°C) pendant 20 minutes.',
    'Pour la sauce, mélanger le tout et amener à ébullition quelques minutes.',
    'Servir sur les brochettes avec du riz.'
  ],
  tags: ['barbecue', 'sauce sucrée', 'poulet'],
  accompaniment: 'riz',
  marinatingTime: 240,
  slug: 'brochette-de-poulet-sucree'
};
