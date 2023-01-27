# @ckt1031/tsconfig

[![Version](https://img.shields.io/npm/v/@ckt1031/eslint-config.svg?style=flat-square)](https://www.npmjs.com/package/@ckt1031/eslint-config)

Typescript configuration for [ckt1031](https://github.com/ckt1031). The rules are very strict, **it is not recommended** to use it directly.

## Installation

```bash
npm install --save-dev @ckt1031/tsconfig
```

## Usage

Add the following code to your `tsconfig.json` file:

- Default configuration

```json
{
  "extends": "@ckt1031/tsconfig/base.json"
}
```

- Web Frontend configuration

```json
{
  "extends": "@ckt1031/tsconfig/web.json"
}
```

## License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details
