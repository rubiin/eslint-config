import sortKeys from "eslint-plugin-sort-keys";
import rubiin from "./dist/index.js";

export default rubiin(
  {
    ignores: [
      "fixtures",
      "_fixtures",
    ],
    // typescript: {
    //   tsconfigPath: 'tsconfig.json',
    // },
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
);
