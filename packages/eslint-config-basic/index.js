module.exports = {
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  reportUnusedDisableDirectives: true,
  extends: [
    "./standard",
    "plugin:deprecation/recommended",
    "plugin:jest/recommended",
    "plugin:jsdoc/recommended",
    "plugin:import/recommended",
    "plugin:unicorn/recommended",
  ],
  plugins: ["@stylistic/js"],
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

  settings: {
    "import/resolver": {
      node: { extensions: [".js", ".mjs"] },
    },
  },
  rules: {
    // Import
    "import/order": "error",
    "import/first": "error",
    "import/no-mutable-exports": "error",
    "import/no-unresolved": "off",
    "import/no-absolute-path": "off",
    "import/newline-after-import": ["error", { count: 1, considerComments: true }],
    "import/no-self-import": "error",
    "import/named": "off",

    // Common
    semi: ["error", "never"],
    curly: ["error", "multi-or-nest", "consistent"],
    quotes: ["error", "double"],
    "quote-props": ["error", "consistent-as-needed"],

    "unused-imports/no-unused-imports": offInEditor,
    "unused-imports/no-unused-vars": [
      "warn",
      { vars: "all", varsIgnorePattern: "^_", args: "after-used", argsIgnorePattern: "^_" },
    ],

    // Stylistic
    "@stylistic/js/array-bracket-spacing": ["error", "never"],
    "@stylistic/js/block-spacing": ["error", "always"],
    "@stylistic/js/comma-spacing": ["error", { before: false, after: true }],
    "@stylistic/js/func-call-spacing": "off",
    "@stylistic/js/generator-star-spacing": "off",
    "@stylistic/js/indent": [
      "error",
      2,
      { SwitchCase: 1, VariableDeclarator: 1, outerIIFEBody: 1 },
    ],
    "@stylistic/js/key-spacing": ["error", { beforeColon: false, afterColon: true }],
    "@stylistic/js/no-multi-spaces": "error",
    "@stylistic/js/object-curly-spacing": ["error", "always"],
    "@stylistic/js/operator-linebreak": ["error", "before"],
    "@stylistic/js/space-before-function-paren": [
      "error",
      { anonymous: "always", named: "never", asyncArrow: "always" },
    ],
    "@stylistic/js/template-curly-spacing": "error",
    "@stylistic/js/brace-style": ["error", "stroustrup", { allowSingleLine: true }],
    "@stylistic/js/comma-style": ["error", "last"],
    "@stylistic/js/spaced-comment": [
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

    "no-param-reassign": "off",
    camelcase: "off",
    "comma-dangle": ["error", "always-multiline"],
    "no-constant-condition": "warn",
    "no-debugger": "error",
    "no-console": ["error", { allow: ["warn", "error"] }],
    "no-cond-assign": ["error", "always"],
    "no-restricted-syntax": ["error", "DebuggerStatement", "LabeledStatement", "WithStatement"],
    "no-return-await": "off",
    "no-restricted-globals": [
      "error",
      { name: "global", message: "Use `globalThis` instead." },
      { name: "self", message: "Use `globalThis` instead." },
    ],
    "no-restricted-properties": [
      "error",
      {
        property: "__proto__",
        message: "Use `Object.getPrototypeOf` or `Object.setPrototypeOf` instead.",
      },
      { property: "__defineGetter__", message: "Use `Object.defineProperty` instead." },
      { property: "__defineSetter__", message: "Use `Object.defineProperty` instead." },
      { property: "__lookupGetter__", message: "Use `Object.getOwnPropertyDescriptor` instead." },
      { property: "__lookupSetter__", message: "Use `Object.getOwnPropertyDescriptor` instead." },
    ],

    // ES6
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
    "arrow-parens": ["error", "as-needed", { requireForBlockBody: true }],

    // best-practice
    "array-callback-return": "error",
    "block-scoped-var": "error",
    "consistent-return": "off",
    complexity: "off",
    eqeqeq: ["error", "smart"],
    "no-alert": "warn",
    "no-case-declarations": "error",
    "no-multi-str": "error",
    "no-with": "error",
    "no-void": "error",
    "no-useless-escape": "off",
    "no-invalid-this": "error",
    "vars-on-top": "error",
    "require-await": "off",
    "no-return-assign": "off",
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

    "no-use-before-define": ["error", { functions: false, classes: false, variables: true }],
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
  },
};