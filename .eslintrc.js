module.exports = {
  "settings": {
    "react": {
      "version": "detect"
    }
  },
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended"
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2015,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  "parser": "@babel/eslint-parser",
  rules: {
    "react/react-in-jsx-scope": "off"
  },
};