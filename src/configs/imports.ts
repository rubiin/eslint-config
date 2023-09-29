import type { FlatESLintConfigItem, OptionsStylistic } from '../types'
import { pluginImport } from '../plugins'

export function imports(options: OptionsStylistic = {}): FlatESLintConfigItem[] {
  const {
    stylistic = true,
  } = options

  return [
    {
      name: 'rubiin:imports',
      plugins: {
        import: pluginImport,
      },
      rules: {

        'import/first': 'error',
        'import/no-duplicates': 'error',
        'import/no-mutable-exports': 'error',
        'import/no-named-default': 'error',
        'import/no-self-import': 'error',
        'import/no-webpack-loader-syntax': 'error',
        'import/order': 'error',

        ...stylistic
          ? {
              'import/newline-after-import': ['error', { considerComments: true, count: 1 }],
            }
          : {},
      },
    },
  ]
}
