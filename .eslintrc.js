/* eslint-disable no-undef */
module.exports = {
  'env': {
    'browser': true,
    'es2021': true
  },
  'extends': [
    'airbnb',
    'airbnb-typescript',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:css-modules/recommended',
    'stylelint-config-standard',
    'stylelint-config-rational-order'
  ],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true
    },
    'ecmaVersion': 12,
    'sourceType': 'module',
    'project': './tsconfig.json'
  },
  'plugins': [
    'react',
    '@typescript-eslint',
    'css-modules',
    'stylelint-order'
  ],
  'rules': {
    'indent': [
      'error',
      2
    ],
    'linebreak-style': [
      'error',
      'unix'
    ],
    'quotes': [
      'error',
      'single'
    ],
    'semi': [
      'error',
      'always'
    ],
    'import/order': [
      'error',
      {
        "newlines-between": "always",
        "alphabetize": {"order": "asc", "caseInsensitive": true}
      },
    ],
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off"
  }
};
