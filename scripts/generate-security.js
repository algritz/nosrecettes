#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

function generateSecurityTxt() {
  const currentYear = new Date().getFullYear();
  const expiryDate = new Date();
  expiryDate.setFullYear(currentYear + 1);
  
  const securityContent = `Contact: https://github.com/algritz/nosrecettes/security/advisories/new
Expires: ${expiryDate.toISOString()}
Acknowledgments: https://github.com/algritz/nosrecettes/security/advisories
Preferred-Languages: fr, en
Canonical: https://algritz.github.io/nosrecettes/.well-known/security.txt
Policy: https://github.com/algritz/nosrecettes/blob/main/SECURITY.md

# This is a recipe sharing website built with React and TypeScript
# Please report security vulnerabilities responsibly through GitHub Security Advisories
`;

  return securityContent;
}

function main() {
  try {
    console.log('Generating security.txt...');
    
    const securityContent = generateSecurityTxt();
    
    // Create .well-known directory if it doesn't exist
    const wellKnownDir = path.join(__dirname, '..', 'public', '.well-known');
    if (!fs.existsSync(wellKnownDir)) {
      fs.mkdirSync(wellKnownDir, { recursive: true });
    }
    
    const outputPath = path.join(wellKnownDir, 'security.txt');
    fs.writeFileSync(outputPath, securityContent, 'utf-8');
    
    console.log('✅ Security.txt generated successfully');
    
  } catch (error) {
    console.error('❌ Error generating security.txt:', error);
    process.exit(1);
  }
}

// Run if called directly
if (require.main === module) {
  main();
}

module.exports = { generateSecurityTxt };