# @ckt1031/eslint-config

[![Version](https://img.shields.io/npm/v/@ckt1031/eslint-config.svg?style=flat-square)](https://www.npmjs.com/package/@ckt1031/eslint-config)

Welcome to the `@ckt1031/eslint-config`! This is the official ESLint configuration for [ckt1031](https://github.com/ckt1031) projects, enforcing strict rules and best practices for a clean and organized codebase.

## Rules and plugins

This configuration includes a variety of rules and plugins, such as:

### [eslint-plugin-simple-import-sort](https://www.npmjs.com/package/eslint-plugin-simple-import-sort)

This plugin **sorts your imports, ensuring consistent formatting** across your codebase.

### [eslint-plugin-unicorn](https://www.npmjs.com/package/eslint-plugin-unicorn)

This plugin provides a set of rules for enforcing best practices for Node.js and JavaScript development, with a focus on improved security and maintainability.

### [eslint-plugin-tailwindcss](https://www.npmjs.com/package/eslint-plugin-tailwindcss)

This plugin integrates the Tailwind CSS framework into your ESLint setup, helping you write cleaner, more maintainable code when **using Tailwind**.

### [eslint-plugin-sonarjs](https://www.npmjs.com/package/eslint-plugin-sonarjs)

This plugin provides a set of rules aimed at **improving code quality and catching bugs early**, by leveraging the SonarJS engine.

### [eslint-plugin-promise](https://www.npmjs.com/package/eslint-plugin-promise)

This plugin provides a set of rules for enforcing best practices when working with **Promises in JavaScript**.

### [eslint-plugin-react](https://www.npmjs.com/package/eslint-plugin-react)

This plugin provides a set of rules for enforcing best practices when **writing React applications**, including guidelines for improving performance and maintainability.

### [@typescript-eslint/eslint-plugin](https://www.npmjs.com/package/@typescript-eslint/eslint-plugin)

This plugin provides a set of rules for enforcing best practices when **writing TypeScript code**, and is specifically designed for use with the TypeScript language.

### [eslint-plugin-deprecation](https://www.npmjs.com/package/eslint-plugin-deprecation)

(Stricter TypeScript only)

This plugin provides a set of rules to enfore best practices when using **deprecated APIs**.

## Installation

To start using `@ckt1031/eslint-config`, simply run:

```bash
npm install --save-dev @ckt1031/eslint-config
```

## Usage

Add the following code to your `.eslintrc.js` or `.eslintrc.json` file:

- Default: (TypeScript is also supported)

```js
module.exports = {
  extends: ['@ckt1031'],
  // extends: ['@ckt1031/eslint-config/default'], // if you want to use named config
};
```

- Code Style: (prettier)

```js
module.exports = {
  extends: ['@ckt1031/eslint-config/code-style'],
};
```

- Typescript Strict:

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

- Ultimate: (TypeScript strict + Code Style)

```js
module.exports = {
  extends: ['@ckt1031/eslint-config/ultimate'],
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

- ESLint: 8.x
- TypeScript: 5.x
- Node.js: Any version that supports dependencies above

**Updating to the latest version of this package is recommended for the best compatibility.**

## License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details
