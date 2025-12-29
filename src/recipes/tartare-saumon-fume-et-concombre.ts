import { Recipe } from '@/types/recipe'

export const tartareSaumonFumeEtConcombre: Recipe = {
  id: 'tartare-saumon-fume-et-concombre',
  title: 'Tartare saumon fumé et concombre',
  description:
    'Une recette fraîche et simple de tartare de saumon fumé et concombre, idéale pour une entrée légère.',
  categories: ['Entrées'],
  prepTime: { min: 30, max: 30 },
  cookTime: { min: 0, max: 0 },
  servings: 2,
  difficulty: 'Facile',
  ingredients: [
    '1 concombre',
    '200 g de saumon fumé',
    '1/2 citron',
    "2 c. à soupe d'huile d'olive",
    '2 c. à soupe de vinaigre balsamique',
    '1 échalote',
    '1 c. à thé de moutarde',
    "1 branche d'aneth fraîche",
    'Sel',
    'Poivre',
  ],
  instructions: [
    'Éplucher et épépiner le concombre. Découper celui-ci en petits dés. Placer ceux-ci dans une passoire. Saler. Laisser dégorger durant une demi-heure.',
    'Découper les tranches de saumon fumé en petits dés.',
    "Peler et émincer finement l'échalote.",
    "Ciseler l'aneth.",
    'Presser le demi-citron.',
    "Dans un récipient, mélanger l'huile d'olive, le vinaigre balsamique, l'échalote, l'aneth et le jus de citron. Saler et poivrer. Ajouter de la moutarde.",
    'Diviser la préparation en 2 bols. Dans un bol, mélanger la préparation avec les dés de saumon. Dans le second bol, mélanger la préparation avec les dés de concombre.',
    'Réfrigérer les deux mélanges durant 30 minutes.',
    'Dans chaque assiette, déposer une couche épaisse de dés de concombre. Recouvrir avec une couche de dés de saumon.',
  ],
  tags: ['frais', 'entrée', 'saumon fumé'],
  slug: 'tartare-saumon-fume-et-concombre',
}
