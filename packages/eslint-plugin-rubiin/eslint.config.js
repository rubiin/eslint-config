import sortKeys from "eslint-plugin-sort-keys";
import styleMigrate from "@stylistic/eslint-plugin-migrate";
import rubiin from "@rubiin/eslint-config";

export default rubiin(
  {
    vue: true,
    typescript: {
      tsconfigPath: ".tsconfig.json"
    },
    yaml: true,
  },
  {
    files: ["src/**/*.ts"],
    plugins: {
      "sort-keys": sortKeys,
    },
    rules: {
      "sort-keys/sort-keys-fix": "error",
    },
  },
  {
    files: ["src/configs/*.ts"],
    plugins: {
      "style-migrate": styleMigrate,
    },
    rules: {
      "style-migrate/migrate": ["error", { namespaceTo: "style" }],
    },
  },
);
