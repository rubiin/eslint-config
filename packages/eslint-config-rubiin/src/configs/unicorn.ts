import type { FlatConfigItem } from "../types";
import { pluginUnicorn } from "../plugins";

export async function unicorn(): Promise<FlatConfigItem[]> {
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
