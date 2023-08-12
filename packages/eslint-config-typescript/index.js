const fs = require('node:fs')
const { join } = require('node:path')
const process = require('node:process')

const tsconfig = process.env.ESLINT_TSCONFIG || 'tsconfig.eslint.json'


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
  overrides: fs.existsSync(join(process.cwd(), tsconfig))
    ? []
    : [
        {
          parserOptions: {
            tsconfigRootDir: process.cwd(),
            project: [tsconfig],
          },
          parser: "@typescript-eslint/parser",
          excludedFiles: ["**/*.md/*.*"],
          files: ["*.ts", "*.tsx", "*.mts", "*.cts"],
          rules: {
            "no-throw-literal": "off",
            "@typescript-eslint/no-throw-literal": "error",
            "no-implied-eval": "off",
            "@typescript-eslint/no-implied-eval": "error",
            "dot-notation": "off",
            "@typescript-eslint/dot-notation": [
              "error",
              { allowKeywords: true },
            ],
            "@typescript-eslint/no-floating-promises": "error",
            "@typescript-eslint/no-misused-promises": "error",
            "@typescript-eslint/await-thenable": "error",
            "@typescript-eslint/no-for-in-array": "error",
            "@typescript-eslint/no-unnecessary-type-assertion": "error",
            "@typescript-eslint/no-unsafe-argument": "error",
            "@typescript-eslint/no-unsafe-assignment": "error",
            "@typescript-eslint/no-unsafe-call": "error",
            "@typescript-eslint/no-unsafe-member-access": "error",
            "@typescript-eslint/no-unsafe-return": "error",
            "require-await": "off",
            "@typescript-eslint/require-await": "error",
            "@typescript-eslint/restrict-plus-operands": "error",
            "@typescript-eslint/restrict-template-expressions": "error",
            "@typescript-eslint/unbound-method": "error",
          },
        },
        {
          // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/unbound-method.md
          files: ["**/__tests__/**/*.ts", "**/*.spec.ts", "**/*.test.ts"],
          plugins: ["jest"],
          rules: {
            // you should turn the original rule off *only* for test files
            "@typescript-eslint/unbound-method": "off",
            "jest/unbound-method": "error",
          },
        },
      ],
  rules: {
    // import
    "import/order": "error",
    "import/first": "error",
    "import/no-mutable-exports": "error",
    "import/no-unresolved": "off",
    "import/no-absolute-path": "off",
    "import/newline-after-import": [
      "error",
      { count: 1, considerComments: true },
    ],
    "import/no-self-import": "error",

    // Common
    semi: ["error", "never"],
    curly: ["error", "multi-or-nest", "consistent"],
    quotes: ["error", "single"],
    "quote-props": ["error", "consistent-as-needed"],

    "no-param-reassign": "off",
    "array-bracket-spacing": ["error", "never"],
    "brace-style": ["error", "stroustrup", { allowSingleLine: true }],
    "block-spacing": ["error", "always"],
    camelcase: "off",
    "comma-spacing": ["error", { before: false, after: true }],
    "comma-style": ["error", "last"],
    "comma-dangle": ["error", "always-multiline"],
    "no-constant-condition": "warn",
    "no-debugger": "error",
    "no-console": ["error", { allow: ["warn", "error", "debug"] }],
    "no-cond-assign": ["error", "always"],
    "func-call-spacing": "off",
    "key-spacing": ["error", { beforeColon: false, afterColon: true }],
    indent: [
      "error",
      2,
      { SwitchCase: 1, VariableDeclarator: 1, outerIIFEBody: 1 },
    ],
    "no-restricted-syntax": [
      "error",
      "DebuggerStatement",
      "LabeledStatement",
      "WithStatement",
    ],
    "object-curly-spacing": ["error", "always"],
    "no-return-await": "off",
    "space-before-function-paren": [
      "error",
      {
        anonymous: "always",
        named: "never",
        asyncArrow: "always",
      },
    ],
    "no-restricted-globals": [
      "error",
      { name: "global", message: "Use `globalThis` instead." },
      { name: "self", message: "Use `globalThis` instead." },
    ],
    "no-restricted-properties": [
      "error",
      {
        property: "__proto__",
        message:
          "Use `Object.getPrototypeOf` or `Object.setPrototypeOf` instead.",
      },
      {
        property: "__defineGetter__",
        message: "Use `Object.defineProperty` instead.",
      },
      {
        property: "__defineSetter__",
        message: "Use `Object.defineProperty` instead.",
      },
      {
        property: "__lookupGetter__",
        message: "Use `Object.getOwnPropertyDescriptor` instead.",
      },
      {
        property: "__lookupSetter__",
        message: "Use `Object.getOwnPropertyDescriptor` instead.",
      },
    ],

    // es6
    "no-var": "error",
    "prefer-const": [
      "error",
      {
        destructuring: "all",
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
    "prefer-exponentiation-operator": "error",
    "prefer-rest-params": "error",
    "prefer-spread": "error",
    "prefer-template": "error",
    "template-curly-spacing": "error",
    "arrow-parens": ["error", "as-needed", { requireForBlockBody: true }],
    "generator-star-spacing": "off",
    "spaced-comment": [
      "error",
      "always",
      {
        line: {
          markers: ["/"],
          exceptions: ["/", "#"],
        },
        block: {
          markers: ["!"],
          exceptions: ["*"],
          balanced: true,
        },
      },
    ],

    // best-practice
    "array-callback-return": "error",
    "block-scoped-var": "error",
    "consistent-return": "off",
    complexity: "off",
    eqeqeq: ["error", "smart"],
    "no-alert": "warn",
    "no-case-declarations": "error",
    "no-multi-spaces": "error",
    "no-multi-str": "error",
    "no-with": "error",
    "no-void": "error",
    "no-useless-escape": "off",
    "no-invalid-this": "error",
    "vars-on-top": "error",
    "require-await": "off",
    "no-return-assign": "off",
    "operator-linebreak": ["error", "before"],
    "max-statements-per-line": ["error", { max: 1 }],

    // unicorns
    // Pass error message when throwing errors
    "unicorn/error-message": "error",
    // Uppercase regex escapes
    "unicorn/escape-case": "error",
    // Array.isArray instead of instanceof
    "unicorn/no-instanceof-array": "error",
    // Prevent deprecated `new Buffer()`
    "unicorn/no-new-buffer": "error",
    // Keep regex literals safe!
    "unicorn/no-unsafe-regex": "off",
    // Lowercase number formatting for octal, hex, binary (0x1'error' instead of 0X1'error')
    "unicorn/number-literal-case": "error",
    // includes over indexOf when checking for existence
    "unicorn/prefer-includes": "error",
    // String methods startsWith/endsWith instead of more complicated stuff
    "unicorn/prefer-string-starts-ends-with": "error",
    // textContent instead of innerText
    "unicorn/prefer-text-content": "error",
    // Enforce throwing type error when throwing error while checking typeof
    "unicorn/prefer-type-error": "error",
    // Use new when throwing error
    "unicorn/throw-new-error": "error",
    // Prefer using the node: protocol
    "unicorn/prefer-node-protocol": "error",
    // Prefer using number properties like `Number.isNaN` rather than `isNaN`
    "unicorn/prefer-number-properties": "error",
    // Ban `new Array` as `Array` constructor's params are ambiguous
    "unicorn/no-new-array": "error",

    "no-use-before-define": [
      "error",
      { functions: false, classes: false, variables: true },
    ],
    "eslint-comments/disable-enable-pair": "off",
    "import/no-named-as-default-member": "off",
    "import/no-named-as-default": "off",
    "import/namespace": "off",

    "sort-imports": [
      "error",
      {
        ignoreCase: false,
        ignoreDeclarationSort: true,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ["none", "all", "multiple", "single"],
        allowSeparatedGroups: false,
      },
    ],
    // TS
    "@typescript-eslint/ban-ts-comment": [
      "error",
      { "ts-ignore": "allow-with-description" },
    ],
    "@typescript-eslint/member-delimiter-style": [
      "error",
      { multiline: { delimiter: "none" } },
    ],
    "@typescript-eslint/type-annotation-spacing": ["error", {}],
    "@typescript-eslint/consistent-type-imports": [
      "error",
      { prefer: "type-imports", disallowTypeAnnotations: false },
    ],
    "@typescript-eslint/consistent-type-definitions": ["error", "interface"],
    "@typescript-eslint/prefer-ts-expect-error": "error",
    "@typescript-eslint/no-require-imports": "error",
    // Override JS
    "no-useless-constructor": "off",
    indent: "off",
    "@typescript-eslint/indent": [
      "error",
      2,
      {
        SwitchCase: 1,
        VariableDeclarator: 1,
        outerIIFEBody: 1,
        MemberExpression: 1,
        FunctionDeclaration: { parameters: 1, body: 1 },
        FunctionExpression: { parameters: 1, body: 1 },
        CallExpression: { arguments: 1 },
        ArrayExpression: 1,
        ObjectExpression: 1,
        ImportDeclaration: 1,
        flatTernaryExpressions: false,
        ignoreComments: false,
        ignoredNodes: [
          "TemplateLiteral *",
          "JSXElement",
          "JSXElement > *",
          "JSXAttribute",
          "JSXIdentifier",
          "JSXNamespacedName",
          "JSXMemberExpression",
          "JSXSpreadAttribute",
          "JSXExpressionContainer",
          "JSXOpeningElement",
          "JSXClosingElement",
          "JSXFragment",
          "JSXOpeningFragment",
          "JSXClosingFragment",
          "JSXText",
          "JSXEmptyExpression",
          "JSXSpreadChild",
          "TSTypeParameterInstantiation",
          "FunctionExpression > .params[decorators.length > 0]",
          "FunctionExpression > .params > :matches(Decorator, :not(:first-child))",
          "ClassBody.body > PropertyDefinition[decorators.length > 0] > .key",
        ],
        offsetTernaryExpressions: true,
      },
    ],
    "no-invalid-this": "off",
    "@typescript-eslint/no-invalid-this": "error",
    "no-redeclare": "off",
    "@typescript-eslint/no-redeclare": "error",
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": [
      "error",
      { functions: false, classes: false, variables: true },
    ],
    "brace-style": "off",
    "@typescript-eslint/brace-style": [
      "error",
      "stroustrup",
      { allowSingleLine: true },
    ],
    "comma-dangle": "off",
    "@typescript-eslint/comma-dangle": ["error", "always-multiline"],
    "object-curly-spacing": "off",
    "@typescript-eslint/object-curly-spacing": ["error", "always"],
    semi: "off",
    "@typescript-eslint/semi": ["error", "never"],
    quotes: "off",
    "@typescript-eslint/quotes": ["error", "single"],
    "space-before-blocks": "off",
    "@typescript-eslint/space-before-blocks": ["error", "always"],
    "space-before-function-paren": "off",
    "@typescript-eslint/space-before-function-paren": [
      "error",
      {
        anonymous: "always",
        named: "never",
        asyncArrow: "always",
      },
    ],
    "space-infix-ops": "off",
    "@typescript-eslint/space-infix-ops": "error",
    "keyword-spacing": "off",
    "@typescript-eslint/keyword-spacing": [
      "error",
      { before: true, after: true },
    ],
    "comma-spacing": "off",
    "@typescript-eslint/comma-spacing": [
      "error",
      { before: false, after: true },
    ],
    "no-extra-parens": "off",
    "@typescript-eslint/no-extra-parens": ["error", "functions"],
    "no-dupe-class-members": "off",
    "@typescript-eslint/no-dupe-class-members": "error",
    "no-loss-of-precision": "off",
    "@typescript-eslint/no-loss-of-precision": "error",
    "lines-between-class-members": "off",
    "@typescript-eslint/lines-between-class-members": [
      "error",
      "always",
      { exceptAfterSingleLine: true },
    ],

    // off
    "@typescript-eslint/consistent-indexed-object-style": "off",
    "@typescript-eslint/naming-convention": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-member-accessibility": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/parameter-properties": "off",
    "@typescript-eslint/no-empty-interface": "off",
    "@typescript-eslint/ban-ts-ignore": "off",
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/triple-slash-reference": "off",
    // handled by unused-imports/no-unused-imports
    "@typescript-eslint/no-unused-vars": "off",
  },
};
