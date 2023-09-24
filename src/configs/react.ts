import type { FlatESLintConfigItem } from 'eslint-define-config'
import { GLOB_JSX,GLOB_TSX } from '../globs'
import { parserTs, pluginReact, pluginReactHooks } from '../plugins'
import { OFF } from '../flags'
import type { OptionsHasTypeScript } from '../types'

export function react(options: OptionsHasTypeScript = {}): FlatESLintConfigItem[] {
  return [
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
      plugins: {
        react: pluginReact,
        'react-hooks': pluginReactHooks
      },
      rules: {
        ...pluginReact.configs.recommended.rules,
        ...pluginReactHooks.configs.recommended.rules,
        "jsx-quotes": ["error", "prefer-double"],
        "react/react-in-jsx-scope": OFF,
      },
    },
  ]
}
