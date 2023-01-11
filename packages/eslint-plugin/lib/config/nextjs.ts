import type { Linter } from "eslint";

const config: Linter.Config = {
    extends:[
        "plugin:@next/next/recommended"
    ]
};

export = config;