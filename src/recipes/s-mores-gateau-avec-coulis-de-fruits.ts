import { Recipe } from '@/types/recipe'

export const sMoresGateauAvecCoulisDeFruits: Recipe = {
  id: 's-mores-gateau-avec-coulis-de-fruits',
  title: 'S’mores-gâteau avec coulis de fruits',
  description: '',
  categories: ['Végétarien', 'Desserts'],
  prepTime: { min: 15, max: 15 },
  cookTime: { min: 10, max: 10 },
  servings: 6,
  difficulty: 'Facile',
  ingredients: [
    'Un plat en aluminium pour le BBQ',
    'Deux tablettes de votre chocolat préféré en petits morceaux ou râpé (au lait, noir, avec noix, caramel, etc.)',
    'Des petits fruits (par exemple, un casseau de fraises, un de bleuets et un autre de framboises)',
    'Des guimauves miniatures (1 tasse)',
    'Un muffin ou un morceau de gâteau en petits morceaux',
  ],
  instructions: [
    'Sur le plat en aluminium, étendez vos petits fruits.',
    'Ensuite, mettez les morceaux de gâteau ou de muffin (si vous en avez).',
    'Placez les guimauves un peu partout.',
    'Finalement, saupoudrez le chocolat râpé ou déposez les morceaux de façon à ce qu’il y en ait un peu partout.',
    'Mettez le plat sur le BBQ et laissez cuire quelques minutes.',
    'Lorsque le chocolat sera fondu ou les guimauves seront un peu dorées, retirez du feu et servir.',
  ],
  tags: ['barbecue', 'gâteau', 'chocolat'],
  slug: 's-mores-gateau-avec-coulis-de-fruits',
}
