import { Recipe } from '@/types/recipe';

export const saladeDeSaumonEtSalsaAuFruits: Recipe = {
  id: 'salade-de-saumon-et-salsa-au-fruits',
  title: 'Salade de saumon et salsa au fruits',
  description: 'Une salade fraîche combinant du saumon mariné et une salsa aux fruits colorée.',
  categories: ['Salades', 'Poisson'],
  prepTime: 20,
  cookTime: 15,
  servings: 2,
  difficulty: 'Facile',
  ingredients: [
    'une mangue coupée en petits dés',
    '10 à 15 fraises coupées en petite dés',
    '1 tomate coupée en petits dés',
    '1 c. à soupe de coriandre fraîche hachée (ou plus selon votre goût)',
    '5 à 6 branches de ciboulette fraîche hachée',
    '2 c. à soupe de persil frais haché',
    '1 c. à soupe de vinaigre balsamique de framboise',
    '1 c. à soupe d\'huile d\'olive',
    'le jus d\'une demi lime',
    'sel',
    'poivre rose au goût',
    'un morceau de saumon',
    '1 c. à soupe de jus de lime',
    '1 c. à soupe d\'huile d\'olive',
    '1/4 de c. à thé de paprika',
    'sel et poivre au goût'
  ],
  instructions: [
    'Mélanger tous les ingrédients de la salsa et laisser mariner minimum 2 heures.',
    'Mélanger le jus de lime, l\'huile d\'olive, le paprika, sel et poivre ensemble.',
    'Verser sur le saumon et masser le avec vos mains afin de bien faire pénétrer la marinade.',
    'Laisser mariner minimum 15 minutes.',
    'Faire cuire le saumon sur le BBQ ou au four.',
    'Une fois le saumon cuit, l\'effilocher.',
    'Servir le sur un lit de salade avec de la salsa.'
  ],
  tags: ['salsa', 'saumon', 'frais'],
  images: [
    {
      small: 'https://res.cloudinary.com/nosrecettes/image/upload/w_400,h_300,c_fill,q_auto,f_auto/recipes/salade-de-saumon-et-salsa-au-fruits',
      medium: 'https://res.cloudinary.com/nosrecettes/image/upload/w_800,h_600,c_fill,q_auto,f_auto/recipes/salade-de-saumon-et-salsa-au-fruits',
      large: 'https://res.cloudinary.com/nosrecettes/image/upload/w_1200,h_900,c_fill,q_auto,f_auto/recipes/salade-de-saumon-et-salsa-au-fruits'
    }
  ],
  source: 'David Cloutier',
  slug: 'salade-de-saumon-et-salsa-au-fruits'
};
