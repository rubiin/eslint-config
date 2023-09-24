import { FlatGitignoreOptions } from "eslint-config-flat-gitignore"

export interface OptionsComponentExts {
  /**
   * Additional extensions for components.
   *
   * @example ['vue']
   * @default []
   */
  componentExts?: string[]
}

export interface OptionsTypeScriptWithLanguageServer {
  tsconfigPath: string
  tsconfigRootDir?: string
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
  typescript?: boolean | OptionsTypeScriptWithLanguageServer

  /**
   * Enable test support.
   *
   * @default true
   */
  test?: boolean

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
}
