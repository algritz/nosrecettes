import { Recipe } from '@/types/recipe'

export const manicottisDeBoeufEtEpinardsDeFanny: Recipe = {
  id: 'manicottis-de-boeuf-et-epinards-de-fanny',
  title: 'Manicottis de boeuf et épinards de Fanny',
  description:
    'Une recette de manicottis farcis à la viande, épinards et ricotta, nappés de sauce Parma-Rosa, gratinés au fromage.',
  categories: ['Plats principaux'],
  prepTime: { min: 60, max: 60 },
  cookTime: { min: 90, max: 90 },
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    '1 boîte de manicottis non cuit',
    '3-4 enveloppes de sauce Knorr Parma-Rosa',
    'Fromage ricotta',
    'Boeuf haché',
    'Ail',
    'Piments de couleurs différentes en dés',
    'Oignon finement haché',
    'Céleri coupé en dés',
    'Fines herbes',
    'Poivre de cayenne au goût',
    'Sel',
    'Poivre',
    'Épinard (bonne quantité)',
    'Beurre',
    '1 tomate fraîche coupée en dés',
    'Fromage à gratiner',
  ],
  instructions: [
    'Faire cuire le boeuf haché.',
    "Ajouter l'ail, l'oignon, les piments, le céleri.",
    'Assaisonner au goût avec les fines herbes et le poivre de cayenne.',
    'Saler et poivrer.',
    "S'il y a trop de gras dans le mélange, en retirer un peu à la cuillère.",
    'Retirer le mélange du feu et le verser dans un grand bol à couvercle.',
    'Faire faner les épinards dans du beurre et ajouter dans le grand bol.',
    "Ajouter une bonne quantité de fromage ricotta et la tomate au mélange de boeuf et d'épinards et bien brasser.",
    "Mettre le mélange de viande, légumes et fromage au réfrigérateur, jusqu'à ce qu'il soit bien froid, environ 4 heures.",
    'Lorsque bien froid, prendre le mélange de boeuf et remplir les manicottis non-cuit avec (utiliser une cuillère de bébé).',
    'Mettre les manicottis dans un grand chaudron profond ou un creuset.',
    "Dans un grand bol, faire le mélange des sauces Parma-Rosa tel qu'indiqué sur l'enveloppe, mais ne pas faire cuire.",
    "Déposer la sauce encore froide sur les manicottis, en s'assurant qu'ils sont tous bien submergés.",
    'Cuire couvert environ 1h30.',
    "Lorsque c'est prêt, ajouter le fromage et gratiner à broil.",
  ],
  tags: ['bœuf', 'épinards', 'gratiner'],
  images: [
    {
      small:
        'https://res.cloudinary.com/nosrecettes/image/upload/w_400,h_300,c_fill,q_auto,f_auto/recipes/manicottis-de-boeuf-et-epinards-de-fanny',
      medium:
        'https://res.cloudinary.com/nosrecettes/image/upload/w_800,h_600,c_fill,q_auto,f_auto/recipes/manicottis-de-boeuf-et-epinards-de-fanny',
      large:
        'https://res.cloudinary.com/nosrecettes/image/upload/w_1200,h_900,c_fill,q_auto,f_auto/recipes/manicottis-de-boeuf-et-epinards-de-fanny',
    },
  ],
  source: 'David Cloutier',
  slug: 'manicottis-de-boeuf-et-epinards-de-fanny',
}
