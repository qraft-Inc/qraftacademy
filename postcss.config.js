// Before:
module.exports = {
  plugins: [
    'tailwindcss',
    'autoprefixer',
  ],
}

// After:
module.exports = {
  plugins: [
    '@tailwindcss/postcss',
    'autoprefixer',
  ],
}