import { FlatGitignoreOptions } from "eslint-config-flat-gitignore"
import { FlatESLintConfigItem } from "eslint-define-config"

export interface OptionsComponentExts {
  /**
   * Additional extensions for components.
   *
   * @example ['vue']
   * @default []
   */
  componentExts?: string[]
}

export interface OptionsTypeScriptWithTypes {
  tsconfigPath: string
  tsconfigRootDir?: string
}

export interface OptionsOverrides {
  overrides?: FlatESLintConfigItem['rules']
}

export interface OptionsHasTypeScript {
  typescript?: boolean
}

export interface OptionsIsInEditor {
  isInEditor?: boolean
}

export interface OptionsConfig {
  /**
   * Enable TypeScript support.
   *
   * Passing an object to enable TypeScript Language Server support.
   *
   * @default auto-detect based on the dependencies
   */
  typescript?: boolean | OptionsTypeScriptWithTypes

  /**
   * Enable test support.
   *
   * @default true
   */
  test?: boolean

    /**
   * Enable JSONC support.
   *
   * @default true
   */
    jsonc?: boolean

    /**
     * Enable YAML support.
     *
     * @default true
     */
    yaml?: boolean

    /**
     * Enable Markdown support.
     *
     * @default true
     */
    markdown?: boolean

  /**
   * Enable react support.
   *
   * @default auto-detect based on the dependencies
   */
  react?: boolean

    /**
   * Enable gitignore support.
   *
   * Passing an object to configure the options.
   *
   * @default true
   */
    gitignore?: boolean | FlatGitignoreOptions

  /**
   * Enable stylistic rules.
   *
   * @default true
   */
  stylistic?: boolean

  /**
   * Control to disable some rules in editors.
   * @default auto-detect based on the process.env
   */
  isInEditor?: boolean


  /**
   * Provide overrides for rules for each integration.
   */
  overrides?: {
    typescript?: FlatESLintConfigItem['rules']
    typescriptWithTypes?: FlatESLintConfigItem['rules']

    test?: FlatESLintConfigItem['rules']
    react?: FlatESLintConfigItem['rules']
    jsonc?: FlatESLintConfigItem['rules']
    markdown?: FlatESLintConfigItem['rules']
  }
}
