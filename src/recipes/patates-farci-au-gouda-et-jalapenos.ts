import { Recipe } from '@/types/recipe'

export const patatesFarciAuGoudaEtJalapenos: Recipe = {
  id: '1766770857598',
  title: 'Patates farci au gouda et jalapeños',
  description:
    'Recette de patates farcies au gouda fumé et jalapeños, cuites au barbecue, garnies de crème sure aux oignons verts.',
  categories: ['Plats principaux', 'Végétarien'],
  prepTime: { min: 10, max: 10 },
  cookTime: { min: 90, max: 90 },
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    {
      title: 'Base',
      items: [
        '4 pommes de terre Russet moyennes',
        '15 ml (3 c. à thé) de gros sel casher',
        '4 branches de romarin',
        'Huile végétale',
      ],
    },
    {
      title: 'Garniture',
      items: [
        '50 ml (1 tasse) de fromage gouda fumé, râpé',
        '125 ml (1/2 tasse) de crème sure',
        '4 oignons verts',
        '2 piments jalapeños, coupés en deux et épinés',
        'Huile végétale',
        'Poivre du moulin, au goût',
      ],
    },
  ],
  instructions: [
    "Frotter les pommes de terre avec un peu d'huile végétale et du sel casher puis les emballer individuellement dans du papier d'aluminium.",
    'Insérer une branche de romarin avec chacune des pommes de terre emballées.',
    'Placer les pommes de terre sur la grille supérieure du barbecue et les cuire 1 heure 30 minutes à 300 degrés.',
    "Enduire les oignons verts et les jalapeños d'un peu d'huile.",
    'Faire griller 3-4 minutes à feu vif afin de les noircir.',
    'Refroidir puis hacher et mélanger avec la crème sure. Assaisonner. Réserver.',
    "Quand les pommes de terre sont tendres lorsqu'on les pique, réserver hors du feu.",
    'Fendre les pommes de terre en 2 pour les ouvrir.',
    'Garnir de gouda fumé râpé puis de crème sure aux oignons verts.',
  ],
  tags: ['barbecue', 'gouda', 'jalapeños'],
  source: 'David Cloutier',
  slug: 'patates-farci-au-gouda-et-jalapenos',
}
