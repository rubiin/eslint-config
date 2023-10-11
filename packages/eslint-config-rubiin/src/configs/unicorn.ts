import type { ConfigItem } from "../types";
import { pluginUnicorn } from "../plugins";

export function unicorn(): ConfigItem[] {
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
