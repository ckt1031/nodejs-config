# @ckt1031/eslint-config

[![Version](https://img.shields.io/npm/v/@ckt1031/eslint-config.svg?style=flat-square)](https://www.npmjs.com/package/@ckt1031/eslint-config)

Welcome to the `@ckt1031/eslint-config`! This is the official ESLint configuration for [ckt1031](https://github.com/ckt1031) projects, enforcing strict rules and best practices for a clean and organized codebase.

## Rules and plugins

This configuration includes a variety of rules and plugins, such as:

(All rules are enabled by default)

- [eslint-plugin-simple-import-sort](https://www.npmjs.com/package/eslint-plugin-simple-import-sort) - for import sorting simplicity
- [eslint-plugin-unicorn](https://www.npmjs.com/package/eslint-plugin-unicorn) - for various awesome ESLint rules
- [eslint-plugin-tailwindcss](https://www.npmjs.com/package/eslint-plugin-tailwindcss) - for Tailwind CSS linting
- [eslint-plugin-sonarjs](https://www.npmjs.com/package/eslint-plugin-sonarjs) - for SonarJS rules
- [eslint-plugin-promise](https://www.npmjs.com/package/eslint-plugin-promise) - for promise best practices
- [eslint-plugin-react](https://www.npmjs.com/package/eslint-plugin-react) - for React specific linting
- [@typescript-eslint/eslint-plugin](https://www.npmjs.com/package/@typescript-eslint/eslint-plugin) - for TypeScript support.

(Stricter TypeScript setup)

- [eslint-plugin-deprecation](https://www.npmjs.com/package/eslint-plugin-deprecation) - for detecting deprecated code

## Installation

To start using `@ckt1031/eslint-config`, simply run:

```bash
npm install --save-dev @ckt1031/eslint-config
```

## Usage

Add the following code to your `.eslintrc.js` or `.eslintrc.json` file:

(Default, TypeScript is also supported)

```js
module.exports = {
  extends: ['@ckt1031'],
  // extends: ['@ckt1031/eslint-config/default'], // if you want to use named config
};
```

(Typescript Strict)

```js
module.exports = {
  extends: ['@ckt1031/eslint-config/typescript-strict'],
  parserOptions: {
    ecmaVersion: 'latest',
    project: './tsconfig.json',
    // tsconfigRootDir: __dirname, // if you use tsconfig.json in a different directory
  },
};
```

And that's it! You're now ready to use

## Compatibility

This package is compatible with the following dependencies and Node.js versions:

- ESLint: 8.0 or later (Before major version 9)
- TypeScript: 4.0 or later (Before major version 5)
- Node.js: Any version that supports dependencies above

**Updating to the latest version of this package is recommended for the best compatibility.**

## License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details
