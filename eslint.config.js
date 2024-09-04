import js from '@eslint/js';
import globals from 'globals';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';

export default [
  { ignores: ['dist'] },
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    settings: { react: { version: '18.3' } },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      ...reactHooks.configs.recommended.rules,
      'react/jsx-no-target-blank': 'off',
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      'semi': ['error', 'always'],           // Enforce semicolons
      'quotes': ['error', 'single'],         // Enforce single quotes
      'indent': ['error', 2, {               // Enforce 2-space indentation
        'SwitchCase': 1,
        'VariableDeclarator': 1,
        'outerIIFEBody': 1,
        'MemberExpression': 1,
        'FunctionDeclaration': {
          'parameters': 1,
          'body': 1,
        },
        'FunctionExpression': {
          'parameters': 1,
          'body': 1,
        },
        'CallExpression': {
          'arguments': 1,
        },
        'ArrayExpression': 1,
        'ObjectExpression': 1,
        'ImportDeclaration': 1,
        'flatTernaryExpressions': false,
        'offsetTernaryExpressions': true,
        'ignoredNodes': ['TemplateLiteral *'],
        'ignoreComments': false,
      }],
      'react/jsx-max-props-per-line': [
        'error',
        {
          'maximum': 1,
          'when': 'multiline'
        }
      ],
      'react/jsx-first-prop-new-line': [
        'error',
        'multiline'
      ],
      'object-curly-spacing': ['error', 'always'],
      'max-len': ['error', { 'code': 120 }]
    },
  },
];
