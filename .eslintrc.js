const path = require("path");

module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
    jest: true
  },
  extends: [
    "airbnb-base",
    "plugin:prettier/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:jest/recommended"
  ],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module"
  },
  rules: {
    "prettier/prettier": "error",
    "import/prefer-default-export": "off",
    "import/extensions": ["error", "always", { js: "never", ts: "never" }]
  },
  settings: {
    "import/resolver": {
      alias: {
        map: [["@src", "./src"]],
        extensions: [".ts", ".js"]
      }
    },
    "import/parsers": {
      "@typescript-eslint/parser": [".ts"]
    }
  }
};
