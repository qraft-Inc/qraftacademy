const fs = require('node:fs');
const { resolve } = require('node:path');

const project = resolve(__dirname, 'tsconfig.json');

module.exports = {
  extends: [
    'next',
    'prettier',
    'plugin:storybook/recommended',
    'plugin:tailwindcss/recommended',
    require.resolve('@vercel/style-guide/eslint/browser'),
    require.resolve('@vercel/style-guide/eslint/react'),
    require.resolve('@vercel/style-guide/eslint/next'),
    require.resolve('@vercel/style-guide/eslint/typescript'),
    require.resolve('@vercel/style-guide/eslint/jest-react'),
    require.resolve('@vercel/style-guide/eslint/jest'),
    require.resolve('@vercel/style-guide/eslint/playwright-test'),
  ],
  parserOptions: {
    project,
    babelOptions: {
      presets: [require.resolve('next/babel')],
    },
  },
  settings: {
    'import/resolver': {
      typescript: {
        project,
      },
    },
  },
  rules: {
    'tailwindcss/no-custom-classname': 'off',
    'testing-library/prefer-screen-queries': 'off',
    '@next/next/no-html-link-for-pages': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    "@typescript-eslint/no-misused-promises": "off",
    '@typescript-eslint/no-non-null-asserted-optional-chain': 'off',
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
      },
    ],
    'sort-imports': [
      'error',
      {
        ignoreCase: true,
        ignoreDeclarationSort: true,
      },
    ],
    'react/function-component-definition': 'off',
    'eslint-comments/require-description': 'off',
    'react/no-array-index-key': 'off',
    'react/button-has-type': 'off',
    'tailwindcss/classnames-order': 'off',
    'import/no-default-export': 'off',
    'import/order': [
      1,
      {
        groups: [
          'external',
          'builtin',
          'internal',
          'sibling',
          'parent',
          'index',
        ],
        pathGroups: [
          ...getDirectoriesToSort().map((singleDir) => ({
            pattern: `${singleDir}/**`,
            group: 'internal',
          })),
          {
            pattern: 'env',
            group: 'internal',
          },
          {
            pattern: 'theme',
            group: 'internal',
          },
          {
            pattern: 'public/**',
            group: 'internal',
            position: 'after',
          },
        ],
        pathGroupsExcludedImportTypes: ['internal'],
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
  },
};

function getDirectoriesToSort() {
  const ignoredSortingDirectories = [
    '.git',
    '.next',
    '.vscode',
    'node_modules',
  ];
  return getDirectories(process.cwd()).filter(
    (f) => !ignoredSortingDirectories.includes(f),
  );
}

function getDirectories(path) {
  return fs.readdirSync(path).filter((file) => {
    return fs.statSync(`${path}/${file}`).isDirectory();
  });
}
