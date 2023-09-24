# @rubiin/eslint-config [![npm](https://img.shields.io/npm/v/@rubiin/eslint-config.svg)](https://npmjs.com/package/@rubiin/eslint-config)

Flat ESLint config for JavaScript, TypeScript, Vue 2, Vue 3, Prettier.

[Legacy Version](https://github.com/rubiin/eslint-config-legacy)

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

Require Node.js >= 16.14.

## Usage

```js
// eslint.config.js
import { all } from '@rubiin/eslint-config'

export default all
```

### Custom Config

```js
import { rubiin } from '@rubiin/eslint-config'
export default rubiin(
  [
    /* your custom config */
  ],
  { react: true, typescript: true, imports: true, unicorn: false }
)
```

### VSCode

```jsonc
{
  "eslint.experimental.useFlatConfig": true
}
```

## Comparing to [`@antfu/eslint-config`](https://github.com/antfu/eslint-config)

Most of the rules are the same, but there are some differences:

- Supports react
- Adds deprecation plugin
- Doesn't add formatting for json, md
- More stricter rules.

## Sponsors

<p align="center">
  <a href="https://cdn.jsdelivr.net/gh/rubiin/sponsors/sponsors.svg">
    <img src='https://cdn.jsdelivr.net/gh/rubiin/sponsors/sponsors.svg'/>
  </a>
</p>

## License

[MIT](./LICENSE) License © 2021-PRESENT [三咲智子](https://github.com/rubiin)
