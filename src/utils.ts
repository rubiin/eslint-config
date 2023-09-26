import type { FlatESLintConfigItem } from 'eslint-define-config'

/**
 * Combine array and non-array configs into a single array.
 */
export function combine(...configs: (FlatESLintConfigItem | FlatESLintConfigItem[])[]): FlatESLintConfigItem[] {
  return configs.flatMap(config => Array.isArray(config) ? config : [config])
}

/**
 * The `renameRules` function renames keys in an object based on a specified pattern.
 * @param rules - The `rules` parameter is an object that contains key-value pairs. Each key represents
 * a rule name, and the corresponding value represents the rule itself.
 * @param from - The `from` parameter is a string that represents the prefix of the keys in
 * the `rules` object that you want to rename.
 * @param to - The `to` parameter is the string that you want to replace the starting portion
 * of the keys with.
 * @returns a new object with the keys of the input `rules` object renamed according to the provided
 * `from` and `to` strings.
 */
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

/**
 * The function `warnUnnecessaryOffRules` checks for rules that are turned off but never turned on and
 * logs a warning message for each unnecessary rule.
 */
export function warnUnnecessaryOffRules() {
  const unnecessaryOffRules = [...rulesOff].filter(key => !rulesOn.has(key))

  for (const off of unnecessaryOffRules)
    console.warn(`[eslint] rule \`${off}\` is never turned on, you can remove the rule from your config`)
}
