import { Recipe } from '@/types/recipe';

export const marteauDeThor: Recipe = {
  id: 'marteau-de-thor',
  title: 'Marteau de Thor',
  description: 'Impressionnez vos invités avec cette spectaculaire recette de jarret de bœuf Marteau de Thor',
  categories: ['Boeuf', 'Fumoir', 'Barbecue'],
  prepTime: { min: 20, max: 20 },
  cookTime: { min: 480, max: 720 },
  marinatingTime: { min: 480, max: 720 },
  servings: 10,
  difficulty: 'Facile',
  ingredients: [
    '1 Jarret de bœuf',
    '900 ml de bouillon de bœuf',
    '125 ml sauce Worcestershire',
    'Épices à frotter (rub), J\'aimes bien le Avache, mais tout mélange Sel / Poivre / Ail ferait l\'affaire'
  ],
  instructions: [
    'Mélanger le bouillon de bœuf et la sauce Worcestershire dans une tasse à mesurer.',
    'Avec une seringue, injecter le liquide dans la pièce de viande.',
    'Laisser reposer au frigo entre 30 minutes et une nuit.',
    'Préchauffer le fumoir à 250°F.',
    'Placer la pièce de viande dans un plat en aluminium (le but étant de recueillir le jus de la moelle pendant la cuisson).',
    'Après 30 minutes et toutes les 30 minutes, vaporiser du restant du mélange de bouillon de bœuf et sauce Worcestershire.',
    'Une fois que la moelle a fondu et s\'il y en a assez, racler avec une cuillère le jus de moelle et verser sur la pièce de viande.',
    'Lorsque la pièce de viande a atteint 165°F, la retourner pour que le maximum de viande baigne dans le jus de cuisson, ajouter le restant de mélange de bouillon, envelopper et continuer la cuisson.',
    'Augmenter la température du fumoir jusqu\'à 375°F (ajustez selon votre heure cible).',
    'La pièce de viande sera prête lorsqu\'elle aura atteint 211°F, la sonde de votre thermomètre devrait entrer dans la pièce de viande comme dans du beurre sur l\'ensemble de la pièce.',
    'Sortir, laisser reposer 10 à 15 minutes, effilocher, la viande ne devrait offrir aucune résistance.',
    'Servir et déguster.'
  ],
  tags: ['fumoir', 'bœuf', 'injecter'],
  images: [
    {
      small: 'https://res.cloudinary.com/nosrecettes/image/upload/w_400,h_300,c_fill,q_auto,f_auto/recipes/marteau-de-thor',
      medium: 'https://res.cloudinary.com/nosrecettes/image/upload/w_800,h_600,c_fill,q_auto,f_auto/recipes/marteau-de-thor',
      large: 'https://res.cloudinary.com/nosrecettes/image/upload/w_1200,h_900,c_fill,q_auto,f_auto/recipes/marteau-de-thor'
    }
  ],
  accompaniment: 'Faites fumer des saucisses en accompagnement dans la dernière heure de cuisson',
  wine: 'Baron de Ley, reserva',
  source: 'David Cloutier',
  notes: 'Le rendement total varie selon la proportion d\'os sur la pièce originale, prévoir environ 50% de réduction de poids pour la partie viande. Exemple : une pièce de 3.4 kg, avec un os de 800 g laissera 2.6 kg brut de viande et produira environ 1.3 kg de viande au final.',
  slug: 'marteau-de-thor'
};
