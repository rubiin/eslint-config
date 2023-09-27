import type { FlatESLintConfigItem } from "eslint-define-config"
import { pluginDeprecation } from "../plugins"

export function deprecation(): FlatESLintConfigItem[] {
  return [
    {
      plugins: {
        deprecation: pluginDeprecation,
      },
      rules: {
         'deprecation/deprecation': 'error'
      },
    },
  ]
}
