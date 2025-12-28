#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { getAssetUrl } from './site.config.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export function generateBrowserConfig() {
  const browserConfigContent = `<?xml version="1.0" encoding="utf-8"?>
<browserconfig>
    <msapplication>
        <tile>
            <square150x150logo src="${getAssetUrl('mstile-150x150.png')}"/>
            <TileColor>#0f172a</TileColor>
        </tile>
    </msapplication>
</browserconfig>`;

  return browserConfigContent;
}

function main() {
  try {
    console.log('Generating browserconfig.xml...');
    
    const browserConfigContent = generateBrowserConfig();
    const outputPath = path.join(__dirname, '..', 'public', 'browserconfig.xml');
    
    fs.writeFileSync(outputPath, browserConfigContent, 'utf-8');
    
    console.log('✅ Browserconfig.xml generated successfully');
    
  } catch (error) {
    console.error('❌ Error generating browserconfig.xml:', error);
    process.exit(1);
  }
}

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}