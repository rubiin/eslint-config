import type { ConfigItem, StylisticConfig } from "../types";
import { pluginAntfu, pluginStylistic } from "../plugins";

export function stylistic(options: StylisticConfig = {}): ConfigItem[] {
  const {
    indent = 2,
    jsx = true,
    quotes = 'double',
    semi = false,
  } = options

  const config = pluginStylistic.configs.customize({
    flat: true,
    indent,
    jsx,
    pluginName: 'style',
    quotes,
    semi,
  })

  return [
    {
      name: "rubiin:stylistic",
      plugins: {
        antfu: pluginAntfu,
        style: pluginStylistic,
      },
      rules: {
        ...config.rules,
        'antfu/consistent-list-newline': 'error',
        'antfu/if-newline': 'error',
        'antfu/indent-binary-ops': ['error', { indent }],
        'antfu/top-level-function': 'error',

        'curly': ['error', 'multi-or-nest', 'consistent'],
        'style/comma-style': ['error', 'last'],
      },
    },
  ]
}
