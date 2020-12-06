module.exports = {
  extends: ['plugin:@typescript-eslint/recommended'],
  plugins: ['@typescript-eslint'],
  rules: {
    '@typescript-eslint/return-await': ['error', 'always'],
    '@typescript-eslint/explicit-function-return-type': 1,
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/no-explicit-any': 2,
    '@typescript-eslint/no-unused-expressions': 2,
    '@typescript-eslint/array-type': ['error', {
      default: 'array',
      readonly: 'array'
    }]
  }
};
