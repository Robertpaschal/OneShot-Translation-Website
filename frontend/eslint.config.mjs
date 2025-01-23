import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  {
    files: ['**/*.ts', '**/*.tsx'], // Target TypeScript files
    languageOptions: {
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaVersion: 2021,
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      '@typescript-eslint': require('@typescript-eslint/eslint-plugin'),
      react: require('eslint-plugin-react'),
      'react-hooks': require('eslint-plugin-react-hooks'),
      next: require('eslint-plugin-next'),
    },
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:react/recommended',
      'plugin:react-hooks/recommended',
      'plugin:next/core-web-vitals',
      'plugin:prettier/recommended',
    ],
    rules: {
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_' },
      ],
      'react/react-in-jsx-scope': 'off', // Not needed with Next.js
      'react/prop-types': 'off', // If using TypeScript for props validation
      'next/no-title-in-document-head': 'warn', // Warn about improper <title> usage
      'prettier/prettier': ['error'],
    },
    settings: {
      react: {
        version: 'detect', // Automatically detect the React version
      },
    },
  },
];

export default eslintConfig;
