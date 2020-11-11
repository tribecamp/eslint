# Tribecamp Style Guide

The ESLint config Tribecamp uses.

## Installation

There are four packages available. Each of them can be installed with `yarn install @tribecamp/...`.

```txt
@tribecamp/eslint-config-base
@tribecamp/eslint-config-jest
@tribecamp/eslint-config-typescript
@tribecamp/eslint-config-vue
```

You then need to extend the installed package in your `.eslintrc.js`, like this:

```js
module.exports = {
  extends: [
    '@tribecamp/eslint-config-base',
    '@tribecamp/eslint-config-jest',
    '@tribecamp/eslint-config-typescript',
    '@tribecamp/eslint-config-vue'
  ]
};
```

You can just remove the configs you don't need.

## License

This project is licensed under the MIT license.
