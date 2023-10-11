import { parserTs, pluginDeprecation } from "../plugins";
import type { FlatESLintConfigItem, OptionsHasTypeScript, OptionsOverrides } from "../types";

export function deprecation(options: OptionsHasTypeScript & OptionsOverrides  = {},): FlatESLintConfigItem[] {


  return [
    {
      name: "rubiin:deprecation",
      plugins: {
        "deprecation": pluginDeprecation as any,
      },
      languageOptions: {
        parserOptions: {
          ecmaFeatures: {
            jsx: true,
          },
          parser: options.typescript ? parserTs as any : null,
          sourceType: "module",
        },
      },
      rules: {
        "deprecation/deprecation": "error",
      },
    },
  ];
}
