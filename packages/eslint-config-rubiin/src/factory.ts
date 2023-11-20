import gitignore from 'eslint-config-flat-gitignore'
import { isPackageExists } from 'local-pkg'
import fs from 'node:fs'
import process from 'node:process'
import {
  comments,
  ignores,
  imports,
  javascript,
  jsdoc,
  jsonc,
  markdown,
  node,
  perfectionist,
  sonar,
  sortPackageJson,
  sortTsconfig,
  stylistic,
  test,
  typescript,
  unicorn,
  vue,
  yaml
} from './configs'
import type { Awaitable, FlatConfigItem, OptionsConfig, UserConfigItem } from './types'
import { combine } from './utils'

const flatConfigProps: (keyof FlatConfigItem)[] = [
  'files',
  'ignores',
  'languageOptions',
  'linterOptions',
  'processor',
  'plugins',
  'rules',
  'settings',
]

const VuePackages = [
  'vue',
  'nuxt',
  'vitepress',
  '@slidev/cli',
]

const ReactPackages = [

  "react",
  "next",
  "remix",
  "nextra",
  "gatsby",
];


/**
 * Construct an array of ESLint flat config items.
 */
export function rubiin( options: OptionsConfig & FlatConfigItem = {},
  ...userConfigs: Awaitable<UserConfigItem | UserConfigItem[]>[]
): Promise<UserConfigItem[]> {
  const {
    componentExts = [],
    gitignore: enableGitignore = true,
    isInEditor = !!((process.env.VSCODE_PID || process.env.JETBRAINS_IDE) && !process.env.CI),
    overrides = {},
    typescript: enableTypeScript = isPackageExists('typescript'),
    vue: enableVue = VuePackages.some(i => isPackageExists(i)),
    react: enableReact = ReactPackages.some(i => isPackageExists(i)),
  } = options

  const stylisticOptions = options.stylistic === false
    ? false
    : typeof options.stylistic === 'object'
      ? options.stylistic
      : {}
  if (stylisticOptions && !('jsx' in stylisticOptions))
    stylisticOptions.jsx = options.jsx ?? true

    const configs: Awaitable<FlatConfigItem[]>[] = []

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
    javascript({
      isInEditor,
      overrides: overrides.javascript,
    }),
    comments(),
    node(),
    jsdoc({
      stylistic: stylisticOptions,
    }),
    imports({
      stylistic: stylisticOptions,
    }),
    unicorn(),

    // Optional plugins (installed but not enabled by default)
    perfectionist(),
  )

  if (enableVue)
    componentExts.push('vue')


    if (enableReact)
    componentExts.push("react");

  if (enableTypeScript) {
    configs.push(typescript({
      ...typeof enableTypeScript !== 'boolean'
        ? enableTypeScript
        : {},
      componentExts,
      overrides: overrides.typescript,
    }))
  }

  if (stylisticOptions)
    configs.push(stylistic(stylisticOptions))

  if (options.test ?? true) {
    configs.push(test({
      isInEditor,
      overrides: overrides.test,
    }))
  }

  if (options.sonarjs) {
    configs.push(sonar());
  }

  if (enableVue) {
    configs.push(vue({
      overrides: overrides.vue,
      stylistic: stylisticOptions,
      typescript: !!enableTypeScript,
    }))
  }

  if (options.jsonc ?? true) {
    configs.push(
      jsonc({
        overrides: overrides.jsonc,
        stylistic: stylisticOptions,
      }),
      sortPackageJson(),
      sortTsconfig(),
    )
  }

  if (options.yaml ?? true) {
    configs.push(yaml({
      overrides: overrides.yaml,
      stylistic: stylisticOptions,
    }))
  }

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
      acc[key] = options[key] as any
    return acc
  }, {} as FlatConfigItem)
  if (Object.keys(fusedConfig).length)
    configs.push([fusedConfig])

  const merged = combine(
    ...configs,
    ...userConfigs,
  )

  return merged
}
