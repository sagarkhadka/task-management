module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
  },
  extends: ['airbnb-base', 'prettier'],
  plugins: ['prettier'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    'no-underscore-dangle': 0,
    'no-param-reassign': 0,
    'comma-dangle': ['error', 'es5'],
    'linebreak-style': 0,
    'newline-per-chained-call': 0,
    'max-len': [2, 220],
    'func-names': 'off',
    'consistent-return': 'off',
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        tabWidth: 2,
        semi: false,
        trailingComma: 'es5',
      },
    ],
  },
}
