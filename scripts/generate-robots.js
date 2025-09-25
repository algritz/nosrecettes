#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export function generateRobots() {
  const baseUrl = 'https://algritz.github.io/nosrecettes';
  
  const robotsContent = `User-agent: *
Allow: /

# Sitemap
Sitemap: ${baseUrl}/sitemap.xml

# Crawl-delay for politeness
Crawl-delay: 1

# Disallow admin pages from indexing
Disallow: /admin
Disallow: /new-recipe
Disallow: /edit-recipe/
Disallow: /manage-categories

# Allow recipe pages
Allow: /recipe/

# Block common bot traps
Disallow: /cgi-bin/
Disallow: /tmp/
Disallow: /private/

# Generated on: ${new Date().toISOString()}
`;

  return robotsContent;
}

function main() {
  try {
    console.log('Generating robots.txt...');
    
    const robotsContent = generateRobots();
    const outputPath = path.join(__dirname, '..', 'public', 'robots.txt');
    
    fs.writeFileSync(outputPath, robotsContent, 'utf-8');
    
    console.log(`✅ Robots.txt generated successfully at ${outputPath}`);
    
  } catch (error) {
    console.error('❌ Error generating robots.txt:', error);
    process.exit(1);
  }
}

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}