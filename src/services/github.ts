import { ProcessedImage } from '@/utils/imageUtils';
import { ImageSizes } from '@/types/recipe';
import { generateCleanupInstructions } from '@/utils/cloudinaryUtils';

interface GitHubConfig {
  owner: string;
  repo: string;
  token: string;
}

interface RecipeData {
  title: string;
  description: string;
  categories: string[]; // Updated to handle multiple categories
  prepTime: string;
  cookTime: string;
  marinatingTime?: string;
  servings: string;
  difficulty: string;
  ingredients: string[];
  instructions: string[];
  tags: string[];
  accompaniment?: string;
  wine?: string;
  source?: string;
  notes?: string;
}

interface CategoryChange {
  type: 'add' | 'remove';
  category: string;
}

export class GitHubService {
  private config: GitHubConfig;

  constructor(config: GitHubConfig) {
    this.config = config;
  }

  private createSlug(title: string): string {
    return title
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim('-');
  }

  private createVariableName(slug: string): string {
    // Convert slug to camelCase for variable name
    return slug.split('-').map((word, index) => {
      if (index === 0) return word;
      return word.charAt(0).toUpperCase() + word.slice(1);
    }).join('');
  }

  private async getUserInfo(): Promise<{ login: string; name?: string }> {
    const response = await fetch('https://api.github.com/user', {
      headers: {
        'Authorization': `token ${this.config.token}`,
        'Accept': 'application/vnd.github.v3+json',
      },
    });
    
    if (!response.ok) {
      throw new Error('Failed to get user info');
    }
    
    return await response.json();
  }

  private escapeString(str: string): string {
    return str
      .replace(/\\/g, '\\\\')  // Escape backslashes first
      .replace(/'/g, "\\'")    // Escape single quotes
      .replace(/\n/g, '\\n')   // Escape newlines
      .replace(/\r/g, '\\r')   // Escape carriage returns
      .replace(/\t/g, '\\t');  // Escape tabs
  }

  private base64Encode(str: string): string {
    // Use TextEncoder to properly handle UTF-8 encoding
    const encoder = new TextEncoder();
    const data = encoder.encode(str);
    
    // Convert to base64
    let binary = '';
    const len = data.byteLength;
    for (let i = 0; i < len; i++) {
      binary += String.fromCharCode(data[i]);
    }
    return btoa(binary);
  }

  private base64Decode(str: string): string {
    // Decode base64 to binary string
    const binary = atob(str);
    
    // Convert binary string to Uint8Array
    const bytes = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i++) {
      bytes[i] = binary.charCodeAt(i);
    }
    
    // Use TextDecoder to properly handle UTF-8 decoding
    const decoder = new TextDecoder('utf-8');
    return decoder.decode(bytes);
  }

  private async generateRecipeFile(
    data: RecipeData, 
    images: ProcessedImage[], 
    existingId?: string, 
    existingImages?: ImageSizes[]
  ): Promise<string> {
    const slug = this.createSlug(data.title);
    const id = existingId || Date.now().toString();
    const variableName = this.createVariableName(slug);

    const cleanIngredients = data.ingredients.filter(ing => ing.trim() !== '');
    const cleanInstructions = data.instructions.filter(inst => inst.trim() !== '');
    const cleanTags = data.tags.filter(tag => tag.trim() !== '');

    const marinatingTimeField = data.marinatingTime && parseInt(data.marinatingTime) > 0 
      ? `  marinatingTime: ${data.marinatingTime},\n` 
      : '';

    // Get default source if not provided
    let source = data.source?.trim();
    if (!source) {
      try {
        const userInfo = await this.getUserInfo();
        source = userInfo.name || userInfo.login;
      } catch (error) {
        source = this.config.owner; // Fallback to repo owner
      }
    }

    const accompanimentField = data.accompaniment?.trim() 
      ? `  accompaniment: '${this.escapeString(data.accompaniment)}',\n` 
      : '';

    const wineField = data.wine?.trim() 
      ? `  wine: '${this.escapeString(data.wine)}',\n` 
      : '';

    const sourceField = source 
      ? `  source: '${this.escapeString(source)}',\n` 
      : '';

    const notesField = data.notes?.trim() 
      ? `  notes: '${this.escapeString(data.notes)}',\n` 
      : '';

    // Generate images field - prioritize new images, then existing images
    let imagesField = '';
    const finalImages = images.length > 0 ? images : [];
    const imagesToUse = existingImages && existingImages.length > 0 && images.length === 0 ? existingImages : [];

    if (finalImages.length > 0) {
      // Use new ProcessedImages (Cloudinary URLs)
      const imageObjects = finalImages.map((image) => {
        return `    {
      small: '${image.sizes.small}',
      medium: '${image.sizes.medium}',
      large: '${image.sizes.large}'
    }`;
      });
      
      imagesField = `  images: [\n${imageObjects.join(',\n')}\n  ],\n`;
    } else if (imagesToUse.length > 0) {
      // Use existing images
      const imageObjects = imagesToUse.map((image) => {
        return `    {
      small: '${image.small}',
      medium: '${image.medium}',
      large: '${image.large}'
    }`;
      });
      
      imagesField = `  images: [\n${imageObjects.join(',\n')}\n  ],\n`;
    }

    // Generate categories field
    const categoriesField = `  categories: [${data.categories.map(cat => `'${this.escapeString(cat)}'`).join(', ')}],\n`;

    return `import { Recipe } from '@/types/recipe';

export const ${variableName}: Recipe = {
  id: '${id}',
  title: '${this.escapeString(data.title)}',
  description: '${this.escapeString(data.description)}',
${categoriesField}  prepTime: ${data.prepTime || 0},
  cookTime: ${data.cookTime || 0},
${marinatingTimeField}  servings: ${data.servings || 1},
  difficulty: '${data.difficulty}',
  ingredients: [
${cleanIngredients.map(ing => `    '${this.escapeString(ing)}'`).join(',\n')}
  ],
  instructions: [
${cleanInstructions.map(inst => `    '${this.escapeString(inst)}'`).join(',\n')}
  ],
  tags: [${cleanTags.map(tag => `'${this.escapeString(tag)}'`).join(', ')}],
${imagesField}${accompanimentField}${wineField}${sourceField}${notesField}  slug: '${slug}'
};
`;
  }

  private updateCategoriesFile(currentContent: string, changes: CategoryChange[]): string {
    // Find the recipeCategories array
    const arrayRegex = /export const recipeCategories = \[([\s\S]*?)\];/;
    const match = currentContent.match(arrayRegex);
    
    if (match) {
      // Parse existing categories
      const existingCategoriesStr = match[1];
      let existingCategories = existingCategoriesStr
        .split(',')
        .map(cat => cat.trim().replace(/['"]/g, ''))
        .filter(cat => cat.length > 0);
      
      // Apply changes
      changes.forEach(change => {
        if (change.type === 'add') {
          if (!existingCategories.includes(change.category)) {
            existingCategories.push(change.category);
          }
        } else if (change.type === 'remove') {
          existingCategories = existingCategories.filter(cat => cat !== change.category);
        }
      });
      
      // Sort categories
      existingCategories.sort();
      
      // Generate new array content
      const newArrayContent = existingCategories.map(cat => `  '${this.escapeString(cat)}'`).join(',\n');
      
      return currentContent.replace(arrayRegex, `export const recipeCategories = [\n${newArrayContent}\n];`);
    }
    
    return currentContent;
  }

  async deleteRecipePR(existingRecipe: any): Promise<string> {
    const slug = existingRecipe.slug;
    const branchName = `delete-recipe/${slug}-${Date.now()}`;
    const recipeFileName = `${slug}.ts`;
    
    try {
      // Get the default branch SHA
      const mainBranchResponse = await fetch(
        `https://api.github.com/repos/${this.config.owner}/${this.config.repo}/git/ref/heads/main`,
        {
          headers: {
            'Authorization': `token ${this.config.token}`,
            'Accept': 'application/vnd.github.v3+json',
          },
        }
      );
      
      if (!mainBranchResponse.ok) {
        throw new Error('Failed to get main branch');
      }
      
      const mainBranch = await mainBranchResponse.json();
      const baseSha = mainBranch.object.sha;

      // Create new branch
      await fetch(
        `https://api.github.com/repos/${this.config.owner}/${this.config.repo}/git/refs`,
        {
          method: 'POST',
          headers: {
            'Authorization': `token ${this.config.token}`,
            'Accept': 'application/vnd.github.v3+json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            ref: `refs/heads/${branchName}`,
            sha: baseSha,
          }),
        }
      );

      // Get recipe file SHA for deletion
      const recipeFileResponse = await fetch(
        `https://api.github.com/repos/${this.config.owner}/${this.config.repo}/contents/src/recipes/${recipeFileName}?ref=main`,
        {
          headers: {
            'Authorization': `token ${this.config.token}`,
            'Accept': 'application/vnd.github.v3+json',
          },
        }
      );
      
      if (!recipeFileResponse.ok) {
        throw new Error('Recipe file not found');
      }
      
      const recipeFile = await recipeFileResponse.json();

      // Delete recipe file (index.ts will auto-update on next build)
      await fetch(
        `https://api.github.com/repos/${this.config.owner}/${this.config.repo}/contents/src/recipes/${recipeFileName}`,
        {
          method: 'DELETE',
          headers: {
            'Authorization': `token ${this.config.token}`,
            'Accept': 'application/vnd.github.v3+json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            message: `Delete recipe: ${existingRecipe.title}`,
            sha: recipeFile.sha,
            branch: branchName,
          }),
        }
      );

      // Generate cleanup instructions for images
      const cleanupInstructions = generateCleanupInstructions();

      // Create pull request
      const imageInfo = existingRecipe.images?.length > 0 || existingRecipe.image 
        ? `\n**Images:** Toutes les images associées seront supprimées automatiquement` 
        : '';

      const prResponse = await fetch(
        `https://api.github.com/repos/${this.config.owner}/${this.config.repo}/pulls`,
        {
          method: 'POST',
          headers: {
            'Authorization': `token ${this.config.token}`,
            'Accept': 'application/vnd.github.v3+json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            title: `Supprimer la recette: ${existingRecipe.title}`,
            head: branchName,
            base: 'main',
            body: `## Suppression de recette

**Titre:** ${existingRecipe.title}
**Catégories:** ${existingRecipe.categories?.join(', ') || existingRecipe.category || 'Non spécifiée'}
**Slug:** ${existingRecipe.slug}${imageInfo}

**Description:**
${existingRecipe.description || 'Aucune description'}

**⚠️ ATTENTION:** Cette action supprimera définitivement la recette et toutes ses données associées.

${cleanupInstructions}

---
*Cette recette a été supprimée via le formulaire web avec nettoyage automatique des images.*
*L'index des recettes sera mis à jour automatiquement lors du prochain déploiement.*`,
          }),
        }
      );

      if (!prResponse.ok) {
        throw new Error('Failed to create pull request');
      }

      const pr = await prResponse.json();
      return pr.html_url;

    } catch (error) {
      console.error('Error deleting recipe PR:', error);
      throw error;
    }
  }

  async createCategoryPR(changes: CategoryChange[]): Promise<string> {
    const addedCategories = changes.filter(c => c.type === 'add').map(c => c.category);
    const removedCategories = changes.filter(c => c.type === 'remove').map(c => c.category);
    
    const branchName = `categories/update-${Date.now()}`;
    
    try {
      // Get the default branch SHA
      const mainBranchResponse = await fetch(
        `https://api.github.com/repos/${this.config.owner}/${this.config.repo}/git/ref/heads/main`,
        {
          headers: {
            'Authorization': `token ${this.config.token}`,
            'Accept': 'application/vnd.github.v3+json',
          },
        }
      );
      
      if (!mainBranchResponse.ok) {
        throw new Error('Failed to get main branch');
      }
      
      const mainBranch = await mainBranchResponse.json();
      const baseSha = mainBranch.object.sha;

      // Create new branch
      await fetch(
        `https://api.github.com/repos/${this.config.owner}/${this.config.repo}/git/refs`,
        {
          method: 'POST',
          headers: {
            'Authorization': `token ${this.config.token}`,
            'Accept': 'application/vnd.github.v3+json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            ref: `refs/heads/${branchName}`,
            sha: baseSha,
          }),
        }
      );

      // Get current categories.ts content
      const categoriesResponse = await fetch(
        `https://api.github.com/repos/${this.config.owner}/${this.config.repo}/contents/src/data/categories.ts?ref=main`,
        {
          headers: {
            'Authorization': `token ${this.config.token}`,
            'Accept': 'application/vnd.github.v3+json',
          },
        }
      );
      
      const categoriesFile = await categoriesResponse.json();
      const currentCategoriesContent = this.base64Decode(categoriesFile.content);

      // Update categories.ts content
      const updatedCategoriesContent = this.updateCategoriesFile(currentCategoriesContent, changes);

      // Update categories.ts file
      await fetch(
        `https://api.github.com/repos/${this.config.owner}/${this.config.repo}/contents/src/data/categories.ts`,
        {
          method: 'PUT',
          headers: {
            'Authorization': `token ${this.config.token}`,
            'Accept': 'application/vnd.github.v3+json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            message: `Update categories: +${addedCategories.length} -${removedCategories.length}`,
            content: this.base64Encode(updatedCategoriesContent),
            branch: branchName,
            sha: categoriesFile.sha,
          }),
        }
      );

      // Create pull request
      let prTitle = 'Mise à jour des catégories';
      if (addedCategories.length > 0 && removedCategories.length > 0) {
        prTitle = `Mise à jour des catégories: +${addedCategories.length} -${removedCategories.length}`;
      } else if (addedCategories.length > 0) {
        prTitle = `Ajouter ${addedCategories.length > 1 ? 'les catégories' : 'la catégorie'}: ${addedCategories.join(', ')}`;
      } else if (removedCategories.length > 0) {
        prTitle = `Supprimer ${removedCategories.length > 1 ? 'les catégories' : 'la catégorie'}: ${removedCategories.join(', ')}`;
      }

      let prBody = '## Modifications des catégories\n\n';
      
      if (addedCategories.length > 0) {
        prBody += '### ✅ Catégories ajoutées\n';
        prBody += addedCategories.map(cat => `- **${cat}**`).join('\n') + '\n\n';
      }
      
      if (removedCategories.length > 0) {
        prBody += '### ❌ Catégories supprimées\n';
        prBody += removedCategories.map(cat => `- **${cat}**`).join('\n') + '\n\n';
      }
      
      prBody += '### Détails\n';
      prBody += `- **Ajouts:** ${addedCategories.length}\n`;
      prBody += `- **Suppressions:** ${removedCategories.length}\n`;
      prBody += `- **Modifiées via:** Interface web de gestion des catégories\n\n`;
      prBody += '---\n*Catégories modifiées automatiquement via l\'interface de gestion.*';

      const prResponse = await fetch(
        `https://api.github.com/repos/${this.config.owner}/${this.config.repo}/pulls`,
        {
          method: 'POST',
          headers: {
            'Authorization': `token ${this.config.token}`,
            'Accept': 'application/vnd.github.v3+json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            title: prTitle,
            head: branchName,
            base: 'main',
            body: prBody,
          }),
        }
      );

      if (!prResponse.ok) {
        throw new Error('Failed to create pull request');
      }

      const pr = await prResponse.json();
      return pr.html_url;

    } catch (error) {
      console.error('Error creating category PR:', error);
      throw error;
    }
  }

  async createRecipePR(recipeData: RecipeData, images: ProcessedImage[] = []): Promise<string> {
    const slug = this.createSlug(recipeData.title);
    const branchName = `recipe/${slug}`;
    const recipeFileName = `${slug}.ts`;
    
    try {
      // Get the default branch SHA
      const mainBranchResponse = await fetch(
        `https://api.github.com/repos/${this.config.owner}/${this.config.repo}/git/ref/heads/main`,
        {
          headers: {
            'Authorization': `token ${this.config.token}`,
            'Accept': 'application/vnd.github.v3+json',
          },
        }
      );
      
      if (!mainBranchResponse.ok) {
        throw new Error('Failed to get main branch');
      }
      
      const mainBranch = await mainBranchResponse.json();
      const baseSha = mainBranch.object.sha;

      // Create new branch
      await fetch(
        `https://api.github.com/repos/${this.config.owner}/${this.config.repo}/git/refs`,
        {
          method: 'POST',
          headers: {
            'Authorization': `token ${this.config.token}`,
            'Accept': 'application/vnd.github.v3+json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            ref: `refs/heads/${branchName}`,
            sha: baseSha,
          }),
        }
      );

      // Generate new recipe file content (images are already uploaded to Cloudinary)
      const recipeFileContent = await this.generateRecipeFile(recipeData, images);

      // Create recipe file (index.ts will auto-update on next build)
      await fetch(
        `https://api.github.com/repos/${this.config.owner}/${this.config.repo}/contents/src/recipes/${recipeFileName}`,
        {
          method: 'PUT',
          headers: {
            'Authorization': `token ${this.config.token}`,
            'Accept': 'application/vnd.github.v3+json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            message: `Add recipe: ${recipeData.title}`,
            content: this.base64Encode(recipeFileContent),
            branch: branchName,
          }),
        }
      );

      // Create pull request
      const totalTime = (parseInt(recipeData.prepTime) || 0) + (parseInt(recipeData.cookTime) || 0);
      const marinatingInfo = recipeData.marinatingTime && parseInt(recipeData.marinatingTime) > 0 
        ? `\n**Temps de marinage:** ${recipeData.marinatingTime} minutes` 
        : '';

      const accompanimentInfo = recipeData.accompaniment?.trim() 
        ? `\n**Accompagnement:** ${recipeData.accompaniment}` 
        : '';

      const wineInfo = recipeData.wine?.trim() 
        ? `\n**Accord vin:** ${recipeData.wine}` 
        : '';

      const sourceInfo = recipeData.source?.trim() 
        ? `\n**Source:** ${recipeData.source}` 
        : '';

      const notesInfo = recipeData.notes?.trim() 
        ? `\n**Notes:** ${recipeData.notes}` 
        : '';

      const imageInfo = images.length > 0 
        ? `\n**Images:** ${images.length} image(s) hébergée(s) sur Cloudinary` 
        : '';

      const prResponse = await fetch(
        `https://api.github.com/repos/${this.config.owner}/${this.config.repo}/pulls`,
        {
          method: 'POST',
          headers: {
            'Authorization': `token ${this.config.token}`,
            'Accept': 'application/vnd.github.v3+json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            title: `Nouvelle recette: ${recipeData.title}`,
            head: branchName,
            base: 'main',
            body: `## Nouvelle recette ajoutée

**Titre:** ${recipeData.title}
**Catégories:** ${recipeData.categories.join(', ')}
**Difficulté:** ${recipeData.difficulty}
**Temps total:** ${totalTime} minutes${marinatingInfo}
**Portions:** ${recipeData.servings}${accompanimentInfo}${wineInfo}${sourceInfo}${notesInfo}${imageInfo}

**Description:**
${recipeData.description}

**Tags:** ${recipeData.tags.filter(t => t.trim()).join(', ')}

---
*Cette recette a été ajoutée via le formulaire web avec images hébergées sur Cloudinary.*
*L'index des recettes sera mis à jour automatiquement lors du prochain déploiement.*`,
          }),
        }
      );

      if (!prResponse.ok) {
        throw new Error('Failed to create pull request');
      }

      const pr = await prResponse.json();
      return pr.html_url;

    } catch (error) {
      console.error('Error creating recipe PR:', error);
      throw error;
    }
  }

  async updateRecipePR(
    recipeData: RecipeData, 
    existingRecipe: any, 
    images: ProcessedImage[] = [], 
    existingImages: ImageSizes[] = []
  ): Promise<string> {
    const newSlug = this.createSlug(recipeData.title);
    const oldSlug = existingRecipe.slug;
    const branchName = `update-recipe/${newSlug}-${Date.now()}`;
    const newRecipeFileName = `${newSlug}.ts`;
    const oldRecipeFileName = `${oldSlug}.ts`;
    
    try {
      // Get the default branch SHA
      const mainBranchResponse = await fetch(
        `https://api.github.com/repos/${this.config.owner}/${this.config.repo}/git/ref/heads/main`,
        {
          headers: {
            'Authorization': `token ${this.config.token}`,
            'Accept': 'application/vnd.github.v3+json',
          },
        }
      );
      
      if (!mainBranchResponse.ok) {
        throw new Error('Failed to get main branch');
      }
      
      const mainBranch = await mainBranchResponse.json();
      const baseSha = mainBranch.object.sha;

      // Create new branch
      await fetch(
        `https://api.github.com/repos/${this.config.owner}/${this.config.repo}/git/refs`,
        {
          method: 'POST',
          headers: {
            'Authorization': `token ${this.config.token}`,
            'Accept': 'application/vnd.github.v3+json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            ref: `refs/heads/${branchName}`,
            sha: baseSha,
          }),
        }
      );

      // Generate updated recipe file content (preserve existing ID, handle images properly)
      const recipeFileContent = await this.generateRecipeFile(
        recipeData, 
        images, 
        existingRecipe.id, 
        existingImages
      );

      // If slug changed, delete old file and create new one
      if (oldSlug !== newSlug) {
        // Get old file SHA for deletion
        const oldFileResponse = await fetch(
          `https://api.github.com/repos/${this.config.owner}/${this.config.repo}/contents/src/recipes/${oldRecipeFileName}?ref=main`,
          {
            headers: {
              'Authorization': `token ${this.config.token}`,
              'Accept': 'application/vnd.github.v3+json',
            },
          }
        );
        
        if (oldFileResponse.ok) {
          const oldFile = await oldFileResponse.json();
          
          // Delete old file
          await fetch(
            `https://api.github.com/repos/${this.config.owner}/${this.config.repo}/contents/src/recipes/${oldRecipeFileName}`,
            {
              method: 'DELETE',
              headers: {
                'Authorization': `token ${this.config.token}`,
                'Accept': 'application/vnd.github.v3+json',
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                message: `Remove old recipe file: ${oldRecipeFileName}`,
                sha: oldFile.sha,
                branch: branchName,
              }),
            }
          );
        }

        // Create new file
        await fetch(
          `https://api.github.com/repos/${this.config.owner}/${this.config.repo}/contents/src/recipes/${newRecipeFileName}`,
          {
            method: 'PUT',
            headers: {
              'Authorization': `token ${this.config.token}`,
              'Accept': 'application/vnd.github.v3+json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              message: `Update recipe: ${recipeData.title}`,
              content: this.base64Encode(recipeFileContent),
              branch: branchName,
            }),
          }
        );
      } else {
        // Update existing file
        const existingFileResponse = await fetch(
          `https://api.github.com/repos/${this.config.owner}/${this.config.repo}/contents/src/recipes/${oldRecipeFileName}?ref=main`,
          {
            headers: {
              'Authorization': `token ${this.config.token}`,
              'Accept': 'application/vnd.github.v3+json',
            },
          }
        );
        
        const existingFile = await existingFileResponse.json();
        
        await fetch(
          `https://api.github.com/repos/${this.config.owner}/${this.config.repo}/contents/src/recipes/${newRecipeFileName}`,
          {
            method: 'PUT',
            headers: {
              'Authorization': `token ${this.config.token}`,
              'Accept': 'application/vnd.github.v3+json',
              'Content-Type':  'application/json',
            },
            body: JSON.stringify({
              message: `Update recipe: ${recipeData.title}`,
              content: this.base64Encode(recipeFileContent),
              branch: branchName,
              sha: existingFile.sha,
            }),
          }
        );
      }

      // Create pull request
      const totalTime = (parseInt(recipeData.prepTime) || 0) + (parseInt(recipeData.cookTime) || 0);
      const marinatingInfo = recipeData.marinatingTime && parseInt(recipeData.marinatingTime) > 0 
        ? `\n**Temps de marinage:** ${recipeData.marinatingTime} minutes` 
        : '';

      const accompanimentInfo = recipeData.accompaniment?.trim() 
        ? `\n**Accompagnement:** ${recipeData.accompaniment}` 
        : '';

      const wineInfo = recipeData.wine?.trim() 
        ? `\n**Accord vin:** ${recipeData.wine}` 
        : '';

      const sourceInfo = recipeData.source?.trim() 
        ? `\n**Source:** ${recipeData.source}` 
        : '';

      const notesInfo = recipeData.notes?.trim() 
        ? `\n**Notes:** ${recipeData.notes}` 
        : '';

      let imageInfo = '';
      if (images.length > 0) {
        imageInfo = `\n**Images:** ${images.length} nouvelle(s) image(s) sur Cloudinary`;
      } else if (existingImages.length > 0) {
        imageInfo = `\n**Images:** ${existingImages.length} image(s) existante(s) conservée(s)`;
      }

      const prResponse = await fetch(
        `https://api.github.com/repos/${this.config.owner}/${this.config.repo}/pulls`,
        {
          method: 'POST',
          headers: {
            'Authorization': `token ${this.config.token}`,
            'Accept': 'application/vnd.github.v3+json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            title: `Modification recette: ${recipeData.title}`,
            head: branchName,
            base: 'main',
            body: `## Recette modifiée

**Titre:** ${recipeData.title}
**Catégories:** ${recipeData.categories.join(', ')}
**Difficulté:** ${recipeData.difficulty}
**Temps total:** ${totalTime} minutes${marinatingInfo}
**Portions:** ${recipeData.servings}${accompanimentInfo}${wineInfo}${sourceInfo}${notesInfo}${imageInfo}

**Description:**
${recipeData.description}

**Tags:** ${recipeData.tags.filter(t => t.trim()).join(', ')}

---
*Cette recette a été modifiée via le formulaire web avec gestion intelligente des images.*
*L'index des recettes sera mis à jour automatiquement lors du prochain déploiement.*`,
          }),
        }
      );

      if (!prResponse.ok) {
        throw new Error('Failed to create pull request');
      }

      const pr = await prResponse.json();
      return pr.html_url;

    } catch (error) {
      console.error('Error updating recipe PR:', error);
      throw error;
    }
  }
}