import { Recipe } from '@/types/recipe';

export const burrataADejeuner: Recipe = {
  id: 'burrata-a-dejeuner',
  title: 'Burrata à déjeuner',
  description: 'J\'adore cette recette, mon déjeuner préféré Burrata à déjeuner',
  categories: ['Déjeuners', 'Végétarien'],
  prepTime: { min: 25, max: 25 },
  cookTime: { min: 20, max: 20 },
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    '½ tasse de sauce Hollandaise',
    '3 saucisses à déjeuner coupé en rondelles',
    '4 tranches de bacon haché grossièrement',
    'Jambon haché grossièrement',
    '1 petit oignon haché finement',
    '1 c. à soupe de beurre',
    '¼ de tasse de sirop d’érable',
    '1 oz de Whisky',
    'Une Burrata',
    '1 c à soupe de Firebarns bacon ou sambal oelek',
    'Sel et poivre au goût',
    'Pousses fraîches pour garnir',
    'Pain baguette pour servir'
  ],
  instructions: [
    'Précuire le bacon et la saucisse, éponger sur un essuie-tout et trancher en petits morceaux le bacon et en rondelles les saucisses.',
    'Dans une poêle à feu moyen, faire revenir l’oignon dans le beurre pendant 2 à 3 minutes.',
    'Ajouter ensuite les saucisses, le bacon et le jambon.',
    'Laisser cuire quelques minutes et déglacer avec le Whisky, ajouter ensuite le sirop d’érable, la Firebarns Bacon et continuer la cuisson à feu moyen pendant environ 5 à 10 minutes en remuant de temps en temps.',
    'Placer la boule de Burrata au centre d’une assiette et déposer le mélange autour.',
    'Verser ensuite quelques filets de sauces hollandaise sur le dessus de la Burrata.',
    'Saler, poivrer et servir avec des pousses fraîches et du pain.'
  ],
  tags: ['burrata', 'saucisses', 'hollandaise'],
  images: [
    {
      small: 'https://res.cloudinary.com/nosrecettes/image/upload/w_400,h_300,c_fill,q_auto,f_auto/recipes/burrata_dejeuner',
      medium: 'https://res.cloudinary.com/nosrecettes/image/upload/w_800,h_600,c_fill,q_auto,f_auto/recipes/burrata_dejeuner',
      large: 'https://res.cloudinary.com/nosrecettes/image/upload/w_1200,h_900,c_fill,q_auto,f_auto/recipes/burrata_dejeuner'
    }
  ],
  source: 'David Cloutier',
  slug: 'burrata-a-dejeuner'
};
