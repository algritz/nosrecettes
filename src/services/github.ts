import { ProcessedImage, generateImageFileName } from '@/utils/imageUtils';

interface GitHubConfig {
  owner: string;
  repo: string;
  token: string;
}

interface RecipeData {
  title: string;
  description: string;
  category: string;
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

  private dataURLToBase64(dataURL: string): string {
    return dataURL.split(',')[1];
  }

  private async uploadImages(images: ProcessedImage[], slug: string, branchName: string): Promise<string[]> {
    const uploadedImages: string[] = [];

    for (let i = 0; i < images.length; i++) {
      const image = images[i];
      const baseFileName = generateImageFileName(slug, i);
      
      // Upload all three sizes
      const sizes = ['small', 'medium', 'large'] as const;
      const imageSizes: Record<string, string> = {};

      for (const size of sizes) {
        const fileName = baseFileName.replace('.jpg', `-${size}.jpg`);
        const filePath = `public/images/${fileName}`;
        const base64Content = this.dataURLToBase64(image.sizes[size]);

        try {
          await fetch(
            `https://api.github.com/repos/${this.config.owner}/${this.config.repo}/contents/${filePath}`,
            {
              method: 'PUT',
              headers: {
                'Authorization': `token ${this.config.token}`,
                'Accept': 'application/vnd.github.v3+json',
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                message: `Add ${size} image for recipe: ${slug}`,
                content: base64Content,
                branch: branchName,
              }),
            }
          );

          imageSizes[size] = `/images/${fileName}`;
        } catch (error) {
          console.error(`Failed to upload ${size} image:`, error);
          throw new Error(`Failed to upload ${size} image`);
        }
      }

      uploadedImages.push(JSON.stringify(imageSizes));
    }

    return uploadedImages;
  }

  private async generateRecipeFile(data: RecipeData, images: ProcessedImage[], existingId?: string): Promise<string> {
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

    // Generate images field
    let imagesField = '';
    if (images.length > 0) {
      const imageObjects = images.map((_, index) => {
        const baseFileName = generateImageFileName(slug, index);
        return `    {
      small: '/images/${baseFileName.replace('.jpg', '-small.jpg')}',
      medium: '/images/${baseFileName.replace('.jpg', '-medium.jpg')}',
      large: '/images/${baseFileName.replace('.jpg', '-large.jpg')}'
    }`;
      });
      
      imagesField = `  images: [\n${imageObjects.join(',\n')}\n  ],\n`;
    }

    return `import { Recipe } from '@/types/recipe';

export const ${variableName}: Recipe = {
  id: '${id}',
  title: '${this.escapeString(data.title)}',
  description: '${this.escapeString(data.description)}',
  category: '${this.escapeString(data.category)}',
  prepTime: ${data.prepTime || 0},
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

  private updateIndexFile(currentContent: string, newRecipeSlug: string): string {
    const variableName = this.createVariableName(newRecipeSlug);
    const importLine = `import { ${variableName} } from './${newRecipeSlug}';`;
    
    // Add import after existing imports
    const importRegex = /(import.*from.*;\n)/g;
    const imports = currentContent.match(importRegex) || [];
    const lastImportIndex = currentContent.lastIndexOf(imports[imports.length - 1]) + imports[imports.length - 1].length;
    
    const beforeImports = currentContent.substring(0, lastImportIndex);
    const afterImports = currentContent.substring(lastImportIndex);
    
    // Add recipe to array
    const arrayRegex = /export const recipes: Recipe\[] = \[([\s\S]*?)\];/;
    const match = afterImports.match(arrayRegex);
    
    if (match) {
      const recipeList = match[1].trim();
      const newRecipeList = recipeList ? `${recipeList},\n  ${variableName}` : `\n  ${variableName}\n`;
      const updatedAfterImports = afterImports.replace(arrayRegex, `export const recipes: Recipe[] = [${newRecipeList}];`);
      
      return beforeImports + importLine + '\n' + updatedAfterImports;
    }
    
    return currentContent;
  }

  private updateIndexFileForEdit(currentContent: string, oldSlug: string, newSlug: string): string {
    const oldVariableName = this.createVariableName(oldSlug);
    const newVariableName = this.createVariableName(newSlug);
    
    // If slug changed, update import and variable names
    if (oldSlug !== newSlug) {
      // Update import
      const oldImportRegex = new RegExp(`import { ${oldVariableName} } from './${oldSlug}';`);
      const newImportLine = `import { ${newVariableName} } from './${newSlug}';`;
      
      // Update array reference
      const oldArrayRegex = new RegExp(`\\b${oldVariableName}\\b`, 'g');
      
      return currentContent
        .replace(oldImportRegex, newImportLine)
        .replace(oldArrayRegex, newVariableName);
    }
    
    return currentContent;
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

      // Upload images first
      if (images.length > 0) {
        await this.uploadImages(images, slug, branchName);
      }

      // Get current index.ts content
      const indexResponse = await fetch(
        `https://api.github.com/repos/${this.config.owner}/${this.config.repo}/contents/src/recipes/index.ts?ref=main`,
        {
          headers: {
            'Authorization': `token ${this.config.token}`,
            'Accept': 'application/vnd.github.v3+json',
          },
        }
      );
      
      const indexFile = await indexResponse.json();
      const currentIndexContent = this.base64Decode(indexFile.content);

      // Generate new recipe file content
      const recipeFileContent = await this.generateRecipeFile(recipeData, images);
      
      // Update index.ts content
      const updatedIndexContent = this.updateIndexFile(currentIndexContent, slug);

      // Create recipe file
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

      // Update index.ts file
      await fetch(
        `https://api.github.com/repos/${this.config.owner}/${this.config.repo}/contents/src/recipes/index.ts`,
        {
          method: 'PUT',
          headers: {
            'Authorization': `token ${this.config.token}`,
            'Accept': 'application/vnd.github.v3+json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            message: `Update index for recipe: ${recipeData.title}`,
            content: this.base64Encode(updatedIndexContent),
            branch: branchName,
            sha: indexFile.sha,
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
        ? `\n**Images:** ${images.length} image(s) ajoutée(s)` 
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
**Catégorie:** ${recipeData.category}
**Difficulté:** ${recipeData.difficulty}
**Temps total:** ${totalTime} minutes${marinatingInfo}
**Portions:** ${recipeData.servings}${accompanimentInfo}${wineInfo}${sourceInfo}${notesInfo}${imageInfo}

**Description:**
${recipeData.description}

**Tags:** ${recipeData.tags.filter(t => t.trim()).join(', ')}

---
*Cette recette a été ajoutée via le formulaire web.*`,
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

  async updateRecipePR(recipeData: RecipeData, existingRecipe: any, images: ProcessedImage[] = []): Promise<string> {
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

      // Upload new images
      if (images.length > 0) {
        await this.uploadImages(images, newSlug, branchName);
      }

      // Get current index.ts content
      const indexResponse = await fetch(
        `https://api.github.com/repos/${this.config.owner}/${this.config.repo}/contents/src/recipes/index.ts?ref=main`,
        {
          headers: {
            'Authorization': `token ${this.config.token}`,
            'Accept': 'application/vnd.github.v3+json',
          },
        }
      );
      
      const indexFile = await indexResponse.json();
      const currentIndexContent = this.base64Decode(indexFile.content);

      // Generate updated recipe file content (preserve existing ID)
      const recipeFileContent = await this.generateRecipeFile(recipeData, images, existingRecipe.id);
      
      // Update index.ts content if slug changed
      const updatedIndexContent = this.updateIndexFileForEdit(currentIndexContent, oldSlug, newSlug);

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

        // Update index.ts file
        await fetch(
          `https://api.github.com/repos/${this.config.owner}/${this.config.repo}/contents/src/recipes/index.ts`,
          {
            method: 'PUT',
            headers: {
              'Authorization': `token ${this.config.token}`,
              'Accept': 'application/vnd.github.v3+json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              message: `Update index for recipe: ${recipeData.title}`,
              content: this.base64Encode(updatedIndexContent),
              branch: branchName,
              sha: indexFile.sha,
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
              'Content-Type': 'application/json',
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

      const imageInfo = images.length > 0 
        ? `\n**Images:** ${images.length} image(s) modifiée(s)` 
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
            title: `Modification recette: ${recipeData.title}`,
            head: branchName,
            base: 'main',
            body: `## Recette modifiée

**Titre:** ${recipeData.title}
**Catégorie:** ${recipeData.category}
**Difficulté:** ${recipeData.difficulty}
**Temps total:** ${totalTime} minutes${marinatingInfo}
**Portions:** ${recipeData.servings}${accompanimentInfo}${wineInfo}${sourceInfo}${notesInfo}${imageInfo}

**Description:**
${recipeData.description}

**Tags:** ${recipeData.tags.filter(t => t.trim()).join(', ')}

---
*Cette recette a été modifiée via le formulaire web.*`,
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