import { Recipe } from '@/types/recipe'

export const patatesDouceGuacamoleEtFeta: Recipe = {
  id: 'patates-douce-guacamole-et-feta',
  title: 'Patates douce guacamole et feta',
  description:
    "Une recette simple de patates douces rôties garnies de guacamole à l'avocat, tomates cerise et feta.",
  categories: ['Végétarien', 'Entrées'],
  prepTime: { min: 20, max: 20 },
  cookTime: { min: 30, max: 30 },
  servings: 4,
  difficulty: 'Facile',
  ingredients: [
    "2 patates douces coupées en tranches d'environ 6 à 8 mm d'épaisseur",
    "Huile d'olive",
    'Sel',
    'Avocat',
    'Tomate cerise',
    'Un échalotte française',
    "Jus d'une lime",
    'Feta',
  ],
  instructions: [
    'Préchauffer le four à 350F.',
    'Couper les patates douces en tranches.',
    "Badigeonner d'huile d'olive et de sel et faire cuire au four 20 à 30 minutes sur un papier parchemin.",
    "Pendant ce temps, mélanger l'avocat avec une poignée de tomates cerise coupées en 4, un échalotte française émincé finement et le jus d'une lime.",
    'Une fois sortie du four, étendre la guacamole sur les patates douces, garnir de feta et déguster.',
  ],
  tags: ['rôtie', 'guacamole', 'feta'],
  slug: 'patates-douce-guacamole-et-feta',
}
