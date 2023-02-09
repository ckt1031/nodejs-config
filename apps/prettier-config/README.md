# @ckt1031/prettier-config

[![Version](https://img.shields.io/npm/v/@ckt1031/prettier-config.svg?style=flat-square)](https://www.npmjs.com/package/@ckt1031/prettier-config)

Welcome to the `@ckt1031/prettier-config`! This is the Prettier configuration for [ckt1031](https://github.com/ckt1031).

## Specificed Config

- **Single Quotes** - Use single quotes instead of double quotes.
- **Tab Width** - Use **2** spaces for indentation.
- **Trailing Comma** - Use trailing commas wherever possible.
- **Print Width** - Use a print width of **100** characters.
- **Avoid Parentheses** - Avoid parentheses when possible.

> `x => x * x` instead of `(x) => x * x`

- **Truey Bracket Spacing** - Add spaces inside of curly braces.

> `{ foo: bar }` instead of `{foo: bar}`

- **Disabled bracket same line** - Objects and arrays are formatted with each item on a new line.

## Prettier Plugins

In addition to the base Prettier configuration, this package also includes the following plugins:

### [prettier-plugin-package-perfection](https://npmjs.com/package/prettier-plugin-package-perfection)

This plugin makes sure your `package.json` file is correctly formatted and includes all necessary information.

### [prettier-plugin-prisma](https://npmjs.com/package/prettier-plugin-prisma)

This plugin makes sure your Prisma schema files are correctly formatted, making it easier to read and maintain.

### [prettier-plugin-sort-json](https://npmjs.com/package/prettier-plugin-sort-json)

This plugin sorts the properties of your JSON files, ensuring consistent formatting across your codebase.

### [prettier-plugin-tailwindcss](https://npmjs.com/package/prettier-plugin-tailwindcss)

This plugin makes sure your Tailwind CSS code is correctly formatted and adheres to best practices, helping you keep your codebase clean and maintainable.

## Installation

To start using `@ckt1031/prettier-config`, simply run:

```bash
npm install --save-dev @ckt1031/prettier-config
```

## Usage

Add the following code to your `.prettierrc` or `.prettierrc.json` file:

```json
"@ckt1031/prettier-config"
```

(or `package.json`)

```json
{
  "prettier": "@ckt1031/prettier-config"
}
```

And that's it! You're now ready to use

## Compatibility

This package is compatible with the following Prettier and Node.js versions:

- Prettier: 2.0 or later (recommended: latest v2, before major version 3)
- Node.js: Any version that supports Prettier

**Updating to the latest version of this package is recommended for the best compatibility.**

## License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.
