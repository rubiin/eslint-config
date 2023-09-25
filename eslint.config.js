import sortKeys from "eslint-plugin-sort-keys"
import rubiin from "./src/factory.ts"

export default rubiin(
  undefined,
  {
  },
  {
    files: ['src/**/*.ts'],
    plugins: {
      "sort-keys": sortKeys,
    },
    rules: {
      "sort-keys/sort-keys-fix": "error",
    },
  },
)
