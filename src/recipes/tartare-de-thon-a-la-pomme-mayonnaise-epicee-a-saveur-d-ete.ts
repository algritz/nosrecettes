import { Recipe } from '@/types/recipe';

export const tartareDeThonALaPommeMayonnaiseEpiceeASaveurDEte: Recipe = {
  id: 'tartare-de-thon-a-la-pomme-mayonnaise-epicee-a-saveur-d-ete',
  title: 'Tartare de thon à la pomme, mayonnaise épicée à saveur d\'été',
  description: 'Un tartare rafraîchissant de thon à la pomme avec une mayonnaise épicée, parfait pour l\'été.',
  categories: ['Entrées'],
  prepTime: { min: 15, max: 15 },
  cookTime: { min: 0, max: 0 },
  servings: 2,
  difficulty: 'Facile',
  ingredients: [
    '450 g (1 lb) de thon ahi de qualité tartare, coupé en petits dés',
    '1 pomme verte non pelée, coupée en petits dés',
    '5 ml (1 c. à thé) de zeste de lime (environ 1 lime)',
    '15 ml (1 c. à soupe) de jus de lime (environ 1 lime)',
    '125 ml (½ tasse) de mayonnaise maison ou du commerce',
    '5 ml (1 c. à thé) de sauce sriracha, ou au goût',
    '30 ml (2 c. à soupe) de ciboulette fraîche, ciselée',
    'Poivre du moulin, au goût'
  ],
  instructions: [
    'Dans un bol, mélanger le thon, la pomme, le zeste et le jus de lime. Réserver.',
    'Dans un autre bol, mélanger la mayonnaise, la sauce sriracha, la ciboulette et le poivre. Bien incorporer la mayonnaise au mélange de thon.',
    'Pour une belle présentation, presser le tartare dans un emporte-pièce rond.'
  ],
  tags: ['été', 'mayonnaise épicée', 'thon'],
  source: 'https://www.iga.net/fr/recettes_inspirantes/recettes/tartare_de_thon_a_la_pomme_mayonnaise_epicee',
  notes: 'Un des meilleurs tartare que j\'ai gouté à ce jour.',
  slug: 'tartare-de-thon-a-la-pomme-mayonnaise-epicee-a-saveur-d-ete'
};
