import process from "node:process"
import type { FlatESLintConfigItem } from "eslint-define-config"
import { isPackageExists } from "local-pkg"
import {
  comments,
  deprecation,
  ignores,
  imports,
  javascript,
  node,
  test,
  typescript,
  stylistic,
  typescriptWithTypes,
  unicorn,
  jsdoc,
  jsonc,
  sortPackageJson,
  sortTsconfig,
  markdown,
  yaml,
} from "./configs"
import type { OptionsConfig } from "./types"
import { combine } from "./utils"
import { react } from "./configs"
import gitignore from 'eslint-config-flat-gitignore'
import fs from 'node:fs'

const flatConfigProps: (keyof FlatESLintConfigItem)[] = [
  'files',
  'ignores',
  'languageOptions',
  'linterOptions',
  'processor',
  'plugins',
  'rules',
  'settings',
]

const ReactPackages = [
  'react',
  'next',
  'gatsby',
  'nextra',
  'remix',
]

/**
 * Construct an array of ESLint flat config items.
 */
export function rubiin(options: OptionsConfig & FlatESLintConfigItem = {}, ...userConfigs: (FlatESLintConfigItem | FlatESLintConfigItem[])[]) {

  const {
    isInEditor = !!((process.env.VSCODE_PID || process.env.JETBRAINS_IDE) && !process.env.CI),
    react: enableReact = ReactPackages.some(i => isPackageExists(i)),
    typescript: enableTypeScript = isPackageExists('typescript'),
    stylistic: enableStylistic = true,
    gitignore: enableGitignore = true,
    overrides = {},
  } = options


  const configs: FlatESLintConfigItem[][] = []

  if (enableGitignore) {
    if (typeof enableGitignore !== 'boolean') {
      configs.push([gitignore(enableGitignore)])
    }
    else {
      if (fs.existsSync('.gitignore'))
        configs.push([gitignore()])
    }
  }


  // Base configs
  configs.push(
    ignores(),
    javascript({ isInEditor }),
    comments(),
    node(),
    jsdoc({
      stylistic: enableStylistic,
    }),
    imports({
      stylistic: enableStylistic,
    }),
    deprecation(),
    unicorn(),
  )

  // In the future we may support more component extensions like Svelte or so
  const componentExts: string[] = []

  if (enableReact)
  componentExts.push('react')

  if (enableStylistic)
    configs.push(stylistic())

  if (enableTypeScript) {
    configs.push(typescript({
      componentExts,
      overrides: overrides.typescript,
    }))

    if (typeof enableTypeScript !== "boolean") {
      configs.push(typescriptWithTypes({
        ...enableTypeScript,
        componentExts,
        overrides: overrides.typescriptWithTypes,
      }))
    }
  }

  if (options.test ?? true) {
    configs.push(test({
      isInEditor,
      overrides: overrides.test,
    }))
  }

    if (enableReact)
    configs.push(react({
      overrides: overrides.react,
      stylistic: enableStylistic,
      typescript: !!enableTypeScript,
    }))


    if (options.jsonc ?? true) {
      configs.push(
        jsonc(
          {
            overrides: overrides.jsonc,
            stylistic: enableStylistic,
          }
        ),
        sortPackageJson(),
        sortTsconfig(),
      )
    }

    if (options.yaml ?? true)
    configs.push(yaml({
      overrides: overrides.yaml,
      stylistic: enableStylistic,
    }))

      if (options.markdown ?? true) {
        configs.push(markdown({
          componentExts,
          overrides: overrides.markdown,
        }))
      }


  // User can optionally pass a flat config item to the first argument
  // We pick the known keys as ESLint would do schema validation
  const fusedConfig = flatConfigProps.reduce((acc, key) => {
    if (key in options)
      acc[key] = options[key]
    return acc
  }, {} as FlatESLintConfigItem)
  if (Object.keys(fusedConfig).length)
    configs.push([fusedConfig])


    const merged = combine(
      ...configs,
      ...userConfigs,
    )

  return merged
}
