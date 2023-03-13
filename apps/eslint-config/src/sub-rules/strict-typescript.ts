import { Linter } from 'eslint';

const strictTypescriptConfig: Linter.Config = {
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
    // Enforce using the @deprecated tag in JSDoc comments
    'deprecation/deprecation': 1,
    // Typescript
    // Disallow await on a non-promise
    '@typescript-eslint/no-misused-promises': 0,
    // Enforce consistent use of type imports
    '@typescript-eslint/consistent-type-imports': 2,
    // Enforce consistent type exports
    '@typescript-eslint/consistent-type-exports': 2,
    // Enforce that type arguments will use if not required
    '@typescript-eslint/no-redundant-type-constituents': 2,
    // Disallow calling an any type value
    '@typescript-eslint/no-unsafe-call': 0,
    // Disallow assigning any to variables and properties
    '@typescript-eslint/no-unsafe-assignment': 0,
    // Disallow member access on any typed variables
    '@typescript-eslint/no-unsafe-member-access': 0,
    // Disallow the use of custom TypeScript modules and namespaces
    '@typescript-eslint/no-namespace': 0,
  },
};

export default strictTypescriptConfig;
