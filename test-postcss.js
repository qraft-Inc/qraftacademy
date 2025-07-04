const postcss = require('postcss');
const tailwindcss = require('@tailwindcss/postcss');

// Test basic PostCSS with Tailwind
const css = `
@tailwind base;
@tailwind components;
@tailwind utilities;

.test {
  @apply text-red-500;
}
`;

console.log('Testing PostCSS configuration...');
console.log('Plugin available:', typeof tailwindcss);
