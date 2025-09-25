#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

function generateRobots() {
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
if (require.main === module) {
  main();
}

module.exports = { generateRobots };
</robots.txt>

<dyad-write path="scripts/build-seo.js" description="Combined script to generate all SEO files during build">
#!/usr/bin/env node

const { generateSitemap } = require('./generate-sitemap');
const { generateRobots } = require('./generate-robots');

async function buildSEO() {
  console.log('🔍 Building SEO files...\n');
  
  try {
    // Generate sitemap
    console.log('1. Generating sitemap.xml...');
    await require('./generate-sitemap').main?.() || generateSitemap();
    
    // Generate robots.txt
    console.log('\n2. Generating robots.txt...');
    await require('./generate-robots').main?.() || generateRobots();
    
    console.log('\n✅ All SEO files generated successfully!');
    console.log('📁 Files created:');
    console.log('   - public/sitemap.xml');
    console.log('   - public/robots.txt');
    
  } catch (error) {
    console.error('\n❌ Error building SEO files:', error);
    process.exit(1);
  }
}

// Run if called directly
if (require.main === module) {
  buildSEO();
}

module.exports = { buildSEO };