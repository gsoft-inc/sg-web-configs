import type { Linter } from "eslint";
import { mdxFiles } from "../utils/patterns";

const config: Linter.Config = {
    plugins: ["jest"],
    overrides: [
        {
            files: mdxFiles,
            extends: ["plugin:mdx/recommended"]
        }
    ]
};

export = config;