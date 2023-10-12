# @rubiin/eslint-config [![npm](https://img.shields.io/npm/v/@rubiin/eslint-config.svg)](https://npmjs.com/package/@rubiin/eslint-config)

Flat ESLint config for JavaScript, TypeScript, React.

[Legacy Version](https://github.com/rubiin/eslint-config/tree/da354907ff785d03000b4ce74e75adc50143a592)

## Features

- Format with Eslint.
- Designed to work with TypeScript, React out-of-box.
- Sort imports, `package.json`, `tsconfig.json`...
- [ESLint Flat config](https://eslint.org/docs/latest/use/configure/configuration-files-new), compose easily!
- Reasonable defaults, best practices, only one-line of config

## Install

```bash
npm i -D @rubiin/eslint-config
```

Require Node.js >= 16

## Usage


### Create config file

With [`"type": "module"`](https://nodejs.org/api/packages.html#type) in `package.json` (recommended):

```js
// eslint.config.js
import rubiin from "@rubiin/eslint-config";

export default  await rubiin();
```

With CJS:

```js
// eslint.config.js
const rubiin = require("@rubiin/eslint-config").default;

module.exports = rubiin();
```

> Note that `.eslintignore` no longer works in Flat config, see [customization](#customization) for more details.

### Add script for package.json

For example:

```json
{
  "scripts": {
    "lint": "eslint .",
    "lint:fix": "eslint . --fix"
  }
}
```

## VS Code support (auto fix)

Install [VS Code ESLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

Add the following settings to your `.vscode/settings.json`:

```jsonc
{
  // Enable the ESlint flat config support
  "eslint.experimental.useFlatConfig": true,

  // Disable the default formatter, use eslint instead
  "prettier.enable": false,
  "editor.formatOnSave": false,

  // Auto fix
  "editor.codeActionsOnSave": {
   "source.fixAll.eslint": "explicit",
    "source.organizeImports": false
  },

  // Silent the stylistic rules in you IDE, but still auto fix them
  "eslint.rules.customizations": [
    { "rule": "style/*", "severity": "off" },
    { "rule": "*-indent", "severity": "off" },
    { "rule": "*-spacing", "severity": "off" },
    { "rule": "*-spaces", "severity": "off" },
    { "rule": "*-order", "severity": "off" },
    { "rule": "*-dangle", "severity": "off" },
    { "rule": "*-newline", "severity": "off" },
    { "rule": "*quotes", "severity": "off" },
    { "rule": "*semi", "severity": "off" }
  ],

  // Enable eslint for all supported languages
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact",
    "vue",
    "html",
    "markdown",
    "json",
    "jsonc",
    "yaml"
  ]
}
```

### Custom Config

```js
// eslint.config.js
import rubiin from "@rubiin/eslint-config";

export default await rubiin({
  // Enable stylistic formatting rules
  // stylistic: true,

  // Or customize the stylistic rules
  stylistic: {
    indent: 2, // 4, or 'tab'
    quotes: "single", // or 'double'
  },

  // TypeScript and Vue are auto-detected, you can also explicitly enable them:
  typescript: true,
  vue: true,

  // Disable jsonc and yaml support
  jsonc: false,
  yaml: false,

  // `.eslintignore` is no longer supported in Flat config, use `ignores` instead
  ignores: [
    "./fixtures",
    // ...globs
  ]
});
```

### VSCode

```jsonc
{
  "eslint.experimental.useFlatConfig": true
}
```

## Comparing to [`@antfu/eslint-config`](https://github.com/antfu/eslint-config)

Most of the rules are the same, but there are some differences:

- Supports react as well as vue
- Adds deprecation plugin
- More stricter rules.

## License

[MIT](./LICENSE) License © 2021-PRESENT [rubiin](https://github.com/rubiin)
