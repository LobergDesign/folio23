module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser",
  },
  extends: [
    "@nuxtjs/eslint-config-typescript",
    "plugin:prettier/recommended",
    "prettier",
  ],
  plugins: ["@typescript-eslint", "prettier"],
  rules: {
    "linebreak-style": ["error", "unix"],
    "vue/multi-word-component-names": "off",
    "vue/no-v-html": "off",
    quotes: ["warn", "double"],
    "@typescript-eslint/no-unused-vars": [
      "warn",
      { ignoreRestSiblings: true, argsIgnorePattern: "^_" },
    ],
  },
};
