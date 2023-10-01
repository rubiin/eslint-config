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

```js
// eslint.config.js
import rubiin from "@rubiin/eslint-config";

export default rubiin();
```

### Custom Config

```js
// eslint.config.js
import rubiin from "@rubiin/eslint-config";

export default rubiin({
  stylistic: true, // enable stylistic formatting rules
  typescript: true,
  react: true,
  jsonc: false,
  yaml: false,
});
```

### VSCode

```jsonc
{
  "eslint.experimental.useFlatConfig": true
}
```

## Comparing to [`@rubiin/eslint-config`](https://github.com/rubiin/eslint-config)

Most of the rules are the same, but there are some differences:

- Supports react as well as vue
- Adds deprecation plugin
- More stricter rules.

## License

[MIT](./LICENSE) License © 2021-PRESENT [rubiin](https://github.com/rubiin)
