import type { FlatESLintConfigItem } from '../types'
import {pluginDeprecation} from '../plugins'

export function deprecation(): FlatESLintConfigItem[] {
  return [
    {
      plugins: {
        deprecation: pluginDeprecation as any
    },
    rules: {
       'deprecation/deprecation': 'error',
    }
    },
  ]
}
