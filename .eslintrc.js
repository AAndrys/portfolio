module.exports = {
  env: {
    browser: true, // Browser global variables like `window` etc.
    commonjs: true, // CommonJS global variables and CommonJS scoping.Allows require, exports and module.
    es6: true, // Enable all ECMAScript 6 features except for modules.
    es2015: true,
    jest: true, // Jest global variables like `it` etc.
    node: true // Defines things like process.env when generating through node
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jest/recommended',
    'plugin:testing-library/react',
    'plugin:prettier/recommended',
    'prettier'
  ],
  parser: 'babel-eslint', // Uses babel-eslint transforms.
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module' // Allows for the use of imports
  },
  plugins: [
    'prettier',
    'import' // eslint-plugin-import plugin. https://www.npmjs.com/package/eslint-plugin-import
  ],
  root: true, // For configuration cascading.
  rules: {
    'comma-dangle': ['warn', 'never'],
    'eol-last': 'error',
    indent: ['error', 2],
    'jsx-quotes': ['warn', 'prefer-double'],
    'no-console': 'warn',
    'no-duplicate-imports': 'warn',
    'no-restricted-imports': [
      'error',
      {
        paths: [
          {
            message: "Please use import foo from 'lodash-es/foo' instead.",
            name: 'lodash'
          },
          {
            message: 'Avoid using chain since it is non tree-shakable. Try out flow instead.',
            name: 'lodash-es/chain'
          },
          {
            importNames: ['chain'],
            message: 'Avoid using chain since it is non tree-shakable. Try out flow instead.',
            name: 'lodash-es'
          },
          {
            message: "Please use import foo from 'lodash-es/foo' instead.",
            name: 'lodash-es'
          }
        ],
        patterns: ['lodash/**', 'lodash/fp/**']
      }
    ],
    'no-unused-vars': 'warn',
    'object-curly-spacing': ['warn', 'always'],
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
      }
    ],
    'react/jsx-indent': [
      'error',
      2,
      {
        checkAttributes: true,
        indentLogicalExpressions: true
      }
    ],
    'react/jsx-indent-props': ['error', 2],
    semi: 'warn',
    'react/prop-types': 'off',
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto'
      }
    ],
    'sort-imports': [
      'warn',
      {
        ignoreCase: false,
        ignoreDeclarationSort: true,
        ignoreMemberSort: false
      }
    ]
  },
  settings: {
    react: {
      version: 'detect' // Detect react version
    }
  }
};
