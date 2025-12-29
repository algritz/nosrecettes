import { Recipe } from '@/types/recipe'

export const sushiAuBacon: Recipe = {
  id: 'sushi-au-bacon',
  title: 'Sushi au bacon',
  description: 'Sushi au bacon',
  categories: ['Végétarien'],
  prepTime: { min: 30, max: 30 },
  cookTime: { min: 40, max: 40 },
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    '12 tranches de bacon',
    '500g de boeuf haché',
    'Épices à BBQ',
    'Fromage emmental',
    'Sauce BBQ',
    'Nachos émiettés',
    'Accessoires',
    'Tapis à sushi',
  ],
  instructions: [
    'Sur un napperon à sushi, allongez 6 tranches de bacon non cuit.',
    'Assaisonnez le boeuf avec des épices à B.B.Q.',
    'Ajoutez une mince couche de boeuf sur le bacon.',
    'Tranchez le fromage en tube et placez-le sur le boeuf, puis roulez serré.',
    'Préchauffez le B.B.Q. à 180°C / 356°F.',
    'Faites cuire 40 minutes, badigeonner de sauce toutes les 5-10 minutes sur tous les côtés.',
    'Roulez la pièce sushi bacon dans les nachos émiettés.',
    'Servez avec un extra de sauce B.B.Q.',
  ],
  tags: ['bacon', 'barbecue', 'roulé'],
  images: [
    {
      small:
        'https://res.cloudinary.com/nosrecettes/image/upload/w_400,h_300,c_fill,q_auto,f_auto/recipes/sushi-au-bacon',
      medium:
        'https://res.cloudinary.com/nosrecettes/image/upload/w_800,h_600,c_fill,q_auto,f_auto/recipes/sushi-au-bacon',
      large:
        'https://res.cloudinary.com/nosrecettes/image/upload/w_1200,h_900,c_fill,q_auto,f_auto/recipes/sushi-au-bacon',
    },
  ],
  source: 'David Cloutier',
  slug: 'sushi-au-bacon',
}
