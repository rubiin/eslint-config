import type { FlatESLintConfigItem } from "../types";
import { pluginNode } from "../plugins";

export function node(): FlatESLintConfigItem[] {
  return [
    {
      name: "rubiin:node",
      plugins: {
        node: pluginNode,
      },
      rules: {
        "node/handle-callback-err": ["error", "^(err|error)$"],
        "node/no-deprecated-api": "error",
        "node/no-exports-assign": "error",
        "node/no-new-require": "error",
        "node/no-path-concat": "error",
        "node/prefer-global/buffer": "off",
        "node/prefer-global/process": "off",
        "node/process-exit-as-throw": "error",
      },
    },
  ];
}
