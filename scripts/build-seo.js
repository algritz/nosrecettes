#!/usr/bin/env node

const { generateSitemap } = require('./generate-sitemap');
const { generateRobots } = require('./generate-robots');
const { generateManifest } = require('./generate-manifest');
const { generateIndexHTML } = require('./generate-index-html');
const { generateBrowserConfig } = require('./generate-browserconfig');
const { generateSecurityTxt } = require('./generate-security');

async function buildSEO() {
  console.log('🔍 Building all SEO and PWA files...\n');
  
  try {
    // Generate sitemap
    console.log('1. Generating sitemap.xml...');
    await require('./generate-sitemap').main?.() || generateSitemap();
    
    // Generate robots.txt
    console.log('\n2. Generating robots.txt...');
    await require('./generate-robots').main?.() || generateRobots();
    
    // Generate manifest.json
    console.log('\n3. Generating manifest.json...');
    await require('./generate-manifest').main?.() || generateManifest();
    
    // Generate index.html
    console.log('\n4. Generating index.html...');
    await require('./generate-index-html').main?.() || generateIndexHTML();
    
    // Generate browserconfig.xml
    console.log('\n5. Generating browserconfig.xml...');
    await require('./generate-browserconfig').main?.() || generateBrowserConfig();
    
    // Generate security.txt
    console.log('\n6. Generating security.txt...');
    await require('./generate-security').main?.() || generateSecurityTxt();
    
    console.log('\n✅ All SEO and PWA files generated successfully!');
    console.log('📁 Files created:');
    console.log('   - public/sitemap.xml (dynamic recipe sitemap)');
    console.log('   - public/robots.txt (crawling instructions)');
    console.log('   - public/manifest.json (PWA manifest with recipe count)');
    console.log('   - index.html (dynamic meta tags and structured data)');
    console.log('   - public/browserconfig.xml (Windows tile configuration)');
    console.log('   - public/.well-known/security.txt (security policy)');
    
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