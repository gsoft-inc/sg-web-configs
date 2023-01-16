# `@sharegate/eslint-plugin`

[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](../../LICENSE.md)
[![npm version](https://img.shields.io/npm/v/@sharegate/eslint-plugin)](https://www.npmjs.com/package/@sharegate/eslint-plugin)

ShareGate’s ESLint configs.

## Installation

Install the package.

**With npm**
```shell
npm i --save-dev @sharegate/eslint-plugin
```

**With yarn**
```shell
yarn add --dev @sharegate/eslint-plugin
```

## Usage

ShareGate’s ESLint configs come bundled in this package. In order to use them, you simply extend the relevant configuration in your project’s .eslintrc  :
```json  
"extends": [ 
  "plugin:@sharegate/core", /* For all JavaScript projects */ 
  "plugin:@sharegate/typescript", /* For all TypeScript projects */ 
  "plugin:@sharegate/react", /* For all React projects */ 
  "plugin:@sharegate/nextjs", /* For all NextJS projects, includes plugin:@sharegate/react */ 
  "plugin:@sharegate/sort-imports", /* if you want to sort your import statements */ 
  "plugin:@sharegate/mdx", /* if you have *.mdx files */
  "plugin:@sharegate/lodash", /* if you use Lodash in your project */
  "plugin:@sharegate/jest", /* if you use Jest in your project */
  "plugin:@sharegate/react-testing-library", /* if you use React Testing Library in your project */
  "plugin:@sharegate/storybook",  /* if you use Storybook in your project */
  "plugin:@sharegate/storybook-csf",/* if you use Storybook with CSF Stories in your project */
]
 ```
 
 If you want to use plugin-provided rules, you can do it like this:
 ```json
"plugins": [
    "@sharegate"
],
"rules": {
    "@sharegate/prefer-cx": "warn"
}
 ```
 
 If your project is *NOT* using TypeScript, you'll need to install `@babel/eslint-parser` and update your `.eslintrc.js` configuration file:
```bash
 npm i -D @babel/eslint-parser
```

`.eslintrc.js` 
```javascript
module.exports = {
    ...
    parser: "@babel/eslint-parser" /* (If your project is NOT in TypeScript) */
    extends: [
        "plugin:@sharegate/core",
        "plugin:@sharegate/nextjs"
        ...
    ],
    ...
};
```

## Provided Configurations

### Language/Framework-specific configs.
| Language/Framework | Config | Description |
| --- | --- | --- |
| JavaScript - [core](lib/config/core.ts) | "plugin:@sharegate/core" | Use this for all JavaScript/TypeScript projects. |
| JavaScript - [sort-imports](lib/config/sort-imports.ts) | "plugin:@sharegate/sort-imports" | Use this for JavaScript/TypeScript projects. |
| [typescript](lib/config/typescript.ts) | "plugin:@sharegate/typescript" | Use this for TypeScript projects. |
| [react](lib/config/react.ts) | "plugin:@sharegate/react" | Use this for React projects. |
| [nextjs](lib/config/nextjs.ts) |"plugin:@sharegate/nextjs" | Use this for NextJs projects. |
| [mdx](lib/config/mdx.ts) |"plugin:@sharegate/mdx" | Use this for [mdx files](https://mdxjs.com/). |

### Third-party-specific configs.
| Third party | Config | Description |
| --- | --- | --- |
| [lodash](lib/config/lodash.ts) | "plugin:@sharegate/lodash" | Use this for projects using [lodash](https://lodash.com/).|
| [jest](lib/config/jest.ts) | "plugin:@sharegate/jest" | Use this for projects using [jest](https://jestjs.io/).|
| [testing-library](lib/config/testing-library.ts) | "plugin:@sharegate/testing-library" | Use this for projects using [testing-library](https://testing-library.com/).|
| [storybook](lib/config/storybook.ts) | "plugin:@sharegate/storybook" | Use this for projects using [storybook](https://storybook.js.org/).|
| [storybook-csf](lib/config/storybook-csf.ts) | "plugin:@sharegate/storybook-csf" | Use this for projects using [storybook](https://storybook.js.org/) but with the CSF format. Must be used with the other storybook config |

## Plugin-Provided Rules 

This plugin provides the following custom rules, which are included as appropriate in all core linting configs:

- [prefer-cx](docs/rules/prefer-cx.md): Prefer cx over classnames as the name of classnames imports.
- [restrict-full-import](docs/rules/restrict-full-import.md): Prevent importing the entirety of a package.
- [strict-css-modules-names](docs/rules/strict-css-modules-names.md): CSS modules should have the same file name (minus the file extension) as the scoped component and be located in the same folder.

## License

Copyright © 2023, GSoft inc. This code is licensed under the Apache License, Version 2.0. You may obtain a copy of this license at https://github.com/gsoft-inc/gsoft-license/blob/master/LICENSE.
