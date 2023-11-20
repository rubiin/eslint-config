import type { FlatConfigItem } from "./types";
import type { Awaitable, UserConfigItem } from './types'

/**
 * Combine array and non-array configs into a single array.
 */

export async function combine(...configs: Awaitable<UserConfigItem | UserConfigItem[]>[]): Promise<UserConfigItem[]> {
  const resolved = await Promise.all(configs)
  return resolved.flat()
}


export function renameRules(rules: Record<string, any>, from: string, to: string) {
  return Object.fromEntries(
    Object.entries(rules)
      .map(([key, value]) => {
        if (key.startsWith(from))
          return [to + key.slice(from.length), value];
        return [key, value];
      }),
  );
}

export async function interopDefault<T>(m: Awaitable<T>): Promise<T extends { default: infer U } ? U : T> {
  const resolved = await m
  return (resolved as any).default || resolved
}

const rulesOn = new Set<string>();
const rulesOff = new Set<string>();

export function recordRulesStateConfigs(configs: FlatConfigItem[]): FlatConfigItem[] {
  for (const config of configs)
    recordRulesState(config.rules ?? {});

  return configs;
}

export function recordRulesState(rules: FlatConfigItem["rules"]): FlatConfigItem["rules"] {
  for (const [key, value] of Object.entries(rules ?? {})) {
    const firstValue = Array.isArray(value) ? value[0] : value;
    if (firstValue == null)
      continue;
    if (firstValue === "off" || firstValue === 0)
      rulesOff.add(key);
    else
      rulesOn.add(key);
  }

  return rules;
}

export function warnUnnecessaryOffRules() {
  const unnecessaryOffRules = [...rulesOff].filter(key => !rulesOn.has(key));

  for (const off of unnecessaryOffRules)
    console.warn(`[eslint] rule \`${off}\` is never turned on, you can remove the rule from your config`);
}


export function toArray<T>(value: T | T[]): T[] {
  return Array.isArray(value) ? value : [value]
}
