import type { Linter } from "eslint";

const config: Linter.Config = {
    plugins: ["sort-imports-es6-autofix"],
    rules: {
        // https://github.com/marudor/eslint-plugin-sort-imports-es6-autofix
        "sort-imports-es6-autofix/sort-imports-es6": [
            "warn",
            {
                ignoreCase: false,
                ignoreMemberSort: false,
                memberSyntaxSortOrder: ["none", "all", "multiple", "single"]
            }
        ]
    }
};

export = config;