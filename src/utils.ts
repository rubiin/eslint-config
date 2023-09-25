import type { FlatESLintConfigItem } from 'eslint-define-config'

/**
 * Combine array and non-array configs into a single array.
 */
export function combine(...configs: (FlatESLintConfigItem | FlatESLintConfigItem[])[]): FlatESLintConfigItem[] {
  return configs.flatMap(config => Array.isArray(config) ? config : [config])
}

export function renameRules(rules: Record<string, any>, from: string, to: string) {
  return Object.fromEntries(
    Object.entries(rules)
      .map(([key, value]) => {
        if (key.startsWith(from))
          return [to + key.slice(from.length), value]
        return [key, value]
      }),
  )
}

const rulesOn = new Set<string>()
const rulesOff = new Set<string>()

export function warnUnnecessaryOffRules() {
  const unnecessaryOffRules = [...rulesOff].filter(key => !rulesOn.has(key))

  for (const off of unnecessaryOffRules)
    console.warn(`[eslint] rule \`${off}\` is never turned on, you can remove the rule from your config`)
}
