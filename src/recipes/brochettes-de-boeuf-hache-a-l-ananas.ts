import { Recipe } from '@/types/recipe'

export const brochettesDeBoeufHacheALAnanas: Recipe = {
  id: 'brochettes-de-boeuf-hache-a-l-ananas',
  title: "Brochettes de boeuf haché à l'ananas",
  description: '',
  categories: ['Viande', 'Végétarien'],
  prepTime: { min: 20, max: 20 },
  cookTime: { min: 30, max: 30 },
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    {
      title: 'Marinade',
      items: [
        '4 cl de ketchup',
        '4 cl de sauce soja',
        '4 cl de sauce barbecue',
        "4 cl d'eau",
        '2 cl de vinaigre',
        "2 cl d'huile",
        "2 gousses d'ail mixées",
        '2 cuillères à soupe de sucre',
        '1 cuillère à soupe de sel',
      ],
    },
    {
      title: 'Brochettes',
      items: [
        '500 g de boeuf haché',
        '2 oignons finement hachés',
        '6 cl de chapelure',
        'sel, poivre',
        "570 g d'ananas en tranches",
      ],
    },
  ],
  instructions: [
    'Marinade: Mettre tous les ingrédients dans un bol et mélanger.',
    'Boulettes: Mélanger la viande, les oignons et la chapelure. Assaisonner. Préparer 16 boulettes de viande et les recouvrir avec la marinade. Laisser reposer 24 h.',
    'Préchauffer le four à 350°F.',
    "Préparer 4 brochettes en alternant 1 boulette et 1 morceau d'ananas (en commençant et en finissant avec de l'ananas).",
    'Poser les brochettes sur la lèche-frites, les badigeonner avec la marinade et faire cuire pendant environ 30 min (retourner à mi-cuisson et badigeonner à nouveau avec la marinade).',
    'Finir la cuisson sous le grill pendant quelques minutes.',
  ],
  tags: ['barbecue', 'ananas', 'viande'],
  slug: 'brochettes-de-boeuf-hache-a-l-ananas',
}
