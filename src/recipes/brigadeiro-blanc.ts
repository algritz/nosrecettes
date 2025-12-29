import { Recipe } from '@/types/recipe'

export const brigadeiroBlanc: Recipe = {
  id: '1758807501710',
  title: 'Brigadeiro blanc',
  description: '',
  categories: ['Pâtisseries et desserts'],
  prepTime: { min: 5, max: 5 },
  cookTime: { min: 15, max: 15 },
  servings: 24,
  difficulty: 'Facile',
  ingredients: [
    '2 tasse de noix de coco râpée non sucrée séchée',
    '1 boîte de lait Eagle Brand',
    '1 cuillère à soupe de beurre salé',
    'Sucre blanc granulé pour rouler',
  ],
  instructions: [
    'Placer le lait Eagle Brand dans une casserole.',
    'Ajouter la noix de coco râpée non sucrée au lait Eagle Brand.',
    'Bien mélanger.',
    'Ajouter le beurre salé au mélange, le beurre doit être ramolli à température ambiante.',
    'Bien mélanger.',
    'Faites cuire le mélange de noix de coco à feu moyen pendant 10-15 minutes en remuant constamment.',
    "Vous remarquerez que le mélange s'épaissit à mesure qu'il cuit.",
    'Ne cessez pas de remuer ou le mélange de noix de coco se cristallisera Retirer le mélange brigadeiro du feu, placer dans une assiette (préalablement badigeonnée de beurre) et laisser refroidir.',
    'Une fois le mélange de brigadeiro refroidi, roulez-le en boules. Étalez du beurre sur vos mains lorsque vous faites rouler les boules afin que le mélange ne colle pas à vos mains.',
    'Roulez les boules dans du sucre cristallisé.',
    'Placer dans des mini moule a muffin ou à dessert.',
    'Bon appétit!',
  ],
  tags: ['végétarien', 'Brézil'],
  images: [
    {
      small:
        'https://res.cloudinary.com/nosrecettes/image/upload/w_400,h_300,c_fill,q_auto,f_auto/recipes/brigadeiro_blanc',
      medium:
        'https://res.cloudinary.com/nosrecettes/image/upload/w_800,h_600,c_fill,q_auto,f_auto/recipes/brigadeiro_blanc',
      large:
        'https://res.cloudinary.com/nosrecettes/image/upload/w_1200,h_900,c_fill,q_auto,f_auto/recipes/brigadeiro_blanc',
    },
  ],
  source: 'David Cloutier',
  slug: 'brigadeiro-blanc',
}
