import { Recipe } from '@/types/recipe';

export const tourteBretonneAuxBleuetsFamboises: Recipe = {
  id: 'tourte-bretonne-aux-bleuets-famboises',
  title: 'Tourte bretonne aux bleuets / famboises',
  description: 'Une délicieuse tourte aux bleuets et framboises, garnie d\'un glaçage crémeux, parfaite pour un dessert fruité et gourmand.',
  categories: ['Desserts'],
  prepTime: { min: 25, max: 25 },
  cookTime: { min: 50, max: 50 },
  servings: 12,
  difficulty: 'Facile',
  ingredients: [
    {
      title: 'Gâteau',
      items: [
      '1/3 tasse de beurre',
      '1 œuf battu',
      '3/4 tasse de sucre',
      '3 c. à thé de poudre à pâte',
      '1 tasse de farine',
      '1 pincée de sel',
      '3/4 tasse de lait',
      '1 c. à thé de vanille'
      ]
    },
    {
      title: 'Garniture',
      items: [
      '2 tasses de bleuets et/ou framboises',
      '1 autre tasse de farine'
      ]
    },
    {
      title: 'Glaçage',
      items: [
      '35% de crème à cuisson',
      '1/2 tasse de beurre',
      '3/4 tasse de sucre blanc'
      ]
    }
  ],
  instructions: [
    'Gâteau: Crémer le beurre avec l’œuf. Ajouter le sucre et bien mélanger. Tamiser les ingrédients secs et les ajouter en alternant avec le lait. Ajouter délicatement le mélange de bleuets/farine (plier dans la pâte). Mettre dans un moule beurré et cuire environ 50 minutes à 350 °F. J\'ai utilisé un moule à charnière de 9 po. de diamètre par 2 1/2 po d\'épaisseur.',
    'Glaçage: Fondre le beurre dans un petit chaudron. Ajouter le reste et mijoter quelques minutes. Piquer le gâteau cuit avec une brochette en bois et verser le glaçage sur le dessus du gâteau. Laisser tiédir.'
  ],
  tags: ['fruits', 'gâteau', 'glaçage'],
  notes: 'Préparation: 20 à 25 minutes. Cuisson: 50 minutes + 5 minutes. Portions: 8 à 12 personnes. Accompagnement: Excellent avec un coulis de framboise.',
  slug: 'tourte-bretonne-aux-bleuets-famboises'
};
