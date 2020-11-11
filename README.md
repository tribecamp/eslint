# Tribecamp Style Guide

The ESLint config Tribecamp uses.

## Installation

There are four packages available. Each of them can be installed with `yarn add --dev @tribecamp/eslint-config-<name>`.
The following packages can be installed:

```txt
@tribecamp/eslint-config-base
@tribecamp/eslint-config-jest
@tribecamp/eslint-config-typescript
@tribecamp/eslint-config-vue
```

You may then extend the installed package(s) in your `.eslintrc.js`, like this:

```js
module.exports = {
  extends: [
    '@tribecamp/base',
    '@tribecamp/jest',
    '@tribecamp/typescript',
    '@tribecamp/vue'
  ]
};
```

Feel free to remove any configs you don't need.

## License

This project is licensed under the MIT license.
