// https://github.com/storybookjs/eslint-plugin-storybook/blob/main/lib/configs/recommended.ts

import { storybookFiles, mainStorybookFiles } from "../utils/patterns";
import type { Linter } from "eslint";

const config: Linter.Config = {
    plugins: ["storybook"],
    overrides: [
        {
            files: storybookFiles,
            rules: {
                // csf https://github.com/storybookjs/eslint-plugin-storybook/blob/main/lib/configs/csf.ts
                "import/no-anonymous-default-export": "off", // already in recommended, can remove if we only keep the csf config
                "storybook/csf-component": "warn",
                "storybook/default-exports": "warn", // already in recommended, can remove if we only keep the csf config
                "storybook/hierarchy-separator": "warn", // already in recommended, can remove if we only keep the csf config
                "storybook/no-redundant-story-name": "warn", // already in recommended, can remove if we only keep the csf config
                "storybook/story-exports": "warn", // already in recommended, can remove if we only keep the csf config
        
                // csf-strict https://github.com/storybookjs/eslint-plugin-storybook/blob/main/lib/configs/csf-strict.ts
                "storybook/no-stories-of": "warn",
                "storybook/no-title-property-in-meta": "warn"
            }
        },
        {
            files: mainStorybookFiles,
            rules: {
                "storybook/no-uninstalled-addons": "warn"
            }
        }
    ]
};

export = config;