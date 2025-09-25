#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { getRecipeFiles } = require('./generate-sitemap');

function generateManifest() {
  const recipeCount = getRecipeFiles().length;
  const currentYear = new Date().getFullYear();
  
  const manifest = {
    "name": `Nos Recettes - ${recipeCount} Recettes Québécoises`,
    "short_name": "Nos Recettes",
    "description": `Collection de ${recipeCount} recettes québécoises traditionnelles et modernes avec instructions détaillées et images appétissantes.`,
    "start_url": "/nosrecettes/",
    "display": "standalone",
    "background_color": "#ffffff",
    "theme_color": "#0f172a",
    "orientation": "portrait-primary",
    "categories": ["food", "lifestyle", "cooking", "recipes"],
    "lang": "fr-CA",
    "scope": "/nosrecettes/",
    "icons": [
      {
        "src": "/nosrecettes/favicon.ico",
        "sizes": "16x16 32x32",
        "type": "image/x-icon"
      },
      {
        "src": "/nosrecettes/icon-192.png",
        "sizes": "192x192",
        "type": "image/png",
        "purpose": "any maskable"
      },
      {
        "src": "/nosrecettes/icon-512.png",
        "sizes": "512x512",
        "type": "image/png",
        "purpose": "any maskable"
      }
    ],
    "screenshots": [
      {
        "src": "/nosrecettes/screenshot-wide.png",
        "sizes": "1280x720",
        "type": "image/png",
        "form_factor": "wide",
        "label": "Accueil avec collection de recettes"
      },
      {
        "src": "/nosrecettes/screenshot-narrow.png",
        "sizes": "640x1136",
        "type": "image/png",
        "form_factor": "narrow",
        "label": "Navigation mobile des recettes"
      }
    ],
    "shortcuts": [
      {
        "name": "Rechercher des recettes",
        "short_name": "Recherche",
        "description": "Rechercher dans la collection de recettes",
        "url": "/nosrecettes/?search=",
        "icons": [
          {
            "src": "/nosrecettes/icon-192.png",
            "sizes": "192x192"
          }
        ]
      }
    ],
    "related_applications": [],
    "prefer_related_applications": false
  };

  return JSON.stringify(manifest, null, 2);
}

function main() {
  try {
    console.log('Generating manifest.json...');
    
    const manifestContent = generateManifest();
    const outputPath = path.join(__dirname, '..', 'public', 'manifest.json');
    
    fs.writeFileSync(outputPath, manifestContent, 'utf-8');
    
    const recipeCount = getRecipeFiles().length;
    console.log(`✅ Manifest generated successfully with ${recipeCount} recipes`);
    
  } catch (error) {
    console.error('❌ Error generating manifest:', error);
    process.exit(1);
  }
}

// Run if called directly
if (require.main === module) {
  main();
}

module.exports = { generateManifest };