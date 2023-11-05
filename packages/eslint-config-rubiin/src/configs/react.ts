import type { ConfigItem, OptionsHasTypeScript, OptionsOverrides, OptionsStylistic } from "../types";
import { GLOB_JSX, GLOB_TSX } from "../globs";
import { parserTs, pluginReact, pluginReactHooks, pluginReactUseMemo } from "../plugins";

export function react(
  options: OptionsHasTypeScript & OptionsOverrides & OptionsStylistic = {},
): ConfigItem[] {
  const {
    overrides = {},
    stylistic = true,
  } = options;

  return [
    {
      name: "rubiin:react:setup",
      plugins: {
        "@arthurgeron/react-usememo": pluginReactUseMemo,
        "react": pluginReact,
        "react-hooks": pluginReactHooks,
      },
    },
    {
      files: [GLOB_JSX, GLOB_TSX],
      languageOptions: {
        parserOptions: {
          ecmaFeatures: {
            jsx: true,
          },
          parser: options.typescript ? parserTs as any : null,
          sourceType: "module",
        },
      },
      name: "rubiin:react:rules",
      rules: {
        ...pluginReact.configs.recommended.rules,
        ...pluginReactHooks.configs.recommended.rules,
        "@arthurgeron/react-usememo/require-usememo": [2],
        "react/react-in-jsx-scope": "off",
        'react/prop-types': 'off',
        "style/jsx-quotes": ["error", "prefer-double"],
        ...stylistic
          ? {
            // add react style rules here
          }
          : {},

        ...overrides,
      },
    },
  ];
}
