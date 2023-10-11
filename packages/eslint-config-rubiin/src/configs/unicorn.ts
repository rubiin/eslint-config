import type { FlatESLintConfigItem } from "../types";
import { pluginUnicorn } from "../plugins";

export function unicorn(): FlatESLintConfigItem[] {
  return [
    {
      name: "rubiin:unicorn",
      plugins: {
        unicorn: pluginUnicorn,
      },
      rules: {
        ...pluginUnicorn.configs.recommended.rules,
        "unicorn/prefer-module":"off",
        "unicorn/no-process-exit":"off",
        "unicorn/no-thenable":"off",

      },
    },
  ];
}
