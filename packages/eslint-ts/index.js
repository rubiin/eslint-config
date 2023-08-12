module.exports = {
  env: {
    es6: true,
    browser: true,
    node: true,
  },

  reportUnusedDisableDirectives: true,
  extends: [
    "./standard",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:unicorn/recommended",
		"plugin:prettier/recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  ignorePatterns: [
    "*.min.*",
    "*.d.ts",
    "CHANGELOG.md",
    "dist",
    "LICENSE*",
    "output",
    "out",
    "coverage",
    "public",
    "generated",
    "temp",
    "package-lock.json",
    "pnpm-lock.yaml",
    "yarn.lock",
    "__snapshots__",
    // ignore for in lint-staged
    "*.css",
    "*.png",
    "*.ico",
    "*.toml",
    "*.patch",
    "*.txt",
    "*.crt",
    "*.key",
    "Dockerfile",
    // force include
    "!.github",
    "!.vitepress",
    "!.vscode",
    // force exclude
    "**/.vitepress/cache",
  ],
  plugins: ['@typescript-eslint/eslint-plugin'],
  settings: {
    "import/resolver": {
      node: { extensions: ['.js', '.mjs'] },
    },
  },
  rules: {
    // import
    "import/order": 'error',
    "import/first": 'error',
    "import/no-mutable-exports": 'error',
    "import/no-unresolved": 'off',
    "import/no-absolute-path": 'off',
    "import/newline-after-import": ['error', { count: 1, considerComments: true }],
    "import/no-self-import": 'error',

    // Common
    semi: ['error', 'never'],
    curly: ['error', 'multi-or-nest', 'consistent'],
    quotes: ['error', 'single'],
    "quote-props": ['error', 'consistent-as-needed'],

    "no-param-reassign": 'off',
    "array-bracket-spacing": ['error', 'never'],
    "brace-style": ['error', 'stroustrup', { allowSingleLine: true }],
    "block-spacing": ['error', 'always'],
    camelcase: 'off',
    "comma-spacing": ['error', { before: false, after: true }],
    "comma-style": ['error', 'last'],
    "comma-dangle": ['error', 'always-multiline'],
    "no-constant-condition": 'warn',
    "no-debugger": 'error',
    "no-console": ['error', { allow: ['warn', 'error', 'debug'] }],
    "no-cond-assign": ['error', 'always'],
    "func-call-spacing": 'off',
    "key-spacing": ['error', { beforeColon: false, afterColon: true }],
    indent: ['error', 2, { SwitchCase: 1, VariableDeclarator: 1, outerIIFEBody: 1 }],
    "no-restricted-syntax": ['error', 'DebuggerStatement', 'LabeledStatement', 'WithStatement'],
    "object-curly-spacing": ['error', 'always'],
    "no-return-await": 'off',
    "space-before-function-paren": [
      "error",
      {
        anonymous: 'always',
        named: 'never',
        asyncArrow: 'always',
      },
    ],
    "no-restricted-globals": [
      "error",
      { name: 'global', message: 'Use `globalThis` instead.' },
      { name: 'self', message: 'Use `globalThis` instead.' },
    ],
    "no-restricted-properties": [
      "error",
      {
        property: '__proto__',
        message: 'Use `Object.getPrototypeOf` or `Object.setPrototypeOf` instead.',
      },
      { property: '__defineGetter__', message: 'Use `Object.defineProperty` instead.' },
      { property: '__defineSetter__', message: 'Use `Object.defineProperty` instead.' },
      {
        property: '__lookupGetter__',
        message: 'Use `Object.getOwnPropertyDescriptor` instead.',
      },
      {
        property: '__lookupSetter__',
        message: 'Use `Object.getOwnPropertyDescriptor` instead.',
      },
    ],

    // es6
    "no-var": 'error',
    "prefer-const": [
      "error",
      {
        destructuring: 'all',
        ignoreReadBeforeAssign: true,
      },
    ],
    "prefer-arrow-callback": [
      "error",
      {
        allowNamedFunctions: false,
        allowUnboundThis: true,
      },
    ],
    "object-shorthand": [
      "error",
      "always",
      {
        ignoreConstructors: false,
        avoidQuotes: true,
      },
    ],
    "prefer-exponentiation-operator": 'error',
    "prefer-rest-params": 'error',
    "prefer-spread": 'error',
    "prefer-template": 'error',
    "template-curly-spacing": 'error',
    "arrow-parens": ['error', 'as-needed', { requireForBlockBody: true }],
    "generator-star-spacing": 'off',
    "spaced-comment": [
      "error",
      "always",
      {
        line: {
          markers: ['/'],
          exceptions: ['/', '#'],
        },
        block: {
          markers: ['!'],
          exceptions: ['*'],
          balanced: true,
        },
      },
    ],

    // best-practice
    "array-callback-return": 'error',
    "block-scoped-var": 'error',
    "consistent-return": 'off',
    complexity: 'off',
    eqeqeq: ['error', 'smart'],
    "no-alert": 'warn',
    "no-case-declarations": 'error',
    "no-multi-spaces": 'error',
    "no-multi-str": 'error',
    "no-with": 'error',
    "no-void": 'error',
    "no-useless-escape": 'off',
    "no-invalid-this": 'error',
    "vars-on-top": 'error',
    "require-await": 'off',
    "no-return-assign": 'off',
    "operator-linebreak": ['error', 'before'],
    "max-statements-per-line": ['error', { max: 1 }],

    // node
    "n/prefer-global/process": ['error', 'never'],
    "n/prefer-global/buffer": ['error', 'never'],
    "n/no-callback-literal": 'off',

    // unicorns
    // Pass error message when throwing errors
    "unicorn/error-message": 'error',
    // Uppercase regex escapes
    "unicorn/escape-case": 'error',
    // Array.isArray instead of instanceof
    "unicorn/no-instanceof-array": 'error',
    // Prevent deprecated `new Buffer()`
    "unicorn/no-new-buffer": 'error',
    // Keep regex literals safe!
    "unicorn/no-unsafe-regex": 'off',
    // Lowercase number formatting for octal, hex, binary (0x1'error' instead of 0X1'error')
    "unicorn/number-literal-case": 'error',
    // includes over indexOf when checking for existence
    "unicorn/prefer-includes": 'error',
    // String methods startsWith/endsWith instead of more complicated stuff
    "unicorn/prefer-string-starts-ends-with": 'error',
    // textContent instead of innerText
    "unicorn/prefer-text-content": 'error',
    // Enforce throwing type error when throwing error while checking typeof
    "unicorn/prefer-type-error": 'error',
    // Use new when throwing error
    "unicorn/throw-new-error": 'error',
    // Prefer using the node: protocol
    "unicorn/prefer-node-protocol": 'error',
    // Prefer using number properties like `Number.isNaN` rather than `isNaN`
    "unicorn/prefer-number-properties": 'error',
    // Ban `new Array` as `Array` constructor's params are ambiguous
    "unicorn/no-new-array": 'error',

    "no-use-before-define": ['error', { functions: false, classes: false, variables: true }],
    "eslint-comments/disable-enable-pair": 'off',
    "import/no-named-as-default-member": 'off',
    "import/no-named-as-default": 'off',
    "import/namespace": 'off',

    "sort-imports": [
      "error",
      {
        ignoreCase: false,
        ignoreDeclarationSort: true,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
        allowSeparatedGroups: false,
      },
    ],
    "prettier/prettier": [
			"error",
			{
				trailingComma: "all",
				bracketSpacing: true,
				arrowParens: "avoid",
				useTabs: true,
				tabWidth: 4,
				endOfLine: "lf",
				htmlWhitespaceSensitivity: "css",
				printWidth: 100,
				proseWrap: "preserve",
				requirePragma: false,
				semi: true,
				singleQuote: false,
				vueIndentScriptAndStyle: true,
				overrides: [
					{
						files: "*.json",
						options: {
							printWidth: 200,
						},
					},
				],
			},
		],
  },
}
