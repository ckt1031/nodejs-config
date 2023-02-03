import merge from 'deepmerge';
import type { Linter } from 'eslint';

import defaultConfig from './default';

const config: Linter.Config = {
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:@typescript-eslint/strict',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],
  plugins: ['deprecation', '@typescript-eslint'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'deprecation/deprecation': 1,
    // Typescript
    '@typescript-eslint/no-misused-promises': 0,
    '@typescript-eslint/consistent-type-imports': 2,
    '@typescript-eslint/consistent-type-exports': 2,
    '@typescript-eslint/no-redundant-type-constituents': 2,
    '@typescript-eslint/no-unsafe-call': 0,
    '@typescript-eslint/no-unsafe-assignment': 0,
    '@typescript-eslint/no-unsafe-member-access': 0,
    '@typescript-eslint/no-namespace': 0,
  },
};

export default merge(defaultConfig, config);
