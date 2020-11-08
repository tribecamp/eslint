# Tribecamp Style Guide

The ESLint config Tribecamp uses.

## Usage

Just install it (`yarn @tribecamp/eslint`) and extend it in your `.eslintrc.js`!

There are four configs you can choose from. These are the options:

```js
module.exports = {
  extends: [
    './node_modules/@tribecamp/eslint/base',
    './node_modules/@tribecamp/eslint/typescript'
    './node_modules/@tribecamp/eslint/vue'
    './node_modules/@tribecamp/eslint/js'
  ]
};
```

You'll get a lot of warnings about missing packages. Just install them!

## License

This project is licensed under the MIT license.
