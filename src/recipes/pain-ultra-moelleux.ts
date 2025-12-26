import { Recipe } from '@/types/recipe';

export const painUltraMoelleux: Recipe = {
  id: 'pain-ultra-moelleux',
  title: 'Pain ultra-moelleux',
  description: 'Pain fait avec un œuf qui est ultra moelleux.',
  categories: ['Végétarien', 'Pain'],
  prepTime: 20,
  cookTime: 30,
  servings: 2,
  difficulty: 'Facile',
  ingredients: [
    '1 œuf',
    '3 cuillères à soupe de sucre',
    '120 ml d\'huile végétale',
    '360 ml d\'eau tiède',
    '14 g de levure à pain instantané',
    '700 g de farine (environ 8 tasses)',
    '1 cuillère à thé de sel',
    '1 œuf',
    '1 cuillère à soupe de lait'
  ],
  instructions: [
    'Dans un bol, battre l\'œuf avec le sucre.',
    'Ajouter l\'huile et l\'eau et bien brasser.',
    'Ajouter la levure et bien mélanger.',
    'Ajouter la moitié de la farine et le sel, puis mélanger.',
    'Ajouter le reste de la farine. Bien pétrir.',
    'Couvrir et faire lever environ 1h30.',
    'Diviser la pâte en 2.',
    'Étendre chaque boule sur une surface enfarinée et aplatir au rouleau à pâte.',
    'Une fois la pâte aplatie, rouler comme un boudin et mettre dans des moules à pain graissés à l\'huile végétale.',
    'Laisser lever les deux pains environ 45 minutes à 1 heure.',
    'Badigeonner le dessus de pain d\'un œuf battu avec une cuillère à soupe de lait.',
    'Faire cuire à 350°F (180°C) environ 30 minutes.'
  ],
  tags: ['moelleux', 'pain maison', 'levure'],
  marinatingTime: 150,
  slug: 'pain-ultra-moelleux'
};
