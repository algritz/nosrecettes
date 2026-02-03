import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import playwright from 'eslint-plugin-playwright'
import tseslint from 'typescript-eslint'

export default [
  {
    ignores: ['dist', 'dev-dist', 'scripts', '*.config.ts', '*.config.js'],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ['**/*.{ts,tsx}'],
    ignores: ['tests/**/*.ts'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      // Code style
      'arrow-body-style': ['error', 'as-needed'],
      camelcase: 'error',
      eqeqeq: 'error',
      'max-params': ['warn', 3],
      'no-console': 'off',
      'no-duplicate-imports': 'error',
      'no-else-return': 'error',
      'no-empty-pattern': 0,
      '@typescript-eslint/explicit-function-return-type': 'error',
      '@typescript-eslint/explicit-module-boundary-types': 'error',
      '@typescript-eslint/no-floating-promises': 'error',
      '@typescript-eslint/no-inferrable-types': 'error',
      '@typescript-eslint/no-non-null-assertion': 0,
      '@typescript-eslint/no-shadow': 'error',
      '@typescript-eslint/no-unnecessary-type-assertion': 'error',
      '@typescript-eslint/no-unused-vars': 'error',
      '@typescript-eslint/prefer-ts-expect-error': 'error',
      '@typescript-eslint/promise-function-async': 'error',
      '@typescript-eslint/require-await': 'error',
      '@typescript-eslint/no-deprecated': 'error',
      'no-useless-escape': 'error',
      '@/preserve-caught-error': 'error',
      quotes: ['error', 'single', { avoidEscape: true }],
      'max-len': [
        'error',
        {
          code: 80, // Maximum line length
          tabWidth: 2, // Number of spaces per tab
          ignoreUrls: true, // Ignore long URLs
          ignoreStrings: true, // Ignore long strings
          ignoreTemplateLiterals: true, // Ignore template literals
          ignoreComments: true, // Ignore comments
          ignorePattern: '^export const \\w+:$',
        },
      ],
    },
  },
  {
    files: ['src/components/ui/**/*.{ts,tsx}'],
    rules: {
      'react-refresh/only-export-components': 'off',
    },
  },
  {
    ...playwright.configs['flat/recommended'],
    files: ['tests/**/*.ts', '**/*.spec.ts'],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: './tsconfig.test.json',
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      'no-restricted-imports': [
        'error',
        {
          paths: [
            {
              name: '@playwright/test',
              importNames: ['test'],
              message: 'Please import `test` from baseFixtures.ts instead',
            },
          ],
        },
      ],
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_|^populatedDb$|^adminConfig$',
          varsIgnorePattern: '^_',
        },
      ],
    },
  },
]
