# `@sharegate/postcss-plugin`

[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](../../LICENSE.md) [![npm version](https://badge.fury.io/js/@sharegate%2Fpostcss-plugin.svg)](https://badge.fury.io/js/@sharegate%2Fpostcss-plugin.svg)

All of ShareGate’s preferred PostCSS plugins wrapped up in a single, easy-to-use plugin.

## Installation

Install the package.

**With npm**
```shell
npm i --save-dev @sharegate/postcss-plugin
```

**With yarn**
```shell
yarn add --dev @sharegate/postcss-plugin
```

## Features

This plugin wraps around the following PostCSS transformations:

- [`postcss-flexbugs-fixes`](https://github.com/luisrudge/postcss-flexbugs-fixes)
- [`postcss-preset-env`](https://github.com/csstools/postcss-preset-env)
- [`postcss-pxtorem`](https://github.com/cuth/postcss-pxtorem)

## Usage

Create a `postcss.config.js` file at the root of your project with the following content:
```js
/** @type {import('postcss').Postcss} */
module.exports = {
    plugins: ["@sharegate/postcss-plugin"]
};
```

## License

Copyright © 2023, GSoft inc. This code is licensed under the Apache License, Version 2.0. You may obtain a copy of this license at https://github.com/gsoft-inc/gsoft-license/blob/master/LICENSE.