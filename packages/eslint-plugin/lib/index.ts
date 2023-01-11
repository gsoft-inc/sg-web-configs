import { ESLint } from "eslint";

const plugin: ESLint.Plugin = {
    rules: { 
        "prefer-cx": require("./rules/prefer-cx"),
        "restrict-full-import": require("./rules/restrict-full-import"),
        "strict-css-modules-names": require("./rules/strict-css-modules-names")
    },
    configs: {
        jest: require("./config/jest"),
        lodash: require("./config/lodash"),
        mdx: require("./config/mdx"),
        nextjs: require("./config/nextjs"),
        react: require("./config/react"),
        recommended: require("./config/recommended"),
        "sort-imports": require("./config/sort-imports"),
        "storybook-csf": require("./config/storybook-csf"),
        storybook: require("./config/storybook"),
        "testing-library": require("./config/testing-library"),
        typescript: require("./config/typescript")
    }
};

export = plugin;