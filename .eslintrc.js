/* eslint-disable import/no-commonjs */
module.exports = {
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser'
  },
  extends: ['airbnb-base', 'plugin:vue/recommended', 'plugin:@typescript-eslint/recommended'],
  plugins: ['@typescript-eslint', 'html', 'jsdoc', 'no-loops', 'jest', 'unicorn'],
  rules: {
    '@typescript-eslint/explicit-function-return-type': 1,
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/no-explicit-any': 2,
    '@typescript-eslint/no-unused-expressions': 2,
    '@typescript-eslint/array-type': ['error', {
      default: 'array',
      readonly: 'array'
    }],
    'max-classes-per-file': 'off',
    'require-await': 2,
    'class-methods-use-this': 'off',
    'no-plusplus': 'off',
    'no-console': 1,
    'no-underscore-dangle': 'off',
    'no-unused-vars': 1,
    'no-unused-expressions': 'off',
    'no-useless-constructor': 'off',
    'new-cap': 'off',
    'vue/max-attributes-per-line': 'off',
    'vue/no-v-html': 'off',
    'comma-dangle': ['error', 'never'],
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/no-commonjs': 1,
    'import/prefer-default-export': 'off',
    'no-loops/no-loops': 2,
    'jsdoc/check-alignment': 1,
    'jsdoc/check-indentation': 1,
    'jsdoc/check-param-names': 1,
    'jsdoc/check-syntax': 1,
    'jsdoc/check-tag-names': 1,
    'jsdoc/check-types': 1,
    'jsdoc/require-param': 1,
    'jsdoc/require-returns-check': 1,
    'jsdoc/require-returns-type': 1,
    'jsdoc/require-description-complete-sentence': 1,
    'no-param-reassign': [
      'error',
      {
        props: true,
        ignorePropertyModificationsFor: [
          'state'
        ]
      }
    ],
    'unicorn/better-regex': 'error',
    'unicorn/prefer-spread': 'error',
    'unicorn/prefer-string-slice': 'error',
    'unicorn/throw-new-error': 'error'
  },
  globals: {
    Vue: 'writeable',
    $: 'writeable'
  },
  overrides: [
    {
      files: [
        '**/*.spec.ts'
      ],
      rules: {
        'jest/no-disabled-tests': 1,
        'jest/no-focused-tests': 2,
        'jest/no-identical-title': 2,
        'jest/prefer-to-have-length': 1,
        'jest/valid-expect': 2
      },
      env: {
        jest: true
      }
    },
    {
      files: [
        '**/*.js',
        '**/*.vue'
      ],
      rules: {
        '@typescript-eslint/explicit-function-return-type': 'off'
      }
    }
  ]
};
