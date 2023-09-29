import type { FlatESLintConfigItem, OptionsHasTypeScript, OptionsOverrides, OptionsStylistic } from '../types'
import { GLOB_JSX, GLOB_TSX, GLOB_VUE } from '../globs'
import { parserTs, pluginReact, pluginReactHooks } from '../plugins'
import { OFF } from '../flags'

export function react(
  options: OptionsHasTypeScript & OptionsOverrides & OptionsStylistic = {},
): FlatESLintConfigItem[] {
  const {
    overrides = {},
    stylistic = true,
  } = options

  return [
    {
      name: 'rubiin:vue:setup',
      plugins: {
        react: pluginReact,
        'react-hooks': pluginReactHooks
      },
    },
    {
      files: [GLOB_JSX,GLOB_TSX],
      languageOptions: {
        parserOptions: {
          ecmaFeatures: {
            jsx: true,
          },
          parser: options.typescript ? parserTs as any : null,
          sourceType: 'module',
        },
      },
      name: 'rubiin:react:rules',
      rules: {
        ...pluginReact.configs.recommended.rules,
        ...pluginReactHooks.configs.recommended.rules,
        "jsx-quotes": ["error", "prefer-double"],
        "react/react-in-jsx-scope": OFF,
        ...stylistic
        ? {
          // add react style rules here
          }
        : {},

      ...overrides,
      },
    },
  ]
}
