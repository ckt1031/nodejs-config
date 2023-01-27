const config = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:unicorn/recommended',
    'plugin:sonarjs/recommended',
    'plugin:tailwindcss/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
  ],
  plugins: ['autofix', 'react', 'sonarjs', 'unicorn', '@typescript-eslint', 'simple-import-sort'],
  rules: {
    semi: [2, 'always'],
    quotes: [
      2,
      'single',
      {
        avoidEscape: true,
      },
    ],
    // Import sorting
    'simple-import-sort/imports': 2,
    'simple-import-sort/exports': 2,
    // React
    'react/react-in-jsx-scope': 0,
    'react/button-has-type': 2,
    'react/prop-types': 0,
    'react/no-array-index-key': 2,
    // Unicorn
    'unicorn/prefer-module': 0,
    'unicorn/no-useless-undefined': 0,
    'unicorn/prevent-abbreviations': 0,
    'unicorn/no-await-expression-member': 0,
    // Typescript
    '@typescript-eslint/no-misused-promises': 0,
    '@typescript-eslint/no-unused-vars': [2],
    '@typescript-eslint/no-unsafe-call': 0,
    '@typescript-eslint/no-unsafe-assignment': 0,
    '@typescript-eslint/no-unsafe-member-access': 0,
    '@typescript-eslint/no-namespace': 0,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  overrides: [
    {
      files: ['*.js'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
    {
      files: ['*.js', '*.jsx', '*.ts', '*.tsx'],
      rules: {
        'simple-import-sort/imports': [
          'error',
          {
            groups: [
              ['dotenv/config'],
              ['^node:', '^react$', '^react-dom$', '^next?/|^next$'],
              ['^@?\\w'],
              ['^[\\w]'],
              ['^'],
              ['^\\.'],
            ],
          },
        ],
      },
    },
  ],
};

export default config;
