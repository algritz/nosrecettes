import { Recipe } from '@/types/recipe';

export const pouletRotiAuRomarin: Recipe = {
  id: 'poulet-roti-au-romarin',
  title: 'Poulet rôti au romarin',
  description: 'Poulet rôti au romarin',
  categories: ['Vollaille'],
  prepTime: { min: 20, max: 20 },
  cookTime: { min: 45, max: 45 },
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    '1 poulet entier d\'environ 1,5 kg (3 lb)',
    '1 petit citron, en quartiers',
    '1 petit oignon, en quartiers',
    '1 petite tête d\'ail, pelée et coupée en quatre',
    '2 brins de romarin, coupés en sections de 5 cm (2 po)',
    'Gros sel',
    'Poivre',
    '15 ml de beurre',
    '15 ml de persil, haché'
  ],
  instructions: [
    'Le jour avant la cuisson : combiner le citron, l’oignon, l’ail et le romarin (sauf deux sections) dans un bol. Saler et poivrer généreusement.',
    'Farcir le poulet de ce mélange et ajouter l’ail dans la cavité du cou.',
    'Glisser les deux sections de romarin réservées sous la peau de la poitrine, de chaque côté.',
    'Saler le poulet.',
    'L’envelopper dans une pellicule plastique et réfrigérer toute une nuit.',
    'Préchauffer le four à 425 °F (215 °C).',
    'Sortir le poulet du réfrigérateur, retirer la pellicule plastique et l’éponger.',
    'Quand il est à la température ambiante, placer le poulet dans une poêle en fonte ou un plat à rôtir juste assez grand pour le contenir.',
    'Enduire les poitrines de beurre et saler de nouveau.',
    'Faire rôtir le poulet de 45 min à 1 h, jusqu’à ce que la température interne atteigne 135 °F (75 °C). La peau devrait prendre une appétissante couleur dorée.',
    'Égoutter le poulet au-dessus de la poêle, le transférer sur une planche à découper et le laisser tiédir 10 min.',
    'Découper le poulet, garnir de persil et arroser de jus de cuisson.'
  ],
  tags: ['romarin', 'rôtissage', 'poulet'],
  slug: 'poulet-roti-au-romarin'
};
