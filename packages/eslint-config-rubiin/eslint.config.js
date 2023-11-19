import styleMigrate from "@stylistic/eslint-plugin-migrate";
import rubiin from "./dist/index.js";

export default rubiin(
  {
    vue: true,
    typescript: {
      tsconfigPath: "tsconfig.json"
    },
    yaml: true,
  },
  {
    files: ["src/**/*.ts"],
    rules: {
      'perfectionist/sort-objects': 'error',
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
