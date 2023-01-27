# @ckt1031/eslint-config

[![Version](https://img.shields.io/npm/v/@ckt1031/eslint-config.svg?style=flat-square)](https://www.npmjs.com/package/@ckt1031/eslint-config)

Eslint configuration for [ckt1031](https://github.com/ckt1031). The rules are very strict, **it is not recommended** to use it directly if you are not familiar with eslint, but you can use it as a reference.

## Rules and plugins

- [eslint-plugin-simple-import-sort](https://www.npmjs.com/package/eslint-plugin-simple-import-sort) - Enforce a simple convention for import sorting
- [eslint-plugin-unicorn](https://www.npmjs.com/package/eslint-plugin-unicorn) - Various awesome ESLint rules
- [eslint-plugin-tailwindcss](https://www.npmjs.com/package/eslint-plugin-tailwindcss) - ESLint plugin for Tailwind CSS
- [eslint-plugin-sonarjs](https://www.npmjs.com/package/eslint-plugin-sonarjs) - ESLint rules for SonarJS
- [eslint-plugin-promise](https://www.npmjs.com/package/eslint-plugin-promise) - Enforce best practices for JavaScript promises
- [eslint-plugin-react](https://www.npmjs.com/package/eslint-plugin-react) - React specific linting rules for ESLint
- [@typescript-eslint/eslint-plugin](https://www.npmjs.com/package/@typescript-eslint/eslint-plugin) - Monorepo for all the tooling which enables ESLint to support TypeScript

## Installation

```bash
npm install --save-dev @ckt1031/eslint-config
```

## Usage

Add the following code to your `.eslintrc.js` or `.eslintrc.json` file:

```js
module.exports = {
  extends: '@ckt1031/default',
};
```

## License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details
