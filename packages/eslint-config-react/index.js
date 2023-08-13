module.exports = {
  extends: ["react/recommended", "react-hooks/recommended", "@rubiin/eslint-config-ts"],
  settings: {
    react: {
      version: "17.0",
    },
  },
  rules: {
    "jsx-quotes": ["error", "prefer-double"],
    "react/react-in-jsx-scope": "off",
  },
};
