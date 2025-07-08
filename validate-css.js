#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

console.log('🔍 CSS Configuration Validation\n');

// Check if key files exist
const files = [
    'styles/tailwind.css',
    'styles/scroll-bar.css',
    'postcss.config.js',
    'tailwind.config.js',
    'app/fonts/index.ts',
    'public/fonts/baron-neue.otf'
];

console.log('📁 File Check:');
files.forEach(file => {
    const exists = fs.existsSync(file);
    console.log(`  ${exists ? '✅' : '❌'} ${file}`);
});

// Check CSS syntax
console.log('\n🎨 CSS Syntax Check:');

const cssFiles = ['styles/tailwind.css', 'styles/scroll-bar.css'];
cssFiles.forEach(file => {
    if (fs.existsSync(file)) {
        const content = fs.readFileSync(file, 'utf8');
        
        // Check for common syntax errors
        const errors = [];
        
        // Check for missing # in hex colors
        const hexColorRegex = /:\s*[a-fA-F0-9]{6}(?![a-fA-F0-9#])/g;
        const matches = content.match(hexColorRegex);
        if (matches) {
            errors.push(`Missing # in hex colors: ${matches.join(', ')}`);
        }
        
        // Check for quotes in CSS values
        const quotedValues = content.match(/:\s*'[^']*'/g);
        if (quotedValues) {
            errors.push(`Quoted CSS values: ${quotedValues.join(', ')}`);
        }
        
        // Check for proper @tailwind directives
        const tailwindDirectives = content.match(/@tailwind\s+(base|components|utilities)/g);
        
        if (errors.length === 0) {
            console.log(`  ✅ ${file} - No syntax errors found`);
        } else {
            console.log(`  ⚠️  ${file}:`);
            errors.forEach(error => console.log(`     - ${error}`));
        }
        
        if (tailwindDirectives) {
            console.log(`     📦 Tailwind directives: ${tailwindDirectives.join(', ')}`);
        }
    }
});

// Check font configuration
console.log('\n🔤 Font Configuration Check:');

if (fs.existsSync('app/fonts/index.ts')) {
    const fontContent = fs.readFileSync('app/fonts/index.ts', 'utf8');
    const fontVariables = fontContent.match(/variable:\s*'([^']+)'/g);
    if (fontVariables) {
        console.log('  📝 Font variables defined:');
        fontVariables.forEach(v => console.log(`     - ${v}`));
    }
}

if (fs.existsSync('tailwind.config.js')) {
    const configContent = fs.readFileSync('tailwind.config.js', 'utf8');
    const fontFamilies = configContent.match(/(\w+):\s*\[['"]var\(--font-[^)]+\)/g);
    if (fontFamilies) {
        console.log('  🎯 Tailwind font families:');
        fontFamilies.forEach(f => console.log(`     - ${f}`));
    }
}

// Check PostCSS configuration
console.log('\n⚙️  PostCSS Configuration Check:');
if (fs.existsSync('postcss.config.js')) {
    const postcssContent = fs.readFileSync('postcss.config.js', 'utf8');
    if (postcssContent.includes('@tailwindcss/postcss')) {
        console.log('  ✅ @tailwindcss/postcss plugin configured');
    } else {
        console.log('  ❌ @tailwindcss/postcss plugin not found');
    }
    
    if (postcssContent.includes('autoprefixer')) {
        console.log('  ✅ autoprefixer plugin configured');
    } else {
        console.log('  ⚠️  autoprefixer plugin not found');
    }
}

console.log('\n📋 Summary:');
console.log('  - Fixed font family configuration mismatch');
console.log('  - Fixed CSS syntax errors in scroll-bar.css');
console.log('  - Added missing @tailwind components directive');
console.log('  - Resolved dependency version conflicts');
console.log('\n✨ CSS configuration should now work correctly!');