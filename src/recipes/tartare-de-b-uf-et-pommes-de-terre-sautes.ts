import { Recipe } from '@/types/recipe';

export const tartareDeBUfEtPommesDeTerreSautes: Recipe = {
  id: 'tartare-de-b-uf-et-pommes-de-terre-sautes',
  title: 'Tartare de bœuf et pommes de terre sautés',
  description: 'Un tartare de bœuf accompagné de pommes de terre sautées, relevé avec une mayonnaise maison et des aromates.',
  categories: ['Plats principaux', 'Végétarien'],
  prepTime: { min: 20, max: 20 },
  cookTime: { min: 15, max: 15 },
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    'Mayonnaise',
    '1 c. à soupe de moutarde forte',
    '250 ml d\'huile d\'arachide',
    '1 jaune d\'oeuf',
    'Une pincée de sel fin',
    '15 ml de jus de citron',
    '4 pommes de terre',
    '10 ml de gros sel',
    '2 c. à soupe de beurre',
    '2 branches de thym',
    '1 gousse d\'ail',
    'bavette de bœuf 900g',
    '1 à 2 échalotes françaises',
    '2 c. à soupe de câpres',
    '5-6 cornichons dans le vinaigre',
    '5 gouttes de sauce Tabasco rouge',
    'Poivre au goût',
    '2 c. à thé de sauce Worcestershire',
    '1 botte de persil plat',
    '3 pincées de sel fin'
  ],
  instructions: [
    'Préparation de la mayonnaise: Dans un bol, déposer le jaune d\'œuf, le sel et une cuillère à soupe de moutarde. Bien mélanger puis monter avec l\'huile en incorporant le liquide énergiquement au fouet ou à la cuillère en bois. Ajouter quelques gouttes de citron.',
    'Préparer les pommes de terre en garniture: Nettoyer les pommes de terre, les couper en morceaux, puis les mettre dans une casserole recouverte d\'eau salée. Porter à ébullition et cuire 3 minutes. Égoutter, puis faire sauter dans le beurre mousseux avec la gousse d\'ail et le thym pendant 5 à 8 minutes. Assaisonner de sel et de poivre.',
    'Pour terminer le tartare: Ciseler l\'échalote, hacher le persil, les câpres et les cornichons. Hacher la viande de bœuf. Ajouter tous les éléments ciselés à la viande. Assaisonner avec la mayonnaise, la sauce Worcestershire, le Tabasco, le sel fin et le poivre. Mélanger et réserver au frais.',
    'Servir le tartare moulé dans un cercle en inox avec les pommes de terre autour.'
  ],
  tags: ['mayonnaise', 'bœuf', 'sauté'],
  slug: 'tartare-de-b-uf-et-pommes-de-terre-sautes'
};
