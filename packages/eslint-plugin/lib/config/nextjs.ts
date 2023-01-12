import type { Linter } from "eslint";

const config: Linter.Config = {
    extends:[
        "plugin:@next/next/recommended",
        "plugin:@sharegate/react"
    ]
};

export = config;