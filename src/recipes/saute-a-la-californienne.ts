import { Recipe } from '@/types/recipe';

export const sauteALaCalifornienne: Recipe = {
  id: 'saute-a-la-californienne',
  title: 'Sauté à la californienne',
  description: '',
  categories: ['Plats principaux'],
  prepTime: { min: 10, max: 10 },
  cookTime: { min: 25, max: 25 },
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    '4 poitrines de poulet désossées sans peau, coupées en lanières',
    '1/2 tasse de lanières de poivron rouge',
    '1/2 tasse de pois mange-tout',
    '1/2 tasse de germes de haricot',
    '1/2 tasse de vinaigrette Catalina',
    '2 c. à soupe de sauce soya',
    '1 c. à thé de gingembre moulu'
  ],
  instructions: [
    'Sauter le poulet en remuant dans une poêle.',
    'Ajouter les légumes et cuire jusqu\'à ce qu\'ils soient tendres.',
    'Mélanger bien ensemble la vinaigrette, la sauce soya et le gingembre.',
    'Ajouter dans la poêle et bien enrober.',
    'Servir sur un lit de riz.'
  ],
  tags: ['sauté', 'marinade sèche', 'cuisine rapide'],
  marinatingTime: { min: 20, max: 20 },
  notes: 'Ajouter les légumes préférés de la famille comme du céleri et des carottes. Vous pouvez faire mariner les lanières de poulet dans 2 ou 3 c. à soupe du mélange de vinaigrette Catalina, sauce soya et gingembre.',
  slug: 'saute-a-la-californienne'
};
