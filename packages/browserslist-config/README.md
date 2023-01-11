# `@sharegate/browserslist-config`

[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](../../LICENSE.md) [![npm version](https://badge.fury.io/js/@sharegate%2Fbrowserslist-config.svg)](https://badge.fury.io/js/@sharegate%2Fbrowserslist-config.svg)


Shareable [browserslist](https://github.com/browserslist/browserslist) configuration for ShareGate.

## Installation

Install the package.

**With npm**
```shell
npm i --save-dev @sharegate/browserslist-config
```

**With yarn**
```shell
yarn add --dev @sharegate/browserslist-config
```

## Supported Browsers

You can list all supported browsers by following this link:
https://browsersl.ist/#q=last+1+year%2C+%3E+0.2%25%2C+Firefox+ESR%2C+not+dead%2C+not+op_mini+all

## Usage

Create a `.browserslistrc` file at the root of your project with the following content:
```
extends @sharegate/browserslist-config
```

## License

Copyright © 2023, GSoft inc. This code is licensed under the Apache License, Version 2.0. You may obtain a copy of this license at https://github.com/gsoft-inc/gsoft-license/blob/master/LICENSE.