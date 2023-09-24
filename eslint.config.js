import stylisticMigrate from "@stylistic/eslint-plugin-migrate"
import sortKeys from "eslint-plugin-sort-keys"
import rubiin from "./src/factory.ts"

export default rubiin(
  undefined,
  {
  },
  {
    files: ['src/**/*.ts'],
    plugins: {
      "@stylistic/migrate": stylisticMigrate,
      "sort-keys": sortKeys,
    },
    rules: {
      "@stylistic/migrate/rules": "error",
      "sort-keys/sort-keys-fix": "error",
    },
  },
)
