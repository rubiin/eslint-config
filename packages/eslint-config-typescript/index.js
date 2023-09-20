const fs = require("fs");
// Determine whether the project has a tsconfig.json file
const hasTSConfig = fs.existsSync("tsconfig.json");

module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: ["@stylistic/ts"],
  extends: [
    "@rubiin/eslint-config-basic",
    "plugin:import/typescript",
    "plugin:@typescript-eslint/recommended",
    "plugin:jsdoc/recommended-typescript",
  ],
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 2021,
    tsconfigRootDir: hasTSConfig ? process.cwd() : undefined,
    project: hasTSConfig ? "tsconfig.json" : undefined,
  },
  overrides: [
    {
      env: {
        es6: true,
        browser: true,
        node: true,
      },
      reportUnusedDisableDirectives: true,
      files: ["*.ts", "*.tsx", "*.mts", "*.cts"],
      rules: {
        "no-throw-literal": "off",
        "@typescript-eslint/no-throw-literal": "error",
        "no-implied-eval": "off",
        "@typescript-eslint/no-implied-eval": "error",
        "dot-notation": "off",
        "@typescript-eslint/dot-notation": ["error", { allowKeywords: true }],
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
      env: {
        "jest/globals": true,
      },
      // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/unbound-method.md
      files: ["**/__tests__/**/*.ts", "**/*.spec.ts", "**/*.test.ts", "**/*.e2e.ts"],
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
    "import/named": "off",
    // TS
    "@typescript-eslint/ban-ts-comment": ["error", { "ts-ignore": "allow-with-description" }],
    "@typescript-eslint/consistent-type-imports": [
      "error",
      { prefer: "type-imports", disallowTypeAnnotations: false },
    ],
    "@typescript-eslint/consistent-type-definitions": ["error", "interface"],
    "@typescript-eslint/prefer-ts-expect-error": "error",
    "@typescript-eslint/no-require-imports": "error",

    // TS Stylistic
    "@stylistic/ts/member-delimiter-style": ["error", { multiline: { delimiter: "none" } }],
    "@stylistic/ts/type-annotation-spacing": ["error", {}],

    // Override JS
    "no-useless-constructor": "off",
    "no-invalid-this": "off",
    "@typescript-eslint/no-invalid-this": "error",
    "no-redeclare": "off",
    "@typescript-eslint/no-redeclare": "error",
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": [
      "error",
      { functions: false, classes: false, variables: true },
    ],
    "no-dupe-class-members": "off",
    "@typescript-eslint/no-dupe-class-members": "error",
    "no-loss-of-precision": "off",
    "@typescript-eslint/no-loss-of-precision": "error",
    semi: "off",
    "@typescript-eslint/semi": ["error", "never"],
    quotes: "off",
    "@typescript-eslint/quotes": ["error", "double"],
    "no-extra-parens": "off",
    "@typescript-eslint/no-extra-parens": ["error", "functions"],

    // Stylistic JS/TS Misalignments (should be fixed upstream)
    "comma-dangle": "off",
    "@stylistic/ts/comma-dangle": ["error", "always-multiline"],

    // Stylistic JS/TS
    "@stylistic/js/space-before-blocks": "off",
    "@stylistic/ts/space-before-blocks": ["error", "always"],
    "@stylistic/js/space-before-function-paren": "off",
    "@stylistic/ts/space-before-function-paren": [
      "error",
      {
        anonymous: "always",
        named: "never",
        asyncArrow: "always",
      },
    ],
    "@stylistic/js/brace-style": "off",
    "@stylistic/ts/brace-style": ["error", "stroustrup", { allowSingleLine: true }],
    "@stylistic/js/object-curly-spacing": "off",
    "@stylistic/ts/object-curly-spacing": ["error", "always"],
    "@stylistic/js/space-infix-ops": "off",
    "@stylistic/ts/space-infix-ops": "error",
    "@stylistic/js/keyword-spacing": "off",
    "@stylistic/ts/keyword-spacing": ["error", { before: true, after: true }],
    "@stylistic/js/comma-spacing": "off",
    "@stylistic/ts/comma-spacing": ["error", { before: false, after: true }],
    "@stylistic/js/lines-between-class-members": "off",
    "@stylistic/ts/lines-between-class-members": [
      "error",
      "always",
      { exceptAfterSingleLine: true },
    ],
    "@stylistic/js/indent": "off",
    "@stylistic/ts/indent": [
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
