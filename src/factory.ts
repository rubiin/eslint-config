import process from "node:process"
import type { FlatESLintConfigItem } from "eslint-define-config"
import { isPackageExists } from "local-pkg"
import {
  comments,
  ignores,
  imports,
  javascript,
  javascriptStylistic,
  node,
  test,
  typescript,
  typescriptStylistic,
  typescriptWithLanguageServer,
  unicorn,
} from "./configs"
import type { OptionsConfig } from "./types"
import { combine } from "./utils"
import { react } from "./configs"

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


/**
 * Construct an array of ESLint flat config items.
 */
export function rubiin(options: OptionsConfig & FlatESLintConfigItem = {}, ...userConfigs: (FlatESLintConfigItem | FlatESLintConfigItem[])[]) {
  const isInEditor = options.isInEditor ?? !!((process.env.VSCODE_PID || process.env.JETBRAINS_IDE) && !process.env.CI)
  const enableReact = options.react ?? (isPackageExists('react') || isPackageExists('next') || isPackageExists('remix') || isPackageExists('nextra'))
  const enableTypeScript = options.typescript ?? (isPackageExists("typescript"))
  const enableStylistic = options.stylistic ?? true

  const configs = [
    ignores,
    javascript({ isInEditor }),
    comments,
    node,
    imports,
    unicorn,
  ]

  // In the future we may support more component extensions like Svelte or so
  const componentExts: string[] = []

  if (enableReact)
  componentExts.push('react')

  if (enableStylistic)
    configs.push(javascriptStylistic)

  if (enableTypeScript) {
    configs.push(typescript({ componentExts }))

    if (typeof enableTypeScript !== "boolean") {
      configs.push(typescriptWithLanguageServer({
        ...enableTypeScript,
        componentExts,
      }))
    }

    if (enableStylistic)
      configs.push(typescriptStylistic)
  }

  if (options.test ?? true)
    configs.push(test({ isInEditor }))

    if (enableReact)
    configs.push(react({ typescript: !!enableTypeScript }))


  // User can optionally pass a flat config item to the first argument
  // We pick the known keys as ESLint would do schema validation
  const fusedConfig = flatConfigProps.reduce((acc, key) => {
    if (key in options)
      acc[key] = options[key]
    return acc
  }, {} as FlatESLintConfigItem)
  if (Object.keys(fusedConfig).length)
    configs.push([fusedConfig])


  return combine(
    ...configs,
    ...userConfigs,
  )
}
