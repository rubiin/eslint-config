import type { FlatESLintConfigItem } from "../types";
import { pluginUnicorn } from "../plugins";

export function unicorn(): FlatESLintConfigItem[] {
  return [
    {
      name: "rubiin:unicorn",
      plugins: {
        unicorn: pluginUnicorn,
      },
      rules: {
        // Pass error message when throwing errors
        "unicorn/error-message": "error",
        // Uppercase regex escapes
        "unicorn/escape-case": "error",
        // Improve regexes by making them shorter, consistent, and safer
        "unicorn/better-regex": "error",
        // Use destructured variables over properties
        "unicorn/consistent-destructuring": "error",
        // Do not use a for loop that can be replaced with a for-of loop
        "unicorn/no-for-loop": "error",
        // no negative conditions
        "unicorn/no-negated-condition": "error",
        'unicorn/explicit-length-check': 'error',
        'unicorn/no-object-as-default-parameter': 'error',
        'unicorn/no-unnecessary-await': 'error',
        'unicorn/prefer-logical-operator-over-ternary': 'error',
        'unicorn/prefer-math-trunc': 'error',
        'unicorn/prefer-modern-dom-apis': 'error',
        'unicorn/prefer-modern-math-apis': 'error',
        'unicorn/prefer-json-parse-buffer': 'off',
        'unicorn/prefer-string-slice': 'error',
        'unicorn/prefer-string-trim-start-end': 'error',
        'unicorn/prefer-switch': 'error',
        // Disallow any empty files
        'unicorn/no-empty-file': 'error',
        // no array forEach
        'unicorn/no-array-push-push': 'error',
        // no array reduce
        'unicorn/no-array-reduce': 'error',
        'no-nested-ternary': 'off',
        // no nested ternary
        'unicorn/no-nested-ternary': 'error',
        // Prefer .includes() over .indexOf() when checking for existence or non-existence
        'unicorn/prefer-array-find': 'error',
        // Prefer .flat() over .flatX()
        'unicorn/prefer-array-flat': 'error',
        // Prefer .flatMap over .map(f).flat()
        'unicorn/prefer-array-flat-map': 'error',
        // Prefer .indexOf over .includes
        'unicorn/prefer-array-index-of': 'error',
        // Prefer .some over .find for checking for existence
        'unicorn/prefer-array-some': 'error',
        // Array.isArray instead of instanceof
        "unicorn/no-instanceof-array": "error",
        // Ban `new Array` as `Array` constructor's params are ambiguous
        "unicorn/no-new-array": "error",
        // Prevent deprecated `new Buffer()`
        "unicorn/no-new-buffer": "error",
        // Lowercase number formatting for octal, hex, binary (0x1'error' instead of 0X1'error')
        "unicorn/number-literal-case": "error",
        // textContent instead of innerText
        "unicorn/prefer-dom-node-text-content": "error",
        // includes over indexOf when checking for existence
        "unicorn/prefer-includes": "error",
        // Prefer using the node: protocol
        "unicorn/prefer-node-protocol": "error",
        // Prefer using number properties like `Number.isNaN` rather than `isNaN`
        "unicorn/prefer-number-properties": "error",
        // String methods startsWith/endsWith instead of more complicated stuff
        "unicorn/prefer-string-starts-ends-with": "error",
        // Enforce throwing type error when throwing error while checking typeof
        "unicorn/prefer-type-error": "error",
        // Use new when throwing error
        "unicorn/throw-new-error": "error",
      },
    },
  ];
}
