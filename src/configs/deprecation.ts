import type { FlatESLintConfigItem } from "eslint-define-config"
import { pluginDeprecation } from "../plugins"

export const deprecation: FlatESLintConfigItem[] = [
  {
    plugins: {
      deprecation: pluginDeprecation,
    },
    rules: {
       'deprecation/deprecation': 'error'
    },
  },
]
