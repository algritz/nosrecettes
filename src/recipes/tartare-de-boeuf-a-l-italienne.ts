import { Recipe } from '@/types/recipe';

export const tartareDeBoeufALItalienne: Recipe = {
  id: 'tartare-de-boeuf-a-l-italienne',
  title: 'Tartare de boeuf à l’italienne',
  description: 'Un tartare de boeuf frais et aromatique, relevé avec du basilic, du parmesan, du Sambal Oelek et du pesto de tomates séchées, servi frais.',
  categories: ['Entrées'],
  prepTime: 20,
  cookTime: 0,
  servings: 2,
  difficulty: 'Facile',
  ingredients: [
    '500 gr. de filet mignon de boeuf ou d’intérieur de ronde',
    'Oignon rouge ou échalote française, haché finement',
    'Une dizaine de feuilles de basilic, hachées',
    '1/4 t. (60 ml) de fromage parmesan, râpé finement',
    '1/4 à 1/2 cuil. à thé (1.25 à 2.5 ml) de Sambal Oelek',
    '1 cuil. à thé de pesto de tomates séchées',
    '1 cuil. à thé (5 ml) de vinaigre balsamique blanc',
    '1 cuil. à soupe d’huile d’olive',
    'Poivre du moulin',
    'Fleur de sel'
  ],
  instructions: [
    'Hacher le boeuf en petits cubes. Je le préfère en très petits morceaux. Ça prend plus de temps, mais ça vaut vraiment la peine.',
    'Mélanger les oignons hachés, le basilic ciselé, et le parmesan râpé au boeuf.',
    'Faire une émulsion avec l’huile d’olive et le vinaigre balsamique blanc en les fouettant quelques secondes.',
    'Ajouter le mélange au tartare, avec le Sambal Oelek et le pesto de tomates séchées.',
    'Saler, poivrer et laisser reposer 15 à 30 minutes au frais.',
    'Servir'
  ],
  tags: ['basilic', 'parmesan', 'relevé'],
  slug: 'tartare-de-boeuf-a-l-italienne'
};
