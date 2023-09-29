import type { FlatESLintConfigItem } from '../types'
import { pluginNode } from '../plugins'
import { OFF } from "../flags"

export function node(): FlatESLintConfigItem[] {
  return [
    {
      name: 'rubiin:node',
      plugins: {
        node: pluginNode,
      },
      rules: {
        'node/handle-callback-err': ['error', '^(err|error)$'],
        'node/no-deprecated-api': 'error',
        'node/no-exports-assign': 'error',
        'node/no-new-require': 'error',
        'node/no-path-concat': 'error',
        "node/prefer-global/buffer": OFF,
        "node/prefer-global/process": OFF,
        'node/process-exit-as-throw': 'error',
      },
    },
  ]
}
