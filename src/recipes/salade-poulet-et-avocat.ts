import { Recipe } from '@/types/recipe';

export const saladePouletEtAvocat: Recipe = {
  id: 'salade-poulet-et-avocat',
  title: 'salade poulet et avocat',
  description: 'Une salade fraîche et savoureuse avec poulet mariné, avocat, tomates cerises, maïs, et une vinaigrette au citron vert.',
  categories: ['Salades'],
  prepTime: 25,
  cookTime: 20,
  servings: 2,
  difficulty: 'Facile',
  ingredients: [
    {
      title: 'Vinaigrette au citron vert / Marinade',
      items: [

      ]
    },
    {
      title: 'Poulet',
      items: [

      ]
    },
    {
      title: 'Garnitures à l\'avocat',
      items: [

      ]
    },
    {
      title: 'Salade',
      items: [

      ]
    }
  ],
  instructions: [
    'Mettre les ingrédients de la vinaigrette à la lime dans un bocal et bien agiter.',
    'Mettre 2 cuillères à soupe de vinaigrette dans un sac ziplock. Ajouter le chipotle, l\'origan, le cumin, l\'huile, le sel et le poivre, mélanger.',
    'Ajouter le poulet, sceller et masser pour bien enrober. Mariner 30 minutes ou toute la nuit.',
    'Faire cuire le poulet, laisser reposer et couper en tranches.',
    'Ajouter 2 cuillères à soupe de coriandre dans la vinaigrette, agiter.',
    'Dans un bol, mettre l\'avocat, le maïs, la tomate et l\'oignon, ajouter le reste de coriandre, arroser d\'un peu de vinaigrette et mélanger doucement.',
    'Dans un autre bol, mettre la laitue, arroser d\'un peu de vinaigrette et mélanger.',
    'Assembler la salade : placer la laitue sur un plat de service, garnir de la salsa et de tranches de poulet, arroser du reste de vinaigrette.',
    'Servir.'
  ],
  tags: ['citron vert', 'marinade sèche', 'salade'],
  slug: 'salade-poulet-et-avocat'
};
