import { Recipe } from '@/types/recipe';

export const saladeDeChouFleur: Recipe = {
  id: '1766771206895',
  title: 'Salade de chou-fleur',
  description: 'Une salade fraîche et croustillante à base de chou-fleur rôti, accompagnée d\'une vinaigrette au yaourt et aux herbes.',
  categories: ['Salades'],
  prepTime: 20,
  cookTime: 25,
  servings: 2,
  difficulty: 'Facile',
  ingredients: [
    {
      title: 'Salade',
      items: [
        '1 tête de chou-fleur',
        'Sel et poivre au goût',
        '2 cuillères à soupe d\'huile d\'olive',
        '½ oignon rouge, coupé en dés',
        '3 branches de céleri, coupée en dés',
        '3 œufs à la coque, hachés'
      ]
    },
    {
      title: 'Vinaigrette',
      items: [
        '½ tasse de yogourt grec',
        '1 cuillère à soupe de moutarde de Dijon',
        '1 cuillère à soupe de miel',
        '2 cuillères à soupe d\'aneth haché',
        '1 cuillère à soupe d\'huile d\'olive',
        '1 gousse d\'ail écrasée',
        '½ jus de citron'
      ]
    }
  ],
  instructions: [
    'Préchauffer le four à 400 °F / 200 °C.',
    'Trancher le chou-fleur en petits fleurons.',
    'Placer le chou-fleur sur une plaque et l\'assaisonner avec du sel, du poivre, et de l\'huile d\'olive.',
    'Faire cuire au four préchauffé pendant 25 minutes ou jusqu\'à ce qu\'il soit légèrement doré et croustillant.',
    'Combiner les ingrédients de la vinaigrette.',
    'Dans un grand bol, déposer l\'oignon rouge, le céleri et les œufs, puis mélanger avec la vinaigrette.',
    'Laisser de côté.',
    'Une fois le chou-fleur cuit, le laisser refroidir légèrement avant de l\'ajouter à la sauce au yaourt.',
    'Garnir d\'aneth haché frais avant de servir.'
  ],
  tags: ['rôti', 'vinaigrette au yaourt', 'herbes'],
  source: 'David Cloutier',
  slug: 'salade-de-chou-fleur'
};
