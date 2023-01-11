import type { Linter } from "eslint";

const config: Linter.Config = {
    plugins: ["lodash"],
    rules: {
        // https://github.com/wix/eslint-plugin-lodash
        "lodash/import-scope": ["error", "member"],
        "lodash/chaining": ["error", "never"]
    }
};

export = config;