# Tribecamp Style Guide

The ESLint config Tribecamp uses.

## Usage

Install this package (`yarn add --dev @tribecamp/eslint`) and extend it in your `.eslintrc.*`.

There are four configs you can choose from. These are the options:

```js
module.exports = {
  extends: [
    './node_modules/@tribecamp/eslint/base',
    './node_modules/@tribecamp/eslint/typescript'
    './node_modules/@tribecamp/eslint/vue'
    './node_modules/@tribecamp/eslint/jest'
  ]
};
```
> We will eventually split up our config into separate npm packages, but for now, you should extend your
> config using relative paths to the modules.

You'll most likely get a lot of warnings about missing packages. Just install them, and you should be good to go.

## License

This project is licensed under the MIT license.
