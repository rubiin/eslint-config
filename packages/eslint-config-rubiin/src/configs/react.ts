import type { FlatConfigItem, OptionsHasTypeScript, OptionsOverrides, OptionsStylistic } from "../types";
import { GLOB_JSX, GLOB_TSX } from "../globs";
import {  pluginReact, pluginReactHooks, pluginReactUseMemo } from "../plugins";
import { interopDefault } from "../utils";

export async function react(
  options: OptionsHasTypeScript & OptionsOverrides & OptionsStylistic = {},
): Promise<FlatConfigItem[]> {
  const {
    overrides = {},
    stylistic = true,
  } = options;


  const [
    parserTs,
  ] = await Promise.all([
    interopDefault(import('@typescript-eslint/parser')),
  ] as const)


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
