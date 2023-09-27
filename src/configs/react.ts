import type { FlatESLintConfigItem } from 'eslint-define-config'
import { GLOB_JSX,GLOB_TSX } from '../globs'
import { parserTs, pluginReact, pluginReactHooks } from '../plugins'
import { OFF } from '../flags'
import type { OptionsHasTypeScript, OptionsOverrides } from '../types'

export function react(options: OptionsHasTypeScript & OptionsOverrides = {}): FlatESLintConfigItem[] {
  const {
    overrides = {}
  } = options
  return [
    {
      plugins: {
        react: pluginReact,
        'react-hooks': pluginReactHooks
      },
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
      rules: {
        ...pluginReact.configs.recommended.rules,
        ...pluginReactHooks.configs.recommended.rules,
        "jsx-quotes": ["error", "prefer-double"],
        "react/react-in-jsx-scope": OFF,
        ...overrides,
      },
    },
  ]
}
